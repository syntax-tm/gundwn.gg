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
//import navSound from "@audio/nav.mp3";

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
let keyDownHandlerSet = false;

export default function Menu() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
    // DOWN
    if (e.deltaY < 0) {
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

  const handleKeyDown = (e: KeyboardEvent) => {

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
    }

    // DOWN
    if (['ArrowDown', 'S', 's'].includes(e.key)) {
      e.preventDefault();
      play();
      let position = config.moveDown();
      if (position === null) return;
      setY(position.y);
      console.log(`DOWN -> [${x}, ${y}]`);
    }

    // UP
    else if (['ArrowUp', 'W', 'w'].includes(e.key)) {
      e.preventDefault();
      play();
      let position = config.moveUp();
      if (position === null) return;
      setY(position.y);
      console.log(`UP -> [${x}, ${y}]`);
    }

    // RIGHT
    else if (['ArrowRight', 'D', 'd'].includes(e.key)) {
      e.preventDefault();
      play();
      let position = config.moveRight();
      if (position === null) return;
      setX(position.x);
      console.log(`RIGHT -> [${position}]`);
    }

    // LEFT
    else if (['ArrowLeft', 'A', 'a'].includes(e.key)) {
      e.preventDefault();
      play();
      let position = config.moveLeft();
      if (position === null) return;
      setX(position.x);
      console.log(`LEFT -> [${x}, ${y}]`);
    }
  };

  useEffect(() => {
    if (keyDownHandlerSet) {
      return;
    }

    document.body.addEventListener('keydown', handleKeyDown);
    document.body.addEventListener('wheel', handleWheel);

    keyDownHandlerSet = true;
  }, []);

  const w = [0, 0, 0, 0, 0][x];
  const l = 100 - (270 * x);

  let mr = -40 + (20 * x);

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

/*
export default function Menu() {

  return (
    <>


      <main id="menu">
        <section className="xmb-main">
          <div className="xmb-title homeMenu active">
            <img
              className="home"
              src="@xmb/home.png"
              alt=""
            />
            <p className="titletext">Home</p>

            <div className="xmb-contents">
              {<div className="submenu one" id="about">
                      <img id ="aboutimage" className="abImage" src="data:image/png;base64,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" alt="" />
                      <p id="about">Welcome!</p>
                  </div>}

              <div className="submenu two" id="two">
                <img
                  className="resImage"
                  src="@xmb/user.png"
                  alt=""
                />
                <p id="twotext">User 1</p>
              </div>
            </div>
          </div>

          <div className="xmb-title settings">
            <img
              className="settings"
              src="@xmb/settings.png"
              alt=""
            />
            <p className="titletext">Settings</p>

            <div className="xmb-contents">
              <div className="submenu one" id="about">
                <img
                  id="aboutimage"
                  className="abImage"
                  src="@xmb/update.png"
                  alt=""
                />
                <div className="context">
                  <p id="about">System Update</p>
                  <p className="subtext">
                    Update your firmware
                  </p>
                </div>
              </div>
              <div className="submenu two" id="two">
                <img
                  className="resImage"
                  src="@xmb/display.png"
                  alt=""
                />
                <div className="context">
                  <p id="disptext">Display Settings</p>
                  <p className="subtext">
                    Adjust your display
                  </p>
                </div>
              </div>
              <div className="submenu three" id="three">
                <img
                  className="sysImage"
                  src="@xmb/display.png"
                  alt=""
                />
                <div className="context">
                  <p id="systext">System Settings</p>
                  <p className="subtext">
                    Adjust system settings
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="xmb-title messages">
            <img className="messages" src="@xmb/photo.png" alt="" />
            <p className="titletext">Photos</p>

            <div className="xmb-contents">
              <div className="submenu one" id="about">
                <img
                  id="aboutimage"
                  className="abImage"
                  src="@xmb/photo.png"
                  alt=""
                />
                <p id="about">test</p>
              </div>
              <div className="submenu two" id="two">
                <img
                  className="twoImage"
                  src="@xmb/resume.png"
                  alt=""
                />
                <p id="twotext">test</p>
              </div>
            </div>
          </div>

          <div className="xmb-title music">
            <img className="messages" src="@xmb/music.png" alt="" />
            <p className="titletext">Music</p>

            <div className="xmb-contents">
              <div className="submenu one" id="about">
                <img
                  id="aboutimage"
                  className="abImage"
                  src="@xmb/music.png"
                  alt=""
                />
                <p id="about">2Pac</p>
              </div>
              <div className="submenu two" id="two">
                <img
                  className="twoImage"
                  src="@xmb/resume.png"
                  alt=""
                />
                <p id="twotext">Biggie</p>
              </div>
            </div>
          </div>

          <div className="xmb-title videos">
            <img className="messages" src="@xmb/video.png" alt="" />
            <p className="titletext">Video</p>

            <div className="xmb-contents">
              <div className="submenu one" id="about">
                <img
                  id="aboutimage"
                  className="abImage"
                  src="@xmb/youtube.png"
                  alt=""
                />
                <p id="about">YouTube</p>
              </div>
              <div className="submenu two" id="two">
                <img
                  className="twoImage"
                  src="@xmb/prime.png"
                  alt=""
                />
                <p id="twotext">Amazon Prime Video</p>
              </div>
            </div>
          </div>

          <div className="xmb-title games">
            <img className="messages" src="@xmb/games.png" alt="" />
            <p className="titletext">Games</p>

            <div className="xmb-contents">
              <div className="submenu one">
                <img
                  id="aboutimage"
                  className="abImage"
                  src="@xmb/uncharted.png"
                  alt=""
                />
                <p id="about">Uncharted 3</p>
              </div>
              <div className="submenu two" id="two">
                <img
                  className="twoImage"
                  src="@xmb/gow3.png"
                  alt=""
                />
                <p id="twotext">God of War 3</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
*/