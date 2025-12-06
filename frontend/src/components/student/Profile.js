'use client';
import { useEffect, useState } from "react";
import Image from "next/image"
import Loader from "../custom/loader";

const Profile = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("entityId");

    const fetchData = async () => {
        const studentRes = await fetch(`http://localhost:3001/students/${id}`);
        const studentData = await studentRes.json();
        setStudent(studentData);
    };

    fetchData();
  }, []);

  if (!student) return <Loader />;

  return (
    <div className="flex flex-col justify-between items-center w-full p-4">
      <div className="bg-teal-600 w-full py-8 shadow-sm text-white flex gap-6 items-center justify-around">
        <div className="flex gap-12">
          <Image src={'/home_page.jpg'} alt="profile image" height={100} width={100} className="rounded-full w-20 h-20 border-white" />

          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">{student.fullName}</h3>
            <h5 className="font-light">{student.rollNumber}</h5>
            <h5 className="font-light">{student.department.departmentName}</h5>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <h3 className="font-semibold">{'Under Graduate'}</h3>
          <h5 className="font-light">BS {student.department.departmentName}</h5>
          <h5 className="font-light">{`Current Semester: ${student.semester}`}</h5>
        </div>
      </div>

      <div className="bg-white/70 w-full p-4 shadow-sm">
        <div className="grid grid-cols-2 font-semibold">
          <h3>About</h3>
          <h3>Bio Data</h3>
        </div>
          <hr />

        <div className="grid grid-cols-2 mt-4">
          <div>
            <h3 className="font-light text-lg mb-2">Contact Information</h3>

            <div className="grid gap-2">
              <h6>Email: <span className="underline text-gray-500">{student.email}</span></h6>
              <h6>Phone no.</h6>
              <h6>Address</h6>
            </div>
          </div>

          <div>
            <h3 className="font-light text-lg mb-2">Personal Detail</h3>

              <div className="grid gap-2">
              <h6>Date of birth</h6>
              <h6>Father Name</h6>
              <h6>Nationality</h6>
              <h6>Religion</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
