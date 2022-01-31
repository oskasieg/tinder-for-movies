import Footer from "./layout/Footer";
import Header from "./layout/Header";
import styles from "./App.module.scss";
import Films from "./containers/Films/Films";
import FilmsProvider from "./contexts/FilmsContext";

function App() {
  const appName = "Tinder for movies";

  return (
    <FilmsProvider>
      <div className={styles.App}>
        <Header appName={appName} />
        <Films />
        <Footer />
      </div>
    </FilmsProvider>
  );
}

export default App;
