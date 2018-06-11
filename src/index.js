export default class Wecho {
    constructor(setOptions) {
        // default options
        let defaults = {
            volume: 50,
        }

        let options = {
            ...defaults,
            ...setOptions
        }

        this.baseUrl = 'https://gmrchk.github.io/wecho/sounds/';

        this.predefinedList = {
            boob: this.baseUrl + "boob.mp3",
            click: this.baseUrl + "click.mp3",
            glass: this.baseUrl + "glass.mp3",
            pop: this.baseUrl + "pop.mp3",
            tick: this.baseUrl + "tick.mp3",
        };

        this.sounds = {};
    }

    add(name, url) {
        this.predefinedList[name] = url;
    }

    load(list = Object.keys(this.predefinedList)) {
        list.forEach(item => {
            if (this.predefinedList[item]) {
                let sound = new Audio(this.predefinedList[item]);
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
