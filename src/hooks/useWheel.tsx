import { useCallback, useEffect, useRef, useState } from "react";
import { ReadonlyURLSearchParams } from "next/navigation";
import useQuery from "./useQuery";

export interface WheelInput {
  onWheelUp: () => void;
  onWheelDown: () => void;
  onWheelLeft: () => void;
  onWheelRight: () => void;
  enabledOnModal: boolean | undefined;
}

export interface WheelOutput {
  onWheel: (e: WheelEvent) => void;
  onKeyUp: (e: KeyboardEvent) => void;
  onKeyDown: (e: KeyboardEvent) => void;
}

const useWheel = ({ onWheelUp, onWheelDown, onWheelLeft, onWheelRight, enabledOnModal = false }: WheelInput): WheelOutput => {

  const shift = useRef(false);

  //const [path, setPath] = useState('');
  //const [searchParams, setSearchParams] = useState<ReadonlyURLSearchParams | null>(null);
  const [modal, setModal] = useState<boolean>(false);

  const onPathChanged = (p: string, s: ReadonlyURLSearchParams, m: string | null) => {
    //setPath(p);
    //setSearchParams(s);
    setModal(!!m);
  };

  useQuery({ onPathChanged: onPathChanged });
  
  const onWheel = useCallback((e: WheelEvent) => {
    let down = e.deltaY > 0;
    if (down) {
      if (shift.current) {
        onWheelRight();
        return;
      }
      onWheelDown();
      return;
    }
    if (shift.current) {
      onWheelLeft();
      return;
    }
    onWheelUp();
  }, [onWheelDown, onWheelUp, onWheelLeft, onWheelRight]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Shift') {
      e.preventDefault();
      shift.current = true;
      return;
    }
  }, [shift]);

  const onKeyUp = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Shift') {
      e.preventDefault();
      shift.current = false;
    }
  }, [shift]);

  useEffect(() => {
    if (modal !== enabledOnModal) return;
    document.body.addEventListener('wheel', onWheel);
    document.body.addEventListener('keydown', onKeyDown);
    document.body.addEventListener('keyup', onKeyUp);
    return () => {
      document.body.removeEventListener('wheel', onWheel);
      document.body.removeEventListener('keydown', onKeyDown);
      document.body.removeEventListener('keyup', onKeyUp);
    }
  }, [shift, modal, onWheel, enabledOnModal, onKeyDown, onKeyUp]);

  return {
      onWheel,
      onKeyDown,
      onKeyUp
  }
};

export default useWheel;
