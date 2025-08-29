import type {OAuth2ConsentRequest} from "@ory/client-fetch";
import {useEffect, useState} from "react";
import {useUrlSearchParams} from "../hooks/routing/use-url-search-params.hook";
import {sdk} from "./utils/sdk";

export const ConsentPage = () => {
    const consentRequest = useConsentRequest()

    if (!consentRequest) {
        return <div>Loading consent flow…</div>
    }

    return null

    // return (
    //     <OryConsent
    //         consentChallenge={flow.challenge}
    //         csrfToken={flow.csrf_token} // or wherever CSRF comes from
    //         formActionUrl={flow.request_url}
    //         session={flow.session}
    //         config={oryConfiguration}
    //     />
    // )
};

const useConsentRequest = () => {
    const searchParams = useUrlSearchParams();
    const consentChallenge = searchParams.get("consent_challenge") ?? ""
    const [flow] = useState<OAuth2ConsentRequest | null>(null)

    useEffect(() => {
        if (!consentChallenge) return
        sdk.oauth2
            .getOAuth2ConsentRequest({consentChallenge})
            // .then((consentRequest) => {
            //     setFlow(consentRequest)
            // })
            .then(consentRequest => {
                console.log('consentRequest : ', consentRequest)
                // sdk.oauth2.acceptOAuth2ConsentRequest({
                //     consentChallenge,
                //     acceptOAuth2ConsentRequest: {
                //         grant_scope: consentRequest.requested_scope,
                //         grant_access_token_audience: consentRequest.requested_access_token_audience,
                //         session: {
                //             access_token: {
                //                 session: session.id,
                //             },
                //             id_token: {
                //                 session: session.id,
                //             },
                //         },
                //     },
                // })
            })
    }, [consentChallenge])

    return flow
}
