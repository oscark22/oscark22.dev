import ComputerCanvas from "./components/Computer";

const Home = () => (
  <section>
    <div className="absolute flex top-[100px] inset-0 paddingX sm:mt-20">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col">
          <p className="text-tertiary">Hi, My name is Oscar Encinas</p>
          <h1 className="text-6xl sm:text-7xl text-white font-serif max-w-8xl">
            I enjoy making computer programs, one line at a time.
          </h1>
          <p className="text-tertiary mt-6 sm:mt-16 text-md">
            I love building backed applications, managing cloud infrastructure
            and designing complex systems.
          </p>
        </div>
        <ComputerCanvas />
      </div>
    </div>

    <div className="hidden sm:flex absolute bottom-8 w-full justify-center">
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
    </div>
  </section>
);

export default Home;
