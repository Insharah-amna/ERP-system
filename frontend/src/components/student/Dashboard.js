"use client";
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import Loader from "../custom/loader";

const Dashboard = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("entityId");

    const fetchData = async () => {
        const enrollRes = await fetch(`http://localhost:3001/enrollments/student/${id}`);
        const enrollData = await enrollRes.json();
        setEnrollments(enrollData);

        const studentRes = await fetch(`http://localhost:3001/students/${id}`);
        const studentData = await studentRes.json();
        setStudent(studentData);
    };

    fetchData();
  }, []);

  if (!student) return <Loader />;

  return (
    <div className="flex justify-between items-center w-full p-4">
      <div className="bg-white/70 w-full p-4 rounded-sm shadow-sm">
        <div>
          <h4 className="text-lg text-gray-600 pl-2">Academics</h4>
        </div>

        <hr className="mx-2 mb-2" />
        <div className="grid grid-cols-2 p-4 pb-6">
          <div className='flex gap-6'>
            <Image 
              src={'/home_page.jpg'}
              alt="student profile image" 
              height={100} 
              width={100} 
              className="rounded-full border-white h-20 w-20 object-cover"
            />
            
            <div className="flex flex-col text-gray-600">
              <h1 className="text-xl text-gray-900">{ student.fullName }</h1>
              <h5>{ student.rollNumber }</h5>
              <h5>{ student.department.departmentName}</h5>
            </div>
          </div>

          <div className="text-gray-700">
            <h5>Academic standings: {'Excellent'}</h5>
            <h5>Semester: {student.semester}</h5>
            <h5>CGPA: {'3.2'}</h5>
          </div>
        </div>

        <h3 className="text-lg mt-4 text-gray-700 pl-2">Enrolled Courses</h3>
        <hr className="mb-2 mx-2" />        
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-3 my-3">
          {
            enrollments.map((enroll, index) => (
              <div
                key={index}
                className="bg-white/70 p-4 rounded-sm shadow-sm text-sm text-gray-600 cursor-pointer hover:shadow-md transition-shadow"
              >
                <Link href={`/student/courses/${enroll.course.courseId}`} >
                  <h4 className="text-lg text-gray-800">{enroll.course.courseName}</h4>
                  <h5>Course ID: {enroll.course.courseId}</h5>
                  <h5>Credit Hours: {enroll.course.creditHours}</h5>
                  <h5>Instructor: {enroll.course.courseAssignments[0]?.teacher?.fullName || "-"}</h5>
                </Link>
              </div>
            ))
          }
        </div>

        <h3 className="text-lg mt-7 text-gray-700">News and Announcements</h3>
        <hr className="mb-2" />
        <div>
          <p className="text-gray-600">No announcements at the moment. Stay tunned.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
