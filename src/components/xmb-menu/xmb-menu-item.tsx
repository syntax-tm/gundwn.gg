/* eslint-disable @next/next/no-img-element */
"use client";

import { CSSProperties } from "react";
import { XmbItem } from "@models/menu";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import "./xmb.css";
import Link from "next/link";

interface MenuItemProps {
  index: number;
  item: XmbItem;
  y: number;
}

export const MenuItem = ({ index, item, y }: MenuItemProps) => {
  const active = index === y;
  const router = useRouter();

  let top = 0;
  let bottom = 0;

  if (index === 0) {
    if (active) {
      top = 50;
      bottom = 30;
    } else {
      top = -190 + -120 * y;
      bottom = 20;
    }
  } else {
    if (active) {
      top = 250 - 5 * y;
      bottom = 20;
    } else {
      top = 15;
      bottom = 30;
    }
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
          if (item.onClick === null) return;
          item.onClick!();
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
