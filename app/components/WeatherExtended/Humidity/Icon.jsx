import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Icon = () => {
  return (
    <Svg
      width={14}
      height={20}
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.712 0c-5.065 6.667-12.156 20 0 20 12.157 0 5.066-13.333 0-20z"
        fill="url(#paint0_linear_10_323)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_10_323"
          x1={-1.53507e-7}
          y1={-0.410959}
          x2={11.5068}
          y2={19.589}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#92BDFF" />
          <Stop offset={1} stopColor="#3981EE" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Icon;
