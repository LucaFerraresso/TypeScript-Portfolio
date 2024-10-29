import { TextEffect } from "./core/TextEffect";

const TextEffectWithDelay = () => {
  return (
    <div className="flex flex-col space-y-0">
      <TextEffect
        per="char"
        delay={0.5}
        variants={{
          container: {
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: {
              opacity: 0,
              rotateX: 90,
              y: 10,
            },
            visible: {
              opacity: 1,
              rotateX: 0,
              y: 0,
              transition: {
                duration: 0.2,
              },
            },
          },
        }}
      >
        testo 1
      </TextEffect>
      <TextEffect per="char" delay={1.5}>
        testo 2
      </TextEffect>
      <TextEffect
        per="char"
        delay={2.5}
        className="pt-12 text-xs"
        preset="blur"
      >
        testo 3
      </TextEffect>
    </div>
  );
};
export default TextEffectWithDelay;
