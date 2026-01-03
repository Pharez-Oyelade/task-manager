import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import ListItem from "./components/ListItem";

export default function Index() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks((prev) => [
      ...prev,
      { id: Date.now().toString(), task: task, completed: false },
    ]);

    console.log(tasks);

    setTask("");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        paddingTop: 60,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Task Manager
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            borderRadius: 6,
          }}
          placeholder="Enter Task"
          value={task}
          onChangeText={(newTask) => setTask(newTask)}
        />
        <Pressable
          style={{
            marginLeft: 10,
            backgroundColor: "#2563eb",
            paddingHorizontal: 16,
            justifyContent: "center",
            borderRadius: 6,
          }}
          onPress={addTask}
        >
          <Text>Add</Text>
        </Pressable>
      </View>

      <FlatList
        data={tasks.reverse()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem task={item} onToggle={toggleTask} deleteTask={deleteTask} />
        )}
      />
    </View>
  );
}
