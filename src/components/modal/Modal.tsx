"use client"

import { ReadonlyURLSearchParams, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { HelpView, MobileHelpView } from "./views/help";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import useKeyboard, { KeyPressAction } from "@hooks/useKeyboard";
import useMobileDetect from "@hooks/useMobileDetect";
import useQuery from "@hooks/useQuery";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";
import { CopyView } from "./views/copy";
import accounts from "@/config/accounts.json";
import "./modal.css";

export default function Modal() {
  const searchParams = useSearchParams();
  const modalParam = searchParams.get("modal");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const router = useRouter();
  const size = useWindowSize();
  const mobileDetect = useMobileDetect();

  const [modal, setModal] = useState<string | null>(modalParam);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.volume = 1;
      audioRef.current.play();
    } else {
      // Throw error
    }
  };

  function onEsc() {
    play();

    router.push('/');
  }

  function onPathChanged(p: string, s: ReadonlyURLSearchParams, m: string | null) {
    setModal(m);
  }

  useQuery({ onPathChanged: onPathChanged });

  const actions = new Map<string, KeyPressAction>();

  if (modal) {
    actions.set('escape', { repeat: false, onKeyPress: onEsc });
  }

  useKeyboard({ actions: actions, enabledOnModal: true });

  let view;
  let title;

  if (modal === 'help') {
    title = 'Help';
    if (mobileDetect.isMobile()) {
      view = <MobileHelpView />;
    } else {
      view = <HelpView />;
    }
  } else if (modal === 'bnet') {
    title = 'Battle.Net';
    view = <CopyView title="BattleTag:" value={accounts.battleNet.id} />
  }

  return (
    <>
      {modal && (
        <div>
          {/* <div className="right-0 top-0 absolute w-[30px] m-5 aspect-square z-[200]">
            <FontAwesomeIcon icon={faClose} className="w-full h-full" />
          </div> */}
          <dialog className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-75 z-[100] overflow-none backdrop-blur flex">
            <audio ref={audioRef} src='/audio/nav.mp3' />
            <div className="absolute left-0 items-end w-full h-[15%] grid grid-cols-1 content-end">
              <p className="modal-title text-xl">
                {title}
              </p>
              <hr className="w-full" />
            </div>
            {view}
            <div className="absolute left-0 bottom-0 items-start w-full h-[15%] grid grid-cols-1 content-start">
              <hr className="w-full" />
              <span className="text-white mt-[1em] ml-[0.5em] text-center modal-action">
                {/* need to set the href so that the user can close modal by clicking on the buttton */}
                <Link href={'/'}>
                  {mobileDetect.isMobile() && (
                    <div className="text-xl items-center justify-items-center align-items-center inline-flex">
                      <FontAwesomeIcon icon={faClose} className="w-7 h-7 aspect-square inline-flex my-auto modal-action" />
                      <span className="mx-2 my-auto">close</span>
                    </div>
                  )}
                  {mobileDetect.isDesktop() && (
                    <>
                      <kbd className="px-2 py-1.5 text-xs text-gray-800 bg-gray-100 mx-[3px] border border-gray-200 rounded-lg dark:bg-gray-400/25 dark:text-white dark:border-gray-500/25">Esc</kbd> close
                    </>
                  )}

                </Link>
              </span>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};
