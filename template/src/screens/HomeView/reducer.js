import {
  HOME_STATUS_CHANGE,
  HOME_CVD,
  HOME_DIABETES,
  HOME_WOUNDCARE,
} from './types';
// import {SETTINGS_LOGOUT} from 'src/screens/SettingsView/types';

const INITAL_STATE = {
  loading: false,
  cvd_latest: [],
  diabetes_latest: [],
  woundcare_latest: [],
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case HOME_STATUS_CHANGE:
      return {
        ...state,
        loading: action.payload,
      };

    case HOME_CVD:
      return {
        ...state,
        cvd_latest: action.payload,
      };

    case HOME_DIABETES:
      return {
        ...state,
        diabetes_latest: action.payload,
      };

    case HOME_WOUNDCARE:
      return {
        ...state,
        woundcare_latest: action.payload,
      };

    // case SETTINGS_LOGOUT:
    //   return {...INITAL_STATE};

    default:
      return state;
  }
};
