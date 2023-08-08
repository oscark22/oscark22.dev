import BlueRectangle from "./components/BlueRectangle";
import { blueRectangles } from "./constants";

const Aboutme = () => {
  return (
    <section className="w-full h-screen mx-auto">
      <div className="flex flex-row marginTop">
        <div className="flex flex-col w-6/12 align-middle px-6">
          <img src="src/assets/me.png" className="object-cover object-center" />
        </div>
        <div className="flex flex-col paddingX">
          <h2 className="text-5xl font-serif">About me</h2>
          <p className="mt-8">
            Oscar Encinas is a software engineer with a huge focus on building
            backend applications. He has worked with technologies such as
            Docker, AWS, Spring Boot, Express, Kubernetes, and well-known
            programming languages.
            <br />
            <br />
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
          <div className="flex flex-col gap-2 mt-12">
            {blueRectangles.map(({ text, icon }, idx) => (
              <BlueRectangle key={idx} text={text}>
                {icon}
              </BlueRectangle>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
