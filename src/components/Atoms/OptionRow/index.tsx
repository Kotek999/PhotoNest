import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX, OptionRowProps } from "../../../types";
import { COLORS } from "../../../colors";
import { screenWidth } from "../../../helpers/dimensions";
import { getOption } from "../../../helpers/functions/getOption";

export const OptionRow = (props: OptionRowProps): JSX => {
  const onPressGetOption = () => {
    getOption(
      props.option.title,
      props.option.content,
      props.setSelectedTitle,
      props.setSelectedOption,
      props.openOptionModal
    );
  };

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => onPressGetOption()}
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesome5
            name={props.option.iconName}
            size={20}
            style={{ margin: 0 }}
            color={COLORS.emerald}
          />
        </View>
        <Text style={styles.value}>{props.option.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    marginBottom: 24,
    width: screenWidth / 1.2,
    height: 50,
    backgroundColor: COLORS.lightPink,
    borderRadius: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "flex-start",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    backgroundColor: COLORS.purpleBg,
    borderRadius: 10,
    marginLeft: 10,
  },
  value: {
    flex: 1,
    marginLeft: 10,
    color: COLORS.white,
    fontSize: 18,
    fontFamily: "Open-Sans",
    letterSpacing: 0.5,
  },
});
