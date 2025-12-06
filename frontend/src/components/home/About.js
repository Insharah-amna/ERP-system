export default function About() {
  const cardClass = "bg-white p-6 rounded-2xl shadow-md border border-teal-100 cursor-pointer";

  return (
    <div className="min-h-screen bg-teal-50 text-teal-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-teal-700">About Our University ERP System</h1>

        <p>
          Our University ERP System is designed to simplify academic and administrative workflows.
          From course enrollments to student performance tracking, the system provides an intuitive
          interface for students, teachers, and administrators.
        </p>

        <section className={cardClass}>
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">Key Features</h2>
          <ul className="space-y-2 list-disc pl-6">
            <li>Secure login & authentication</li>
            <li>Student course enrollment and dashboards</li>
            <li>Teacher portal for managing classes & grades</li>
            <li>Admin panel for departments, roles & permissions</li>
            <li>Real‑time analytics and visual reports</li>
          </ul>
        </section>

        <section className={cardClass}>
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">Our Mission</h2>
          <p>
            To build a modern, fast, and transparent system that enhances productivity and supports
            students and faculty in their academic journey.
          </p>
        </section>

        <section className={cardClass}>
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">Technologies Used</h2>
          <ul className="space-y-1 list-disc pl-6">
            <li>Next.js</li>
            <li>Tailwind CSS with Teal Theme</li>
            <li>Shadcn components</li>
            <li>Nest.js</li>
            <li>PostgreSQL</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
