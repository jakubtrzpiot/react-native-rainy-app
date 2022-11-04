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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 56,
    paddingVertical: 28,
  },
});

export default WeatherExtended;
