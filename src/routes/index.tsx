import { NavigationContainer } from "@react-navigation/native";

import { SignIn } from "../pages/SignIn";
import AppRoutes from './app.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}