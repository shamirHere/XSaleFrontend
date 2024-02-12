import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/screens/home';
import {Chats} from './src/screens/chats';
import {AddNewListing} from './src/screens/addNewListing';
import {MyAds} from './src/screens/myAds';
import {Profile} from './src/screens/profile';
import {Authentication, Location} from './src/screens/auth';


const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false,  }}
        />
        <Stack.Screen
          name="Chats"
          component={Chats}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewListing"
          component={AddNewListing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyAds"
          component={MyAds}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
