//@ts-nocheck
import { Dimensions, PixelRatio, ScaledSize } from 'react-native';

// Get the screen dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

/**
 * Convert width percentage to responsive pixel value.
 * @param widthPercent - Width percentage as a string or number.
 * @returns Responsive width in pixels.
 */
const convertWidthToPixel = (widthPercent: string | number): number => {
  const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

/**
 * Convert height percentage to responsive pixel value.
 * @param heightPercent - Height percentage as a string or number.
 * @returns Responsive height in pixels.
 */
const convertHeightToPixel = (heightPercent: string | number): number => {
  const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

/**
 * Get the current screen orientation.
 * @param screenWidth - Current screen width in pixels.
 * @param screenHeight - Current screen height in pixels.
 * @returns Current screen orientation ('portrait' or 'landscape').
 */
const getScreenOrientation = (screenWidth: number, screenHeight: number): 'portrait' | 'landscape' => {
  return screenWidth < screenHeight ? 'portrait' : 'landscape';
};

/**
 * Listen for screen orientation changes and invoke the callback with the new orientation.
 * @param callback - Callback function to be invoked when orientation changes.
 * @returns Function to remove the event listener.
 */
const addOrientationChangeListener = (callback: (orientation: 'portrait' | 'landscape') => void): (() => void) => {
  const updateOrientation = (newDimensions: ScaledSize): void => {
    const { width, height } = newDimensions;
    const orientation = getScreenOrientation(width, height);
    callback(orientation);
  };

  Dimensions.addEventListener('change', updateOrientation);

  return () => {
    Dimensions.removeEventListener('change', updateOrientation);
  };
};

/**
 * Calculate a responsive font size based on the device size.
 * @param baseFontSize - Base font size in pixels.
 * @returns Responsive font size in pixels.
 */
const calculateResponsiveFontSize = (baseFontSize: number): number => {
  const deviceFactor = Math.sqrt(screenWidth * screenWidth + screenHeight * screenHeight) / 1000;
  return PixelRatio.roundToNearestPixel(baseFontSize * deviceFactor);
};

/**
 * Calculate a responsive spacing value based on the device size.
 * @param baseSpacing - Base spacing value in pixels.
 * @returns Responsive spacing value in pixels.
 */
const calculateResponsiveSpacing = (baseSpacing: number): number => {
  const deviceFactor = Math.sqrt(screenWidth * screenWidth + screenHeight * screenHeight) / 1000;
  return PixelRatio.roundToNearestPixel(baseSpacing * deviceFactor);
};

export {
  convertWidthToPixel,
  convertHeightToPixel,
  addOrientationChangeListener,
  calculateResponsiveFontSize,
  calculateResponsiveSpacing
};
