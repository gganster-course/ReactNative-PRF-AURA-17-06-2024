import {Text, StyleSheet} from "react-native";

type MyFirstComponentProps = {
  text: string,
  number: number,
  style?: object
}

const MyFirstComponent = ({
  text,
  number,
  style = {}
} : MyFirstComponentProps) => {
  return (
    <Text style={[style, styles.defaultText]}>
      MyFirstComponent {text} {number}
    </Text>
  )
}

const styles = StyleSheet.create({
  defaultText: {
    color: "green",
  }
})

export default MyFirstComponent;