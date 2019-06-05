exports.onClientEntry = () => {
  const elem = document.createElement('div');

  elem.id = 'statify-js-snippet';
  elem.setAttribute('data-home-url', 'https://b2oulrk7.myraidbox.de');

  const trackingSnippet =
    'https://b2oulrk7.myraidbox.de/wp-content/plugins/statify/js/snippet.js';

  const s = document.createElement('script');

  s.src = trackingSnippet;
  s.async = true;

  document.head.appendChild(s);
  document.body.appendChild(elem);
};
