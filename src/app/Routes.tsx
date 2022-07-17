import { useRoutes } from "react-router-dom";

import routes from "../routes";

const Routes = () => {
    const router = useRoutes(routes);

    return router;
};

export default Routes;
