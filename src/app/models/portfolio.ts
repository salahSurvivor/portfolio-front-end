import { Category } from "./category"

export interface CaseStudy {
    problem: string,
    solution: string,
    features: string[],
    techStack: string[],
    impact: string
}

export interface Portfolio{
    _id?: string,
    title: string,
    hook?: string,
    cover: string[],
    category: Category | string,
    hashtags: string[],
    github: string,
    liveDemo?: string,
    resume: string,
    description: string,
    images: string[],
    caseStudy?: CaseStudy
}
