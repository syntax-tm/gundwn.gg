/* eslint-disable @next/next/no-img-element */
"use client"

import { XmbCategory } from "@models/menu";
import { MenuItem } from "./xmb-menu-item";
import "./xmb.css";

interface MenuCategoryProps {
  index: number;
  category: XmbCategory;
  x: number;
  y: number;
}

export const MenuCategory = ({ index, category, x, y }: MenuCategoryProps) => {

  const active = index === x;

  return (
    <>
      <div id={category.title} className={`xmb-category ${ active ? 'active' : 'inactive' }`}
      >
        <div className="xmb-category-header grid select-none">
          {category.icon}
          {active && (
            <p className="xmb-category-title select-none">
              {category.title}
            </p>
          )}
        </div>
        {active && (
          <div className="xmb-category-items select-none">
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
