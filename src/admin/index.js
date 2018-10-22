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
      name: 'body',
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
