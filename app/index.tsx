import React, { useRef } from "react";
import { Animated, PanResponder, View } from "react-native";
import UserHand from "./UserHand";

export default function Index() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }, // Track x and y values
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 }, // Reset position after release
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <View>
      
      <View className="hr" />
      <UserHand />

    </View>
  );
}

// const styles = StyleSheet.create({
//   draggableCard: {
//     width: 100,
//     backgroundColor: "#ffcc00",
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     elevation: 5,
//   },
//   cardText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
// });