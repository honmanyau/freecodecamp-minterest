import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Card, CardText, CardTitle } from 'material-ui/Card';

import NewMinDialogue from './NewMinDialogue';



const styles = {
  card: {
    boxShadow: 'none'
  },
  newMinButton: {
    margin: '62px'
  }
}

class Dashboard extends React.Component {
  render() {
    const auth = this.props.auth;

    return(
      <Card style={styles.card}>
        <CardText>
          Dashboard ( ´ ▽ ` )ﾉ
        </CardText>

        <NewMinDialogue />
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(AuthActions, dispatch)
//   }
// }

export default connect(mapStateToProps, null)(Dashboard);
