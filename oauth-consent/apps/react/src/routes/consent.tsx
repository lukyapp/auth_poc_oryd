import {createRoute} from '@tanstack/react-router';
import {ConsentPage} from "../pages/consent.page";
import {rootRoute} from "./__root";

export const consentRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/consent',
    component: ConsentPage,
});
