import type { Weak } from "blakprint"
import { twMerge } from "tailwind-merge";



export const arrayExists = (arr: Weak<unknown[]>) => arr && arr?.length > 0;

export const tuid = (offset?: number): number => Math.floor(Math.random() * Math.round(Date.now() as number))+ (offset || 1);


export function classSet(classList: any) {
    return twMerge(classList)
}

export const INCREMENT_BY_ONE = (value: number): number => value + 1;

export const DECREMENT_BY_ONE = (value: number): number => value -1;


export type SafePropertiesProps = {
    props?: any,
    defaults: any
}

export const safeProperties = <TypeParams=any>({ props, defaults }: SafePropertiesProps): TypeParams => !props ? defaults() : {...defaults(), ...props};
