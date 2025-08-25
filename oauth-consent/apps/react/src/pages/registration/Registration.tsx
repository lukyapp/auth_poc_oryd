import type {OryClientConfiguration} from "@ory/elements-react";
import {Registration as OryRegistration} from "@ory/elements-react/theme";
import {useRegistrationFlow} from "../../ory/use-registration-flow.hook";

const oryConfiguration: OryClientConfiguration = {
    project: {
        default_locale: "en",
        default_redirect_url: "/",
        error_ui_url: "/error",
        locale_behavior: "force_default",
        name: "Ory Next.js App Router Example",
        registration_enabled: true,
        verification_enabled: true,
        recovery_enabled: true,
        registration_ui_url: "/registration",
        verification_ui_url: "/verification",
        recovery_ui_url: "/recovery",
        login_ui_url: "/login",
        settings_ui_url: "/settings",
    },
}

export const Registration = () => {
    // const query = useTypedSearch('/authLayout/login', LoginQueryDto)
    // // const {
    // //     flow,
    // //     aal = "",
    // //     refresh = "",
    // //     return_to = "",
    // //     organization = "",
    // //     via = "",
    // //     login_challenge,
    // //     identity_schema,
    // // } = query
    //
    // const {data: flow, isPending, isError} = useQuery({
    //     queryKey: ["flow"], queryFn: () => getRegistrationFlow(oryConfiguration, { flow: query.flow })
    // })
    // if (isPending) {
    //     return <div>Loading...</div>
    // }
    // if (isError) {
    //     return <div>Error</div>
    // }

    const flow = useRegistrationFlow()

    if (!flow) {
        return <div>Flow not found</div>
    }

    return <OryRegistration flow={flow} config={oryConfiguration} />
};
