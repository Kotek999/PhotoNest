import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useMemo, forwardRef } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { COLORS } from "../../../colors";
import { BottomModalRef, BottomModalProps } from "../../../types";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";

export const BottomModal = forwardRef<BottomModalRef, BottomModalProps>(
  (props, ref) => {
    const snapPoints = useMemo(() => [props.snapPointsValue], []);
    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        enableContentPanningGesture={props.enableContentPanningGesture}
        enablePanDownToClose
        enableDynamicSizing
        backgroundStyle={styles.modalBackground}
      >
        <BottomSheetView style={styles.modalViewContainer}>
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <View
                style={
                  props.isTitleExist
                    ? styles.optionalTitleWithIconContainer
                    : styles.optionalIconContainer
                }
              >
                {props.isTitleExist && (
                  <Text style={styles.optionalTitleValue}>{props.title}</Text>
                )}
                <TouchableOpacity
                  style={styles.icon}
                  onPress={props.onPressCloseModal}
                >
                  <Ionicons
                    name="close"
                    size={32}
                    color={COLORS.sunsetOrange}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {props.children}
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  modalBackground: {
    backgroundColor: COLORS.purpleBg,
  },
  modalViewContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.purpleBg,
  },
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    bottom: 0,
    left: 0,
    right: 0,
  },
  optionalTitleWithIconContainer: {
    marginLeft: 15,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  optionalIconContainer: {
    marginLeft: 15,
    marginRight: 10,
    justifyContent: "flex-end",
  },
  optionalTitleValue: {
    color: COLORS.white,
    fontSize: 22,
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
  },
  icon: {
    alignSelf: "flex-end",
    padding: 5,
  },
});
