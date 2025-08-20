import React from "react";


const ProjectCard = ({ project }) => { 
    return (
        <div className="bg-white dark:bg-accent p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Project Title</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
                Brief description of the project goes here. It should be concise and informative.
            </p>
            <a href="#" className="text-primary hover:underline">
                View Project
            </a>
        </div>
    );
}

export default ProjectCard;