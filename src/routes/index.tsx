import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { SignIn } from "../pages/SignIn";
import AppRoutes from './app.routes';
import { Loading } from "../components/Loading";

export default function Routes() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User>();

  useEffect(() => {
    const subscriber = auth()
      .onAuthStateChanged(res => {
        setUser(res);
        setLoading(false);
      })

    return subscriber;
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}