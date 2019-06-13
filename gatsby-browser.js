const trackView = target => {
  if (!('fetch' in window)) {
    return;
  }

  fetch(`/.netlify/functions/track?target=${encodeURIComponent(target)}`).catch(
    // eslint-disable-next-line no-console
    err => console.log(err)
  );
};

exports.onRouteUpdate = ({ location }) => {
  trackView(location.pathname);
};
