import { useEffect, useState } from 'react';
import './Styles/Projects.scss';
import reactDom from 'react-dom';
import sanityClient from '../client';

function Projects() {

    const [data, getProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"] {
            title,
            description,
            mainImage,
            link
        }`).then(data => getProjectData(data))
        .catch(console.error);
    }, []);

    console.log(data[0].mainImage);

    return (
        <section id="projects">
            <div className="title">My Projects</div>
            <div className="projectContainer">
                { data && data.map((proj, index) => 
                    <div key={Math.random() * index} style={{ backgroundImage: `${proj.mainImage})}` }}>
                        {proj.title
                        }
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects;