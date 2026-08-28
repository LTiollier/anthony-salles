import Reveal from "@/components/reveal";

export default function SectionTitle({ title, description, isH1 = false }) {
  const HeadingTag = isH1 ? "h1" : "h2";
  return (
    <div className="text-center">
      <Reveal y={24}>
        <HeadingTag className="text-3xl font-semibold max-w-lg mx-auto mt-4 text-gray-900">
          {title}
        </HeadingTag>
      </Reveal>
      <Reveal y={24} delay={0.1}>
        <p className="mt-4 text-center text-sm/7 text-gray-700 max-w-md mx-auto">
          {description}
        </p>
      </Reveal>
    </div>
  );
}
