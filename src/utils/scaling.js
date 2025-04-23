// 
'use client';
// utils/scale.js
const guidelineBaseWidth = 1920;
const guidelineBaseHeight = 1080;

const getWindowSize = () => {
  // if (typeof window !== "undefined") {
  //   return {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   };
  // }
  return {
    width: guidelineBaseWidth, // fallback for SSR
    height: guidelineBaseHeight,
  };
};

const horizontalScale = (size) => {
  const { width } = getWindowSize();
  return (width / guidelineBaseWidth) * size;
};

const verticalScale = (size) => {
  const { height } = getWindowSize();
  return (height / guidelineBaseHeight) * size;
};

const moderateScale = (size, factor = 0.5) => {
  return size + (horizontalScale(size) - size) * factor;
};

const screenWidth = () => getWindowSize().width;
const screenHeight = () => getWindowSize().height;

export {
  horizontalScale,
  verticalScale,
  moderateScale,
  screenWidth,
  screenHeight,
};
