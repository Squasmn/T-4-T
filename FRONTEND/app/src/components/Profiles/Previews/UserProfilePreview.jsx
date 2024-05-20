import PropTypes from "prop-types";

const UserProfilePreview = ({ profile }) => {
  return (
    <div className="card w-auto shadow-lg bg-base-300 p-5 flex flex-col">
      <div className="flex items-center">
        {profile.name && <h2 className="mb-5">{profile.name}</h2>}
      </div>
      <div className="h-auto flex flex-col items-center justify-center mt-auto mb-auto">
        {profile.email && (
          <div className="flex justify-between w-full">
            <strong>Email:</strong>{" "}
            <span className="ml-1 flex-1 text-right break-words">
              {profile.email}
            </span>
          </div>
        )}
        {profile.age && (
          <div className="flex justify-between w-full">
            <strong>Alter:</strong>{" "}
            <span className="ml-1 flex-1 text-right break-words">
              {profile.age}
            </span>
          </div>
        )}
        {profile.gender && (
          <div className="flex justify-between w-full">
            <strong>Geschlecht:</strong>{" "}
            <span className="ml-1 flex-1 text-right break-words">
              {profile.gender}
            </span>
          </div>
        )}
        {profile.languages && (
          <div className="flex justify-between w-full">
            <strong>Sprachen:</strong>{" "}
            <span className="ml-1 flex-1 text-right break-words">
              {profile.languages}
            </span>
          </div>
        )}
        {profile.linkedin && (
          <div className="flex justify-between w-full">
            <strong>LinkedIn:</strong>{" "}
            <span className="ml-1 flex-1 text-right break-words">
              {profile.linkedin}
            </span>
          </div>
        )}
        {profile.location && (
          <div className="flex justify-between w-full">
            <strong>Ort:</strong>{" "}
            <span className="ml-1 flex-1 text-right break-words">
              {profile.location}
            </span>
          </div>
        )}
        {profile.description && (
          <div className="flex justify-between w-full">
            <strong>Beschreibung:</strong>{" "}
            <span className="ml-1 flex-1 text-right break-words">
              {profile.description}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

UserProfilePreview.propTypes = {
  profile: PropTypes.object,
};

export default UserProfilePreview;
