import React from "react";
import { BoardRowProps, JSX } from "../../../types";
import { useFocusEffect } from "@react-navigation/native";
import { backHandlerCall } from "../../../helpers/functions/backHandlerCall";
import { BoardRow } from "../../Molecules/BoardRow";

export const BoardRowContent = (props: BoardRowProps): JSX => {
  useFocusEffect(backHandlerCall());
  return <BoardRow data={props.data} isContentLoaded={props.isContentLoaded} />;
};
