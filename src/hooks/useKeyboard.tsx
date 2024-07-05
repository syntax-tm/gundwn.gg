import { useEffect, useState } from "react";

export interface KeyPressAction {
    repeat: boolean;
    onKeyPress: () => void;
}

export interface KeyboardInput {
    actions: Map<string, KeyPressAction>;
}

export interface KeyboardOutput {
    onKeyUp: (e: KeyboardEvent) => void;
    onKeyDown: (e: KeyboardEvent) => void;
}

let addedListeners = false;

const useKeyboard = (input: KeyboardInput): KeyboardOutput => {
    const [keysDown, setKeysDown] = useState<string[]>([]);

    const isMapped = (key: string): boolean => {
      return input.actions.has(key.toLowerCase());
    }

    const handleKeyUp = (e: KeyboardEvent): void => {
      const updated = keysDown.filter((i) => i !== e.key);
      setKeysDown(updated);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // key is not mapped, ignore
      if (!isMapped(e.key)) return;

      // key is mapped, so retrieve the KeyPressAction
      const action = input.actions.get(e.key.toLowerCase());

      // TODO: this should throw an error
      if (action === undefined) return;

      // if this is a repeat and we don't allow repeats
      if (e.repeat && !action.repeat) return;

      e.preventDefault();

      action.onKeyPress();

      setKeysDown((prevState) => [...prevState, e.key]);
    };

    useEffect(() => {
      if (addedListeners) {
        return;
      }

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);

      addedListeners = true;

      return () => {
        document.body.removeEventListener('keydown', handleKeyDown);
        document.body.removeEventListener('keyup', handleKeyUp);
      }
    }, []);

    return {
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
    };
};

export default useKeyboard;
