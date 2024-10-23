import './App.css';
import Header from "./components/Header/Header";
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import ProductList from "./components/Products list/ProductsList";

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            <Header/>
            <ProductList/>
        </div>
    );
}

export default App;
