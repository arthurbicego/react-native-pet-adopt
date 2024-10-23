import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Link href={'/login'}>
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 40
          }}
        >
          Go to Login Screeeeeeen
        </Text>
      </Link>
    </View>
  );
}
