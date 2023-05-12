import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Task from "./components/Task"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}> Today's Tasks </Text>
        <View style={styles.items}>
          <Task text={"Task1"}/>
          <Task text={"Task2"}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'},
    taskWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontWeight: "bold",
      fontSize: 24,
    },
    items: {}
});
