import {createRoute} from '@tanstack/react-router';
import {Default} from "../pages/Default";
import {rootRoute} from "./__root";

export const logoutSuccessfulRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/logout-successful',
    component: () => {
        return (
            <Default pageName='/logout-successful'/>
        )
    },
});
