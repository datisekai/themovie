import "./App.css";
import Container from "./component/container/Container";
import { Route, Routes } from "react-router-dom";
import Detail from "./component/detail/Detail";
import Traller from "./component/detail/Traller";
import Header from "./component/header/Header";
import Search from "./component/search/Search";
import Results from "./component/search/Results";
import Footer from "./component/footer/Footer";
import Watch from "./component/watch/Watch";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Container />}></Route>
        <Route path='/detail/:idDetail' element={<Detail />}></Route>
        <Route path='/detail/traller/:idDetail' element={<Traller/>}></Route>
        <Route path='/detail/watch/:idDetail/:idImdb' element={<Watch/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/search/:searchstring' element={<Results/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
