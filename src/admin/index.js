import CMS from 'netlify-cms';

CMS.registerEditorComponent({
  id: 'quote',

  label: 'Zitat',

  fields: [
    {
      name: 'quote',
      label: 'Zitat',
      widget: 'text'
    },

    {
      name: 'text',
      label: 'Text',
      widget: 'markdown',
      buttons: [
        'bold',
        'italic',
        'link',
        'heading-two'
      ]
    }
  ],

  pattern: /^quote data='(\S+)'$/,

  fromBlock: match => JSON.parse(match[1]),

  toBlock: data => `quote data='${JSON.stringify(data)}'`,

  toPreview: data => {
    return `<div>${JSON.stringify(data)}</div>`;
  }
});

CMS.registerEditorComponent({
  id: 'slogan',

  label: 'Losung',

  fields: [
    {
      name: 'quote',
      label: 'Losung',
      widget: 'text'
    }
  ],

  pattern: /^slogan data='(\S+)'$/,

  fromBlock: match => JSON.parse(match[1]),

  toBlock: data => `slogan data='${JSON.stringify(data)}'`,

  toPreview: data => {
    return `<div>${JSON.stringify(data)}</div>`;
  }
});

CMS.registerEditorComponent({
  id: 'image-text',

  label: 'Bild/ Text Kombination',

  fields: [
    {
      name: 'image',
      label: 'Bild',
      widget: 'image'
    },

    {
      name: 'text',
      label: 'Text',
      widget: 'markdown',
      buttons: [
        'bold',
        'italic',
        'link',
        'heading-two'
      ]
    }
  ],

  pattern: /^image-text data='(\S+)'$/,

  fromBlock: match => JSON.parse(match[1]),

  toBlock: data => `image-text data='${JSON.stringify(data)}'`,

  toPreview: data => {
    return `<div>${JSON.stringify(data)}</div>`;
  }
});
