export interface IBreadCrumbs {
    id: number
    title: string
    active: boolean
}

export interface INewsTags {
    name: string
    code: string
    values: [
        {
            name: string
            code: string
            color: string
            src: string
        },
    ]
}

export interface INewsNext {
    id: number
    code: string
    date: string
    title: string
    tags: INewsTags[]
    picture: string
}

export interface INewsResult {
    id: number
    title: string
    date: string
    code: string
    tags: INewsTags[]
    next: INewsNext
}

export interface INewsResponse {
    data: {
        result: INewsResult
    }
    success: string
}
