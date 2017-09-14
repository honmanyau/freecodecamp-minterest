import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MinActions from '../actions/min';

import { Card, CardText } from 'material-ui/Card';

import NewMinDialogue from './NewMinDialogue';
import Min from './Min';


const styles = {
  card: {
    boxShadow: 'none'
  },
  newMinButton: {
    margin: '62px'
  }
};

class Dashboard extends React.Component {
  render() {
    const min = this.props.min;
    let mins = null;

    if (!min.fetchingMins && min.dashboardMins) {
      mins = Object.keys(min.dashboardMins).map((key) => <Min key={key} min={{...min.dashboardMins[key], key}} />);
    }

    return(
      <Card style={styles.card}>
        <CardText>
          Dashboard ( ´ ▽ ` )ﾉ
        </CardText>
          {mins}
        <NewMinDialogue />
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    min: state.min
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(MinActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
