import SkillsItems from "./skillsItems";
import { skills } from "./data";

function SkillsGrid(){
  return(
    <section id="skills" class="skills">
    <h2>Skills</h2>
    <div class="skills-grid">
      {skills.map((skill) => (
        <SkillsItems
        key={skill.name}
        image={skill.image.src} 
        alt={skill.image.alt}
        name={skill.name}></SkillsItems>
      ))}

    </div>
    </section>
  );
}

export default SkillsGrid;