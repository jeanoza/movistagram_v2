import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import Tv from "./views/Tv/Tv";
import Search from "./views/Search/Search";
import Footer from "./views/Footer/Footer";
import NavBar from "./views/NavBar/NavBar";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tv" component={Tv} />
          <Route exact path="/search" component={Search} />
        </Switch>
        <Footer />
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
