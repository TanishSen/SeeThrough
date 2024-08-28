import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Hey Guymsss</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => navigation.navigate("Upload")}
        >
          <Ionicons name="cloud-upload-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>Upload Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={() => console.log("Camera pressed")}
        >
          <Ionicons name="camera-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Darker background
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24, // Adjusted font size
    marginBottom: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Glassmorphism effect
    padding: 15,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 255, 0.5)", // Dark blue gradient
    padding: 10,
    borderRadius: 50,
  },
  cameraButton: {
    backgroundColor: "rgba(0, 0, 255, 0.5)", // Dark blue gradient
    padding: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 14,
  },
});
