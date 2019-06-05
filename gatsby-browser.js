const trackView = target => {
  if (!('fetch' in window)) {
    return;
  }

  fetch(
    `https://b2oulrk7.myraidbox.de?statify_target=${encodeURIComponent(
      target
    )}&statify_referrer=${encodeURIComponent(document.referrer)}`,
    { redirect: 'error' }
  ).catch(err => console.log(err));
};

exports.onRouteUpdate = ({ location }) => {
  trackView(location.pathname);
};
