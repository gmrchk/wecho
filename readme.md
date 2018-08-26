# Wecho
Wecho is a small module to simplify usage of sounds on the web.

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
// create instance of Wecho
let options = {
    volume: .5, // can be set for each sound sepparatelly
    finishPlaying: false,   // defines whether the sound should restart playing when it did not finish
    customSounds: {},   // add your own sounds (property is the name of sound and value is the URL)
};
const wecho = new Wecho(options);   // inlcluded options are default values (options argument can be ommited)

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
wecho.add([name of sound to be used by Wecho], [URL of the sound]);
```

### load
Loads sounds with URL from predefined list.
```javascript
wecho.load(['tick', 'boop']);
```

### load
Sets volume for one or all sounds.
```javascript
wecho.setVolume([volume (0-1)], [name of sound (optional)])
```

### play
Plays sound. Note that sound must be loaded first.
```javascript
wecho.play([sound name])
```

## Contributions
Any suggestions or contributions are welcome.
If you'd like to expand the list of available sounds with your own, create a pull request or open an issue with your files included.
