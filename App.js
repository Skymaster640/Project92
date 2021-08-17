import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import WalkthroughSearch from './screens/WalkthroughSearch'
import SuperMarioOdyssey from './screens/SuperMarioOdyssey'
import Undertale from './screens/Undertale'
import Minecraft from './screens/Minecraft'
import SkySpyroAdventure from './screens/SkySpyroAdventure'
import SmashBrosUltimate from './screens/SmashBrosUltimate'


export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
<AppContainer/>
    </View>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home:{screen:HomeScreen},
  Walkthroughs:{screen:WalkthroughSearch},
  SMO: {screen:SuperMarioOdyssey},
  UT: {screen:Undertale},
  MC: {screen:Minecraft},
  SSA: {screen:SkySpyroAdventure},
  SSB: {screen:SmashBrosUltimate},
},{initialRouteName:"Home"})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});