import {
  LOGIN_DATA_UPDATE
} from './types';
// import {SETTINGS_LOGOUT} from 'src/screens/SettingsView/types';

const INITAL_STATE = {
  loading: false,
  counter: 0,
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_DATA_UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    // case SETTINGS_LOGOUT:
    //   return {...INITAL_STATE};

    default:
      return state;
  }
};
