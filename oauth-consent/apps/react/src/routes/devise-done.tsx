import {createRoute} from '@tanstack/react-router';
import {Default} from "../pages/Default";
import {rootRoute} from './__root';

export const deviceDoneRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/device_done',
    component: () => {
        return (
            <Default pageName='/device_done'/>
        )
    },
});
