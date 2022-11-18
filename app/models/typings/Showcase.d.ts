import type { ProjectProps } from "@typings/Project"

export type ShowcaseProps = {
    title?: string,
    featured?: ProjectProps,
    latest?: ProjectProps[],
    order?: string,
    heading?: string,
    cta?: object
}
