import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SettingsPage = () => {
    return (
        <View style={styles.container}> 
            <Text>Settings Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
});

export default SettingsPage;