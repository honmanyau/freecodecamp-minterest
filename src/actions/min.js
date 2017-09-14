import firebase from '../firebase';

import { ROOTURL } from '../common';



export const FETCHING_MINS = 'FETCHING_MINS';
export const STORE_DASHBOARD_MINS = 'STORE_DASHBOARD_MINS';

export function addMin(uid, min) {
  return function(dispatch) {
    // This would normally be handled server-side (or using Cloud Functions in this case)
    // so that links and views can't be modified by the user—but, in favour of avoiding the
    // cold-start time of Cloud Functions for the demo, this is done client-side to take
    // advantage of the speed of the real-time database.
    firebase.database().ref(`/minterest/users/${uid}/mins`).push(Object.assign({}, min, {
      likes: 0,
      views: 0
    }))
      .catch((error) => 'Error occured when creating a new min.')
  }
}

export function fetchDashboardMins() {
  return function(dispatch) {
    dispatch(fetchingMins(true));

    firebase.database().ref(`/minterest/users/${uid}/mins`).on('value', (snapshot) => {
      dispatch(storeDashboardMins(snapshot.val()));
      dispatch(fetchingMins(false));
    }, (error) => {
      dispatch(fetchingMins(false));
      console.log('Error occured when dispatching dashboard min listener.')
    });
  }
}

export function fetchingMins(fetchingMins) {
  return {
    type: FETCHING_MINS,
    payload: {
      fetchingMins
    }
  }
}

export function storeDashboardMins(dashboardMins) {
  return {
    type: STORE_DASHBOARD_MINS,
    payload: {
      dashboardMins
    }
  }
}
