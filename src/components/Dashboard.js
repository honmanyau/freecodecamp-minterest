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
  minsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexWrap: 'wrap'
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
        <CardText style={styles.minsContainer}>
          <NewMinDialogue width='212' />
          {mins}
        </CardText>
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
