import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
} from 'react-native';

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
        <SafeAreaView>

            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />

            <ScrollView>
                <Home nome='Fagner de Oliveira Bernardo' >
                    <Home nome='Elemento filho (children)'/>
                </Home>
            </ScrollView>

        </SafeAreaView>
    );
};

export default App;
