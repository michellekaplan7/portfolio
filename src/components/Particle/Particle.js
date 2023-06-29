import React, { useCallback } from "react";

import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="particles-js"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0
        },
        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          color: {
            value: "#fff"
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: true
            }
          },
          size: {
            value: 7,
            random: true,
            anim: {
              enable: true,
              speed: 3
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            speed: 0.2
          }
        }
      }}
    />
  );
};

export default Particle;
