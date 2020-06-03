import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DETAIL, STATISTICS } from '../../constants/path';
import { Detail, Statistics } from '../../components/pages';
import { HeaderLeft } from '../Header';

const Stack = createStackNavigator();
function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName={STATISTICS}>
      <Stack.Screen name={DETAIL} component={Detail} />
      <Stack.Screen
        name={STATISTICS}
        component={Statistics}
        options={{
          headerLeft: () => <HeaderLeft />,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
