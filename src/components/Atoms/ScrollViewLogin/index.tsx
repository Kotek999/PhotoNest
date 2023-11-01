import { ScrollView, StyleSheet } from "react-native";
import { JSX, ChildProps as ScrollViewLoginProps } from "../../../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenHeight, screenWidth } from "../../../helpers/dimensions";

export const ScrollViewLogin = (props: ScrollViewLoginProps): JSX => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.container,
        bottom: insets.bottom,
      }}
      showsVerticalScrollIndicator={false}
    >
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: screenWidth,
    height: screenHeight,
    alignItems: "center",
  },
});
