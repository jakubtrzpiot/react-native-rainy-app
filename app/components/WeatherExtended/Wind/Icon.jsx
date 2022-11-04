import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Icon = () => {
  return (
    <Svg
      width={30}
      height={25}
      viewBox="0 0 30 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.177.99a.99.99 0 01.99-.99 4.488 4.488 0 014.483 4.492 4.488 4.488 0 01-4.483 4.493H7.918a.99.99 0 110-1.98h14.247a2.508 2.508 0 002.504-2.513 2.508 2.508 0 00-2.504-2.512.99.99 0 01-.99-.99zM0 12.41a.99.99 0 01.99-.99h19.492a.99.99 0 010 1.98H.99a.99.99 0 01-.99-.99zm22.69 0a.99.99 0 01.99-.99h4.264a.99.99 0 010 1.98H23.68a.99.99 0 01-.99-.99zM1.523 16.675a.99.99 0 01.99-.99h4.264a.99.99 0 110 1.98H2.513a.99.99 0 01-.99-.99zm7.614 0a.99.99 0 01.99-.99H25.52A4.486 4.486 0 0130 20.178a4.486 4.486 0 01-4.48 4.492.99.99 0 010-1.98c1.378 0 2.5-1.121 2.5-2.512a2.506 2.506 0 00-2.5-2.513H10.127a.99.99 0 01-.99-.99z"
        fill="url(#paint0_linear_10_326)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_10_326"
          x1={26.0835}
          y1={2.03528}
          x2={8.63285}
          y2={22.7386}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#D6E9FF" />
          <Stop offset={1} stopColor="#2898FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Icon;
