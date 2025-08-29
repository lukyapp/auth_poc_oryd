import {createRoute} from '@tanstack/react-router';
import {Default} from "../pages/Default";
import {rootRoute} from "./__root";

export const logoutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/logout',
    component: () => {
        return (
            <Default pageName='/logout'/>
        )
    },
});
