import Home from "../pages/Home";
import Register from "../pages/Register";
import config from "../config"

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.register, component: Register },
];
export { publicRoutes};