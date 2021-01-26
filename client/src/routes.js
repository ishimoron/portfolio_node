import {Switch, Route} from "react-router-dom";
import Home from "./copmonents/Home";
import About from "./copmonents/About";
import Works from "./copmonents/Works";
import Contact from "./copmonents/Contact";
import {AnimatePresence} from "framer-motion";

export const useRoutes = () => {

    return (

        <AnimatePresence>
            <Switch>
                <Route className="transition-fade" path="/" exact>
                    <Home/>
                </Route>
                <Route className="transition-fade" path="/about">
                    <About/>
                </Route>
                <Route path="/works">
                    <Works/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </AnimatePresence>
    )
}