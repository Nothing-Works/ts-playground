// Literal type
const flipCoin = (): "Head" | "Tail" => (Math.random() < 0.5 ? "Head" : "Tail");

console.log(flipCoin());

// Enum
enum Suit {
  HEARTS,
  SPADES,
  DIAMONDS,
  CLUBS,
}

type Suit1 = "hearts" | "spades" | "diamonds" | "clubs";

// enum used to differentiate different types
// once the enum across your boundary then it's a problem.
const suitMeaning = (suit: Suit): string => {
  if (Suit.HEARTS === suit) return "HEARTS";
  if (Suit.SPADES === suit) return "SPADES";
  if (Suit.DIAMONDS === suit) return "DIAMONDS";
  if (Suit.CLUBS === suit) return "CLUBS";
  return suit;
};
