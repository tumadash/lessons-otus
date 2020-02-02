import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AboutScreen, MainScreen, ProfileScreen} from "./screens";

const AppNavigator = createSwitchNavigator({
    About: {
        screen: AboutScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
    Main: {
        screen: MainScreen,
    },
}, { initialRouteName: 'Main' });

export default createAppContainer(AppNavigator);