import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function ChatScreen({ route }) {
  const { image } = route.params;
  const [prompt, setPrompt] = useState("");

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <TextInput
        style={styles.input}
        onChangeText={setPrompt}
        value={prompt}
        placeholder="Enter your prompt..."
        placeholderTextColor="#fff"
      />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212", // Darker background
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#fff",
    color: "#fff",
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: "rgba(0, 0, 255, 0.5)", // Dark blue gradient
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
