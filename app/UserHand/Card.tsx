import React, { useRef } from "react";
import { Animated, Image, PanResponder, StyleSheet, View } from "react-native";

export interface CardProps {
  id: number;
  cardId: "hart-a" | "hart-2" | "hart-3" | "diamond-a" | "diamond-2" | "diamond-3" | "club-a" | "club-2" | "club-3" | "spade-a" | "spade-2" | "spade-3"; // Add more card IDs as needed
  title: string;
  image: string;
  description: string;
  style?: object; // Optional style prop
}

const allCardDetails = {
  "hart-a": {
    x: 38 * 1,
    y: 0,
  },
  "hart-2": {
    x: 38 * 2,
    y: 0,
  },
  "hart-3": {
    x: 38 * 3,
    y: 0,
  },
  "diamond-a": {
    x: 38 * 1,
    y: 52,
  },
  "diamond-2": {
    x: 38 * 2,
    y: 52, 
  },
  "diamond-3": {
    x: 38 * 3,
    y: 52,
  },
  "club-a": {
    x: 38 * 1,
    y: 52 * 2,
  },
  "club-2": {
    x: 38 * 2,
    y: 52 * 2,
  },
  "club-3": {
    x: 38 * 3,
    y: 52 * 2,
  },
  "spade-a": {
    x: 38 * 1,
    y: 52 * 3,
  },
  "spade-2": {
    x: 38 * 2,
    y: 52 * 3,
  },
  "spade-3": {
    x: 38 * 3,
    y: 52 * 3,
  },
};

const CardView: React.FC<CardProps> = ({ cardId }) => {
  const cardPosition = allCardDetails[cardId];

  return (
    <View style={styles.cardContainer}>
      <Image
        source={require("../../assets/images/poker-cards-collection-8-bit-sprite.png")}
        style={{
          width: 530, // Total width of the sprite image
          height: 200, // Total height of the sprite image
          position: "absolute",
          left: -cardPosition.x,
          top: -cardPosition.y,
        }}
      />
    </View>
  );
};


const Card: React.FC<CardProps & {
  onDragStart?: (cardId: number) => void;
  onDragMove?: (cardId: number, position: { x: number; y: number }) => void;
  onDrop?: (cardId: number, dropPosition: { x: number; y: number }) => void;
}> = ({ onDragStart, onDragMove, onDrop, ...props }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        if (onDragStart) {
          onDragStart(props.id);
        }
      },
      onPanResponderMove: (event, gestureState) => {
        pan.setValue({ x: gestureState.dx, y: gestureState.dy });
        if (onDragMove) {
          onDragMove(props.id, { x: gestureState.moveX, y: gestureState.moveY });
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        if (onDrop) {
          onDrop(props.id, { x: gestureState.moveX, y: gestureState.moveY });
        }
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <Animated.View
      style={[props.style, { transform: [{ translateX: pan.x }, { translateY: pan.y }] }]} // Apply style prop here
      {...panResponder.panHandlers}
    >
      <CardView {...props} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 32, // Width of a single card
    height: 45, // Height of a single card
    overflow: "hidden",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
});

export default Card;