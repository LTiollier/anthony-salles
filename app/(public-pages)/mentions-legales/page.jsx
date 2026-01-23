export const metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site Anthony Salles, masseur-kinésithérapeute à Lyon 7.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="px-4 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
          Mentions Légales
        </h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <p className="text-slate-600 leading-relaxed">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin
              2004 pour la confiance en l'économie numérique, il est précisé aux
              utilisateurs du site Anthony Salles l'identité des différents
              intervenants dans le cadre de sa réalisation et de son suivi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Édition du site
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Le présent site, accessible à l'URL{" "}
              <a
                href="https://anthony-salles.vercel.app"
                className="text-blue-600 hover:text-blue-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://anthony-salles.vercel.app
              </a>{" "}
              (le « Site »), est édité par :
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Anthony SALLES, résidant 46 Rue de la Madeleine, 69007 Lyon, de
              nationalité Française (France), né(e) le 28/09/1994, inscrite au
              R.C.S. de LYON sous le numéro 90136034700032.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Hébergement
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Le Site est hébergé par la société Vercel, situé 340 S Lemon Ave
              #4133, Walnut, CA 91789, États-Unis (contact téléphonique ou email
              : +15592887060).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Directeur de publication
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Le Directeur de la publication du Site est Anthony SALLES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Nous contacter
            </h2>
            <ul className="text-slate-600 leading-relaxed space-y-2">
              <li>
                <strong>Par téléphone :</strong>{" "}
                <a
                  href="tel:+33478724280"
                  className="text-blue-600 hover:text-blue-700"
                >
                  +33478724280
                </a>
              </li>
              <li>
                <strong>Par email :</strong>{" "}
                <a
                  href="mailto:anthony.salles@protonmail.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  anthony.salles@protonmail.com
                </a>
              </li>
              <li>
                <strong>Par courrier :</strong> 46 Rue de la Madeleine, 69007
                Lyon
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
