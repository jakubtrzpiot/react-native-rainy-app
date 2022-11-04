import { View } from 'react-native';

import Header from './Weather/Header';
import Today from './Weather/Today';
import Icon from './Weather/Icon';
import Temperature from './Weather/Temperature';

const Weather = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Header />
      <Today />
      <Icon />
      <Temperature />
    </View>
  );
};

export default Weather;
