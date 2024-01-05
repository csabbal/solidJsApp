import { createAsync, useParams } from "@solidjs/router";
import _ from "lodash";
import { lastValueFrom, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { characterApiResponse } from "~/global";
import ItemDisplay from "./ItemDisplay";

const getCharacter = async (characterId: string) => {
    return await lastValueFrom(of(await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)).pipe(
        switchMap(it => it.json()),
        map((it: characterApiResponse) => it)
    ))
}

export default function Item() {
    const params: { characterId: string } = useParams();
    console.log('params',params)
    const result = createAsync(async () => getCharacter(params.characterId))
    return <div>{!_.isNil(result()) && <ItemDisplay character={result()!} />}</div>
}
