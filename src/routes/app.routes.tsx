import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='new' component={Register} />
      <Screen name='details' component={Details} />
    </Navigator>
  );
}
