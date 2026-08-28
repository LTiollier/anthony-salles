import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import Reveal from "@/components/reveal";

export default function CallToAction() {
  return (
    <Reveal
      y={50}
      className="flex flex-col max-w-5xl mt-40 px-4 mx-auto items-center justify-center text-center py-16 rounded-xl glass"
    >
      <h2 className="text-2xl md:text-4xl font-medium mt-2 text-gray-900">
        Besoin d'une consultation ?
      </h2>
      <p className="mt-4 text-sm/7 max-w-md text-gray-700">
        Prenez rendez-vous directement en ligne ou n'hésitez pas à me contacter
        pour planifier votre séance.
      </p>
      <div>
        <a
          href="https://www.doctolib.fr/masseur-kinesitherapeute/lyon/anthony-salles-lyon"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-blue-500 transition-none flex items-center gap-2 mt-8"
          aria-label="Prendre rendez-vous sur Doctolib (s'ouvre dans un nouvel onglet)"
        >
          Prendre rendez-vous
          <FontAwesomeIcon icon={faArrowRight} className="size-4" />
        </a>
      </div>
    </Reveal>
  );
}
