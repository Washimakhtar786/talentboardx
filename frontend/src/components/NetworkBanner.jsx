import { useNetworkStatus } from "../hooks/useNetworkStatus";

const NetworkBanner = () => {
  const isOnline = useNetworkStatus();

  if (isOnline) return null;

  return (
    <div className="fixed top-0 z-50 w-full bg-red-500 p-2 text-center text-white">
      No Internet Connection. Some features may not work.
    </div>
  );
};

export default NetworkBanner;