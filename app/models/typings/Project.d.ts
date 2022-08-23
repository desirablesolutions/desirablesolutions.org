import type { IPerson } from "@typings/Person"

export interface IProject {
    id: string;
    name: string;
    status: [],
    covers: [],
    url: string;
    impressum: string;
    production: string;
    description: string;
    tags: [];
    provisioners?: IPerson[]
}