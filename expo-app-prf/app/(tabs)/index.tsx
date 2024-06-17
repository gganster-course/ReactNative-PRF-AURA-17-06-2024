import {StyleSheet, View, ScrollView, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyFirstComponent from '@/components/MyFirstComponent';

import Button, {ButtonType} from '@/components/Button';

import Card from "@/components/Card";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {

  const handleClick = () => {
    console.log("clicked");
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Card title="Test title" subtitle="1 April 2019">
          Now this is the story all about how My life got
          flipped, turned upside down And l'd like to take
          a minute just sit right there l'Il tell you how I
          became the prince of a town called Bel-air.
        </Card>
        <Button onPress={() => console.log("click")} style={{margin: 20}}>
          hello world
        </Button>
        <Button loading={true} type={ButtonType.Secondary} onPress={() => console.log("click")} style={{marginHorizontal: 20}}>
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