import type { IPerson } from "@typings/Person"



export enum Status {
    Production = "Production",
}


export enum Tags {
    Frontend = "Frontend",
    Backend = "Backend",
    Mobile = "Mobile",
    Testing = "Testing",
    Design = "Design",
    Other = "Other",
}
export interface IProject {
    id: string;
    name: string;
    status: Status,
    covers: [],
    url: string;
    impressum: string;
    description: string;
    tags: Tags[];
    provisioners: IPerson[]
}