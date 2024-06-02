import teamData from './data/users.json';

export function Teams() {
  const team = teamData.team;

  return (
    <section id="team" className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Équipe</h2>
        <p className="mb-8">
          Notre équipe de staff dévouée assure une expérience de jeu fluide et
          agréable.
        </p>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {team.map((member) => (
          <article className="flex flex-col items-center" key={member.id}>
            <img className="rounded-full h-28" src={member.iconURL} alt="staff" />
            <h3 className="text-lg font-semibold mt-2">{member.name}</h3>
            <span className="text-sm">{member.role}</span>
          </article>
        ))}
      </section>
    </section>
  );
}
