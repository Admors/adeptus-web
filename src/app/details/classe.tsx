export function Classe() {
  return (
    <section className="container">
      <h1 className="toUpper">Ingénieur</h1>
      <section className="backgroundDetails"></section>
      <section className="objectif">
        <h2 className="toUpper">Mission</h2>
        <section className="backgroundContain">
          <article>
            <img src="objectif/support.webp" />
            <p className="toUpper">Soutiens</p>
            <p>
              Apportez un soutien stratégique essentiel à la première ligne de
              défense. Maintenir la position.
            </p>
          </article>
          <article>
            <img src="objectif/supply.webp" />
            <p className="toUpper">Ravitaillement</p>
            <p>
              Agissez sur la gestion efficace des munitions et garantissant un
              ravitaillement en temps opportun pour assurer le bon déroulement
              des opérations.
            </p>
          </article>
          <article>
            <img src="objectif/EOD.webp" />
            <p className="toUpper">EOD</p>
            <p>
              La défense va au-delà des points stratégiques. Soyez prêt à
              détecter, désamorcer et déminer les explosifs.
            </p>
          </article>
        </section>
      </section>
    </section>
  );
}
