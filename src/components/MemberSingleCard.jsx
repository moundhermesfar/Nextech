import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { BiUserCircle } from "react-icons/bi";

const MemberSingleCard = ({ member }) => {
  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      <img
        src={member.pic}
        alt="Member Profile"
        className="rounded-full w-24 h-24 object-cover absolute right-2 top-2"
      />
      <div className="flex justify-start items-center gap-x-2">
        <FontAwesomeIcon icon={faUser} className="text-red-600 text-2xl" />
        <h2 className="my-1">{member.name}</h2>
        <h2 className="my-1">{member.familyName}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <FontAwesomeIcon
          icon={faUserGraduate}
          className="text-red-600 text-2xl"
        />
        <h2 className="my-1">{member.yearOfStudying}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-600 text-2xl" />
        <h2 className="my-1">{member.position}</h2>
      </div>
    </div>
  );
};

export default MemberSingleCard;
