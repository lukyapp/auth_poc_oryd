import {createRoute} from '@tanstack/react-router';
import {ErrorPage} from "../pages/error.page";
import {rootRoute} from './__root';

export const errorRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/error',
    component: ErrorPage,
});
