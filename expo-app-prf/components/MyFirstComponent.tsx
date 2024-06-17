import {Text, StyleSheet, View} from "react-native";

type MyFirstComponentProps = {
  text: string,
  number: number,
  style?: object,
  children?: React.ReactNode
}

const MyFirstComponent = ({
  children,
  text,
  number,
  style = {}
} : MyFirstComponentProps) => {
  return (
    <View>
      <Text style={[style, styles.defaultText]}>
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