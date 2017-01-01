import {
  Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';

// screen related book keeping
import {registerScreens} from './screens';
registerScreens();


// this will start our app

// Navigation.startTabBasedApp({
//   tabs: createTabs(),
//   appStyle: {
//     tabBarBackgroundColor: '#0f2362',
//     tabBarButtonColor: '#ffffff',
//     tabBarSelectedButtonColor: '#63d7cc'
//   },
//   drawer: {
//     left: {
//       screen: 'example.SideMenu'
//     }
//   }
// });

Navigation.startSingleScreenApp({
 screen: {
   screen: 'example.LoginScreen',
   title: 'Navigation',
   navigatorStyle: {
     navBarBackgroundColor: '#4dbce9',
     navBarTextColor: '#ffff00',
     navBarSubtitleTextColor: '#ff0000',
     navBarButtonColor: '#ffffff',
     statusBarTextColorScheme: 'light'
   }
 },
//  drawer: {
//    left: {
//      screen: 'example.SideMenu'
//    }
//  }
});
