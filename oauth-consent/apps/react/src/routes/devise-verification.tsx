import {createRoute} from '@tanstack/react-router';
import {Default} from "../pages/Default";
import {rootRoute} from './__root';

export const deviceVerificationRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/device_verification',
    component: () => {
        return (
            <Default pageName='/device_verification'/>
        )
    },
});
