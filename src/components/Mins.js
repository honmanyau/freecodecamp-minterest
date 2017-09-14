import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LOCALSTORAGEKEY, COLWIDTH, COLMARGIN, MAXWIDTH } from '../common';

import { Card, CardText, CardTitle } from 'material-ui/Card';

import NewMinDialogue from './NewMinDialogue';
import Min from './Min';


const styles = {
  card: {
    boxShadow: 'none'
  },
  minsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
};

class Mins extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: 0
    };
  }

  componentDidMount() {
    this.setState({
      columns: Math.floor(window.innerWidth * 0.90 / (COLWIDTH + COLMARGIN * 2))
    });

    window.addEventListener('resize', () => {
      const width = window.innerWidth > MAXWIDTH ? MAXWIDTH : window.innerWidth;
      const columns = Math.floor(width * 0.90 / (COLWIDTH + COLMARGIN * 2));

      if (columns !== this.state.columns) {
        this.setState({
          columns: columns
        });
      }
    });
  }

  render() {
    const data = this.props.data;
    const pathname = window.location.pathname;
    const localAuth = JSON.parse(window.localStorage.getItem(LOCALSTORAGEKEY));
    const columns = this.state.columns;
    let mins = null;

    if (!this.props.min.fetchingMins && data) {
      mins = Object.keys(data).map((key) => <Min key={key} min={{...data[key], key}} />);
    }

    console.log(columns);

    if (columns && mins) {
      let columnedMins = [];

      for (let i = 0; i < columns; i++) {
        columnedMins.push(mins.filter((min, index) => index % columns === i));
      }

      if (window.location.pathname === '/dashboard') {
        columnedMins[0].unshift(<NewMinDialogue key="new-min" />);
      }

      return(
        <Card style={styles.card}>
            {pathname === '/dashboard' ? <CardTitle title='Dashboard ( ´ ▽ ` )ﾉ' /> : null}

          <CardText style={styles.minsContainer}>
            {/* {window.location.pathname === '/dashboard' ? <NewMinDialogue /> : null} */}
            {columnedMins.map((col, index) => <div key={"column" + index}>{col}</div>)}
          </CardText>
        </Card>
      )
    }
    else {
      return <div></div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    min: state.min
  };
}

export default connect(mapStateToProps, null)(Mins);
