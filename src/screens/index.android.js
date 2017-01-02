import { Navigation } from 'react-native-navigation';

import LoginScreen from './LoginScreen';
import ChannelScreen from './ChannelScreen';
import StoryScreen from './StoryScreen';
import infiniteListScreen from './infiniteListScreen';
import TimeLineScreen from './TimeLineScreen';



import SecondTabScreen from './SecondTabScreen';
import PushedScreen from './PushedScreen';
import StyledScreen from './StyledScreen';
import SideMenu from './SideMenu';
import ModalScreen from './ModalScreen';
import CollapsingTopBarScreen from './CollapsingTopBarScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.LoginScreen', () => LoginScreen);

  Navigation.registerComponent('example.ChannelScreen', () => ChannelScreen);
  Navigation.registerComponent('example.StoryScreen', () => StoryScreen);
  Navigation.registerComponent('example.infiniteListScreen', () => infiniteListScreen);
  Navigation.registerComponent('example.TimeLineScreen', () => TimeLineScreen);

  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
  Navigation.registerComponent('example.StyledScreen', () => StyledScreen);
  Navigation.registerComponent('example.ModalScreen', () => ModalScreen);
  Navigation.registerComponent('example.SideMenu', () => SideMenu);
  Navigation.registerComponent('example.CollapsingTopBarScreen', () => CollapsingTopBarScreen);
}
