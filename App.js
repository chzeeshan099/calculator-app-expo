import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import "./global.css";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-black">
        <View className="flex-1 items-center justify-center bg-black">
          <Text className="text-4xl font-bold text-white">
            Welcome to Nativewind!
          </Text>
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
