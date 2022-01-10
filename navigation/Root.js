import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import Stacks from "./Stacks";

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{ presentation: "modal", headerShown: false }}>
    <Nav.Screen name="Tabs" component={Tabs} />
    <Nav.Screen name="Stacks" component={Stacks} />
  </Nav.Navigator>
);
export default Root;
