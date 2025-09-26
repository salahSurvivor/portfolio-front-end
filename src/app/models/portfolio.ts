import { Category } from "./category"

export interface Portfolio{
    _id?: String,
    title: String,
    cover: String[],
    category: Category,
    hashtags: String[],
    github: String,
    resume: String,
    description: String,
    images: String[]
}