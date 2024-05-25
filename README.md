## Olam Dictionary
An unofficial NPM package for searching words in the Olam dictionary (Supports malayalam and english).

### Installation
```
npm install olam@latest
```

### Usage
### English-Malayalam
```js
const olam = require('olam');

olam('contrary')
  .then((definitions) => {
    console.log(definitions);
  }).catch((e) => {
    console.error(e);
  });
```

**Output:**
```js
[
  {
    title: 'Contrary',
    partOfSpeech: 'വിശേഷണം',
    meaning: 'വിപരീതമായ'
  },
  { 
    title: 'Contrary',
    partOfSpeech: 'വിശേഷണം',
    meaning: 'എതിരായ'
  },
  ...
]
```

### Malayalam-Malayalam
```js
const olam = require('olam');

olam('കാലം')
  .then((definitions) => {
    console.log(definitions);
  }).catch((e) => {
    console.error(e);
  });
```

**Output:**
```js
[
  {
    title: 'കാലം',
    partOfSpeech: 'നാ.',
    meaning: 'മഴ'
  },
  {
    title: 'കാലംകഴിക്കുക',
    partOfSpeech: 'നാ.',
    meaning: 'സമയം കഴിച്ചുകൂട്ടുക'
  },
  ...
]
```

## License
This project is licensed under the [GPL-3.0 License](https://github.com/TOXIC-DEVIL/olam/blob/master/LICENSE).
