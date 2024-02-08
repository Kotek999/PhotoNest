import textData from "../../../../textData.json";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text, Image } from "react-native-ui-lib";
import { JSX, ColightButtonProps } from "../../../types";
import { COLORS } from "../../../colors";
import { Spinner } from "../../../components/Atoms/Spinner";
import { colightImg } from "../../../helpers/imageRequirements";

export const ColightButton = (props: ColightButtonProps): JSX => {
  return (
    <>
      {props.isPathsLoaded ? (
        <View style={styles.mainContainer}>
          {props.user.uid === props.user.currentUid ? (
            <Text style={{ ...styles.mainValue, marginTop: 40 }}>
              {textData.value.colight.content.yourPicture}
            </Text>
          ) : (
            <>
              {props.isColightExist && props.isLiked ? (
                <Text style={{ ...styles.mainValue, marginTop: 40 }}>
                  {textData.value.colight.content.colightExist}{" "}
                  <Text style={{ ...styles.mainValue, fontWeight: "bold" }}>
                    {props.user.forPhotoData.forPhoto.nickname as string}
                  </Text>{" "}
                  {textData.value.colight.content.photo}
                </Text>
              ) : (
                <>
                  {props.isColightExist ? (
                    <View style={styles.buttonContainer}>
                      <Text
                        style={{
                          ...styles.mainValue,
                          marginBottom: 20,
                        }}
                      >
                        {textData.value.colight.content.likePhoto}
                      </Text>
                      <TouchableOpacity
                        style={styles.container}
                        onPress={props.onPressSetColight}
                        activeOpacity={0.7}
                      >
                        {!props.isLiked ? (
                          <Image
                            source={colightImg}
                            style={styles.img}
                            resizeMode="cover"
                            resizeMethod="scale"
                            alt="photo"
                          />
                        ) : null}
                        <Text
                          style={{
                            ...styles.mainValue,
                            padding: 8,
                          }}
                        >
                          {textData.value.colight.content.leaveColight}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <Text style={styles.mainValue}>
                      {textData.value.colight.content.colightLeftNow}
                    </Text>
                  )}
                </>
              )}
            </>
          )}
        </View>
      ) : (
        <Spinner isFlex />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  mainValue: {
    color: COLORS.grayField,
    fontFamily: "Open-Sans",
    fontSize: 14,
    letterSpacing: 0.5,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.darkOpacity,
    top: 0,
    right: 0,
    padding: 14,
    borderRadius: 80,
  },
  img: {
    width: 35,
    height: 35,
    alignSelf: "center",
  },
});
