import { View } from 'react-native';
import Icon from './RainChance/Icon';
import Value from './RainChance/Value';
import Label from './RainChance/Label';

const RainChance = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Icon />
      <Value />
      <Label />
    </View>
  );
};

export default RainChance;
