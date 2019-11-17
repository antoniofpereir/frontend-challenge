import React from 'react';
import { connect } from 'react-redux';
import { changeTestValue } from '../redux/actions/index';
import { searchMovie, getMovieInformation } from '../redux/actions/movies';

class App extends React.Component {
  componentDidMount() {
    this.props.changeTestValue('new test value');
    this.props.searchMovie('dark kni');
    this.props.getMovieInformation('tt1285016');
    console.log(this.props.movies)
  }

  render() {
    return (
      <div>
        {`Movie: ${this.props.movies.movieData.Title}`}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.moviesData,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieInformation: movieId => dispatch(getMovieInformation(movieId)),
  searchMovie: searchValue => dispatch(searchMovie(searchValue)),
  changeTestValue: (newTestValue) => dispatch(changeTestValue(newTestValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
