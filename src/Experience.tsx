import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { jobs } from "./constants";
import { motion } from "framer-motion";
import { zoomIn } from "./variants";

interface Experience {
  date: string;
  company: string;
  title: string;
  description: string;
  logo: string;
  iconBgColor: string;
}

const Experience = () => {
  return (
    <section id="experience" className="relative w-full mx-auto bg-[#030D1F]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomIn("spring", 0.8, 0, 0.9)}
        viewport={{ once: true }}
        className="flex flex-col paddingY paddingX"
      >
        <h2 className="text-5xl font-serif text-white">Experience</h2>
        <p className="text-tertiary mt-4 text-md max-w-lg">
          I love building backend applications, managing cloud infrastructure
          and designing complex systems.
        </p>
      </motion.div>
      <VerticalTimeline lineColor="white">
        {jobs.map(
          (
            {
              date,
              company,
              title,
              description,
              logo,
              iconBgColor,
            }: Experience,
            idx
          ) => (
            <VerticalTimelineElement
              key={idx}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#002058", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #002058" }}
              date={date}
              icon={
                <div className="flex h-full w-full items-center align-middle justify-center">
                  <img
                    src={logo}
                    alt={company}
                    className="object-contain h-[68%] w-[68%]"
                  />
                </div>
              }
              iconStyle={{ background: iconBgColor }}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">
                {company}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">{title}</h4>
              <p>{description}</p>
            </VerticalTimelineElement>
          )
        )}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
