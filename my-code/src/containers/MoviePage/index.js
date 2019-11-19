import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* components */
import Typography from '../../components/Typography';
import Rating from '../../components/Rating';
import AddButton from '../../components/AddButton';
import Card from '../../components/Card';

/* redux */
import { getMovieInformation } from '../../redux/actions/movies';

/* utils */
import history from '../../utils/history';

/* styles */
import styles from './MoviePage.module.css';

import { MESSAGES } from '../../language/en';

class MoviePage extends React.Component {
  componentDidMount() {
    const id = this.props.location.movieId
      ? this.props.location.movieId
      : this.props.movieData.imdbID;

    this.props.getMovieInformation(id);
  }

  handleGoBack = () => history.goBack();

  getRottenTomatoesRating = (ratings) => {
    const rottenTomatoesRatingInfo = ratings && ratings.find((item) => item.Source === 'Rotten Tomatoes');
    return rottenTomatoesRatingInfo ? rottenTomatoesRatingInfo.Value : 'N/A';
  }

  setFavourite = () => {
    console.log('favourite: ', this.props.movieData.imdbID);
  }

  buildCardItemsArray = (valuesString) => {
    const valuesArray = valuesString.split(', ');

    return valuesArray.map((value) => <Typography key={`card-${value}`} variant="regular1">{value}</Typography>);
  }

  render() {
    const {
      Runtime,
      Title,
      Year,
      Rated,
      imdbRating,
      Ratings,
      Plot,
      Actors,
      Genre,
      Director,
      Poster,
    } = this.props.movieData;

    const rottenTomatoesRating = this.getRottenTomatoesRating(Ratings);
    const castList = this.buildCardItemsArray(Actors);
    const genresList = this.buildCardItemsArray(Genre);
    const directorsList = this.buildCardItemsArray(Director);

    return (
      <div className={styles.contentContainer}>
        <div className={styles.informationContainer}>
          <Typography variant="medium2" color="secondary">
            {`${Runtime} . ${Year} . ${Rated}`}
          </Typography>
          <Typography variant="bold1">
            {Title}
          </Typography>
          <div className={styles.ratingContainer}>
            <Rating source="imdb" rating={imdbRating} />
            <Rating source="rotten" rating={rottenTomatoesRating} />
            <AddButton
              text={MESSAGES.ADD_TO_FAVOURITES}
              handler={this.setFavourite}
              added={false}
            />
          </div>
          <div className={styles.cardsContainer}>
            <Card
              title={MESSAGES.PLOT}
              body={Plot}
            />
            <div className={styles.bottomCards}>
              <Card
                title={MESSAGES.CAST}
                body={castList}
              />
              <Card
                title={MESSAGES.GENRE}
                body={genresList}
              />
              <Card
                title={MESSAGES.DIRECTOR}
                body={directorsList}
              />
            </div>
          </div>
        </div>
        <img src={Poster} alt="movie-poster" className={styles.poster} />
      </div>
    );
  }
}

MoviePage.defaultProps = {
  location: {
    movieId: '',
  },
};

MoviePage.propTypes = {
  getMovieInformation: PropTypes.func.isRequired,
  movieData: PropTypes.shape().isRequired,
  location: PropTypes.shape({
    movieId: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  movieData: state.moviesData.movieData,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieInformation: (movieId) => dispatch(getMovieInformation(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
