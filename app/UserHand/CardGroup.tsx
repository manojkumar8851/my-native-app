import React from "react";
import { StyleSheet, View } from "react-native";
import Card, { CardProps } from "./Card";

export type CardsProps = CardProps[];
export type dropDataProps = {
    dragCardGroupIndex: number;
    dargCardIndex: number;
    cardId: number;
    cardInfo: CardProps;
    dropPosition: { x: number; y: number };
  }

interface CardGroupProps {
  cards: CardsProps;
  onDragStart?: (cardId: number) => void;
  onDragMove?: (cardId: number, position: { x: number; y: number }) => void;
  onDrop?: (dropData: dropDataProps) => void;
  groupIndex: number
}

const CardGroup: React.FC<CardGroupProps> = ({ cards, onDragStart, onDragMove, onDrop, groupIndex }) => {
  return (
    <View style={styles.cardGroupContainer}>
      {cards.map((cardItem, cardIndex) => {
        return (
          <Card
            key={cardItem.id}
            {...cardItem}
            onDragStart={onDragStart}
            onDragMove={onDragMove}
            onDrop={(cardId, dropPosition) => {
              if (onDrop) {
                onDrop({
                  dragCardGroupIndex: groupIndex,
                  dargCardIndex: cardIndex,
                  cardId,
                  cardInfo: cardItem,
                  dropPosition,
                });
              }
            }}
            style={styles.carWrapper}
          />
        );
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