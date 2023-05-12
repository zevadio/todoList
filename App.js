import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Task from "./components/Task"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}> Today's Tasks </Text>
        <View style={styles.items}>
          <Task text={"Task1"}/>
          <Task text={"Task2"}/>
          <Task text={"Task3"}/>

            <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}>
              <TextInput style={styles.input} placeholder={"Write a Task"} />
            <TouchableOpacity> 
            <View style={styles.addWrapper}> 
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
  
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec'},
    taskWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontWeight: "bold",
      fontSize: 24,
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper: {
      position: "absolute",
      bottom: -400,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: "#ffff",
      borderRadius: 60,
      borderColor: "#c0c0c0",
      borderWidth: 1,
      width: 250,
      opacity: 0.8,

    },
    addWrapper: {
      width: 50,
      height: 50,
      backgroundColor: "#ffff",
      borderRadius: 60,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#c0c0c0",
      borderWidth: 1,
      opacity: 0.8,
    },
    addText: {},
}); 
