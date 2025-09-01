import { BentoGrid, BentoGridItem } from "./ui/Grid";
import { useAppSelector } from "@/lib/store/hooks";
import { Spotlight } from "./ui/Spotlight";

const Grid = () => {
    const gribItems = useAppSelector((state) => state.data.gridItems);
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gribItems.map((item: any, i: number) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;