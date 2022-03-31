import React, { useState, useEffect } from 'react';

import useIncrementingNumber from './use-rainbow.hook.js';

const rainbowColors = [
  /* colors here */
  'hsl(1deg, 100%, 55%)', // red
  'hsl(25deg, 100%, 50%)', // orange
  'hsl(40deg, 100%, 50%)', // yellow
  'hsl(130deg, 100%, 40%)', // green
  'hsl(230deg, 100%, 45%)', // blue
  'hsl(240deg, 100%, 45%)', // indigo
  'hsl(260deg, 100%, 55%)', // violet

];
const paletteSize = rainbowColors.length;


const useRainbow = ({ intervalDelay = 2000 }) => {
  // Register all custom properties.
  // This only ever needs to be done once, so there are no dependencies.
  const { current: uniqueId } = React.useRef(generateId());
  
  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      try {
        CSS.registerProperty({
          name: `--magic-rainbow-color-${uniqueid}-${index}`,
          initialValue: rainbowColors[i],
          syntax: '<color>',
          inherits: false,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  // Get an ever-incrementing number from another custom hook*
  const intervalCount = useIncrementingNumber(intervalDelay);
  // Using that interval count, derive each current color value
 
  return {
    
    '--magic-rainbow-color-0': rainbowColors[(intervalCount + 1) % paletteSize],
    '--magic-rainbow-color-1': rainbowColors[(intervalCount + 2) % paletteSize],
    '--magic-rainbow-color-2': rainbowColors[(intervalCount + 3) % paletteSize],
  };
};
export default useRainbow;