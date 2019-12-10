import React from 'react';
import { connect } from 'react-redux';

/* components */
import Typography from '../../components/Typography';
import Rating from '../../components/Rating';
import AddButton from '../../components/AddButton';
import Card from '../../components/Card';

/* redux */
import {
  getMovieInformation,
  setFavourite,
} from '../../redux/actions/movies';
import { MovieDataTypes, RatingsTypes } from '../../redux/reducers/moviesReducer';
import { StoreState, StoreDispatch } from '../../redux';

/* utils */
import history from '../../utils/history';
import isEmptyObject from '../../utils/isEmptyObject';

/* styles */
import styles from './MoviePage.module.css';

import { MESSAGES } from '../../language/en';

type LocationType = {
  state: {
    movieId: string,
  }
}

interface MoviePageProps {
  movieData: MovieDataTypes,
  getMovieInformation: (id: string) => void,
  setFavourite: (id: string) => void,
  isLoading: boolean,
  isFavourite: boolean,
  location: LocationType
}

class MoviePage extends React.Component<MoviePageProps> {
  static defaultProps = {
    location: {
      state: '',
    }
  }
  
  componentDidMount() {
    const id = this.props.location.state.movieId
      ? this.props.location.state.movieId
      : this.props.movieData.imdbID;

    this.props.getMovieInformation(id);
  }

  handleGoBack = () => history.goBack();

  getRottenTomatoesRating = (ratings: Array<RatingsTypes>) => {
    const rottenTomatoesRatingInfo = ratings && ratings.find((item) => item.Source === 'Rotten Tomatoes');
    return rottenTomatoesRatingInfo ? rottenTomatoesRatingInfo.Value : 'N/A';
  }

  buildCardItemsArray = (valuesString: string) => {
    const valuesArray = valuesString.split(', ');

    return valuesArray.map((value: string) => <Typography key={`card-${value}`} variant="regular1">{value}</Typography>);
  }

  handleSetFavourite = () => {
    this.props.setFavourite(this.props.movieData.imdbID);
  }

  renderItem = () => {
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
              handler={this.handleSetFavourite}
              isFavourite={this.props.isFavourite}
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

  render() {
    if (this.props.isLoading || isEmptyObject(this.props.movieData)) {
      return 'Loading...';
    }

    return this.renderItem();
  }
}

const mapStateToProps = (state: StoreState) => ({
  movieData: state.moviesData.movieData,
  isLoading: state.moviesData.isLoading,
  isFavourite: state.moviesData.favourites.includes(state.moviesData.movieData.imdbID),
});

const mapDispatchToProps = (dispatch: StoreDispatch) => ({
  getMovieInformation: (movieId: string) => dispatch(getMovieInformation(movieId)),
  setFavourite: (movieId: string) => dispatch(setFavourite(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
