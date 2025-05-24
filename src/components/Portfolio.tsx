import React from 'react';

interface ProjectCardProps {
  imageSrc: string;
  demoUrl: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, demoUrl, className }) => {
  return (
    <div className={`group relative rounded-lg overflow-hidden shadow-md ${className}`}>
      <img src={imageSrc} alt="Project" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/90 hover:bg-white text-gray-900 px-6 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl"
        >
          View Demo
        </a>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const projects = [
    {
      imageSrc: "https://ik.imagekit.io/4hotelsolution/Frame%201%20(10).webp?updatedAt=1747750529986",
      demoUrl: "https://gregarious-alfajores-f8f401.netlify.app/"
    },
    {
      imageSrc: "https://ik.imagekit.io/4hotelsolution/Frame%204.webp?updatedAt=1747750529998",
      demoUrl: "https://transcendent-caramel-7b28b8.netlify.app/"
    },
    {
      imageSrc: "https://ik.imagekit.io/4hotelsolution/Frame%202.webp?updatedAt=1747750529631",
      demoUrl: "https://heroic-kleicha-13c86c.netlify.app/"
    },
    {
      imageSrc: "https://ik.imagekit.io/4hotelsolution/Frame%206.webp?updatedAt=1747828233412",
      demoUrl: "https://leafy-squirrel-f61a3f.netlify.app/"
    },
    {
      imageSrc: "https://ik.imagekit.io/4hotelsolution/Frame%205.webp?updatedAt=1747828327740",
      demoUrl: "https://vermillion-babka-7a53a9.netlify.app/"
    },
    {
      imageSrc: "https://ik.imagekit.io/4hotelsolution/Frame%207.webp?updatedAt=1747828233478",
      demoUrl: "https://lambent-axolotl-09cdca.netlify.app/"
    }
  ];

  return (
    <div id="portfolio" className="px-6 mb-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Temukan Desain Terbaik Kami: Pilih Demo dibawah ini untuk Menginspirasi Anda
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            imageSrc={project.imageSrc}
            demoUrl={project.demoUrl}
            className="aspect-[4/3]"
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;