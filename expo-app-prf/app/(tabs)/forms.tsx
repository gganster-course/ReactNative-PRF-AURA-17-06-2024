import Button from "@/components/Button";
import React, {useState} from "react";
import { Text, TextInput, StyleSheet } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';

const Forms = () => {
  const [todos, setTodos] = useState([
    {id: 1, name: "First todo"},
    {id: 2, name: "Second todo"},
    {id: 3, name: "Third todo"},
  ])
  const [name, setName] = useState("");

  const handleSubmit= () => {

  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={e => setName(e)}
      />
      <Button onPress={() => handleSubmit()}>Say hello</Button>

      <ScrollView>
        {todos.map(todo => (
          <React.Fragment key={todo.id}>
            <Text>{todo.name}</Text>
          </React.Fragment>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#313338",
    paddingVertical: 4,
    paddingHorizontal: 8,
    minWidth: 200,
    borderRadius: 4,
  }
});

export default Forms;