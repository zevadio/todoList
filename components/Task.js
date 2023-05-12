import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}> {props.text} </Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square: {
        height: 24,
        width: 24,
        backgroundColor: "#55BCF666",
        opacity: 0.8,
        borderRadius: 5,
        marginRight: 10,
    },
    itemText: {
        maxWidth: "80%",
    },
    circular: {
        height: 12,
        width: 12,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;
