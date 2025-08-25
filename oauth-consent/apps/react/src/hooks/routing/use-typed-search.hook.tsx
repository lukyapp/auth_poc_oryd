import {
    type AnyRouter,
    type RegisteredRouter,
    type RouteIds,
    useSearch as tanstackUseSearch
} from "@tanstack/react-router";
import type {ClassConstructor} from "class-transformer";
import {validateSearch} from "../../routes/utils/validate-search";

export type ConstrainLiteral<T, TConstraint, TDefault = TConstraint> =
    | (T & TConstraint)
    | TDefault

export const useTypedSearch = <
    TDto extends object,
    TRouter extends AnyRouter = RegisteredRouter,
    const TFrom extends string | undefined = undefined,
>(
    routerName: ConstrainLiteral<TFrom, RouteIds<TRouter['routeTree']>>,
    Dto: ClassConstructor<TDto>
) =>{
    // @ts-expect-error useSearch
    const raw = tanstackUseSearch({strict: true})
    const query = validateSearch(routerName, Dto)(raw)
    console.log('raw query : ', raw)
    console.log('query : ', query)
    return query
}