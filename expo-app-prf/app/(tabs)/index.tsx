import {useState} from "react";
import {StyleSheet, View, ScrollView, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyFirstComponent from '@/components/MyFirstComponent';

import Button, {ButtonType} from '@/components/Button';

import Card from "@/components/Card";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [object, setObject] = useState({name: "toto", age: 12});

  const handleClick = () => {
    console.log(count);
    const newValue = count + 1;
    setCount(newValue);

    
    //count pas encore mis à jour
  }

  const majObject = () => {
    setObject({...object, name: "tata"}); //OK

    //Interdit
    object.name = "tata";
    setObject(object);
  }

  const sentence = `Le compte est à ${count}`;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Card title="Test title" subtitle="1 April 2019">
          Now this is the story all about how My life got
          flipped, turned upside down And l'd like to take
          a minute just sit right there l'Il tell you how I
          became the prince of a town called Bel-air.
        </Card>
        <Text style={{fontSize: 48, textAlign: "center"}}>{sentence}</Text>
        <Button onPress={handleClick} style={{margin: 20}}>
          hello world
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    backgroundColor: "blue",
    flex: 1
  },
  text: {
    color: "red",
    fontSize: 38
  }
});