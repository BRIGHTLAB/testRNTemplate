import {
  LOGIN_DATA_UPDATE,
} from './types';
import axios from 'src/axiosConfig';
import realm from 'src/models';

import {Navigation} from 'react-native-navigation';
import {mainRoot} from 'src/navigation/navigationStructures';

export const loadData = CATEGORY_TYPE => {
  return async dispatch => {

      try{
        // everything is ok ......
        // navigate to app, the user is logged in
        Navigation.setRoot(mainRoot);

      }catch (e) {
        // if lofin error
      }
  };
};

