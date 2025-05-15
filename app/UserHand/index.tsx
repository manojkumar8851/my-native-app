import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CardGroup, { CardsProps } from "./CardGroup";

const cardsInHandData: CardsProps[] = [
  [
    { id: 1, cardId: "club-a" as const, title: "Card 1", description: "This is card 1", image: "https://via.placeholder.com/150" },
    { id: 2, cardId: "club-2" as const, title: "Card 2", description: "This is card 2", image: "https://via.placeholder.com/150" },
    { id: 3, cardId: "club-3" as const, title: "Card 3", description: "This is card 3", image: "https://via.placeholder.com/150" }
  ],
  [
    { id: 4, cardId: "diamond-a" as const, title: "Card 4", description: "This is card 4", image: "https://via.placeholder.com/150" },
    { id: 5, cardId: "diamond-2" as const, title: "Card 5", description: "This is card 5", image: "https://via.placeholder.com/150" },
    { id: 6, cardId: "diamond-3" as const, title: "Card 6", description: "This is card 6", image: "https://via.placeholder.com/150" }
  ],
  [
    { id: 7, cardId: "hart-a" as const, title: "Card 7", description: "This is card 7", image: "https://via.placeholder.com/150" },
    { id: 8, cardId: "hart-2" as const, title: "Card 8", description: "This is card 8", image: "https://via.placeholder.com/150" },
    { id: 9, cardId: "hart-3" as const, title: "Card 9", description: "This is card 9", image: "https://via.placeholder.com/150" }
  ],
  [
    { id: 10, cardId: "spade-a" as const, title: "Card 10", description: "This is card 10", image: "https://via.placeholder.com/150" },
    { id: 11, cardId: "spade-2" as const, title: "Card 11", description: "This is card 11", image: "https://via.placeholder.com/150" },
    { id: 12, cardId: "spade-3" as const, title: "Card 12", description: "This is card 12", image: "https://via.placeholder.com/150" },
  ]
];

const UserHand = () => {
  const [cardsInHand, setCardsInHandData] = useState(cardsInHandData);

  return (
    <View style={styles.cardGroupContainer}>
      {cardsInHand.map((cardGrp, i) => (
        <CardGroup cards={cardGrp} key={i} />
      ))}
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
    gap: 15,
  },
});

export default UserHand;