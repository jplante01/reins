import { AiOutlinePlus } from 'react-icons/ai';

const DomainTree = ({ selectedDomain, data }) => {
  if(data[selectedDomain]) {
    return (
    <div className="pt-16">
      <AreasList areas={data[selectedDomain].areas}/>
    </div>
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
              <li className="text-3xl ml-8 mb-6 text-center" key={area.areaName}>{area.areaName}</li>
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
      <>
      <ul>
        {projects.map((project, idx) => {
          return (
            <>
              <div className="flex mb-6">
                <div className="flex content-center bg-slate-900 rounded-r-xl">
                  <li className="ml-16 mr-2 text-3xl text-slate-200" key={project.projectName}>{project.projectName}</li>
                  <AiOutlinePlus size='32' className="text-slate-400 hover:text-teal-500 hover:cursor-pointer m-auto"/>
                </div>
                </div>
                <TasksList tasks={project.tasks}/>
                <div className="pt-10"></div>
            </>
          )
        })}
      </ul>
      </>
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
              <li className="ml-20 mt-8 text-xl underline" key={task.taskName}>{task.taskName}</li>
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
            <li className="ml-24 mt-2 text-xl text-gray-400" key={note}>{note}</li>
          )
        })}
      </ul>
    )
  } else {
    return null;
  }
}
export default DomainTree;
