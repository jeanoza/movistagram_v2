import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import Tv from "./views/Tv/Tv";
import Search from "./views/Search/Search";
import Footer from "./views/Footer/Footer";
import NavBar from "./views/NavBar/NavBar";
import GlobalStyles from "./GlobalStyles";
import Detail from "./views/Detail/Detail";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tv" component={Tv} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/movie/:id" component={Detail} />
          <Route exact path="/show/:id" component={Detail} />
        </Switch>
        <NavBar />
        <Footer />
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
