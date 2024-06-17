import {View, Text, StyleSheet, Touchable} from 'react-native';
import type {StyleProp, ViewStyle} from "react-native";

type CardProps = {
  title: string,
  subtitle: string,
  children: string,
  containerStyle?: StyleProp<ViewStyle>,
}

const Card = (props : CardProps) => {
  const {title, subtitle, children, containerStyle = {}} = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    margin: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 14,
    color: "gray"
  },
  description: {
    fontSize: 12,
    marginVertical: 8,
    lineHeight: 16
  }
})

export default Card;