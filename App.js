import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CalculatorScreen from "./src/screens/CalculatorScreen";
import { HistoryProvider } from "./src/context/HistoryContext";
import "./global.css";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <HistoryProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <SafeAreaView className="flex-1 bg-black">
            <StatusBar style="light" />
            <Stack.Navigator
              initialRouteName="Calculator"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Calculator" component={CalculatorScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </HistoryProvider>
  );
}
