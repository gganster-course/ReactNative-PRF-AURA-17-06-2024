import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";

enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
}

type ButtonProps = {
  children: string,
  onPress: () => void,
  type?: ButtonType,
  style?: StyleProp<ViewStyle>,
  loading?: boolean,
}

const Button = (props: ButtonProps) => {
  const {
    children,
    onPress,
    style = {},
    type = ButtonType.Primary,
    loading = false
  } = props;

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.container, styles[`${type}Container`], style]}
    >
      <Text style={[styles.text, styles[`${type}Text`]]}>{children}</Text>
      {loading ? <ActivityIndicator size="large"/> : null}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    gap: 7
  },
  text: {
    fontSize: 18,
  },
  /* -------- primary ----------- */
  primaryContainer: {
    backgroundColor: "#3094aa",
  },
  primaryText: {
    color: "white",
  },
  /* ------- secondary ----------- */
  secondaryContainer: {
    backgroundColor: "#286376",
  },
  secondaryText: {
    color: "white",
  }
});

export default Button;
export {ButtonType}
export type { ButtonProps};
