import {Error as OryError} from "@ory/elements-react/theme";
import {useRawSearch} from "../hooks/routing/use-raw-search.hook";
import {oryConfiguration} from "./__oryConfiguration";

export const ErrorPage = () => {
    const searchParams = useRawSearch();
    return (
        <OryError error={searchParams} config={oryConfiguration}/>
    );
};
