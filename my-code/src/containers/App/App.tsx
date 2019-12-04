import React from 'react';
import { Router, Route } from 'react-router-dom';

/* styles */
import styles from './App.module.css';

/* components */
import MovieSearch from '../MovieSearch';
import MoviePage from '../MoviePage';
import Page from '../../components/Page';

/* utils */
import history from '../../utils/history';

const App: React.FC = () => {
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
