import Footer from "./layout/Footer";
import Header from "./layout/Header";
import styles from "./App.module.scss";
import Films from "./containers/Films/Films";

function App() {
  const appName = "Tinder for movies";

  return (
    <div className={styles.App}>
      <Header appName={appName} />
      <Films />
      <Footer />
    </div>
  );
}

export default App;
