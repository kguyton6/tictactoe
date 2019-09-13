import { createContext } from 'react';

export const PlayerContext = createContext({
    isPlayerX: true,
    togglePlayer: () => {}
  });