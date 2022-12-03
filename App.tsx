import { StatusBar } from "expo-status-bar";
import { useState, FC } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { AddTodo } from "./src/AddTodo";
import { Navbar } from "./src/Navbar";
import { Todo } from "./src/Todo";

interface ITodos {
  id: string;
  title: string;
}

export default function App() {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const addTodo = (title: string) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    };
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };





  return (
    <View style={styles.container}>
      <Navbar title={"Todo App!"} />
      <View style={styles.addTodoInput}>
        <AddTodo onSubmit={addTodo} />
      </View>

      <ScrollView style={styles.containTodos}>
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  containTodos: {
    margin: "2%",
  },
  addTodoInput: {
    marginHorizontal: "2%",
  },
});
