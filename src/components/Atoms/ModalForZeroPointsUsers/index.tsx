import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { JSX, ModalForZeroPointsUsersProps } from "../../../types";
import { View, Text } from "react-native-ui-lib";
import { auth } from "../../../../FirebaseConfig";
import { BottomModal } from "../../Atoms/BottomModal";
import { COLORS } from "../../../colors";
import { useBottomModal } from "../../../helpers/functions/useBottomModal";

export const ModalForZeroPointsUsers = (
  props: ModalForZeroPointsUsersProps
): JSX => {
  const modal = useBottomModal();

  useEffect(() => {
    modal.onPressOpenModal(0);
  }, []);

  return (
    <View key={`zeroPoints_${props.index}`}>
      {props.user?.id === auth.currentUser?.uid && (
        <BottomModal
          ref={modal.bottomSheetModalRef}
          snapPointsValue="100%"
          onPressCloseModal={modal.onPressCloseModal}
        >
          <Text
            style={{
              ...styles.value,
              color: COLORS.white,
            }}
          >
            You haven't received any{" "}
            <Text
              style={{
                ...styles.value,
                fontWeight: "bold",
                color: COLORS.emerald,
              }}
            >
              colights{" "}
            </Text>
            yet. Pick up them and climb to the top of the table!
          </Text>
        </BottomModal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  value: {
    padding: 20,
    textAlign: "center",
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
    fontSize: 22,
  },
});
