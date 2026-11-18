import React from 'react';
import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const ApplicationBar = ({ navigation, back }: NativeStackHeaderProps) => {
    return (
        <Appbar.Header style={{ backgroundColor: '#D8C8F0'}}>
            {back ? (
        <>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}
                    color="#493568"
                />
                <Appbar.Content title="Back to Homepage"
                    titleStyle={{ 
                    color: '#493568'}}
                />
                </>
    ) : (
        <>
            <Appbar.Content title="Homepage"
                        titleStyle={{ color: '#493568',
                        textAlign: 'center' }}
                        />
            <Appbar.Action
                icon="arrow-right"
                color="#493568"
                onPress={() => navigation.navigate('SecondScreen', {
                    message: 'Hello from HomeScreen!'
                })}
            />
        </>
            )}

        </Appbar.Header>
    );
};

export default ApplicationBar;