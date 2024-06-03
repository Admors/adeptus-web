import { Classe } from "./classe";
import { Instructor } from "./intructor";

export default function Details() {
  return (
    <main className='flex-1'>
        <Classe />
        <Instructor />
    </main>
  );
}