import {useState, useEffect, useMemo} from "react";
import {StyleSheet, View, ScrollView, Text, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyFirstComponent from '@/components/MyFirstComponent';
import {Duration} from 'luxon';

import Button, {ButtonType} from '@/components/Button';

import Card from "@/components/Card";

enum ChronoState {
  PLAYING,
  PAUSED,
}

export default function TabTwoScreen() {
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState(ChronoState.PAUSED);
  
  useEffect(() => {
    if (state === ChronoState.PAUSED) return;

    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [state]);

  const displayChrono = useMemo(() => (
    Duration.fromObject({seconds: counter}).toFormat("hh:mm:ss")
  ), [counter]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{displayChrono}</Text>
      <View style={styles.actionContainer}>
        {state === ChronoState.PLAYING ? (
          <Button onPress={() => setState(ChronoState.PAUSED)}>Pause</Button>
        ) : (
          <Button onPress={() => setState(ChronoState.PLAYING)}>Start</Button>
        )}
        <Button onPress={() => {setCounter(0); setState(ChronoState.PAUSED)}}>Reset</Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actionContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: 16,
  },
  text: {
    fontSize: 48,
  }
});
