import {Text, StyleSheet, View} from "react-native";

type MyFirstComponentProps = {
  text: string,
  number: number,
  containerStyle?: object,
  textStyle?: object,
  children?: React.ReactElement
}

const MyFirstComponent = ({
  children,
  text,
  number,
  containerStyle = {},
  textStyle = {}
} : MyFirstComponentProps) => {
  return (
    <View style={containerStyle}>
      <Text style={[styles.defaultText, textStyle]}>
        MyFirstComponent {text} {number}
      </Text>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  defaultText: {
    color: "green",
  }
})

export default MyFirstComponent;