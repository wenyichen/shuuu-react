import React, { Component } from 'react';
import { BrowserRouter,  Route } from "react-router-dom";
import routes from './route.js';
import './css/fonts.css';

class App extends Component {
  render() {
    const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return (
      <BrowserRouter basename="/shuuu-react">
        <div>
          {routeComponents}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
