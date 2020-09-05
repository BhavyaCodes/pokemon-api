import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import BigPokemon from './BigPokemon'
import Spinner from './Spinner'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Spinner />
      <Switch>
        <Route path="/" exact render={(renderProps)=><Home {...renderProps}/>} />
        <Route path="/pokemon/:searchTerm" exact render={(renderProps)=><BigPokemon {...renderProps}/>} />
        <Route render={()=>(<h2>404</h2>)} />
      </Switch>
    </div>
  );
}

export default App;
