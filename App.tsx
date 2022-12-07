import {
    View,
    StatusBar,
    useColorScheme,
} from 'react-native';

import { styles } from './AppStyles';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

import { Home } from './src/features/Home/Home';

const App = () => {

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <>
            {console.log('App is running...')}
            <View style={styles.container}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />

                <Home nome='Fagner de Oliveira Bernardo' >
                    <Home nome='Elemento filho (children)' />
                </Home>
            </View>
        </>
    );
};

export default App;
