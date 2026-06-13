import Reveal from "@/components/reveal";

export default function SectionTitle({ title, description }) {
  return (
    <div className="text-center">
      <Reveal y={24}>
        <h2 className="text-3xl font-semibold max-w-lg mx-auto mt-4 text-gray-900">
          {title}
        </h2>
      </Reveal>
      <Reveal y={24} delay={0.1}>
        <p className="mt-4 text-center text-sm/7 text-gray-700 max-w-md mx-auto">
          {description}
        </p>
      </Reveal>
    </div>
  );
}
