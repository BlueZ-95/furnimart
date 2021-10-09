import { atom, selector } from "recoil";

export const currentUserState = atom({
  key: "currentUser",
  default: {},
});

export const currentUserName = selector({
  key: "userName",
  get: ({ get }) => get(currentUserState)?.name,
});
