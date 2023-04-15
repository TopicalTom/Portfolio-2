import { FC, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from "react-router-dom";

// Styles
import "./styles/baseline.scss";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
//import Spacestagram from './pages/Project/Spacestagram';
//import Shoppies from './pages/Project/Shoppies';
import Shop from './pages/Project/Shop';
import Rally from "./pages/Project/Rally";
import TouchBase from "./pages/Project/Touchbase";
import Fraction from "./pages/Project/Fraction";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";

const App: FC = () => {

    // Sets Appearance according to System Preferences
    useEffect(() => {
        // Check for Light/Dark Appearance in System Settingss
    }, []);
  
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/project/">
                    <Route 
                        path="shop"
                        Component={Shop}
                    />
                    <Route 
                        path="rally"
                        Component={Rally}
                    />
                    <Route 
                        path="touchbase"
                        Component={TouchBase}
                    />
                    <Route 
                        path="fraction"
                        Component={Fraction}
                    />
                </Route>
                <Route 
                    path="/contact" 
                    Component={Contact}
                />
                <Route 
                    path="/about" 
                    Component={About} 
                />
                <Route 
                    path="/" 
                    Component={Home} 
                />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
