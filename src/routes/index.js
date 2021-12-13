import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login"

const AppStack = createStackNavigator();

export const Routes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerTransparent: true, headerShown: false }}>
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
};