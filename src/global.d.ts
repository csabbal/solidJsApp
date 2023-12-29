/// <reference types="@solidjs/start/env" />

export interface ICharacter {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string
}
export interface ICharacterListApiInfo {
    count: number,
    pages: number,
    next: string,
    prev: string
}
export interface ICharacterListApiResponse {
    info: ICharacterListApiInfo,
    results: ICharacter[]
}

export interface characterApiResponse extends ICharacter {

}

