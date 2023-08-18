import Header from "./components/Header/Header";
import PagesRoute from "./components/Routes/PagesRoute";
import PokeDataProvider from "./components/Pages/PokeGrilla/Context/PokeDataProvider";

function App() {
  return (
    <>
      {/* <AuthProvider> */}
      <PokeDataProvider>
        <Header />
        <PagesRoute />
      </PokeDataProvider>
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
