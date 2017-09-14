import {
  FETCHING_MINS,
  STORE_DASHBOARD_MINS
} from '../actions/min';



const initialState = {
  fetchingMins: true,
  dashboardMins: null
};

export default function min(state = initialState, action) {
  switch(action.type) {
    case FETCHING_MINS:
      return Object.assign({}, state, {
        fetchingMins: action.payload.fetchingMins
      });

      case STORE_DASHBOARD_MINS:
        return Object.assign({}, state, {
          dashboardMins: action.payload.dashboardMins
        });

    default:
      return state;
  }
}
