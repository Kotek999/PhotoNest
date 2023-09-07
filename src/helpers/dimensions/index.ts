import { Dimensions } from "react-native";
import { DimensionT } from "../../types";

const nameOfDimension: DimensionT = "window";

const screenWidth = Dimensions.get(nameOfDimension).width;
const screenHeight = Dimensions.get(nameOfDimension).height;

export { screenWidth, screenHeight };
