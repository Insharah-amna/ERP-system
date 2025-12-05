import { redirect } from "next/navigation";

const API_BASE = "http://localhost:3001";

export const login = async ({ email, password }) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Fetch failed");

  const response = await res.json();

  const { userId, role } = response;
  let entityId;

  if (role === "student") {
    const studentRes = await fetch(`${API_BASE}/students/user/${userId}`);
    if (!studentRes.ok) throw new Error("Student record not found");
    const student = await studentRes.json();
    entityId = student.studentId;
  } else if (role === "teacher") {
    const teacherRes = await fetch(`${API_BASE}/teachers/user/${userId}`);
    if (!teacherRes.ok) throw new Error("Teacher record not found");
    const teacher = await teacherRes.json();
    entityId = teacher.teacherId;
  }

  const expiry = Date.now() + 60 * 60 * 1000;
  localStorage.setItem("userId", userId);
  localStorage.setItem("role", role);
  localStorage.setItem("entityId", entityId);
  localStorage.setItem("loginExpiry", expiry);

  return { userId, role, entityId, res };
};

export const isLoggedIn = () => {
  const expiry = localStorage.getItem("loginExpiry");
  if (!expiry) return false;
  if (Date.now() > parseInt(expiry)) {
    localStorage.clear();
    return false;
  }
  return true;
};

export const logout = () => {
  localStorage.clear();
  redirect('/auth/login');
};
