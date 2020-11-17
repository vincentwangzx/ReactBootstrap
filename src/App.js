import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './Home';
import { Delivery } from './Delivery';
import { ContactUs } from './ContactUs';
import { JoinUs } from './JoinUs';
import { faq } from './faq';
import { NoMatch } from './NoMatch';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/delivery" component={Delivery} />
              <Route path="/join-us" component={JoinUs} />
              <Route path="/contact-us" component={ContactUs} />
              <Route path="/faq" component={faq} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;
