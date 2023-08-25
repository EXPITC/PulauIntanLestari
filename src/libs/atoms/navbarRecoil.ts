import { atom } from "recoil";

type navbarState = boolean;

const defaultNavbarState: navbarState = false;

export const navbarState = atom<navbarState>({
  key: "navbarState",
  default: defaultNavbarState,
});
