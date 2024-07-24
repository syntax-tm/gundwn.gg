"use client"

import { faCheckCircle, faCopy, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./copy.css";

export interface CopyViewProps
{
  title: string;
  description?: string;
  value: string;
}

export const CopyView = ({ title, description, value }: CopyViewProps) => {

  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="my-auto mx-auto grid grid-cols-1">
        <div className="flex mb-2 ">
          <label className="text-xlarge my-auto opacity-50 text-white flex-grow align-bottom">
            {title}
          </label>
          {description && (
            <FontAwesomeIcon icon={faQuestionCircle} className="w-5 h-5 mb-1 opacity-25 hover:opacity-100 align-self-end justify-self-end text-white justify-right"
              title={description} />
          )}
        </div>
        <div className="grid grid-cols-2 grid-rows-1 relative">
          <input type="text"
            readOnly
            title="Click to copy."
            className={`text-large p-2 my-auto col-span-2 bg-gray-800 hover:bg-gray-700 hover:bg-opacity-25 text-white border-2 border-white-500 hover:text-blue-300 hover:border-blue-300 rounded ${copied && 'disabled'}`}
            value={value}
            onMouseLeave={() => {
              setHover(false);
            }}
            onMouseEnter={() => {
              setHover(true);
            }}
            onClick={(e => {
              if (copied) return;

              const el = e.target as HTMLInputElement;
              const value = el.value;

              navigator.clipboard.writeText(el.value);

              console.log(`Copied ${value} to clipboard.`);

              setCopied(true);
            })} />
          <div className="absolute justify-self-end items-center h-full content-center">
            {
              !copied && (<FontAwesomeIcon icon={faCopy} className={`opacity-50 aspect-square my-auto h-5 w-5 mr-2 pointer-events-none ${hover ? 'text-blue-300' : 'text-white'}`} />)
            }
            {
              copied && (<FontAwesomeIcon icon={faCheckCircle} className={`opacity-50 aspect-square my-auto h-5 w-5 mr-2 pointer-events-none ${hover ? 'text-green-300' : 'text-green-500'}`} />)
            }
          </div>
        </div>
      </div>
    </>
  );
};