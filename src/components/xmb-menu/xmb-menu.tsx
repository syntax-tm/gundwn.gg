/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState, CSSProperties } from "react";
import { XmbMenu, XmbCategory, XmbItem } from "@models/menu";
import { useSearchParams, useRouter, ReadonlyURLSearchParams } from "next/navigation";
import build from "@services/menuBuilder";
import Title from "@components/title/title";
import "./xmb.css";
import useWheel, { WheelInput } from "@/hooks/useWheel";
import useKeyboard, { KeyboardInput, KeyPressAction } from "@/hooks/useKeyboard";
import useSwipe, { SwipeInput } from "@/hooks/useSwipe";
import useMobileDetect from "@/hooks/useMobileDetect";
import { MenuCategory } from "./xmb-menu-category";
import useQuery from "@/hooks/useQuery";

const config: XmbMenu = build();

export default function Menu() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const router = useRouter();

  const currentDevice = useMobileDetect();

  //const [path, setPath] = useState('');
  //const [searchParams, setSearchParams] = useState<ReadonlyURLSearchParams | null>(null);
  const [modal, setModal] = useState<string | null>(null);

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

  function onHelp() {
    play();

    router.push('/?modal=help');
  }

  function onEnter() {
    play();

    let selectedCategory = config.getCurrentCategory();
    let selectedItem = selectedCategory.getCurrentItem();

    if (selectedItem.modal) {
      router.push(`/?modal=${selectedItem.modal}`);
      return;
    }

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

  function onPathChanged(path: string, searchParams: ReadonlyURLSearchParams, modal: string | null) {
    //setPath(path);
    //setSearchParams(searchParams);
    setModal(modal);
  }

  useQuery({ onPathChanged: onPathChanged });
  
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
  actions.set('h', { repeat: false, onKeyPress: onHelp });
  actions.set('f1', { repeat: false, onKeyPress: onHelp });

  const keyboardInput: KeyboardInput = {
    actions: actions
  };

  useKeyboard(keyboardInput);

  const wheelInput: WheelInput = {
    onWheelUp: onUp,
    onWheelDown: onDown,
    onWheelLeft: onLeft,
    onWheelRight: onRight,
    enabledOnModal: false
  };

  useWheel(wheelInput);

  const swipeInput: SwipeInput = {
    onSwipedUp: onDown,
    onSwipedDown: onUp,
    onSwipedLeft: onRight,
    onSwipedRight: onLeft,
    enabledOnModal: false
  };
  useSwipe(swipeInput);

  const isMobile = currentDevice.isMobile();

  const scaleX = isMobile ? 140 : 270;
  const baseMarginLeft = isMobile ? 20 : 100;

  const mr = 0;
  const ml = baseMarginLeft - (scaleX * x);

  const mainStyle:CSSProperties = {
    marginRight: `${mr}%`,
    marginLeft: `${ml}px`,
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
