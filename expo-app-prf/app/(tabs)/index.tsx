import {useState, useEffect} from "react";
import {StyleSheet, View, ScrollView, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyFirstComponent from '@/components/MyFirstComponent';

import Button, {ButtonType} from '@/components/Button';

import Card from "@/components/Card";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Card title="Our counter" subtitle="1 April 2019">
          Now this is the story all about how My life got
          flipped, turned upside down And l'd like to take
          a minute just sit right there l'Il tell you how I
          became the prince of a town called Bel-air.
        </Card>
        <Text style={{fontSize: 48, textAlign: "center"}}>{count}</Text>
        <View style={styles.actionsContainer}>
          <Button onPress={() => setCount(0)} style={styles.actionButton}>
            0
          </Button>
          <Button onPress={() => setCount(count - 1)} style={styles.actionButton}>
            -
          </Button>
          <Button onPress={() => setCount(count + 1)} style={styles.actionButton}>
            +
          </Button>
        </View>
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
  },
  actionsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 16,
    gap: 16,
  },
  actionButton: {
    flex: 1
  }
});