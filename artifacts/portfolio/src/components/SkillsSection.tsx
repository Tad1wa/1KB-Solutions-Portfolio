import React from "react";
import { 
  SiReact, 
  SiNodedotjs, 
  SiPostgresql, 
  SiExpress, 
  SiTailwindcss, 
  SiFigma, 
  SiThreedotjs 
} from "react-icons/si";
import { Database } from "lucide-react"; // Drizzle fallback

export default function SkillsSection() {
  const skills = [
    { name: "React", icon: SiReact, i: 0 },
    { name: "Node.js", icon: SiNodedotjs, i: 1 },
    { name: "PostgreSQL", icon: SiPostgresql, i: 2 },
    { name: "Express", icon: SiExpress, i: 3 },
    { name: "Tailwind CSS", icon: SiTailwindcss, i: 4 },
    { name: "Figma", icon: SiFigma, i: 5 },
    { name: "Drizzle ORM", icon: Database, i: 6 },
    { name: "Three.js", icon: SiThreedotjs, i: 7 },
  ];

  return (
    <section id="skills" className="pt-24 md:pt-32" data-testid="section-skills">
      <div className="mb-12 reveal">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Core Stack</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
      </div>

      <div className="skill-grid flex flex-wrap gap-4 reveal-stagger">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div 
              key={skill.name}
              className="glass-card px-6 py-4 flex items-center gap-3 group"
              style={{ "--i": skill.i } as React.CSSProperties}
            >
              <Icon className="text-muted-foreground group-hover:text-primary transition-colors text-xl" />
              <span className="font-medium text-foreground group-hover:text-white transition-colors">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}