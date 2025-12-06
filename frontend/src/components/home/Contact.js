import CustomButton from "../custom/Button";

export default function Contact() {
  const cardClass = "bg-white p-6 rounded-2xl shadow-md border border-teal-100 cursor-pointer";
  const inputClass = "p-3 rounded-xl border border-teal-200 focus:outline-none focus:ring-1 focus:ring-teal-400";

  return (
    <div className="min-h-screen bg-teal-50 text-teal-900 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-teal-700">Contact Us</h1>

        <p className="leading-relaxed">
          Have questions, feedback, or need support? We’re here to help! Reach out to our team using
          the contact details or form below.
        </p>

        <section className={`${cardClass} space-y-4`}>
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">Support Details</h2>
          <div className="space-y-2">
            <p><span className="font-semibold">Email:</span> support@oreoerp.edu.pk</p>
            <p><span className="font-semibold">Phone:</span> +92 300 1234567</p>
            <p><span className="font-semibold">Office Hours:</span> Mon–Fri, 9 AM – 5 PM</p>
          </div>
        </section>

        <section className={cardClass}>
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Send Us a Message</h2>
          <form className="space-y-5">
            <div className="flex flex-col gap-1">
              <label className="font-medium">Your Name</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium">Email Address</label>
              <input
                type="email"
                className={inputClass}
                placeholder="example@mail.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium">Message</label>
              <textarea
                rows="5"
                className={inputClass}
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <CustomButton
              buttonText={'Send Message'}
              type="submit"
              className="bg-teal-600 text-white px-6 h-11 rounded-xl shadow-md hover:bg-teal-700 transition cursor-pointer"
            />
          </form>
        </section>
      </div>
    </div>
  );
}
