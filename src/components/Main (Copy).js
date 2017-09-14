import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Mins from './Mins';



class Main extends React.Component {
  render() {
    return(
      <Mins data={this.props.min} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    min: state.min
  };
}

export default connect(mapStateToProps, null)(Main);
