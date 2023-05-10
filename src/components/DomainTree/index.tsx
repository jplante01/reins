const DomainTree = ({ domain }) => {
  console.log(domain);
  if(domain) {
    return (
    <>
      <h1 className="text-2xl ml-4">{domain.domainName}</h1>
      <AreasList areas={domain.areas}/>
    </>
    )
  } else {
    return null;
  }
};

const AreasList = ({ areas }) => {
  if(areas) {
    return (
      <ul>
        {areas.map((area, idx) => {
          return (
            <>
              <li className="text-xl ml-8" key={idx}>{area.areaName}</li>
              <ProjectsList projects={area.projects}/>
            </>
          )
        })}
      </ul>
    )
  } else {
    return null;
  }
}

const ProjectsList = ({ projects }) => {
  if(projects) {
    return (
      <ul>
        {projects.map((project, idx) => {
          return (
            <>
              <li className="ml-16 text-l" key={idx}>{project.projectName}</li>
              <TasksList tasks={project.tasks}/>
            </>
          )
        })}
      </ul>
    )
  } else {
    return null;
  }
}
const TasksList = ({ tasks }) => {
  if(tasks) {
    return (
      <ul>
        {tasks.map((task, idx) => {
          return (
            <li className="ml-20 text-m underline" key={idx}>{task.taskName}</li>
          )
        })}
      </ul>
    )
  } else {
    return null;
  }
}
export default DomainTree;
