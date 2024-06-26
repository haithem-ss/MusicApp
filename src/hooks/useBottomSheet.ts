import { useContext } from "react";
import { BottomSheetContext } from "../Context/Player-context";

const useBottomSheet = () => {
    return useContext(BottomSheetContext);
};

export default useBottomSheet;