export default class Wecho {
    constructor(setOptions) {
        // default options
        let defaults = {
            volume: .5,
            customSounds: {},
            finishPlaying: false,
        }

        this.options = {
            ...defaults,
            ...setOptions
        }

        this.predefinedList = {
            boob: this.baseUrl + "boob.mp3",
            click: this.baseUrl + "click.mp3",
            glass: this.baseUrl + "glass.mp3",
            pop: this.baseUrl + "pop.mp3",
            tick: this.baseUrl + "tick.mp3",
            ...this.options.customSounds
        };

        this.sounds = {};

        this.setVolume(this.options.volume);
    }

    get baseUrl() {
        return 'https://gmrchk.github.io/wecho/sounds/';
    }

    add(name, url) {
        this.predefinedList[name] = url;
    }

    load(list = Object.keys(this.predefinedList)) {
        list.forEach(item => {
            if (this.predefinedList[item]) {
                let sound = new Audio(this.predefinedList[item]);
                sound.volume = this.options.volume;
                this.sounds[item] = sound;
            } else {
                console.warn(`Sound '${item}' is not in predefined list. Try adding it with add method.`);
            }
        })
    }

    setVolume(volume, sound) {
        if(sound) {
            this.sounds[sound].volume = volume;
        } else {
            Object.keys(this.sounds).forEach(sound => {
                this.sounds[sound].volume = volume;
            })
        }
        return true;
    }

    play(sound) {
        if(this.sounds[sound] != null) {
            if (!this.options.finishPlaying) {
                this.sounds[sound].currentTime = 0;
            }
            this.sounds[sound].play();
        } else {
            if(this.predefinedList[sound] != null) {
                console.warn(`Sound '${sound}' is not loaded.`);
            } else {
                console.warn(`Sound '${sound}' is not in predefined list. Try adding it with add method.`);
            }
        }
    }
}
