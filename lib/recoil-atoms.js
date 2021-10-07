import { atom, selector } from "recoil";

export const currentUserState = atom({
  key: "currentUser",
  default: {},
});

export const countState = atom({
  key: "count",
  default: 0,
});

export const incrementCount = selector({
  key: "incrementCount",
  set: ({ set }) => set(countState, (currCount) => currCount + 1),
});

export const decrementCount = selector({
  key: "decrementCount",
  set: ({ set }) => set(countState, (currCount) => currCount - 1),
});
