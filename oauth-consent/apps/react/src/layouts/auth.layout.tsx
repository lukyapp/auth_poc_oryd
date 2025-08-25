import {Outlet} from "@tanstack/react-router";

export const AuthLayout = () => {
    return (
        <main data-testid="app-express">
            <div className="auth-container spacing-16">
                <Outlet/>
            </div>
        </main>
    )
}