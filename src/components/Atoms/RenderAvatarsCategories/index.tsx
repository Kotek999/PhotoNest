import textData from "../../../../textData.json";
import React, { useMemo } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View, Button } from "react-native-ui-lib";
import { JSX, RenderAvatarsCategoriesProps } from "../../../types";
import { COLORS } from "../../../colors";
import { getColorForCategory } from "../../../helpers/functions/getColorForCategory";
import { categoriesData } from "../../Data/AvatarCategories";

export const RenderAvatarsCategories = (
  props: RenderAvatarsCategoriesProps
): JSX => {
  const categories: JSX = useMemo(() => {
    return (
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          {categoriesData.map((category, i) => (
            <Button
              key={i}
              label={category}
              labelStyle={[
                styles.buttonLabel,
                {
                  color: getColorForCategory(
                    props.activeCategory,
                    category,
                    COLORS.blackText,
                    COLORS.white
                  ),
                },
              ]}
              onPress={() => props.setActiveCategory(category)}
              style={[
                styles.button,
                {
                  backgroundColor: getColorForCategory(
                    props.activeCategory,
                    category,
                    COLORS.grayField,
                    COLORS.darkOpacity
                  ),
                },
              ]}
              activeBackgroundColor={COLORS.grayField}
            />
          ))}
        </View>
      </ScrollView>
    );
  }, [props.activeCategory]);
  return categories;
};

const styles = StyleSheet.create({
  scrollView: {
    marginRight: 10,
    flexGrow: 1,
    backgroundColor: COLORS.blank,
    alignSelf: "center",
  },
  container: {
    marginTop: 20,
    flexDirection: "row",
  },
  buttonLabel: {
    fontFamily: "Open-Sans",
    letterSpacing: 0.5,
    fontSize: 14,
    fontWeight: "700",
  },
  button: {
    height: 44,
    borderRadius: 15,
    marginLeft: 10,
  },
});
