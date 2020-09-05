import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import BigPokemon from './BigPokemon'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact render={(renderProps)=><Home {...renderProps}/>} />
        <Route path="/pokemon/:searchTerm" exact render={(renderProps)=><BigPokemon {...renderProps}/>} />
        <Route render={()=>(<h2>404</h2>)} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
