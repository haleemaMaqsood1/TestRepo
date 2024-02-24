import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// const AppNavigator = () => {
//   return (
//     <Tab.Navigator>
//       {/* Add your individual screens as Tab.Screen components */}
//       {/* For example: */}
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };
// @react-navigation/native
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstFormScreen from './screens/FirstFormScreen';
import SecondFormScreen from './screens/SecondFormScreen';
  const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="FirstForm" component={FirstFormScreen} />
      <Stack.Screen name="SecondForm" component={SecondFormScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;