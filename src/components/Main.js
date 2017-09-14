import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Card, CardText } from 'material-ui/Card';

import NewMinDialogue from './NewMinDialogue';
import Min from './Min';


const styles = {
  card: {
    boxShadow: 'none'
  }
}

class Main extends React.Component {
  render() {
    const min = this.props.min;
    let mins = null;

    if (!min.fetchingMins && min.dashboardMins) {
      mins = Object.keys(min.dashboardMins).map((key) => <Min key={key} min={{...min.dashboardMins[key], key}} />);
    }

    return(
      <Card style={styles.card}>
        <CardText>
          Home ( ´ ▽ ` )ﾉ
        </CardText>

        <CardText style={styles.minsContainer}>
          <NewMinDialogue />
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

export default connect(mapStateToProps, null)(Main);
