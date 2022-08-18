import type { IPerson } from "@typings/Person"


export interface IProject {
    id: string;
    name: string;
    tags: [],
    covers: [],
    status: string;
    url: string;
    impressum: string;
    description: string;
    services: [];
    provisioners?: IPerson[]
}