import React from "react";
import Project from "@classes/Project";

const ProjectCard = (props: Project) => {
    return (
        <div key={props.id}>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
        </div>
    );
};

export default ProjectCard;
