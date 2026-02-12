import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [deviceName, setDeviceName] = useState('');
const handleSignup = async() => {
    const payload={
        email,
        password,
        deviceName
    }
    console.log('Payload:', payload);

    navigation.navigate('Login')
  }
  return (
    <SafeAreaView className="flex-1 bg-gray-100 justify-center px-5">
      <View className="bg-white rounded-2xl p-6 shadow-md">

        <Text className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </Text>
        <Text className="text-center text-gray-500 mb-6">
          Register your device
        </Text>

        <TextInput
          placeholder="Email"
          className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
          onChangeText={setPassword}
        />

        <TextInput
          placeholder="Device Name (e.g. abc Phone)"
          className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
          onChangeText={setDeviceName}
        />

        <TouchableOpacity
          className="bg-black py-4 rounded-xl mb-4"
          onPress={handleSignup}

        >
          <Text className="text-white text-center font-semibold text-lg">
            Sign Up
          </Text>
        </TouchableOpacity>

        <Text
          className="text-center text-gray-500"
          onPress={() => navigation.goBack()}
        >
          Already have an account? <Text className="text-black font-semibold">Login</Text>
        </Text>

      </View>
    </SafeAreaView>
  );
}
