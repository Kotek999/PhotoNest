import React from "react";
import { View } from "react-native-ui-lib";
import { JSX, ModalSettingsOptionRowContentProps } from "../../../types";
import { useBottomModal } from "../../../helpers/functions/useBottomModal";
import { BottomModal } from "../../../components/Atoms/BottomModal";
import { UserInfo } from "../../../components/Atoms/UserInfo";
import { useVisible } from "../../../hooks/visible/useVisible";
import { OptionRow } from "../../Atoms/OptionRow";
import { OptionContent } from "../../Molecules/OptionContent";
import { AboutTheApp } from "../../Atoms/AboutTheApp";

export const ModalSettingsOptionRowContent = (
  props: ModalSettingsOptionRowContentProps
): JSX => {
  const optionModal = useBottomModal();
  const openOptionModal = () => optionModal.onPressOpenModal(0);

  const { visibleLength, setVisibleLength } = useVisible();
  const onPressTruncate = () => {
    setVisibleLength(props.userData?.id && props.userData?.id.length);
  };

  return (
    <>
      <OptionRow
        option={props.option}
        setSelectedTitle={props.setSelectedTitle}
        setSelectedOption={props.setSelectedOption}
        openOptionModal={openOptionModal}
      />
      <BottomModal
        ref={optionModal.bottomSheetModalRef}
        snapPointsValue="100%"
        enableContentPanningGesture={false}
        onPressCloseModal={optionModal.onPressCloseModal}
        isTitleExist
        title={props.selectedTitle}
      >
        {props.selectedTitle === "User Information" ? (
          <View style={{ alignSelf: "center" }}>
            <UserInfo
              userData={props.userData}
              onPressTruncate={onPressTruncate}
              visibleLength={visibleLength}
            />
          </View>
        ) : props.selectedTitle === "Regulations" ? (
          <OptionContent
            selectedOption={props.selectedOption}
            isRegulationsOption={true}
            moreThanValue={4}
          />
        ) : props.selectedTitle === "Privacy Policy" ? (
          <OptionContent
            selectedOption={props.selectedOption}
            isRegulationsOption={false}
            moreThanValue={2}
          />
        ) : (
          props.selectedTitle === "About the app" && <AboutTheApp />
        )}
      </BottomModal>
    </>
  );
};
