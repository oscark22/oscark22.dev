import BlueRectangle from "./components/BlueRectangle";
import { blueRectangles } from "./constants";
import { motion } from "framer-motion";
import Me from "/src/assets/me.png";
import { fadeIn, slideIn, zoomIn } from "./variants";

const Aboutme = () => {
  return (
    <section id="aboutme" className="w-full min-h-screen mx-auto">
      <div className="flex flex-col lg:flex-row marginTop">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("spring", 1, 0.2)}
          className="flex flex-col mb-6 lg:mb-0 align-middle px-6 items-center lg:min-w-[400px]"
        >
          <img src={Me} className="object-cover object-center w-80 md:w-96" />
        </motion.div>
        <div className="flex flex-col paddingX">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={zoomIn("spring", 1, 0.2, 0.9)}
          >
            <h2 className="text-5xl font-serif">About me</h2>
            <p className="mt-5 sm:mt-8">
              Oscar Encinas is a software engineer with a huge focus on building
              backend applications. He has worked with technologies such as
              Docker, AWS, Spring Boot, Express, Kubernetes, and well-known
              programming languages.
            </p>
            <p className="mt-5 sm:mt-8">
              He also enjoys designing new systems, working in the cloud, and
              playing board games with his friends in his spare time, especially{" "}
              <a
                href="https://www.catan.com/"
                className="text-primary font-bold hover:text-black"
                target="_blank"
              >
                Catan
              </a>{" "}
              and{" "}
              <a
                href="https://www.unstablegames.com/collections/unstable-unicorns"
                className="text-primary font-bold hover:text-black"
                target="_blank"
              >
                Unstable Unicorns
              </a>
              . If you want to know more about him, you can follow him on{" "}
              <a
                href="https://github.com/oscark22/"
                className="text-primary font-bold hover:text-black"
                target="_blank"
              >
                GitHub
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/in/oscar-encinas-2x/"
                className="text-primary font-bold hover:text-black"
                target="_blank"
              >
                LinkedIn
              </a>
              .
            </p>
          </motion.div>
          <div className="flex flex-col gap-2 mt-9 sm:mt-12 mb-6">
            {blueRectangles.map(({ text, icon }, idx) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideIn("spring", 1, idx * 0.4, -30, 0.3)}
                key={idx}
              >
                <BlueRectangle text={text}>{icon}</BlueRectangle>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
