import {StyleSheet, View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyFirstComponent from '@/components/MyFirstComponent';

import Card from "@/components/Card";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Hello world</Text>

        <MyFirstComponent text="my first props" number={2}>
          <Text>Child</Text>
        </MyFirstComponent>

        <Card title="Test title" subtitle="1 April 2019">
          Now this is the story all about how My life got
          flipped, turned upside down And l'd like to take
          a minute just sit right there l'Il tell you how I
          became the prince of a town called Bel-air.
        </Card>
        <Card title="Test title" subtitle="1 April 2019">
          Now this is the story all about how My life got
          flipped, turned upside down And l'd like to take
          a minute just sit right there l'Il tell you how I
          became the prince of a town called Bel-air.
        </Card>
        <Card title="Test title" subtitle="1 April 2019">
          Now this is the story all about how My life got
          flipped, turned upside down And l'd like to take
          a minute just sit right there l'Il tell you how I
          became the prince of a town called Bel-air.
        </Card>
        <Card title="Test title" subtitle="1 April 2019">
          Now this is the story all about how My life got
          flipped, turned upside down And l'd like to take
          a minute just sit right there l'Il tell you how I
          became the prince of a town called Bel-air.
        </Card>
        <Card title="Test title" subtitle="1 April 2019">
          Now this is the story all about how My life got
          flipped, turned upside down And l'd like to take
          a minute just sit right there l'Il tell you how I
          became the prince of a town called Bel-air.
        </Card>
        <Card title="Test title" subtitle="1 April 2019">
          Now this is the story all about how My life got
          flipped, turned upside down And l'd like to take
          a minute just sit right there l'Il tell you how I
          became the prince of a town called Bel-air.
        </Card>
        <Card title="Test title" subtitle="1 April 2019">
          Now this is the story all about how My life got
          flipped, turned upside down And l'd like to take
          a minute just sit right there l'Il tell you how I
          became the prince of a town called Bel-air.
        </Card>
        <Card title="Test title" subtitle="1 April 2019">
          Now this is the story all about how My life got
          flipped, turned upside down And l'd like to take
          a minute just sit right there l'Il tell you how I
          became the prince of a town called Bel-air.
        </Card>
        <Card title="Test title" subtitle="1 April 2019">
          Now this is the story all about how My life got
          flipped, turned upside down And l'd like to take
          a minute just sit right there l'Il tell you how I
          became the prince of a town called Bel-air.
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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