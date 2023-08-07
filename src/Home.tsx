import Computer from "./components/Computer";

const Home = () => {
  return (
    <div className="flex paddingX paddingY pt-44">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p className="text-tertiary">Hi, My name is Oscar Encinas</p>
          <h1 className="text-7xl text-white font-serif max-w-8xl">
            I enjoy making computer programs, one line at a time.
          </h1>
          <p className="text-tertiary mt-20 text-md">
            I love building backed applications, managing cloud infrastructure
            and designing complex systems.
          </p>
        </div>
        <Computer />
      </div>
    </div>
  );
};

export default Home;
