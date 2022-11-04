import { View, StyleSheet } from 'react-native';
import Wind from './WeatherExtended/Wind';
import Humidity from './WeatherExtended/Humidity';
import RainChance from './WeatherExtended/RainChance';

const WeatherExtended = () => {
  return (
    <View style={styles.container}>
      <Wind />
      <Humidity />
      <RainChance />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    alignItems: 'center',
    paddingBottom: 60,
  },
});

export default WeatherExtended;
