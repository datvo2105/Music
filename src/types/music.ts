import {IUser} from './user'

export interface IAlbum {
    id: string
    name: string
    authorId: string
    desc: string
    image: string

    author?: IUser
    medias?: IMusic[]
}

export interface IMusic {
    id: string
    name: string
    desc: string
    image: string
    src: string
    authorId: string
    isPremium: boolean
    albumId?: string
    author?: IUser
    album?: IAlbum
}
