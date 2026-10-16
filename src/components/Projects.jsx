import ProjectCard from "./ProjectCard.jsx";

function Projects({projects}) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured<span className="gradient-text">Projects</span></h2>

        <div className="grid project-grid">
        {
          projects.map((project)=>(
           <ProjectCard key={project.id} project={project} />
          ))
        }
        </div>
      </div>
    </section>
  );
}

export default Projects;
