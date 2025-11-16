import React from "react";
import { getcourses } from "@/app/api/courses";

async function getCourseById(coursesId) {
  const courses = await getcourses();

  const course = courses.find((c) => String(c.coursesId) === String(coursesId));

  return course;
}

const CourseDetailPage = async ({ params }) => {
  const { coursesId } = params;

  const course = await getCourseById(coursesId);

  if (!course) {
    return (
      <div className="p-6 text-red-600">
        Course not found for ID: {coursesId}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-blue-700 mb-4">
        Course Details: {course.coursename}
      </h1>

      <ul className="space-y-2 text-gray-800">
        <li>
          <strong>Teacher:</strong> {course.teachername}
        </li>
        <li>
          <strong>Duration:</strong> {course.duration}
        </li>
        <li>
          <strong>Start Date:</strong> {course["start-date"]}
        </li>
        <li>
          <strong>End Date:</strong> {course["end-date"]}
        </li>
        <li>
          <strong>Lessons:</strong> {course.lessons}
        </li>
      </ul>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Schedule & Timings
        </h2>
        {course.schedule && course.schedule.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Day</th>
                <th className="border p-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {course.schedule.map((s, index) => (
                <tr key={index}>
                  <td className="border p-2">{s.day}</td>
                  <td className="border p-2">{s.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No schedule available.</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetailPage;
