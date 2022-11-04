import { View } from 'react-native';
import Comfortaa from '../Comfortaa';

const Today = () => {
  const date = new Date();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <View>
      <Comfortaa style={{ color: '#89D2DC', fontSize: 14 }}>
        {days[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}
      </Comfortaa>
    </View>
  );
};

export default Today;
