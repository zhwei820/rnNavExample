import {
    Platform
} from 'react-native';

export const createTabs = () => {
    let tabs = [{
            label: 'One',
            screen: 'example.ChannelScreen',
            icon: require('../img/one.png'),
            selectedIcon: require('../img/one_selected.png'),
            title: 'Screen One'
        },
        {
            label: 'Two',
            screen: 'example.SecondTabScreen',
            icon: require('../img/two.png'),
            selectedIcon: require('../img/two_selected.png'),
            title: 'Screen Two',
            navigatorStyle: {
                tabBarBackgroundColor: '#4dbce9',
            }
        }
    ];
    if (Platform.OS === 'android') {
        tabs.push({
            label: 'Collapsing',
            screen: 'example.CollapsingTopBarScreen',
            icon: require('../img/three.png'),
            title: 'Collapsing',
        });
    }
    return tabs;
};