import {Text} from "react-native";

type MyFirstComponentProps = {
  text: string,
  number: number
}

const MyFirstComponent = ({
  text,
  number
} : MyFirstComponentProps) => {
  return (
    <Text>
      MyFirstComponent {text} {number}
    </Text>
  )
}

export default MyFirstComponent;