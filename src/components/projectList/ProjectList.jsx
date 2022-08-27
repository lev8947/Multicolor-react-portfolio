import "./projectList.css"
import Project from "../project/Project"
import {projects} from "../../data"

const ProjectList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
          Front & backend made with functionality and impeccable design. Take a tour - 
          but remember: <h2>anything is possible.</h2>
        </p>
        </div>
        <div className="pl-list">
          {projects.map(item=>(
            <Project key={item.id} img={item.img} link={item.link} />
          ))}

        </div>
    </div>
  )
}

export default ProjectList
