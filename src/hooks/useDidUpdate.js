import { useRef, useEffect } from 'react';

function useDidUpdate (callback, deps) {
  const hasMount = useRef(false)

  useEffect(() => {
    if (hasMount.current) {
      callback()
    } else {
      hasMount.current = true
    }
  }, deps);
}

export default useDidUpdate;
