import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import JobFormScreen from './screens/JobFormScreen';
import JobDetailScreen from './screens/JobDetailScreen';
import PostSuccessScreen from './screens/PostSuccessScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="JobForm" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="JobForm" component={JobFormScreen} />
          <Stack.Screen name="JobDetail" component={JobDetailScreen} />
          <Stack.Screen name="PostSuccessScreen" component={PostSuccessScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
