import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LOCALSTORAGEKEY } from '../common';

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

class Mins extends React.Component {
  render() {
    const data = this.props.data;
    const localAuth = JSON.parse(window.localStorage.getItem(LOCALSTORAGEKEY));
    let mins = null;

    if (!this.props.min.fetchingMins && data) {
      mins = Object.keys(data).map((key) => <Min key={key} min={{...data[key], key}} />);
    }

    return(
      <Card style={styles.card}>
        <CardText>
          Dashboard ( ´ ▽ ` )ﾉ
        </CardText>

        <CardText style={styles.minsContainer}>
          {localAuth ? <NewMinDialogue /> : null}
          {mins}
        </CardText>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    min: state.min
  };
}

export default connect(mapStateToProps, null)(Mins);
