import { getcourses } from "../api/courses";
import Link from "next/link";
import { MdSettings } from "react-icons/md";

const MyCoursesPage = async () => {
  const courses = await getcourses();

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4 ">My Courses</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Course Name</th>
              <th className="border p-2 ">Duration</th>
              <th className="border p-2 ">Teacher</th>
              <th className="border p-2  ">
                <MdSettings />{" "}
              </th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="border p-2">{course.coursename}</td>
                <td className="border p-2">{course.duration}</td>
                <td className="border p-2">{course.teachername}</td>
                <td className="px-6 py-4 text-center border p-2">
                  <Link
                    href={`mycourses/${course.id}`}
                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg  hover:bg-slate-700 hover:shadow-lg transition-all duration-200"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyCoursesPage;
