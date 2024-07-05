import { useEffect, useRef } from "react";

export interface WheelInput {
  onWheelUp: () => void
  onWheelDown: () => void
  onWheelLeft: () => void
  onWheelRight: () => void
}

export interface WheelOutput {
  onWheel: (e: WheelEvent) => void
  onKeyUp: (e: KeyboardEvent) => void
  onKeyDown: (e: KeyboardEvent) => void
}

let addedListeners = false;

const useWheel = (input: WheelInput): WheelOutput => {

  const shift = useRef(false);

  const onWheel = (e: WheelEvent) => {
    let down = e.deltaY > 0;

    if (down) {
      if (shift.current) {
        input.onWheelRight();
        return;
      }
      input.onWheelDown();
      return;
    }

    if (shift.current) {
      input.onWheelLeft();
      return;
    }

    input.onWheelUp();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Shift') {
      e.preventDefault();
      shift.current = true;
      return;
    }
  };

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Shift') {
      e.preventDefault();
      shift.current = false;
    }
  };

  useEffect(() => {
    document.addEventListener('wheel', onWheel);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('wheel', onWheel);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    }
  }, [shift]);

  return {
      onWheel,
      onKeyDown,
      onKeyUp
  }
};

export default useWheel;
