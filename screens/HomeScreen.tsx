import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { RootStackParamList } from '../types/navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<RootStackParamList,"SecondScreen">

export default function HomeScreen({navigation}: Props) {

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });