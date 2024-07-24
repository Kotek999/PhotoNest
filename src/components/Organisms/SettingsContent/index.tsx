import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, SettingsContentProps } from "../../../types";
import { ScrollViewContainer } from "../../../components/Atoms/ScrollViewContainer";
import { SignOutButton } from "../../../components/Atoms/SignOutButton";
import { Spinner } from "../../../components/Atoms/Spinner";
import { UserSettingsAvatarWithName } from "../../../components/Molecules/UserSettingsAvatarWithName";
import { ModalSettingsOptionRowContent } from "../../../components/Organisms/ModalSettingsOptionContent";

export const SettingsContent = (props: SettingsContentProps): JSX => {
  return (
    <ScrollViewContainer isDefaultOptions>
      {props.isContentLoaded ? (
        <View style={styles.mainContainer}>
          <UserSettingsAvatarWithName userData={props.userData} />
          <View style={styles.optionsContainer}>
            {props.settingsOptionsData.map((option, i) => {
              return (
                <View key={i}>
                  <ModalSettingsOptionRowContent
                    option={option}
                    setSelectedTitle={props.setSelectedTitle}
                    setSelectedOption={props.setSelectedOption}
                    userData={props.userData}
                    selectedTitle={props.selectedTitle}
                    selectedOption={props.selectedOption}
                  />
                </View>
              );
            })}
          </View>
          <View style={styles.buttonContainer}>
            <SignOutButton onPress={props.onPressSignOutAndExit} />
          </View>
        </View>
      ) : (
        <Spinner isDefaultOptions />
      )}
    </ScrollViewContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  buttonContainer: {
    margin: 30,
  },
});
