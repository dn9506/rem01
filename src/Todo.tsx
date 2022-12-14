import React, {FC} from "react";
import { StyleSheet, Text, View } from "react-native";

interface ITodo {
  todo: { id: string; title: string };
  key: string;
}

export const Todo:FC<ITodo> = ({ todo, key }) => {
  return (
    <View style={styles.todo}>
      <Text key={todo.id}>{todo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
