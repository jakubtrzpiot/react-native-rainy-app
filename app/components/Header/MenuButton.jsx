import Svg, { Circle } from 'react-native-svg';

const MenuButton = () => {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={21} cy={12} r={3} fill="#89D2DC" />
      <Circle cx={12} cy={12} r={3} fill="#fff" />
      <Circle cx={3} cy={12} r={3} fill="#fff" />
    </Svg>
  );
};

export default MenuButton;
