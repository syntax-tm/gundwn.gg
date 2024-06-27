import build from "@/services/menuBuilder";
import { XmbMenu, XmbCategory, XmbItem } from "@/models/menu";

export interface IState {
  menu: XmbMenu;
  categories: XmbCategory[];
  isMobile: boolean;
}

const xmbMenu = build();

export const initialState: IState = {
  menu: xmbMenu,
  categories: xmbMenu.items,
  isMobile: false
};
