import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { gridItems } from "../../../../data";
import { BentoGrid } from "../bento-grid";
import { BentoGridItem } from "../bento-grid";

const Grid = () => {
  return (
    <section id="#about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            titleClassName,
            className,
            img,
            spareImg,
            imgClassName,
            description,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              titleClassName={titleClassName}
              spareImg={spareImg}
              imgClassName={imgClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
