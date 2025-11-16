"use client";
import React, { useEffect, useState } from "react";

export default function TodayCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => {
        const today = new Date();

        const todayCourses = data.filter((course) => {
          const start = new Date(course["start-date"]);
          const end = new Date(course["end-date"]);

          if (isNaN(start) || isNaN(end)) return false;

          return today >= start && today <= end;
        });

        setCourses(todayCourses);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!courses.length)
    return <p className="text-center mt-10">No courses today</p>;

  return (
    <section className="py-12 md:py-14 bg-slate-200">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          Today's classes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md">
              {course.image && (
                <img
                  src={course.image}
                  alt={course.coursename}
                  className="rounded-t-lg w-full h-96 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{course.coursename}</h3>
                <p className="text-gray-600 mt-2">
                  Teacher: {course.teachername}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
