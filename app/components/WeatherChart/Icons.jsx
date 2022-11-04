import { View, Image } from 'react-native';
import Comfortaa from '../Comfortaa';

const Icons = () => {
  const data = [
    require('../../../assets/weather/sunny.png'),
    require('../../../assets/weather/sunny.png'),
    require('../../../assets/weather/sunny.png'),
    require('../../../assets/weather/sunny.png'),
  ];
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 24,
        paddingVertical: 18,
      }}
    >
      {data.map((icon, index) => {
        return (
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ height: 24, width: 24 }}
              key={index}
              source={icon}
            />
            <Comfortaa style={{ fontSize: 10 }}>17°</Comfortaa>
          </View>
        );
      })}
    </View>
  );
};

export default Icons;
