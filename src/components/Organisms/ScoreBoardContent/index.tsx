import React from "react";
import { JSX, ScoreBoardContentProps } from "../../../types";
import { BackgroundHeader } from "../../../components/Molecules/BackgroundHeader";
import { ScrollViewContainerWithBoard } from "../../../components/Molecules/ScrollViewContainerWithBoard";

export const ScoreBoardContent = (props: ScoreBoardContentProps): JSX => {
  return (
    <>
      <BackgroundHeader
        userDataFirebase={props.userDataFirebase}
        isContentLoaded={props.isContentLoaded}
        onPressGoBack={props.onPressGoBack}
        onPressGoToProfile={props.onPressGoToProfile}
      />
      <ScrollViewContainerWithBoard
        allUsersData={props.allUsersData}
        isContentLoaded={props.isContentLoaded}
        isBoardDataLoaded={props.isBoardDataLoaded}
        insets={props.insets}
      />
    </>
  );
};
