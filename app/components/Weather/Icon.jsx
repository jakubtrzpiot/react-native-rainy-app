import { Image, View } from 'react-native';

const Icon = () => {
  return (
    <View style={{ paddingTop: 40 }}>
      <Image
        style={{ height: 118, width: 160 }}
        source={require('../../../assets/weather/partly_cloudy.png')}
      />
    </View>
  );
};

export default Icon;
