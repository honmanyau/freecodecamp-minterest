import React from 'react';

import { Card, CardText } from 'material-ui/Card';



const styles = {
  card: {
    boxShadow: 'none'
  }
}

class Main extends React.Component {
  render() {
    return(
      <Card style={styles.card}>
        <CardText>
          Main (╯°□°）╯︵ ┻━┻
        </CardText>
      </Card>
    )
  }
}

export default Main;
