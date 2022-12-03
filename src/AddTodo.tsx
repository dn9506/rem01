import React from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

export const AddTodo = () => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    padding: 10,
    borderBottomColor: "#3949ab",
  },
});
