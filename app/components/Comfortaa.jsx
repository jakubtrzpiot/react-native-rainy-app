import { Text } from 'react-native';
import { useFonts } from 'expo-font';

const Comfortaa = ({ style, children }) => {
  const [fontsLoaded] = useFonts({
    Comfortaa: require('../../assets/fonts/Comfortaa-Bold.ttf'),
  });
  return (
    <Text style={{ fontFamily: 'Comfortaa', fontSize: 18, ...style }}>
      {children}
    </Text>
  );
};

export default Comfortaa;
