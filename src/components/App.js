import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import SearchResult from './SearchResult';
import BigPokemon from './BigPokemon'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact render={(renderProps)=><Home {...renderProps}/>} />
        <Route path="/pokemon/:searchTerm" exact render={(renderProps)=><BigPokemon {...renderProps}/>} />
        <Route path="/pokemon/:searchTerm" component={SearchResult} />
        <Route render={()=>(<h2>404</h2>)} />
      </Switch>
    </div>
  );
}

export default App;
