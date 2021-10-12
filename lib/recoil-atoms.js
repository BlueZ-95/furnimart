import { atom, selector } from "recoil";

let _totalAmount = 0;

// Current User States
export const currentUserState = atom({
  key: "currentUserState",
  default: {},
});

export const userNameState = selector({
  key: "userNameState",
  get: ({ get }) => get(currentUserState)?.name,
});

// Current Cart States
export const currentCartState = atom({
  key: "currentCartState",
  default: [],
});

export const numberOfItemsInCart = selector({
  key: "numberOfItemsInCart",
  get: ({ get }) => get(currentCartState)?.length,
});

export const totalAmount = selector({
  key: "totalAmount",
  get: ({ get }) => {
    let total = 0;
    get(currentCartState)?.forEach((cartItem) => {
      total += cartItem.productPrice;
    });
    return total;
  },
});
