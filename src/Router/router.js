import Home from "../Pages/Component/Home";
import Register from "../Pages/Component/Register";
import config from "../config"

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.register, component: Register },
];
export { publicRoutes};