import {useSearch as tanstackUseSearch} from "@tanstack/react-router";

export const useRawSearch = () => {
    // @ts-expect-error useSearch
    return tanstackUseSearch({strict: true})
}