import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

export default function UploadScreen({ navigation }) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      navigation.navigate("Chat", { image: result.assets[0].uri });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Ionicons name="cloud-upload-outline" size={24} color="#fff" />
        <Text style={styles.uploadText}>Upload Photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212", // Darker background
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 255, 0.5)", // Dark blue gradient
    padding: 15,
    borderRadius: 50,
  },
  uploadText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 14,
  },
});
