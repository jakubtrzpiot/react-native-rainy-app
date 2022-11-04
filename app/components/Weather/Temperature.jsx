import Comfortaa from '../Comfortaa';
import { View } from 'react-native';

const Temperature = () => (
  <View style={{ flexDirection: 'row' }}>
    <Comfortaa style={{ fontSize: 84 }}>21</Comfortaa>
    <Comfortaa style={{ fontSize: 32, paddingTop: 20 }}>°</Comfortaa>
  </View>
);

export default Temperature;
