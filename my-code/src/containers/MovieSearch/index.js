import React from 'react';
import { connect } from 'react-redux';

/* components */
import MoviesList from '../../components/MoviesList';
import Page from '../../components/Page';

/* redux */
import { searchMovie } from '../../redux/actions/movies';

/* styles */
import styles from './MovieSearch.module.css';

class MovieSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
    }
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.searchMovie(this.state.searchValue);
  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <Page>
        <div className={styles.container}>
          <form id="movie-search-form" action="" onSubmit={this.handleSearchSubmit}>
            <input
              type="text"
              name="title"
              value={this.state.searchValue}
              placeholder="Search Movies"
              required
              autoFocus
              onChange={this.handleChange}
            />
          </form>
          {this.props.moviesData.moviesList.length > 0
            && <MoviesList />}
        </div>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  moviesData: state.moviesData,
});

const mapDispatchToProps = (dispatch) => ({
  searchMovie: searchValue => dispatch(searchMovie(searchValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
