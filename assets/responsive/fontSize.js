import { Dimensions, PixelRatio } from 'react-native';
//https://stackoverflow.com/questions/48001774/adjusts-font-size-to-fit-view-in-react-native-android
//we may have to try the above link for android, i tried for ios but it didnt work out
const { width, height } = Dimensions.get('window');
const baseWidth = 750;
const baseHeight = 1334;
export const scaleWidth = w => {
  return width / baseWidth * w;
};
export const scaleHeight = h => {
  return height / baseHeight * h;
};
