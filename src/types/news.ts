export interface INewImage {
    thumbnail: string
    title?: string 
}

export interface INew {
    id: string
    title: string;
    url: string;
    body: string;
    description: string;
    image: INewImage
}

export interface INews {
    totalCount: number
    value: INew[]
}
  