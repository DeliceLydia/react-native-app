import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './register'
import Signin from './signin';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signin">
        <Stack.Screen name="signin" component={Signin} options={{ headerTitle: null }}/>
        <Stack.Screen name="register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
