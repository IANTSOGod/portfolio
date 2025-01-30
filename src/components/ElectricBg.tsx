import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const Electricbg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log("Particles loaded:", container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          className="absolute top-0 left-0 w-full h-full -z-10"
          options={{
            background: {
              color: "#000000", // Fond noir
            },
            particles: {
              number: {
                value: 120, // Augmenté pour plus d'effet
                density: {
                  enable: true,
                },
              },
              color: {
                value: "#00FFFF", // Cyan électrique
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.7,
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false,
                },
              },
              size: {
                value: { min: 2, max: 5 }, // Particules de taille variable
                animation: {
                  enable: true,
                  speed: 5,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: 8, // Très rapide pour un effet électrique
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                  default: "out",
                },
                attract: {
                  enable: true,
                },
              },
              links: {
                enable: true,
                distance: 120,
                color: "#00FFFF",
                opacity: 0.8,
                width: 2,
                blink: true, // Effet clignotant pour simuler l’électricité
                consent: false,
              },
              glow: {
                enable: true, // Ajout d'une lueur électrique
                color: "#00FFFF",
                blur: 5,
                intensity: 2,
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
                push: {
                  quantity: 4,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};
