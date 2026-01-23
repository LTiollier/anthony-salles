export const metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité du site Anthony Salles, masseur-kinésithérapeute à Lyon 7. Protection des données personnelles et respect de votre vie privée.",
};

export default function ConfidentialitePage() {
  return (
    <main className="px-4 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Politique de Confidentialité
        </h1>
        <p className="text-slate-500 mb-12">
          Dernière mise à jour : 23 Janvier 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <p className="text-slate-600 leading-relaxed">
              La protection de vos données personnelles est une priorité pour
              Anthony SALLES. Cette politique de confidentialité détaille la
              manière dont sont traitées les données collectées via le site{" "}
              <a
                href="https://anthony-salles.vercel.app"
                className="text-blue-600 hover:text-blue-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://anthony-salles.vercel.app
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Responsable du traitement
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Le responsable du traitement des données est :
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              <strong>Anthony SALLES</strong>
              <br />
              46 Rue de la Madeleine, 69007 Lyon
              <br />
              Email :{" "}
              <a
                href="mailto:anthony.salles@protonmail.com"
                className="text-blue-600 hover:text-blue-700"
              >
                anthony.salles@protonmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Données collectées et finalités
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Le Site ne collecte que les données que vous choisissez de
              transmettre via le formulaire de contact, à savoir :
            </p>
            <ul className="text-slate-600 leading-relaxed space-y-2 mt-4 list-disc list-inside">
              <li>Nom / Prénom</li>
              <li>Adresse email</li>
              <li>Objet et contenu de votre message</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              Ces informations sont utilisées exclusivement pour répondre à vos
              demandes de renseignements ou de prestations. Sans ces données, il
              ne sera pas possible de traiter votre demande.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Absence de cookies et de suivi
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Pour garantir une protection maximale de votre vie privée :
            </p>
            <ul className="text-slate-600 leading-relaxed space-y-2 mt-4 list-disc list-inside">
              <li>
                Aucun cookie tiers ou traceur n'est déposé sur votre terminal
                via ce Site.
              </li>
              <li>
                Aucun outil d'analyse d'audience (type Google Analytics) n'est
                activé.
              </li>
              <li>Votre navigation sur le Site reste totalement anonyme.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Base légale
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Le traitement de vos données de contact est fondé sur votre
              consentement, que vous manifestez en cliquant sur le bouton
              d'envoi du formulaire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Destinataires et transfert des données
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Les données sont uniquement destinées à Anthony SALLES. Elles ne
              sont jamais vendues, louées ou cédées à des tiers. L'hébergeur du
              site (Vercel) peut traiter des métadonnées de connexion (comme
              l'adresse IP) pour assurer la sécurité technique du service,
              conformément à ses propres obligations de sécurité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Durée de conservation
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Si la prise de contact n'aboutit pas à une relation contractuelle,
              vos données sont supprimées sous 3 ans maximum après le dernier
              échange.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              En cas de collaboration, les données sont conservées pour la durée
              de la relation commerciale et les obligations légales de
              facturation (10 ans).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              7. Vos droits
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="text-slate-600 leading-relaxed space-y-2 mt-4 list-disc list-inside">
              <li>
                Droit d'accès, de rectification et d'effacement de vos données.
              </li>
              <li>Droit de retirer votre consentement à tout moment.</li>
              <li>Droit à la limitation du traitement.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              Pour exercer ces droits, contactez-moi simplement à :{" "}
              <a
                href="mailto:anthony.salles@protonmail.com"
                className="text-blue-600 hover:text-blue-700"
              >
                anthony.salles@protonmail.com
              </a>
              .
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Si vous estimez que vos droits ne sont pas respectés, vous avez la
              possibilité d'introduire une réclamation auprès de la CNIL (
              <a
                href="https://www.cnil.fr"
                className="text-blue-600 hover:text-blue-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.cnil.fr
              </a>
              ).
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
