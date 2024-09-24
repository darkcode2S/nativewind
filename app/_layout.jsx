import { Link } from "expo-router";
import { Stack } from "expo-router";
import { Text } from "react-native";
import LoginScreen from "@/components/LoginScreen";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
