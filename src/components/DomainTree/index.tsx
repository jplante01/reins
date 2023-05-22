const DomainTree = ({ selectedDomain, data }) => {
  if(data[selectedDomain]) {
    return (
    <>
      <AreasList areas={data[selectedDomain].areas}/>
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
              <li className="text-3xl ml-8 text-center" key={area.areaName}>{area.areaName}</li>
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
              <li className="ml-16 text-l" key={project.projectName}>{project.projectName}</li>
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
            <>
              <li className="ml-20 text-m underline" key={idx}>{task.taskName}</li>
              <NotesList notes={task.notes}/>
            </>
          )
        })}
      </ul>
    )
  } else {
    return null;
  }
}
const NotesList = ({ notes }) => {
  if(notes) {
    return (
      <ul>
        {notes.map((note, idx) => {
          return (
            <li className="ml-24 text-m text-gray-400" key={idx}>{note}</li>
          )
        })}
      </ul>
    )
  } else {
    return null;
  }
}
export default DomainTree;
