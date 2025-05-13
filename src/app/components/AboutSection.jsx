"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>React</li>
        <li>React Icons</li>
        <li>JavaScript</li>
        <li>Resend</li>
        <li>Python</li>
        <li>R</li>
        <li>C++</li>
        <li>Java</li>
        <li>Matplotlib</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>Pandas</li>
        <li>NumPy</li>
        <li>Data Analysis</li>
        <li>Data Visualization</li>
        <li>Marketing Research/Market Research</li>
        <li>Marketing Strategy</li>
        <li>Bilingual: Mandarin, English</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>UC Riverside / University of California, Riverside</li>
        <li>Major: Bachelor of Science in Data Science: Fall 2022 – March 2025</li>
        <li>GPA: 3.69</li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "Work Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>UC Riverside 2024 DS-PATH Fellow</li>
        <li>Self-Driven Web Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/selfie3.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a detail-oriented Data Science student with strong experience in Python
            , machine learning, and sustainability-related large dataset projects. 
            Passionate about organizing information, solving problems, and delivering practical solutions. 
            I also enjoy exploring new knowledge to broaden my horizons—I'm naturally curious and always eager to learn new things.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Work Experience")}
              active={tab === "Work Experience"}
            >
              {" "}
              Experiences{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
