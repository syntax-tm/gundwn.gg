/* eslint-disable no-case-declarations */
'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { Views, eventType } from '@/app/enums';
import React from 'react';
import { IAction, IState, initialState } from '@/models/state';

const AppContext = createContext({
  state: initialState,
  dispatch: (action: IAction) => {},
});

function reducer(state: IState, action: IAction): IState {{}
  return state;
}

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const MOBILE_CUTOFF = 500; //PX WIDE
  const checkIsMobile = () => window.innerWidth < MOBILE_CUTOFF;
  useEffect(() => {
    // Check if mobile view on `window.resize` and on init
    dispatch({ type: eventType.MOBILE_SCREEN, payload: checkIsMobile() });

    const handleResize = () => {
      dispatch({ type: eventType.MOBILE_SCREEN, payload: checkIsMobile() });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    </>
  );
}
