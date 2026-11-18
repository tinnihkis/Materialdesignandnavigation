import { View, Text, StyleSheet } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navigation'

type Props = NativeStackScreenProps<RootStackParamList,"SecondScreen">

export default function SecondScreen({navigation,route}: Props) {


  return (
    <View style={styles.container}>
      <Text>SecondScreen</Text>
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