import { ReactElement } from "react";

export interface IXmbMenu {
  items: IXmbCategory[];
  readonly [index: number]: IXmbCategory;
}

export interface IXmbCategory {
  title: string;
  icon: ReactElement | null;
  items: IXmbItem[];
  readonly [index: number]: IXmbItem;
  [name: string]: any;
}

export interface IXmbItem {
  id: string;
  title: string;
  link: string | null;
  type: string;
  icon: ReactElement | null;
  description: string | null;
  shortDescription?: string;
  category?: string;
  shortCategory?: string;
  modal: string | null;
}

export class XmbItem implements IXmbItem {
  id: string;
  title: string;
  link: string | null = '';
  type: string = '';
  icon: ReactElement | null;
  description: string | null = '';
  shortDescription?: string = '';
  category?: string = '';
  shortCategory?: string = '';
  isActive: boolean = false;
  visible: boolean = true;
  modal: string | null = '';
  onClick: null | (() => void) = null;

  constructor(id: string = '', title: string = '', icon: ReactElement | null = null, link: string | null = null, description: string | null = null) {
    this.id = id;
    this.title = title;
    this.icon = icon;
    this.link = link;
    this.description = description;
  }

  static create(id: string = '', title: string = '', icon: ReactElement | null, onClick: null | (() => void)): XmbItem
  {
      let item = new XmbItem(id, title, icon);
      item.onClick = onClick;
      return item;
  }

  static createModal(id: string = '', title: string = '', icon: ReactElement | null, modal: string | null): XmbItem
  {
      let item = new XmbItem(id, title, icon);
      item.modal = modal;
      return item;
  }

  setActive() {
    this.isActive = true;
  }

  setInactive() {
    this.isActive = false;
  }
}

export class XmbCategory implements IXmbCategory {
  index: number;
  title: string;
  icon: ReactElement | null;
  items: XmbItem[];
  current: XmbItem | null = null;
  isActive: boolean = false;
  position: number = 0;
  readonly [index: number]: IXmbItem;

  constructor(index: number, title: string, icon: ReactElement | null, items: XmbItem[]) {
    this.index = index;
    this.title = title;
    this.icon = icon;
    this.items = items;
  }

  getCurrentItem(): XmbItem {
    return this.items[this.position];
  }

  setActive() {
    this.isActive = true;
  }

  setInactive() {
    this.isActive = false;
  }

  setPosition(i: number) {
    if (this.position === i) return;

    let previous = this.items[this.position];
    previous.setInactive();
    let next = this.items[i];
    next.setActive();
    this.current = next;
    this.position = i;
  }

  moveUp(): number | null {
    let next = this.position - 1;

    if (next < 0) return null;

    this.setPosition(next);

    return this.position;
  }

  moveDown(): number | null {
    let max = this.items.length - 1;
    let next = this.position + 1;

    if (next > max) return null;

    this.setPosition(next);

    return this.position;
  }
}

export type Position = {
  x: number;
  y: number;
}

export class XmbMenu implements IXmbMenu {
  [index: number]: XmbCategory;
  items: XmbCategory[];
  private _position: Position = { x: 0, y: 0 };

  public get x(): number {
    return this._position.x;
  }

  public set x(value: number) {
    this._position.x = value;
  }

  public get y(): number {
    return this._position.y;
  }

  public set y(value: number) {
    this._position.y = value;
  }

  public get position(): Position {
    return this._position;
  }

  constructor(items: XmbCategory[]) {
    this.items = items;
  }

  getCurrentCategory(): XmbCategory {
    return this.items[this.position.x];
  }

  getCurrentItem(): XmbItem {
    return this.items[this.position.x].getCurrentItem();
  }

  getCurrentPosition(): Position {
    return this.position;
  }

  setX(x: number): Position {
    if (x < 0) throw new RangeError("Argument value cannot be negative");

    this._position.x = x;

    return this._position;
  }

  setY(y: number): Position {
    if (y < 0) throw new RangeError("Argument value cannot be negative");

    this._position.y = y;

    return this._position;
  }

  setPosition(x: number, y: number): Position {
    if (x < 0) throw new RangeError("Argument value cannot be negative");
    if (y < 0) throw new RangeError("Argument value cannot be negative");

    if (x >= this.items.length) throw new RangeError("Argument value greater than number of categories.");

    this._position.x = x;
    this._position.y = y;

    return this._position;
  }

  minX(): number {
    return 0;
  }

  minY(): number {
    return 0;
  }

  maxX(): number {
    return this.items.length - 1;
  }

  maxY(): number {
    return this.items[this.x].items.length - 1;
  }

  canMoveUp(): boolean {
    return this.y > 0;
  }

  moveUp(): Position | null {
    let current = this.getCurrentCategory();

    let newY = current.moveUp();
    if (newY === null) {
      return null;
    }

    this.y = newY;

    return this.position;
  }

  moveDown(): Position | null {
    let current = this.getCurrentCategory();

    let newY = current.moveDown();
    if (newY === null) {
      return null;
    }

    this.y = newY;

    return this.position;
  }

  moveLeft(): Position | null{
    let nextIndex = this.x - 1;

    // can't move left, ignore
    if (nextIndex < 0) return null;

    let previous = this.items[this.x];

    previous.setInactive();

    let next = this.items[nextIndex];

    next.setActive();

    this.x = nextIndex;
    this.y = next.position;

    return this.position;
  }

  moveRight(): Position | null {
    let max = this.items.length - 1;
    let nextIndex = this.x + 1;

    // can't move right, ignore
    if (nextIndex > max) return null;

    let previous = this.getCurrentCategory();

    previous.setInactive();

    let next = this.items[nextIndex];

    next.setActive();

    if (previous.position >= next.items.length) {
      next.position = 0;
    }

    this.x = nextIndex;
    this.y = next.position;

    return this.position;
  }
}
