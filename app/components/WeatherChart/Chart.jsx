import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function Chart() {
  return (
    <Svg
      width={400}
      height={60}
      viewBox="0 0 360 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M-31 58.163c1.793-1.793 4.11-2.856 6.06-4.45 3.456-2.83 6.538-6.085 9.91-9.015 7.363-6.394 16.294-11.76 25.266-15.484 18.827-7.815 38.904-10.53 59.076-8.49 16.336 1.651 29.436 11.66 44.752 16.4 7.628 2.362 15.033 5.04 22.909 6.564 9.762 1.89 19.145.876 28.257-3.03 8.494-3.64 16.914-7.588 25.246-11.594 9.267-4.455 19.053-8.095 28.707-11.632C226.97 14.58 234.492 14.281 243 13.5c4.992-.458 9.5-.5 14.5-1C264 11.85 269 12 275 11c12.5-2.083 19.5-2.5 34-5.5 18-3 26.5-4 43-2 17.5 3 47.053 12.476 56 8.5"
        stroke="url(#paint0_linear_10_303)"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_10_303"
          x1={423.5}
          y1={-13.5}
          x2={-64}
          y2={41}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F0B92D" stopOpacity={0.8} />
          <Stop offset={1} stopColor="#44F7E1" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Chart;
