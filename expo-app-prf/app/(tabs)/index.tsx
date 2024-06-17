import {StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyFirstComponent from '@/components/MyFirstComponent';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Hello world</Text>
        <MyFirstComponent 
          text="my first props"
          number={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 38
  }
});