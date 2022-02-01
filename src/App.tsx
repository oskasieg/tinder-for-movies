import Footer from "./layout/Footer";
import Header from "./layout/Header";
import styles from "./App.module.scss";
import Films from "./containers/Films/Films";
import FilmsProvider from "./contexts/FilmsContext";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <FilmsProvider>
        <div className={styles.App}>
          <Header />
          <Films />
          <Footer />
        </div>
      </FilmsProvider>
    </ThemeProvider>
  );
}

export default App;
