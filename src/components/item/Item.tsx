import { lastValueFrom, of } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { characterApiResponse } from "~/global";
import _ from "lodash"
import ItemDisplay from "./ItemDisplay";
import { createAsync } from "@solidjs/router";

const getCharacter = async (characterId: string) => {
    "use server"
    return await lastValueFrom(of(await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)).pipe(
        tap(() => { console.log("it will appear in the server log because of the 'use server'") }),
        switchMap(it => it.json()),
        map((it: characterApiResponse) => it)
    ))
}

export default function Item(params: { characterId: string }) {
    const result = createAsync(async()=>getCharacter(params.characterId))
    return <div>{!_.isNil(result()) && <ItemDisplay character={result()!} />}</div>
}
