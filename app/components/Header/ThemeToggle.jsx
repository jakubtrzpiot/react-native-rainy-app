import Svg, { Rect, Path } from 'react-native-svg';

const ThemeToggle = () => {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x={0.5}
        y={0.5}
        width={23}
        height={23}
        rx={7.5}
        fill="#89D2DC"
        stroke="#89D2DC"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.698 7.193a.563.563 0 01.59-.13A5.252 5.252 0 0111.5 17.25a5.252 5.252 0 01-4.938-3.462.562.562 0 01.72-.72 4.125 4.125 0 005.285-5.284.563.563 0 01.131-.59zm1.213 1.459a5.25 5.25 0 01-5.758 5.758 4.125 4.125 0 105.758-5.758z"
        fill="#fff"
      />
    </Svg>
  );
};

export default ThemeToggle;
