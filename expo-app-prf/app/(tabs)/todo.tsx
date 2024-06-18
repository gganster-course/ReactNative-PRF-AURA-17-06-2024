import Button from "@/components/Button";
import React, {useEffect, useState} from "react";
import { Text, TextInput, StyleSheet, View, TouchableOpacity, Touchable } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import type {Todo} from "@/type";
import axios from "axios";

import Card from "@/components/Card";

const Forms = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const res = await Promise.all(
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => `https://jsonplaceholder.typicode.com/todos/${i}`)
                                     .map(url => axios.get(url)))
      const data: Todo[] = res.map(r => r.data)
                      .map(r => ({id: r.id.toString(), name: r.title}));
      console.log(data);
      setTodos(data);
    })()
  }, [])

  const handleSubmit = async () => {
    if (!name) return;

    const newTodo = {
      id: Math.random().toString(36).substring(7),
      name,
    }
    setTodos([...todos, newTodo]);
    setName("");
  }

  const handleDelete = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.actionContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={e => setName(e)}
        />
        <TouchableOpacity style={styles.addButtonContainer} onPress={handleSubmit}>
          <Ionicons name="add" size={42} color="#fd5058" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.itemsListContainer}>
        {todos.length === 0 && <Text style={{textAlign: "center", marginTop: 50}}>Pas de tâche pour le moment</Text>}
        {todos.map(todo => (
          <View key={todo.id} style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{todo.name}</Text>
            <TouchableOpacity onPress={() => handleDelete(todo.id)}>
              <Ionicons name="checkmark-circle-outline" size={36} color="#fd5058" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 25,
    paddingTop: 75,
    backgroundColor: "#fff",
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomColor: "#fd9ea3",
    borderBottomWidth: 1,
  },
  input: {
    borderWidth: 2,
    borderColor: "#fd5058",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    flex: 1,
    height: 50,
    fontSize: 20,
    backgroundColor: "#f9f9f9",

  },
  addButtonContainer: {
    marginLeft: 10,
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: "#fd5058",
    width: 50,
    height: 50,
    justifyContent : "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",

  },
  /*------ item list ------*/
  itemsListContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 20,
    color: "#333",
  },
  itemContainer: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#fd9ea3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});

export default Forms;