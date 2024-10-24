import './App.css';
import Header from "./components/Header/Header";
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductsList from './components/Products list/ProductsList';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<ProductsList/>}/>
                    <Route path="/product/:id" element={<ProductDetail/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
