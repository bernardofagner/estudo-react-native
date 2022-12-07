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
import { LogHandler } from './src/Utils/logs/LogHandler';

const App = () => {

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const logDataSample = {
        nome: 'Fagnerde Oliveira Bernardo',
        idade: 33
    }

    return (
        <>
            {LogHandler.trackEvent({sourceFile: 'App', info: 'Mensagem de erro', data: logDataSample})}
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
