import { View, StyleSheet } from 'react-native';
import ThemeToggle from './Header/ThemeToggle';
import Location from './Header/Location';
import MenuButton from './Header/MenuButton';

const Header = () => {
  return (
    <View style={styles.container}>
      <ThemeToggle />
      <Location />
      <MenuButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
});

export default Header;
