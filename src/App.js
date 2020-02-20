import React, { Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import ActorsContainer from './components/actorsContainer';
import Actress from './components/actress';
import Films from './components/films';
// import Actors from './components/actors';



class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
        <Navbar title="Welcome to My Web Page"/>
        <Route exact path="/" render={() => <Home title="Hi, I'm YC Hugar !" />} />
        <Route path="/actors" render={() => <ActorsContainer title="My Best Actor! "/>} />
        <Route path="/actress" render={() => <Actress title="My Best Actresses! " />} />
        <Route path="/films" render={() => <Films />} />
        {/* <Route path="/actors" render={() => <Actors title="My Best Actor! "/>} /> */}
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
