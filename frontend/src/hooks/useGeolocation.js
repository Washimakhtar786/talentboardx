import { useEffect, useState } from "react";

export const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        switch (err.code) {
          case 1:
            setError("Permission denied.");
            break;
          case 2:
            setError("Position unavailable.");
            break;
          case 3:
            setError("Request timed out.");
            break;
          default:
            setError("An unknown error occurred.");
        }
      }
    );
  }, []);

  return { location, error };
};