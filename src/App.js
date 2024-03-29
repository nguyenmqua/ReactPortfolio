import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './components/TopNav';
import { Container } from 'reactstrap';
import Home from "./pages/Home"
import Project from "./pages/Project"
import NoMatch from "./pages/NoMatch"
import Contact from "./pages/Contact"


const App = () => {
  return (
      <Router> 
          <TopNav />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path= "/projects" component={Project} />
              <Route exact path= "/contact" component={Contact} />
              <Route render={NoMatch} />
            </Switch>
          </Container>
      </Router>
  );
};

export default App;
