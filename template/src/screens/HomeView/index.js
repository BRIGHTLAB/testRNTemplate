import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Linking,
} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {COLORS, SCREEN_PADDING} from 'src/theme';
import {Navigation} from 'react-native-navigation';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import PushNotification from 'react-native-push-notification';
// import LottieView from 'lottie-react-native';

// action
import {
  loadData,
  registerPushToken,
} from './actions';

const HomeView = props => {
  // get the reducers
  const {loading, cvd_latest, diabetes_latest, woundcare_latest} = useSelector(
    ({homeReducer}) => homeReducer,
  );

  // const notificationInit = () => {
  //   // reset badge number
  //   PushNotification.setApplicationIconBadgeNumber(0);
  //   // ios only
  //   // PushNotification.getApplicationIconBadgeNumber((number)=>console.log("its", number))
  //   PushNotification.configure({
  //     // (optional) Called when Token is generated (iOS and Android)
  //     onRegister: function (token) {
  //       console.log('TOKEN:', token);
  //       props.registerPushToken(token.token);
  //     },

  //     // (required) Called when a remote is received or opened, or local notification is opened
  //     onNotification: function (notification) {
  //       console.log('NOTIFICATION:', notification);

  //       // process the notification

  //       // (required) Called when a remote is received or opened, or local notification is opened
  //       notification.finish(PushNotificationIOS.FetchResult.NoData);
  //     },

  //     // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  //     onAction: function (notification) {
  //       console.log('ACTION:', notification.action);
  //       console.log('NOTIFICATION:', notification);

  //       // process the action
  //     },

  //     // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  //     onRegistrationError: function (err) {
  //       console.error(err.message, err);
  //     },

  //     // IOS ONLY (optional): default: all - Permissions to register.
  //     permissions: {
  //       alert: true,
  //       badge: true,
  //       sound: true,
  //     },

  //     // Should the initial notification be popped automatically
  //     // default: true
  //     popInitialNotification: true,

  //     /**
  //      * (optional) default: true
  //      * - Specified if permissions (ios) and token (android and ios) will requested or not,
  //      * - if not, you must call PushNotificationsHandler.requestPermissions() later
  //      * - if you are not using remote notification or do not have Firebase installed, use this:
  //      *     requestPermissions: Platform.OS === 'ios'
  //      */
  //     requestPermissions: true,
  //   });
  // };

  // // get the deep linking
  // const deepLink = async () => {
  //   const initialUrl = await Linking.getInitialURL();

  //   // function configuration for deeplinking
  //   const handleDeepLinkRequest = link => {
  //     const tmp = link.split('https://api.apotex.academy/')[1].split('/');
  //     return;

  //     Navigation.push(props.componentId, {
  //       component: {
  //         name: pageName, // Push the screen registered
  //         passProps: {
  //           id: id,
  //           category_id: category_id,
  //         },
  //         options: {
  //           topBar: {
  //             drawBehind: false,
  //             scrollEdgeAppearance: {
  //               noBorder: true,
  //             },
  //             largeTitle: {
  //               visible: true,
  //               fontSize: 25,
  //               fontFamily: 'Roboto',
  //             },
              
  //           },
  //         },
  //       },
  //     });
  //   };

  //   // add listener for after open
  //   Linking.addListener('url', e => {
  //     handleDeepLinkRequest(e.url);
  //   });

  //   if (initialUrl) {
  //     // if the user presses the link button and oened the app
  //     console.log('app opened from url', initialUrl);
  //     handleDeepLinkRequest(initialUrl);
  //   }
  // };

  useEffect(() => {
    // load data

    // push notification
    // notificationInit();
    // deepLink();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Text>Home view</Text>
      {/* <LottieView source={require('src/lottieAnimations/36929-3d-box.json')} autoPlay loop /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },

});

export default connect(null, {
  loadData,
  registerPushToken,
})(HomeView);
