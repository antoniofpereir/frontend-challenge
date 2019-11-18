import React from 'react';
import { connect } from 'react-redux';

/* redux */
import { getMovieInformation } from '../../redux/actions/movies';

/* utils */
import history from '../../utils/history';

class MoviePage extends React.Component {
  handleGoBack = () => history.goBack();

  componentDidMount() {
    const id = this.props.location.movieId
      ? this.props.location.movieId
      : this.props.movieData.imdbID;

    this.props.getMovieInformation(id);
  }

  render() {
    return (
      <div>Movie Page</div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieData: state.moviesData.movieData,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieInformation: (movieId) => dispatch(getMovieInformation(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
