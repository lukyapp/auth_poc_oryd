import {createRoute} from '@tanstack/react-router';
import {Default} from "../pages/Default";
import {rootRoute} from './__root';

export const recoveryRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/recovery',
    component: () => {
        return (
            <Default pageName='/recovery'/>
        )
    },
});
