import PropTypes from "prop-types";

const TaskProfilePreview = ({ task }) => {
  return (
    <div className="card col-span-2 shadow-lg bg-base-300 p-5 flex flex-col">
      <div className="flex items-center">
        {task.clientName && (
          <h4 className="mb-5">Task von {task.clientName}:</h4>
        )}
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-auto mb-auto">
        {task.taskDescription && (
          <div className="flex justify-between w-full">
            <strong>Task Beschreibung:</strong>{" "}
            <span className="ml-1 flex-1 text-right break-words">
              {task.taskDescription}
            </span>
          </div>
        )}
        {task.clientIndustry && (
          <div className="flex justify-between w-full">
            <strong>Branche:</strong>{" "}
            <span className="ml-1 flex-1 text-right">
              {task.clientIndustry}
            </span>
          </div>
        )}
        {task.clientWebsite && (
          <div className="flex justify-between w-full">
            <strong>Website:</strong>{" "}
            <span className="ml-1 flex-1 text-right">{task.clientWebsite}</span>
          </div>
        )}
        {task.experienceLevel && (
          <div className="flex justify-between w-full">
            <strong>Experience:</strong>{" "}
            <span className="ml-1 flex-1 text-right">
              {task.experienceLevel}
            </span>
          </div>
        )}
        {task.pay && (
          <div className="flex justify-between w-full">
            <strong>Bezahlung:</strong>{" "}
            <span className="ml-1 flex-1 text-right">{task.pay}</span>
          </div>
        )}
        {task.requiredSkills && (
          <div className="flex justify-between w-full">
            <strong>Benötigte Skills:</strong>{" "}
            <span className="ml-1 flex-1 text-right">
              {task.requiredSkills}
            </span>
          </div>
        )}
        {task.clientDescription && (
          <div className="flex justify-between w-full">
            <strong>Klient Beschreibung:</strong>{" "}
            <span className="ml-1 flex-1 text-right break-words">
              {task.clientDescription}
            </span>
          </div>
        )}
        {task.tags && (
          <div className="selected-tags-container mt-5">
            {task.tags.map((tag, index) => (
              <button className="btn bg-base-100 btn-m m-1" key={index}>
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

TaskProfilePreview.propTypes = {
  task: PropTypes.object,
};

export default TaskProfilePreview;
