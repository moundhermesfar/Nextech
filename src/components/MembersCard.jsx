import MemberSingleCard from "./MemberSingleCard";

const MembersCard = ({ members }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {members.map((item) => (
        <MemberSingleCard key={item.id} member={item} />
      ))}
    </div>
  );
};

export default MembersCard;
