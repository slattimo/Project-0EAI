import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>EmailAI Dashboard</Text>
            <Text style={styles.subtitle}>Manage your emails smarter and faster!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
});

export default Dashboard;