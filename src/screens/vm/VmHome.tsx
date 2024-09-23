import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const VmHome = () => {
    return (
        <View style={styles.container}>
            <Text>VmHome</Text>
        </View>
    );
};

export default VmHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFFF',
    },
});
