const MemberTable = ({ members }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Family name</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Name
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Faculty
          </th>
          <th className="border border-slate-600 rounded-md">
            Year of studying
          </th>
          <th className="border border-slate-600 rounded-md">Email</th>
          <th className="border border-slate-600 rounded-md">Motivation</th>
          <th className="border border-slate-600 rounded-md">Skills</th>
          <th className="border border-slate-600 rounded-md">Comments</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member, index) => (
          <tr key={member._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {member.familyName}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {member.name}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {member.faculty}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {member.yearOfStudying}
            </td>{" "}
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {member.email}
            </td>{" "}
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {member.motivation}
            </td>{" "}
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {member.skills}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {member.comments}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MemberTable;
