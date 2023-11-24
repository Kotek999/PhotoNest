import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, TruncateProps as UserInfoProps } from "../../../types";
import { UserRow } from "../UserRow";
import { generateRows } from "../../../helpers/functions/generateRows";

export const UserInfo = (props: UserInfoProps): JSX => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {generateRows({ ...props }).map((row, i) => {
          return (
            <UserRow
              key={`rowsMap-${i}`}
              isTruncateLabel={row.isTruncateLabel}
              label={row.label}
              value={row.value}
              userData={row.specialFieldForTruncate?.userData}
              visibleLength={row.specialFieldForTruncate?.visibleLength}
              onPressTruncate={row.specialFieldForTruncate?.onPressTruncate}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignSelf: "flex-start",
  },
});
