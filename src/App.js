import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navabars/navabar';
import Home from './containers/Home';

const App = () => {
    return (  
       <Router>
           <Navbar />
           <Switch>
                <Route path="/" exact component={Home} />
           </Switch>
       </Router>
    );
}

export default App