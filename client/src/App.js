
import './App.css';
import {useRoutes} from "./routes";
import Cursor from "./copmonents/Cursor";
import MainMenu from "./copmonents/MainMenu";
import NavState from "./context/navState";
import './assets/css/animate.css'

function App() {


    // const swup = new Swup();
    // const [loading, setLoading] = useState(true)
    //
    // const demoAsyncCall = () => {
    //     return new Promise((resolve) => setTimeout(() => resolve(), 1000));
    // }
    //
    // useEffect(() => {
    //     demoAsyncCall().then(() => {
    //         setLoading(!loading)
    //     })
    // }, [])
    //
    // if (loading) {
    //     return null
    // }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const routes = useRoutes()
    return (
        <div className="App">
            <NavState>
                <MainMenu/>
            </NavState>
            <Cursor/>
            {routes}
        </div>
    );
}

export default App;
