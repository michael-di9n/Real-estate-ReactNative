import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text className="text-3xl my-10">Welcome to restate</Text>
        <Link href="/sign-in">SIGNIN</Link>
        <Link href="/explore">EXPLORE</Link>
        <Link href="/profile">PRFILE</Link>
        <Link href="/properties/1">PROP1</Link>
    </View>
  );
}
