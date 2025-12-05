'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "../custom/loader";

const Courses = () => {  
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("entityId");

    const fetchData = async () => {
        const enrollRes = await fetch(`http://localhost:3001/enrollments/student/${id}`);
        const enrollData = await enrollRes.json();
        setEnrollments(enrollData);
    };

    fetchData();
  }, []);

  if (!enrollments) return <Loader />;

  return (
    <div className="flex justify-between items-center w-full p-4">
      <div className="bg-white/70 w-full p-5 rounded-sm shadow-sm">
        <div className="pl-2">
          <h4 className="text-lg text-gray-600">My Courses</h4>
          <hr />
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-white">
          {
            enrollments.map((enrollment) => (
              <Link
                href={'#'}
                key={enrollment.id}
                className="text-gray-600 bg-white p-4 rounded-sm flex flex-col gap-1 shadow-sm cursor-pointer hover:shadow-lg transition"
              >
                <h3 className="text-gray-800">{enrollment.course.courseName}</h3>
                <h5 className="text-sm">course_id: {enrollment.course.courseId}</h5>
                <h5 className="text-sm">
                  teacher: {enrollment.course.courseAssignments[0]?.teacher?.fullName || "-"}
                </h5>
                <h5 className="text-gray-500 text-sm">Attendance: {enrollment.attendance}- %</h5>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Courses
