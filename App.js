import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, AllCategories} from './src/screens/home';
import {Chats} from './src/screens/chats';
import {AddNewListing} from './src/screens/addNewListing';
import {MyAds} from './src/screens/myAds';
import {Profile} from './src/screens/profile';
import {Authentication, Location} from './src/screens/auth';


const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="AllCategories"
          component={AllCategories}
        />
        <Stack.Screen
          name="Chats"
          component={Chats}
        />
        <Stack.Screen
          name="AddNewListing"
          component={AddNewListing}
        />
        <Stack.Screen
          name="MyAds"
          component={MyAds}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
