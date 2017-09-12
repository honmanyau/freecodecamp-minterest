import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Card, CardText, CardTitle } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
  constructor(props) {
    super(props);

    this.state = {
      dialogueOpened: false
    };
  }

  handleNewMinButtonClick() {
    this.setState({dialogueOpened: !this.state.dialogueOpened});
  }

  render() {
    const auth = this.props.auth;
    const newMinButton =
      <FloatingActionButton style={styles.newMinButton} onClick={() => this.handleNewMinButtonClick()}>
        <ContentAdd />
      </FloatingActionButton>;

    return(
      <Card style={styles.card}>
        <CardText>
          Dashboard ( ´ ▽ ` )ﾉ
        </CardText>

        <CardText>
          {newMinButton}
        </CardText>

        <NewMinDialogue opened={this.state.dialogueOpened} />
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
