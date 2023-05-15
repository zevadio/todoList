import React, {useState} from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Task from "./components/Task"

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask("");
  }

  const completeTask = (index) => {
    let itemsCopy= [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}> Today's Tasks </Text>
        <View style={styles.items}>
          {
          taskItems.map((item, index) => {
            return (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
            <Task text={item}/>
            </TouchableOpacity>)
          })
         }
          </View>
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}>
              <TextInput style={styles.input} placeholder={"Write a Task"} value={task} onChangeText={text => setTask(text)} />            
            <TouchableOpacity onPress={() => handleAddTask()}> 
            <View style={styles.addWrapper}> 
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
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
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 20,
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