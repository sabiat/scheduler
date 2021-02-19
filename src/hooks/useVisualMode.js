import { useState } from 'react';

export default function useVisualMode(initialMode) {
  // const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]); // keep track of history of modes

  function transition(newMode, replace = false) { // add new mode to history
    if (replace) {
      setHistory(prev => [...prev.slice(0, -1), newMode]);
    } else {
      setHistory(prev => [...prev, newMode]);
    }
  }
  function back() {
    if (history.length === 1) return;
    setHistory(prev => [...prev.slice(0, -1)]);
  }
  return { mode:history[history.length - 1], transition, back };
}




