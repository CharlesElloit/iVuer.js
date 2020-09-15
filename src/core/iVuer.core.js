export default class Ivuerjs {
  constructor(routes) {
    this.routesList = routes;
  }

  /*match url Function */
  matchRoutes(_route1, _route2) {
    if (_route1 === _route2) {
      return true;
    }
    return false;
  }

  navigator(routeUrl) {
    this.routesList.map(route => {
      if (this.matchRoutes(route.path, routeUrl)) {
        //we are going to load the DOM form the controller
        document.getElementById("root").innerHTML = route.controller().view();
      }
    });
  }

  initialize() {
    this.navigator(window.location.pathname);
  }
}
