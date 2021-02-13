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
          <TopNav />
          <Container>
            <Switch>
              <Route exact path="/ReactPortfolio/" component={Home} />
              <Route exact path= "/ReactPortfolio/projects" component={Project} />
              <Route render={NoMatch} />
            </Switch>
          </Container>
      </Router>
  );
};

export default App;
