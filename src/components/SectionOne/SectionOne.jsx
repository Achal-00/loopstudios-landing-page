import ImageHolder from "./ImageHolder";
import Content from "./Content";

export default function SectionOne() {
  return (
    <div className="px-5 py-20 grid gap-10 lg:p-32 lg:grid-cols-[1fr_0.3fr_1fr] lg:grid-rows-[0.5fr_1fr_0.5fr] lg:gap-0">
      <ImageHolder />
      <Content />
    </div>
  );
}
