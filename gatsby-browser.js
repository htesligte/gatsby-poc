const ReactGA = require('react-ga');

exports.onRouteUpdate = ({ location }) => {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

exports.onClientEntry = () => {
  callAnalyticsAPI()
}

const callAnalyticsAPI = () => {
    ReactGA.initialize('UA-xxxxxxxxx');
}
