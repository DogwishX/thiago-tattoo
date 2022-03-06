import { useEffect, useState } from "react";

function useScreenSize() {
  const [hookState, setHookState] = useState({
    windowWidth: window.innerWidth,
    screenDevice: checkDeviceWidth(),
  });

  function checkDeviceWidth() {
    return window.innerWidth <= 768
      ? "mobile"
      : window.innerWidth <= 1000
      ? "tablet"
      : "desktop";
  }

  function changeHookState() {
    setHookState({
      windowWidth: window.innerWidth,
      screenDevice: checkDeviceWidth(),
    });
  }

  useEffect(() => {
    window.addEventListener("resize", changeHookState);
    return function cleanup() {
      window.removeEventListener("resize", changeHookState);
    };
  }, []);

  return hookState.screenDevice;
}

export default useScreenSize;
