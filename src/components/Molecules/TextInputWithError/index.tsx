import React from "react";
import { TextInput } from "../../../components/Atoms/TextInput";
import { COLORS } from "../../../colors";
import { Error } from "../../../components/Atoms/Error";
import { JSX, Selector, TextInputWithErrorProps } from "../../../types";
import { useAuthState } from "../../../helpers/functions/useAuthState";
import { checkerErrorsMap } from "../../Data/Maps";

export const TextInputWithError = (props: TextInputWithErrorProps): JSX => {
  const authError = useAuthState(props.authState as Selector, "error");
  const errorMessage = checkerErrorsMap[authError as string];

  return (
    <>
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        borderColor={
          props.firstErrorValue ||
          props.secondErrorValue ||
          props.thirdErrorValue ||
          props.fourthErrorValue
            ? COLORS.redError
            : COLORS.blank
        }
        secureTextEntry={props.secureTextEntry}
      />
      {errorMessage && (
        <Error
          firstError={props.firstErrorValue}
          secondError={props.secondErrorValue}
          thirdError={props.thirdErrorValue}
          fourthError={props.fourthErrorValue}
        />
      )}
    </>
  );
};