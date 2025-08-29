import {Registration as OryRegistration} from "@ory/elements-react/theme";
import {useRegistrationFlow} from "../ory/use-registration-flow.hook";
import {oryConfiguration} from "./__oryConfiguration";

export const RegistrationPage = () => {
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

    return (
        <OryRegistration flow={flow} config={oryConfiguration}/>
    )
};
