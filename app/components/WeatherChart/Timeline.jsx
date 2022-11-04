import Comfortaa from '../Comfortaa';
import { View } from 'react-native';

const Timeline = () => {
  const hour = new Date().getHours();
  const data = [hour, hour + 1, hour + 2, hour + 3];
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 24,
        paddingVertical: 12,
      }}
    >
      {data.map((item, index) => (
        <Comfortaa
          key={index}
          style={{ fontSize: 12, color: item == hour ? '#fff' : '#89D2DC' }}
        >
          {item == hour ? 'Now' : item + ':00'}
        </Comfortaa>
      ))}
    </View>
  );
};

export default Timeline;
