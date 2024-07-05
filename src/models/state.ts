import build from "@/services/menuBuilder";
import { Views, eventType } from '@/app/enums';
import { XmbMenu, XmbCategory, XmbItem } from "@/models/menu";

export interface IAction {
  type: eventType;
  payload?: unknown;
}

export interface IState {
  menu: XmbMenu;
  categories: XmbCategory[];
  isMobile: boolean;
  x: Number;
  y: Number;
  currentCategory: XmbCategory;
  currentMenuItem: XmbItem;
}

const xmbMenu = build();

export const initialState: IState = {
  menu: xmbMenu,
  categories: xmbMenu.items,
  isMobile: false,
  x: 0,
  y: 0,
  currentCategory: xmbMenu.getCurrentCategory(),
  currentMenuItem: xmbMenu.getCurrentCategory().getCurrentItem(),
};
