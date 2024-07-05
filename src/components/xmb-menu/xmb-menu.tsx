/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState, ReactNode, useEffect, Dispatch, SetStateAction, CSSProperties } from "react";
import { XmbMenu, XmbCategory, XmbItem } from "@models/menu";
import build from "@services/menuBuilder";
import Title from "@components/title/title";
import "./xmb.css";
import useWheel, { WheelInput } from "@/hooks/useWheel";
import useKeyboard, { KeyPressAction } from "@/hooks/useKeyboard";
import useSwipe from "@/hooks/useSwipe";
import useMobileDetect from "@/hooks/useMobileDetect";
import { MenuCategory } from "./xmb-menu-category";

const config: XmbMenu = build();

export default function Menu() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentDevice = useMobileDetect();

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

  function onEsc() {
    play();

    if (x == 0 && y == 0) {
      return;
    }

    setX(0);
    setY(0);
  }

  function onEnter() {
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
  }

  function onUp() {
    play();
    let position = config.moveUp();
    if (position === null) return;
    setY(position.y);
  }

  function onDown() {
    play();
    let position = config.moveDown();
    if (position === null) return;
    setY(position.y);
  }

  function onLeft() {
    play();
    let position = config.moveLeft();
    if (position === null) return;
    setX(position.x);
    setY(position.y);
  }

  function onRight() {
    play();
    let position = config.moveRight();
    if (position === null) return;
    setX(position.x);
    setY(position.y);
  }

  const actions = new Map<string, KeyPressAction>();
  actions.set('w', { repeat: true, onKeyPress: onUp });
  actions.set('arrowup', { repeat: true, onKeyPress: onUp });
  actions.set('a', { repeat: true, onKeyPress: onLeft });
  actions.set('arrowleft', { repeat: true, onKeyPress: onLeft });
  actions.set('s', { repeat: true, onKeyPress: onDown });
  actions.set('arrowdown', { repeat: true, onKeyPress: onDown });
  actions.set('d', { repeat: true, onKeyPress: onRight });
  actions.set('arrowright', { repeat: true, onKeyPress: onRight });
  actions.set(' ', { repeat: false, onKeyPress: onEnter });
  actions.set('enter', { repeat: false, onKeyPress: onEnter });
  actions.set('escape', { repeat: false, onKeyPress: onEsc });

  useKeyboard({ actions: actions });

  const wheelInput = {
    onWheelUp: onUp,
    onWheelDown: onDown,
    onWheelLeft: onLeft,
    onWheelRight: onRight
  };

  useWheel(wheelInput);

  const swipeInput = {
    onSwipedUp: onDown,
    onSwipedDown: onUp,
    onSwipedLeft: onRight,
    onSwipedRight: onLeft,
  };

  useSwipe(swipeInput);

  const isMobile = currentDevice.isMobile();
  const isSSR = !currentDevice.isSSR();

  const scaleX = isMobile ? 140 : 270;
  const baseMarginLeft = isMobile ? 20 : 100;

  const w = 0;
  const l = baseMarginLeft - (scaleX * x);

  console.log(`${isMobile}: scaleX: ${scaleX} baseMarginLeft: ${baseMarginLeft} marginLeft: ${l}px`);

  const mainStyle:CSSProperties = {
    marginRight: `${w}%`,
    marginLeft: `${l}px`,
    width: '200%',
    display: 'flex',
  };

  return (
    <div className=''>
      <audio ref={audioRef} src='/audio/nav.mp3' />
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
