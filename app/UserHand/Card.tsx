import React from "react";
import { Image, StyleSheet, View } from "react-native";

export interface CardProps {
  id: number;
  cardId: "hart-a" | "hart-2" | "hart-3" | "diamond-a" | "diamond-2" | "diamond-3" | "club-a" | "club-2" | "club-3" | "spade-a" | "spade-2" | "spade-3"; // Add more card IDs as needed
  title: string;
  image: string;
  description: string;
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

const Card: React.FC<CardProps> = ({ cardId }) => {
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