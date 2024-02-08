import { useRef, useCallback } from "react";
import { BottomModalRef } from "../../types";
import { useCallbackFunction } from "../../helpers/functions/useCallbackFunction";

export const useBottomModal = () => {
  const bottomSheetModalRef = useRef<BottomModalRef>(null);

  const onPressOpenModal = useCallbackFunction(
    (index: (value: number) => void) => {
      bottomSheetModalRef.current?.present(index);
    }
  );
  const onPressCloseModal = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return { bottomSheetModalRef, onPressOpenModal, onPressCloseModal };
};
