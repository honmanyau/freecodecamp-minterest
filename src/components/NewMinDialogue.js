import React from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';



class NewMinDialogue extends React.Component {
  render() {
    return(
      <Dialog
        modal={true}
        title="Dialog With Actions"
        open={this.props.opened}
      >
        Only actions can close this dialog.
      </Dialog>
    )
  }
}

export default NewMinDialogue;
