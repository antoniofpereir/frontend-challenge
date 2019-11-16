import React from 'react';
import { connect } from 'react-redux';
import { changeTestValue } from '../redux/actions/index';
import { searchMovie } from '../redux/actions/movies';

class App extends React.Component {
  componentDidMount() {
    this.props.changeTestValue('new test value');
    this.props.searchMovie('test')
  }

  render() {
    return (
      <div>
        {`Test value is ${this.props.test}`}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.moviesData,
});

const mapDispatchToProps = (dispatch) => ({
  searchMovie: searchValue => dispatch(searchMovie(searchValue)),
  changeTestValue: (newTestValue) => dispatch(changeTestValue(newTestValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
