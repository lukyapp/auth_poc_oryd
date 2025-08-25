import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Router} from "./tanstack/router";

// // optional global css reset
// import "@ory/elements/assets/normalize.css"
// // optional fontawesome icons
// import "@ory/elements/assets/fa-brands.min.css"
// import "@ory/elements/assets/fa-solid.min.css"
// import "@ory/elements/assets/fontawesome.min.css"
// // optional fonts
// import "@ory/elements/assets/inter-font.css"
// import "@ory/elements/assets/jetbrains-mono-font.css"
// // required styles for Ory Elements
// import "@ory/elements/style.css"

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
                <Router />
        </QueryClientProvider>
    );
}

export default App;
