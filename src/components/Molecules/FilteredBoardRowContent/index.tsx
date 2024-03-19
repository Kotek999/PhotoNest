import React from "react";
import { View } from "react-native-ui-lib";
import { JSX, FilteredBoardRowContentProps } from "../../../types";
import { ModalForZeroPointsUsers } from "../../Atoms/ModalForZeroPointsUsers";
import { UsersMoreThanZeroPoints } from "../../Atoms/UsersMoreThanZeroPoints";

export const FilteredBoardRowContent = (
  props: FilteredBoardRowContentProps
): JSX => {
  return (
    <>
      <UsersMoreThanZeroPoints
        usersWithMoreThanZeroPoints={props.usersWithMoreThanZeroPoints}
        usersWithZeroPoints={props.usersWithZeroPoints}
        isContentLoaded
      />
      {props.usersWithZeroPoints && props.usersWithZeroPoints.length > 0 && (
        <>
          {props.usersWithZeroPoints.map((user, key) => (
            <View key={key}>
              <ModalForZeroPointsUsers user={user} />
            </View>
          ))}
        </>
      )}
    </>
  );
};
