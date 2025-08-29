import {createRoute} from '@tanstack/react-router';
import {Default} from "../pages/Default";
import {rootRoute} from './__root';

export const settingsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/settings',
    component: () => {
        return (
            <Default pageName='/settings'/>
        )
    },
});
