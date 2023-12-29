
import { ICharacter } from "~/global"

export default function ItemDisplay(params: { character: ICharacter }) {
    return <ul>
        <li>{params.character.name}</li>
    </ul>
}
