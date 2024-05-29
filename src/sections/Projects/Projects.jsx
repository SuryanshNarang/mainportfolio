import viber from '../../assets/viberr.png';
import styles from './ProjectsStyles.module.css';
import youtube from '../../assets/youtube.avif';
import hipsster from '../../assets/hipsster.png';
import codepen from '../../assets/images.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={youtube}
          link="https://youtube-clonee-j32yaz76y-suryanshnarang.vercel.app/"
          h3="Youtube Clone"
          p="Watch videos without Ads"
        />
        <ProjectCard
          src={viber}
          link="https://movixx-bice.vercel.app/"
          h3="Movix"
          p="OTT Streaming Platform "
        />
        <ProjectCard
          src={codepen}
          link="https://codepen-omega.vercel.app/"
          h3="CodePen"
          p="Code Editor"
        />
      </div>
    </section>
  );
}

export default Projects;