import { View } from 'react-native';

import Icons from './WeatherChart/Icons';
import Chart from './WeatherChart/Chart';
import Timeline from './WeatherChart/Timeline';

const WeatherChart = () => {
  return (
    <View style={{ paddingBottom: 80 }}>
      <Icons />
      <Chart />
      <Timeline />
    </View>
  );
};

export default WeatherChart;
