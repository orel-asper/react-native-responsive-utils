# React Native Responsive Utils

React Native Responsive Utils is a library that provides utility functions for handling responsive dimensions in React Native applications.

## Installation

To install the library, use the package manager `npm` or `yarn`. You need to have React Native installed in your project.

```bash
npm install react-native-responsive-utils
```

or

```bash
yarn add react-native-responsive-utils
```

## Usage

Import the utility functions from the library:

```javascript
import {
  convertWidthToPixel,
  convertHeightToPixel,
  addOrientationChangeListener,
  calculateResponsiveFontSize,
  calculateResponsiveSpacing
} from 'react-native-responsive-utils';
```

### Converting Percentage to Pixels

You can convert width and height percentages to responsive pixel values using the `convertWidthToPixel` and `convertHeightToPixel` functions:

```javascript
const widthInPixels = convertWidthToPixel('50%'); // Converts 50% of the screen width to pixels
const heightInPixels = convertHeightToPixel(25); // Converts 25% of the screen height to pixels
```

### Getting Screen Orientation

You can get the current screen orientation using the `addOrientationChangeListener` function, which registers a callback to be invoked when the orientation changes:

```javascript
const removeListener = addOrientationChangeListener((orientation) => {
  console.log('Screen orientation:', orientation);
});

// To remove the event listener later
removeListener();
```

### Calculating Responsive Font Size and Spacing

You can calculate responsive font sizes and spacing values based on the device size using the `calculateResponsiveFontSize` and `calculateResponsiveSpacing` functions:

```javascript
const responsiveFontSize = calculateResponsiveFontSize(16); // Calculates responsive font size based on the device size
const responsiveSpacing = calculateResponsiveSpacing(10); // Calculates responsive spacing value based on the device size
```

## Examples

### Example 1: Responsive Layout

```javascript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  convertWidthToPixel,
  convertHeightToPixel,
  addOrientationChangeListener
} from 'react-native-responsive-utils';

const App = () => {
  const screenWidth = convertWidthToPixel('100%');
  const screenHeight = convertHeightToPixel('100%');

  const styles = StyleSheet.create({
    container: {
      width: screenWidth,
      height: screenHeight,
      backgroundColor: 'lightblue',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  addOrientationChangeListener((orientation) => {
    console.log('New orientation:', orientation);
  });

  return <View style={styles.container}>{/* Your content here */}</View>;
};

export default App;
```

In this example, the `convertWidthToPixel` and `convertHeightToPixel` functions are used to set the dimensions of a container view to occupy the entire screen, regardless of the device size or orientation. The `addOrientationChangeListener` function is used to listen for orientation changes and log the new orientation.

### Example 2: Responsive Font Size

```javascript
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { calculateResponsiveFontSize } from 'react-native-responsive-utils';

const App = () => {
  const baseFontSize = 20;
  const responsiveFontSize = calculateResponsiveFontSize(baseFontSize);

  const styles = StyleSheet.create({
    text: {
      fontSize: responsiveFontSize,
      fontWeight: 'bold',
      color: 'black',
    },
  });

  return <Text style={styles.text}>Responsive Text</Text>;
};

export default App;
```

In this example, the `calculateResponsiveFontSize` function

 is used to calculate a responsive font size based on the device size. The `responsiveFontSize` value is then used in the `Text` component's style to display a responsive text.

These examples demonstrate how the library can be used to create responsive layouts and text sizes in your React Native applications. Feel free to explore the various functions provided by the library and customize them according to your specific needs.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests for any improvements or fixes.

## License

This library is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).