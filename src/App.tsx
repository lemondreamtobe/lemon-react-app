import { routesUrl } from "@/const/routes";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import React, { Suspense } from "react";
const Login = React.lazy(() => import('@/pages/login/index'));
const Home = React.lazy(() => import('@/pages/home/index'));


function App() {
    return (
        <Suspense fallback={<div />} >
            <BrowserRouter>
                <Routes>
                    <Route path={routesUrl.login} element={<Login />} />
                    <Route path={routesUrl.home} element={<Home />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;

