import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DETAIL, STATISTICS } from '../../constants/path';
import { Detail, Statistics } from '../../components/pages';
import { HeaderLeft, headerStyle, headerTintColor } from '../Header';
import { COLOR } from '../../constants/theme';

const cardStyle = {
  backgroundColor: COLOR.MAIN,
};

const Stack = createStackNavigator();
function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={STATISTICS}
      screenOptions={{
        cardStyle,
        headerTintColor,
        headerStyle,
      }}
    >
      <Stack.Screen name={DETAIL} component={Detail} />
      <Stack.Screen
        name={STATISTICS}
        component={Statistics}
        options={{
          headerLeft: () => <HeaderLeft />,
          title: 'Statistics',
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
