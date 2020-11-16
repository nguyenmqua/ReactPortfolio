import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './components/TopNav';
import { Container } from 'reactstrap';
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Project from "./pages/Project"
import NoMatch from "./pages/NoMatch"


const App = () => {
  return (
      <Router>
        <div>
          <TopNav />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path= "/projects" component={Project} />
              <Route render={NoMatch} />
            </Switch>
          </Container>
        </div>
      </Router>
  );
};

export default App;
