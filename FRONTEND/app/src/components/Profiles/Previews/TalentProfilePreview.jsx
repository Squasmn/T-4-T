import PropTypes from "prop-types";

const TalentProfilePreview = ({ talent }) => {
  return (
    <div className="card col-span-2 shadow-lg bg-base-300 p-5 flex flex-col">
      <div className="flex items-center">
        {talent.name && <h4 className="mb-5">Skills von {talent.name}:</h4>}
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-auto mb-auto">
        {talent.WorkDescription && (
          <div className="flex justify-between w-full">
            <strong>Beschreibung Arbeit:</strong>{" "}
            <span className="ml-1 flex-1 text-right break-words">
              {talent.WorkDescription}
            </span>
          </div>
        )}
        {talent.background && (
          <div className="flex justify-between w-full">
            <strong>Hintergrund:</strong>{" "}
            <span className="ml-1 flex-1 text-right">{talent.background}</span>
          </div>
        )}
        {talent.certifications && (
          <div className="flex justify-between w-full">
            <strong>Zertiifikate:</strong>{" "}
            <span className="ml-1 flex-1 text-right">
              {talent.certifications}
            </span>
          </div>
        )}
        {talent.education && (
          <div className="flex justify-between w-full">
            <strong>Ausbildung:</strong>{" "}
            <span className="ml-1 flex-1 text-right">{talent.education}</span>
          </div>
        )}
        {talent.github && (
          <div className="flex justify-between w-full">
            <strong>Github:</strong>{" "}
            <span className="ml-1 flex-1 text-right">{talent.github}</span>
          </div>
        )}
        {talent.portfolio && (
          <div className="flex justify-between w-full">
            <strong>Portfolio:</strong>{" "}
            <span className="ml-1 flex-1 text-right">{talent.portfolio}</span>
          </div>
        )}
        {talent.skills && (
          <div className="flex justify-between w-full">
            <strong>Skills:</strong>{" "}
            <span className="ml-1 flex-1 text-right">{talent.skills}</span>
          </div>
        )}
        {talent.workingFields && (
          <div className="flex justify-between w-full">
            <strong>Arbeitsfelder:</strong>{" "}
            <span className="ml-1 flex-1 text-right">
              {talent.workingFields}
            </span>
          </div>
        )}
        {talent.tags && (
          <div className="selected-tags-container mt-5">
            {talent.tags.map((tag, index) => (
              <button className="btn bg-base-100 btn-m m-1 " key={index}>
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
TalentProfilePreview.propTypes = {
  talent: PropTypes.object,
};

export default TalentProfilePreview;
