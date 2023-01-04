import {
  HOME_STATUS_CHANGE,
  HOME_CVD,
  HOME_DIABETES,
  HOME_WOUNDCARE,
} from './types';
import {Platform} from 'react-native';
import axios from 'src/axiosConfig';
import realm from 'src/models';


export const loadData = CATEGORY_TYPE => {
  return async dispatch => {

  };
};

export const registerPushToken = token => {
  return async dispatch => {
    return;
    try {
      const obj = {
        token: token,
        device_type: Platform.OS,
      };
      console.log('trying to send PN', obj);
      const user = realm.objects('User')[0];
      const response = await axios.post(
        `/v1/users/${user.id}/push_notification`,
        obj,
      );
      console.log('push notification sent');
    } catch (e) {
      console.log('error sending push token to server', e);
    }
  };
};
