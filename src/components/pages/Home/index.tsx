import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Todos, { Todo } from '../../organisms/Todos';
import { COLOR } from '../../../constants/theme';
import { DETAIL, INPUT } from '../../../constants/path';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: COLOR.MAIN_DARK,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

const todos = [
  {
    id: '1',
    title: '役所に書類を提出する',
    detail: '転居手続き',
    isDone: false,
  },
  {
    id: '2',
    title: '郵便局で書類を送る',
    detail: '電気代の名義を変更',
    isDone: true,
  },
];

export default function Home() {
  const { navigate } = useNavigation();
  const onPress = React.useCallback(() => {
    navigate(INPUT);
  }, [navigate]);
  const gotoDetail = React.useCallback(
    (state: Todo.State, isEditable: boolean) => {
      navigate(DETAIL, { ...state, isEditable });
    },
    [navigate],
  );
  const actions = React.useMemo(
    () => ({
      removeTodo: () => {},
      toggleTodo: () => {},
      gotoDetail,
    }),
    [gotoDetail],
  );

  return (
    <View style={styles.container}>
      <Todos isEditable todos={todos} actions={actions} />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Icon color={COLOR.PRIMARY} size={24} name="plus" />
      </TouchableOpacity>
    </View>
  );
}
