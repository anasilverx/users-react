import { BrowserRouter, Switch, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
// import NotFound from "./pages/NotFound"
import LoginPage from "./pages/LoginPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                {/* <Route component={NotFound}/> */}
                <Route path="/login" exact component={LoginPage}/>
            </Switch>
        </BrowserRouter>

    )
}

export default Router 