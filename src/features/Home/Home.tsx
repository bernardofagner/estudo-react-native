import React, { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

import { styles } from './Home.styles';

interface IHomeProps {
    nome: string
}

const Home: React.FC<PropsWithChildren<IHomeProps>> = ({ children, nome }) => {
    return (
        <View style={styles.container}>
            
            <Text style={styles.containerTexto}>
                { nome }
            </Text>

            { children }
        </View>
    );
};

export { Home };