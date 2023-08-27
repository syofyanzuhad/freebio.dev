/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'


const useOfflineStatus = () => {
  const [offlineStatus, setOfflineStatus] = useState(typeof window !== "undefined" && !navigator.onLine);
  
  const handleOfflineStatus = () => setOfflineStatus(typeof window !== "undefined" && !navigator.onLine);

  useEffect(() => {
    handleOfflineStatus();
    window.addEventListener("online", handleOfflineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOfflineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, [offlineStatus]);

  return offlineStatus;
}

export default useOfflineStatus