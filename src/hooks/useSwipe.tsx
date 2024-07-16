"use client";

import { ReadonlyURLSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import useQuery from "./useQuery";

export interface SwipeInput {
  onSwipedUp: () => void;
  onSwipedDown: () => void;
  onSwipedLeft: () => void;
  onSwipedRight: () => void;
  enabledOnModal: boolean;
}

interface SwipeOutput {
  onTouchStart: (e: TouchEvent) => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchEnd: () => void;
}

const useSwipe = (input: SwipeInput): SwipeOutput => {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e: TouchEvent) => {
    //console.log(`onTouchStart: ${e}`);
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX; // otherwise the swipe is fired even with usual touch events
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndY.current = e.targetTouches[0].clientY; // otherwise the swipe is fired even with usual touch events
  }, [touchStartX, touchEndX, touchStartY, touchEndY]);

  //const [path, setPath] = useState('');
  //const [searchParams, setSearchParams] = useState<ReadonlyURLSearchParams | null>(null);
  const [modal, setModal] = useState<boolean>(false);

  const onPathChanged = (p: string, s: ReadonlyURLSearchParams, m: string | null) => {
    //setPath(p);
    //setSearchParams(s);
    setModal(!!m);
  };

  useQuery({ onPathChanged: onPathChanged });
  
  const onTouchMove = useCallback((e: TouchEvent) => {
    //console.log(`onTouchMove: ${e}`);
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  }, [touchEndX, touchEndY]);

  const onTouchEnd = useCallback(() => {
    //console.log('onTouchEnd');

    if (!touchStartX || !touchEndX) return;
    if (!touchStartY || !touchEndY) return;

    const distanceX = touchStartX.current - touchEndX.current;
    let isLeftSwipe = distanceX > minSwipeDistance;
    let isRightSwipe = distanceX < -minSwipeDistance;

    const distanceY = touchStartY.current - touchEndY.current;
    let isUpSwipe = distanceY > minSwipeDistance;
    let isDownSwipe = distanceY < -minSwipeDistance;

    const isLR = isLeftSwipe || isRightSwipe;
    const isUD = isUpSwipe || isDownSwipe;

    //console.log(`x: ${touchStartX.current}, ${touchEndX.current}`);
    //console.log(`y: ${touchStartY.current}, ${touchEndY.current}`);
    //console.log(`distance: ${distanceX}, ${distanceY}`);

    //console.log(`isLR: ${isLR}`);
    //console.log(`isUD: ${isUD}`);

    // if this is both left/right and top/bottom, use the one
    // with the greater distance
    if (isLR && isUD) {
      const isDistanceXLarger = distanceX > distanceY;
      if (isDistanceXLarger) {
        isUpSwipe = isDownSwipe = false;
      }
      else {
        isLeftSwipe = isRightSwipe = false;
      }
    }

    if (isUpSwipe) {
      input.onSwipedUp();
    }
    if (isDownSwipe) {
      input.onSwipedDown();
    }
    if (isLeftSwipe) {
      input.onSwipedLeft();
    }
    if (isRightSwipe) {
      input.onSwipedRight();
    }
  }, [input]);

  useEffect(() => {
    if (modal !== input.enabledOnModal) return;
    document.body.addEventListener('touchstart', onTouchStart);
    document.body.addEventListener('touchend', onTouchEnd);
    document.body.addEventListener('touchmove', onTouchMove);
    return () => {
      document.body.removeEventListener('touchstart', onTouchStart);
      document.body.removeEventListener('touchend', onTouchEnd);
      document.body.removeEventListener('touchmove', onTouchMove);
    }
  }, [modal, input.enabledOnModal, onTouchStart, onTouchEnd, onTouchMove]);

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  }
};

export default useSwipe;
