import { useEffect } from "react";

export function useKey(action, keyPress) {
  useEffect(() => {
    function callback(e) {
      if (e.code.toLowerCase() === keyPress.toLowerCase()) {
        action();
      }
    }

    document.addEventListener("keydown", callback);

    return () => document.removeEventListener("keydown", callback);
  }, [action, keyPress]);
}
