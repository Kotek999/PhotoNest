import React from "react";
import { StyleSheet } from "react-native";
import { View, Dash } from "react-native-ui-lib";
import { JSX, AddedPhotoProps } from "../../../types";
import { COLORS } from "../../../colors";
import { screenWidth } from "../../../helpers/dimensions";
import { PhotoMessage } from "../../../components/Atoms/PhotoMessage";
import { Photo } from "../../../components/Atoms/Photo";

export const AddedPhoto = (props: AddedPhotoProps): JSX => {
  return (
    <View>
      {props.uri ? (
        <View style={styles.container}>
          <PhotoMessage title="You added photo right now" />
          <Photo uri={props.uri} />
        </View>
      ) : (
        <PhotoMessage title="You haven't added any photos today" />
      )}
      <Dash
        vertical
        length={5}
        color={COLORS.lightGrayBg}
        thickness={screenWidth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,
    paddingBottom: 60,
  },
});
