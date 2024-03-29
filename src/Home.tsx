import ComputerCanvas from "./components/Computer";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "./variants";

const Home = () => {
  return (
    <section className="relative w-full h-full mx-auto">
      <div className="absolute flex flex-col xl:flex-row top-[60px] xl:top-[100px] inset-0 paddingX mt-12 lg:mt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={zoomIn("spring", 0.8, 0.6, 0.9)}
          className="flex flex-col"
        >
          <p className="text-tertiary">Hi, My name is Oscar Encinas</p>
          <h1 className="text-6xl sm:text-7xl text-white font-serif max-w-8xl">
            I enjoy making computer programs, one line at a time.
          </h1>
          <p className="text-tertiary mt-6 lg:mt-12 text-md">
            I love building backend applications, managing cloud infrastructure
            and designing complex systems.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 h-auto min-w-[200px] md:min-w-[450px]"
          initial="hidden"
          animate="visible"
          variants={fadeIn("spring", 1, 0.9)}
        >
          <ComputerCanvas />
        </motion.div>
      </div>

      {/* <div className="hidden lg:flex absolute bottom-10 w-full justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="white"
          className="bi bi-mouse-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V5zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z" />
        </svg>
      </div> */}
    </section>
  );
};

export default Home;
