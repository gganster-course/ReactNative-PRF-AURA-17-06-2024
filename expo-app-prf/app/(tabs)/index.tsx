import {StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyFirstComponent from '@/components/MyFirstComponent';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: "row"}}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello world</Text>
        <MyFirstComponent 
          text="my first props"
          number={2}
        >
          <Text>Child</Text>
        </MyFirstComponent>
      </View>
      <View style={styles.container2}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
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