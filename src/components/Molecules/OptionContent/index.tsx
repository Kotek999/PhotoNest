import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native-ui-lib";
import { OptionContentProps, JSX } from "../../../types";
import { COLORS } from "../../../colors";
import { ScrollViewContainer } from "../../../components/Atoms/ScrollViewContainer";
import { screenWidth } from "../../../helpers/dimensions";
import { contentChecker } from "../../../helpers/functions/contentChecker";
import { SubSectionNumber } from "../../Atoms/SubSectionNumber";

export const OptionContent = (props: OptionContentProps): JSX => {
  return (
    <View style={styles.mainContainer}>
      <ScrollViewContainer isDefaultOptions>
        <>
          {props.selectedOption.map((contentItem, i) => {
            const condition = props.isRegulationsOption
              ? contentItem.isAllSubSectionsExist
              : contentItem.isAllSubSectionsExist ||
                contentItem.subSections.second === "";
            return (
              <View key={i}>
                <Text style={styles.itemTitleValue}>
                  {`${contentItem.id}. ${contentItem.subTitle}`}
                </Text>
                <View style={styles.imageContainer}>
                  <Image
                    source={contentItem.image}
                    style={styles.image}
                    resizeMode="cover"
                    resizeMethod="scale"
                    alt="photo"
                  />
                </View>
                <>
                  {props.selectedOption.map((item, i) => (
                    <View key={i} style={styles.contentContainer}>
                      {condition ? (
                        <SubSectionNumber
                          isDefault={false}
                          item={item}
                          contentItem={contentItem}
                          moreThanValue={props.moreThanValue}
                        />
                      ) : (
                        <SubSectionNumber
                          isDefault={true}
                          item={item}
                          contentItem={contentItem}
                          moreThanValue={props.moreThanValue}
                        />
                      )}
                      <Text style={styles.itemContentValue}>
                        <>{contentChecker(item.id, contentItem)}</>
                      </Text>
                    </View>
                  ))}
                </>
              </View>
            );
          })}
        </>
      </ScrollViewContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 100,
    marginLeft: 15,
    alignItems: "flex-start",
    alignSelf: "flex-start",
  },
  itemTitleValue: {
    textAlign: "center",
    color: COLORS.emerald,
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: 10,
    marginTop: 10,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    margin: 20,
    width: 80,
    height: 80,
  },
  contentContainer: {
    flexDirection: "row",
    marginLeft: 5,
  },
  itemContentValue: {
    marginBottom: 10,
    width: screenWidth / 1.25,
    color: COLORS.lightGrayBg,
    marginLeft: 10,
    fontSize: 15,
    fontFamily: "Open-Sans",
    letterSpacing: 0.5,
  },
});
