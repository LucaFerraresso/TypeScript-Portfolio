import icons from "@/assets/DataArray/TechSectionArray";
import InfiniteSlider from "../library/InfiniteSlider";
import TechIcon from "../atoms/TechIcon";

const InfiniteTechSection = () => {
  return (
    <>
      <InfiniteSlider gap={24} reverse className="p-4">
        <div className="flex items-center justify-around min-w-full flex-shrink-0 flex-wrap gap-4">
          {icons.map((icon, index) => (
            <TechIcon
              key={`duplicate-${index}`}
              icon={icon.component}
              title={icon.title}
            />
          ))}
        </div>
      </InfiniteSlider>
    </>
  );
};

export default InfiniteTechSection;
