import NetworkBanner from "./components/NetworkBanner";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <NetworkBanner />

      <main className="min-h-screen bg-gray-100">
        <AppRouter />
      </main>
    </>
  );
}

export default App;