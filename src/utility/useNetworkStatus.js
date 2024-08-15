import { useEffect, useState } from "react";

const useNetworkStatus = () => {
  const [isOnine, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);

  return isOnine;
};
export default useNetworkStatus;
