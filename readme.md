# Wecho
Wecho is a small module to simplify usage of sounds on the web with [several sounds](https://gmrchk.github.io/wecho/) provided within the Wecho ([Contributions](#contributions)).

## Installation
```shell
npm install wecho
```
and
```javascript
import Wecho from 'wecho';
```

or include the file from the dist folder

```html
<script src="./dist/wecho.js"></script>
```

## Usage

```javascript
// define options (inlcluded options are default values, so options argument can be omitted)
let options = {
    volume: .5, // can be set for each sound separately
    finishPlaying: false,   // defines whether the sound should restart playing in case it's still being played
    customSounds: {},   // add your own sounds (property is the name of sound and value is the URL)
};

// create instance of Wecho
const wecho = new Wecho(options);

// load desired sounds
wecho.load(['tick', 'boop']);   // empty arguments loads all the sounds

// and play when needed (on click of any button in this example)
document.querySelectorAll('button').forEach(function(element) {
    element.addEventListener('click', function(event) {
        wecho.play('tick');
    });
});
```

## Methods

### add
Adds a sound to the predefined list from which the sounds can be loaded.
```javascript
wecho.add(nameOfSound, URLofSound);
```

### load
Loads sounds with URL from predefined list.
```javascript
wecho.load(['tick', 'boop']);
```

### setVolume
Sets volume for one or all sounds.
```javascript
wecho.setVolume(volume, nameOfSound); // volume accepts 0-1, name of sound is optional
```

### play
Plays sound. Note that sound must be loaded first.
```javascript
wecho.play(soundName);
```

## Contributions
Any suggestions or contributions are welcome.
If you'd like to expand the list of available sounds with your own, create a pull request or open an issue with your files included.
