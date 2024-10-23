import './App.css';
import Header from "./components/Header/Header";
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import ProductList from "./components/Products list/ProductsList";

const {tg} = useTelegram();
function App() {
    const {onToggleButton} = useTelegram();
    useEffect (() => {
        tg.ready();
    }, [])

  return (
    <div className="App">
        <button onCLick={onToggleButton}>toggle</button>
        <Header/>
        <ProductList/>
    </div>
  );
}

export default App;
