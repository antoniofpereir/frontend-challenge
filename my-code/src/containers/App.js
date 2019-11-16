import React from 'react';
import { connect } from 'react-redux';
import { changeTestValue } from '../redux/actions/index';

class App extends React.Component {
  componentDidMount() {
    this.props.changeTestValue('new test value');
  }

  render() {
    return (
      <div>
Test value is
        {this.props.test}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  test: state.test,
});

const mapDispatchToProps = (dispatch) => ({
  changeTestValue: (newTestValue) => dispatch(changeTestValue(newTestValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
