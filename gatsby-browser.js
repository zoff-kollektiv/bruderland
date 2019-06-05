const trackView = target => {
  if (!('fetch' in window)) {
    return;
  }

  fetch(`/.netlify/functions/track?target=${encodeURIComponent(target)}`).catch(
    err => console.log(err)
  );
};

exports.onRouteUpdate = ({ location }) => {
  trackView(location.pathname);
};
