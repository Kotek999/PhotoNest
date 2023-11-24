import { TruncateProps, TruncateUserData } from "../../types";

export const generateRows = (props: TruncateProps) => {
  const TRUNCATE_USER_DATA: TruncateUserData = [
    {
      isTruncateLabel: false,
      label: "Name:",
      value: props.userData?.nickname,
    },
    {
      isTruncateLabel: false,
      label: "Email:",
      value: props.userData?.email,
    },
    {
      isTruncateLabel: true,
      label: "Id:",
      value: props.userData?.id,
      specialFieldForTruncate: {
        userData: props.userData,
        visibleLength: props.visibleLength,
        onPressTruncate: props.onPressTruncate,
      },
    },
    {
      isTruncateLabel: false,
      label: "Role:",
      value: props.userData?.role,
    },
  ];
  return TRUNCATE_USER_DATA;
};
