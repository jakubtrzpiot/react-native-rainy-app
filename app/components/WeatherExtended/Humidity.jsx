import { View } from 'react-native';
import Icon from './Humidity/Icon';
import Value from './Humidity/Value';
import Label from './Humidity/Label';

const Humidity = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Icon />
      <Value />
      <Label />
    </View>
  );
};

export default Humidity;
