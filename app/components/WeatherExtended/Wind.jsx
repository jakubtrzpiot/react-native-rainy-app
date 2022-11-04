import { View } from 'react-native';
import Icon from './Wind/Icon';
import Value from './Wind/Value';
import Label from './Wind/Label';

const Wind = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Icon />
      <Value />
      <Label />
    </View>
  );
};

export default Wind;
