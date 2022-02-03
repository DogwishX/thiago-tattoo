import { useState } from "react";

function useToggle(defaultState) {
  const [isToggled, setIsToggled] = useState(defaultState);

  function toggle() {
    setIsToggled(!isToggled);
  }

  return [isToggled, toggle];
}

export default useToggle;
