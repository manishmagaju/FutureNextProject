import React from "react";
import { getassignments } from "../api/assignments";

async function Assignmentpage() {
  const assignments = await getassignments();

  return (
    <div className="p-6">
      <h1 className="text-3xl text-red-600 mb-4 font-bold">Assignment</h1>
      <div className="overflow-x-auto">
        <table className="border w-full border-gray-300 border-collapse">
          <thead className="bg-gray-300">
            <tr>
              <th className="font-bold p-2 text-left border">Title</th>
              <th className="font-bold p-2 text-left border">Due Date</th>
              <th className="font-bold p-2 text-left border">Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td className="border p-2  hover:bg-gray-100 hover:text-red-500">
                  {assignment.title}
                </td>
                <td className="border p-2  hover:bg-gray-100 hover:text-red-500">
                  {assignment.dueDate}
                </td>

                <td className="border p-2  hover:bg-gray-100 hover:text-red-500">
                  {assignment.status === "pending" ? (
                    <span className="text-yellow-600 font-medium">pending</span>
                  ) : (
                    <span className="text-green-600 font-medium">
                      completed
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Assignmentpage;
