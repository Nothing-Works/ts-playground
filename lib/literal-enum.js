"use strict";
const flipCoin = () => (Math.random() < 0.5 ? "Head" : "Tail");
console.log(flipCoin());
var Suit;
(function (Suit) {
    Suit[Suit["HEARTS"] = 0] = "HEARTS";
    Suit[Suit["SPADES"] = 1] = "SPADES";
    Suit[Suit["DIAMONDS"] = 2] = "DIAMONDS";
    Suit[Suit["CLUBS"] = 3] = "CLUBS";
})(Suit || (Suit = {}));
const suitMeaning = (suit) => {
    if (Suit.HEARTS === suit)
        return "HEARTS";
    if (Suit.SPADES === suit)
        return "SPADES";
    if (Suit.DIAMONDS === suit)
        return "DIAMONDS";
    if (Suit.CLUBS === suit)
        return "CLUBS";
    return suit;
};
//# sourceMappingURL=literal-enum.js.map