import { StyleSheet, View } from 'react-native';
import City from './Location/City';
import Country from './Location/Country';
import Icon from './Location/Icon';

const Location = () => {
  return (
    <View style={styles.container}>
      <City />
      <Country />
      <Icon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Location;
