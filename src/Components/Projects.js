import './Styles/Projects.scss';
import reactDom from 'react-dom';

function Projects() {

    const projects = [
        {
            name: 'Test Project',
            imageName: 'RockPaperScissors'
        },
        {
            name: 'Test',
            imageName: 'RockPaperScissors'
        },
        {
            name: 'Test',
            imageName: 'RockPaperScissors'
        }
    ];

    return (
        <section id="projects">
            <div className="title">My Projects</div>
            <div className="projectContainer">
                {projects.map((proj, index) => 
                    <div key={Math.random() * index} style={{ backgroundImage: `url(/Images/${proj.imageName}.png)` }}>
                        {proj.name}
                        </div>
                )}
            </div>
        </section>
    )
}

export default Projects;