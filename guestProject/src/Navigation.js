import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AboutScreen from './About';
import MainScreen from './Main';


const AppNavigator = createSwitchNavigator({
    About: {
        screen: AboutScreen,
    },
    Main: {
        screen: MainScreen,
    },
}, { initialRouteName: 'Main' });

export default createAppContainer(AppNavigator);