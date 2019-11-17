import React from 'react';
import { Router, Route } from 'react-router-dom';

/* components */
import MovieSearch from '../containers/MovieSearch';
import MoviePage from '../containers/MoviePage';

/* utils */
import history from '../utils/history';

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={MovieSearch} />
      <Route exact path="/movie" component={MoviePage} />
    </Router>
  );
}

export default App;
