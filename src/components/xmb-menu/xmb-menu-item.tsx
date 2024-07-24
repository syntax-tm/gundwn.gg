/* eslint-disable @next/next/no-img-element */
"use client"

import { CSSProperties } from "react";
import { XmbItem } from "@models/menu";
import { useRouter } from "next/navigation";
import { useWindowSize } from "@uidotdev/usehooks";
import useMobileDetect from "@/hooks/useMobileDetect";
import Link from "next/link";
import "./xmb.css";

interface MenuItemProps {
  index: number;
  item: XmbItem;
  y: number;
}

export const MenuItem = ({ index, item, y }: MenuItemProps) => {
  const active = index === y;
  const router = useRouter();
  const size = useWindowSize();
  const platform = useMobileDetect();

  let top = 0;
  let bottom = 0;

  const height = size?.height ?? 0;
  const width = size?.width ?? 0;
  const isPortrait = height > width;

  if (platform.isMobile() || isPortrait) {
    top = index === 0
      ? (active ? 30 : -300 + -130 * y)
      : (active ? 350 : 30);
    bottom = index === 0
      ? (active ? 40 : 0)
      : 30;
  } else {
    top = index === 0
      ? (active ? 50 : -190 + -120 * y)
      : (active ? 250 - 5 * y : 15);
    bottom = index === 0
      ? (active ? 30 : 20)
      : (active ? 20 : 30);
  }

  const styleProps: CSSProperties = {
    marginTop: `${top}px`,
    marginBottom: `${bottom}px`,
  };

  return (
    <>
      <Link
        id={item.id}
        className={`xmb-item flex items-center justify-self-center select-none ${active ? "active" : "inactive"} ${index === 0 ? "first" : ""}`}
        style={styleProps}
        href={item.link || ""}
        onClick={(e) => {
          if (item === null) return;
          if (item.modal) {
            e.preventDefault();
            router.push(`/?modal=${item.modal}`);
            return;
          }
          if (item.onClick === null || item.onClick === undefined) return;
          item.onClick();
        }}
        target={item.link && "_blank" || undefined}>
        {item.icon}
        <div className="grid grid-cols-1 content-around select-none">
          <p className="xmb-item-name text-nowrap select-none">
            {item.title}
          </p>
          {item.description && (
            <p className="xmb-item-description text-nowrap select-none">
              {item.description}
            </p>
          )}
        </div>
      </Link>
    </>
  );
};
