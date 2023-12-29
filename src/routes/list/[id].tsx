import { useParams } from "@solidjs/router";
import Item from "~/components/item/Item";
 
export default function UserPage() {
  const params = useParams();
  return   <Item characterId={params.id} />
}