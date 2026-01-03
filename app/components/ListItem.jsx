import { View, Text, Pressable } from "react-native";

export default function ListItem({ onToggle, task }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderBottomWidth: 1,
        borderColor: "#eee",
      }}
    >
      <Pressable style={{ flex: 1 }} onPress={() => onToggle(task.id)}>
        <Text
          style={[
            { fontSize: 16 },
            task.completed && {
              textDecorationLine: "line-through",
              color: "#999",
            },
          ]}
        >
          {task.task}
        </Text>
      </Pressable>
    </View>
  );
}
