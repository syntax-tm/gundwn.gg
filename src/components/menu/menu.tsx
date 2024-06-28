/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState, ReactNode, useEffect, Dispatch, SetStateAction, CSSProperties } from "react";
import Clock from "@/components/clock/Clock";
import { XmbMenu, XmbCategory, XmbItem } from "@models/menu";
import "./menu.css";
import "./xmb.css";
import build from "@services/menuBuilder";
import Title from "@components/title/title";
import useSound from "use-sound";
import Link from "next/link";

interface MenuItemProps {
  index: number;
  item: XmbItem;
  y: number;
}

const MenuItem = ({ index, item, y }: MenuItemProps) => {

  const active = index === y;

  let top = 0;
  let bottom = 0;

  if (index === 0) {
    if (active) {
      top = 50;
      bottom = 30;
    }
    else {
      top = -190 + (-120 * y);
      bottom = 20;
    }
  }
  else {
    if (active) {
      top = 250 - (5 * y);
      bottom = 20;
    }
    else {
      top = 15;
      bottom = 30;
    }
  }

  const styleProps:CSSProperties = {
    marginTop: `${top}px`,
    marginBottom: `${bottom}px`,
  };

  return (
    <>
      <a
        id={item.id}
        className={`xmb-item flex items-center ${ active ? 'active' : 'inactive' } ${ index === 0 ? 'first' : '' }`}
        style={styleProps}
        href={( item.link || '' )}
        onClick={(e) => { if (item === null) return; item.onClick!(); }}
        target="_blank"
      >
        {item.icon}
        <div className="ml-4">
          <p className="xmb-item-name ml-[20px] mt-[-20px] absolute">{item.title}</p>
          <p className="xmb-item-caption ml-[20px] mt-[10px] absolute">
            {item.description}
          </p>
        </div>
      </a>
    </>
  );
};

interface MenuCategoryProps {
  index: number;
  category: XmbCategory;
  x: number;
  y: number;
}

const MenuCategory = ({ index, category, x, y }: MenuCategoryProps) => {

  //const [active, setActive] = useState(false);

  const active = index === x;

  return (
    <>
      <div id={category.title} className={`xmb-category ${ active ? 'active' : 'inactive' }`}
      >
        <div className="xmb-category-header grid">
          {category.icon}
          {active && (
            <p className="xmb-category-title">
              {category.title}
            </p>
          )}
        </div>
        {active && (
          <div className="xmb-category-items">
            {category.items !== undefined &&
              category.items.length > 0 &&
              category.items.map((item, i) => (
                <MenuItem
                  index={i}
                  key={item.id}
                  item={item}
                  y={y}
                />
              )
            )}
          </div>
        )}
      </div>
    </>
  );
};

const config: XmbMenu = build();
let addedListeners = false;

const repeatCodes: string[] = [
  'arrowdown', 'arrowleft', 'arrowup', 'arrowright', 'w', 'a', 's', 'd'
];

function allowedRepeat(key: string): boolean {
  return repeatCodes.includes(key.toLowerCase());
}

export default function Menu() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const shift = useRef(false);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.volume = 1;
      audioRef.current.play();
    } else {
      // Throw error
    }
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleWheel = (e: WheelEvent) => {

    let down = e.deltaY > 0;

    // LEFT + RIGHT
    if (shift.current) {
      if (down) {
        e.preventDefault();
        play();
        let position = config.moveRight();
        if (position === null) return;
        setX(position.x);
        setY(position.y);
        console.log(`RIGHT -> [${position}]`);
      }
      else {
        e.preventDefault();
        play();
        let position = config.moveLeft();
        if (position === null) return;
        setX(position.x);
        setY(position.y);
        console.log(`LEFT -> [${x}, ${y}]`);
      }
    }

    // DOWN
    if (down) {
      e.preventDefault();
      play();
      let position = config.moveDown();
      if (position === null) return;
      setY(position.y);
      console.log(`DOWN -> [${x}, ${y}]`);
    }

    // UP
    else {
      e.preventDefault();
      play();
      let position = config.moveUp();
      if (position === null) return;
      setY(position.y);
      console.log(`UP -> [${x}, ${y}]`);
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Shift') {
      shift.current = false;
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {

    if (e.repeat && !allowedRepeat(e.key)) {
      return;
    }

    if (e.key.toLowerCase() === 'shift') {
      e.preventDefault();
      shift.current = true;
      return;
    }

    console.log(`key: ${e.key}, code: ${e.code}, shift: ${e.shiftKey}, alt: ${e.altKey}, ctrl: ${e.ctrlKey}, repeat: ${e.repeat}`);

    // SPACE
    if (e.key == ' ' || e.code == 'Space' || e.keyCode === 32) {
      e.preventDefault();
      play();

      let selectedCategory = config.getCurrentCategory();
      let selectedItem = selectedCategory.getCurrentItem();

      if (selectedItem.link !== null) {
        openInNewTab(selectedItem.link);
        return;
      }

      if (selectedItem.onClick !== null) {
        selectedItem.onClick!();
        return;
      }

      console.log(`SPACE -> [${x}, ${y}]`);

      return;
    }

    // DOWN
    if (['arrowdown', 's'].includes(e.key.toLowerCase())) {
      e.preventDefault();
      play();
      let position = config.moveDown();
      if (position === null) return;
      setY(position.y);
      console.log(`DOWN -> [${x}, ${y}]`);
      return;
    }

    // UP
    if (['arrowup', 'w'].includes(e.key.toLowerCase())) {
      e.preventDefault();
      play();
      let position = config.moveUp();
      if (position === null) return;
      setY(position.y);
      console.log(`UP -> [${x}, ${y}]`);
      return;
    }

    // RIGHT
    if (['arrowright', 'd'].includes(e.key.toLowerCase())) {
      e.preventDefault();
      play();
      let position = config.moveRight();
      if (position === null) return;
      setX(position.x);
      setY(position.y);
      console.log(`RIGHT -> [${position}]`);
      return;
    }

    // LEFT
    if (['arrowleft', 'a'].includes(e.key.toLowerCase())) {
      e.preventDefault();
      play();
      let position = config.moveLeft();
      if (position === null) return;
      setX(position.x);
      setY(position.y);
      console.log(`LEFT -> [${x}, ${y}]`);
      return;
    }

    //else {
    //  console.log(`key: ${e.key}, code: ${e.code}, shift: ${e.shiftKey}, alt: ${e.altKey}, ctrl: ${e.ctrlKey}`);
    //}
  };

  useEffect(() => {
    if (addedListeners) {
      return;
    }

    document.body.addEventListener('keydown', handleKeyDown);
    document.body.addEventListener('keyup', handleKeyUp);
    document.body.addEventListener('wheel', handleWheel);

    addedListeners = true;
  }, []);

  const w = [0, 0, 0, 0, 0][x];
  const l = 100 - (270 * x);

  const mainStyle:CSSProperties = {
    marginRight: `${w}%`,
    marginLeft: `${l}px`,
    width: '200%',
    display: 'flex',
  };

  return (
    <div className=''>
      <audio ref={audioRef} src='/audio/nav.mp3' />
      <Clock />
      <Title />
      <main id="menu" className="">
        <section className="xmb-main" style={mainStyle}>
          {
            config !== undefined &&
            config.items.length > 0 &&
            config.items.map((item, i) => (
              <MenuCategory
                index={i}
                key={item.title}
                category={item}
                x={x}
                y={y}
              />
            ))
          }
        </section>
      </main>
    </div>
  );
};
