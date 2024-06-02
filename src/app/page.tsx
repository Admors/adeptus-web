import { headers } from 'next/headers';
import { Teams } from './teams';

export default function Home() {
  return (
    <main className='flex-1'>
      <Teams />
    </main>
  );
}
