import React, { FC, useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

interface IAddTodos {
  onSubmit: (title: string) => void;
}

export const AddTodo: FC<IAddTodos> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    onSubmit(value);
  };

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Write Text!!"/>
      <Button title="Add" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    padding: 10,
    borderBottomColor: "#3949ab",
  },
});
