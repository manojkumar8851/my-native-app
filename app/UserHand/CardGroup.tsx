import React from "react";
import { StyleSheet, View } from "react-native";
import Card, { CardProps } from "./Card";

export type CardsProps = CardProps[];

interface CardGroupProps {
  cards: CardsProps;
}

const CardGroup: React.FC<CardGroupProps> = ({ cards }) => {
  return (
    <View style={styles.cardGroupContainer}>
      {cards.map((cardItem) => {
        return <View key={cardItem.id} style={styles.carWrapper}>
          <Card  {...cardItem} />
        </View>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  cardGroupContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Allow cards to wrap within the container
    justifyContent: "flex-start", // Align cards to the start of the container
    alignItems: "flex-start", // Align cards to the top of the container
    padding: 5,
    paddingLeft: 15,
    backgroundColor: "#f2f2f2",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },

  carWrapper: {
    marginLeft: -10
  }
});

export default CardGroup;