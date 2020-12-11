import './App.css';
import Header from './components/Header';
import HomeStart from './components/HomeStart';
import Explore from './components/Explore';
import Treasures from './components/Treasures';
import Profile from './components/Profile';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      
      <Switch>
      <Route path="/" exact component={HomeStart} />
      <Route path="/explore" component={Explore} />
      <Route path="/treasures" component={Treasures} />
      <Route path="/profile" component={Profile} />
      </Switch>
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
