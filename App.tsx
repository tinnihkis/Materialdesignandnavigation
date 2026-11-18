import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import { RootStackParamList } from './types/navigation';
import { PaperProvider } from 'react-native-paper';
import ApplicationBar from './components/ApplicationBar';

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
  <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        header: (props) => <ApplicationBar {...props} />
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
  );
}
