import { lastValueFrom, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { createEffect, createResource } from "solid-js";
import { ICharacterListApiResponse } from "~/global";

export default function List() {
  const [results] = createResource(async () => {
    return await lastValueFrom(of(await fetch("https://rickandmortyapi.com/api/character")).pipe(
      switchMap(it => it.json()),
      map((it: ICharacterListApiResponse) => it.results)
    ))
  })

  createEffect(() => {
    console.log('status ofresults', results())
  })

  return (
    <ul>
      {results() && results()!.map((result) => (
       <li><a href={`/list/${result.id}`}>{result.name}</a></li>
      ))}
    </ul>
  );
}
