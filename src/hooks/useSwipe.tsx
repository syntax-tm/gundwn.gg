"use client";

import { useEffect, useRef } from "react";

export interface SwipeInput {
  onSwipedUp: () => void;
  onSwipedDown: () => void;
  onSwipedLeft: () => void;
  onSwipedRight: () => void;
  enabled: boolean;
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

  const onTouchStart = (e: TouchEvent) => {
    //console.log(`onTouchStart: ${e}`);
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX; // otherwise the swipe is fired even with usual touch events
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndY.current = e.targetTouches[0].clientY; // otherwise the swipe is fired even with usual touch events
  }

  const onTouchMove = (e: TouchEvent) => {
    //console.log(`onTouchMove: ${e}`);
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  }

  const onTouchEnd = () => {
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
  }

  useEffect(() => {
    document.addEventListener('touchstart', onTouchStart);
    document.addEventListener('touchend', onTouchEnd);
    document.addEventListener('touchmove', onTouchMove);
    return () => {
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('touchmove', onTouchMove);
    }
  }, []);

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  }
};

export default useSwipe;
