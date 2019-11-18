import React from 'react';
import { Router, Route } from 'react-router-dom';

/* styles */
import styles from './App.module.css';

/* components */
import MovieSearch from '../containers/MovieSearch';
import MoviePage from '../containers/MoviePage';
import Page from '../components/Page';

/* utils */
import history from '../utils/history';

function App() {
  return (
    <div className={styles.container}>
      <Page>
        <Router history={history}>
          <Route exact path="/" component={MovieSearch} />
          <Route exact path="/movie" component={MoviePage} />
        </Router>
      </Page>
    </div>
  );
}

export default App;
