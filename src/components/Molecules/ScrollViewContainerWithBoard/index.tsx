import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, ScrollViewContainerWithBoardProps } from "../../../types";
import { screenHeight, screenWidth } from "../../../helpers/dimensions";
import { Spinner } from "../../../components/Atoms/Spinner";
import { BoardWithUsers } from "../../../components/Molecules/BoardWithUsers";
import { ScrollViewContainer } from "../../Atoms/ScrollViewContainer";

export const ScrollViewContainerWithBoard = (
  props: ScrollViewContainerWithBoardProps
): JSX => {
  return (
    <>
      {props.isContentLoaded ? (
        <View style={styles.container}>
          <ScrollViewContainer
            isDefaultOptions={false}
            style={{
              ...styles.scrollView,
              marginBottom: props.insets.bottom + screenHeight / 2.3,
            }}
            contentContainerStyle={{
              ...styles.contentContainer,
              paddingBottom: props.insets.bottom,
            }}
          >
            {props.isBoardDataLoaded ? (
              <BoardWithUsers
                isContentLoaded={props.isContentLoaded}
                allUsersData={props.allUsersData}
              />
            ) : (
              <Spinner isDefaultOptions={false} style={styles.spinner} />
            )}
          </ScrollViewContainer>
        </View>
      ) : (
        <Spinner isDefaultOptions />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  scrollView: {
    bottom: 0,
    marginTop: 20,
  },
  contentContainer: {
    width: screenWidth,
  },
  spinner: {
    height: screenHeight / 1.4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
