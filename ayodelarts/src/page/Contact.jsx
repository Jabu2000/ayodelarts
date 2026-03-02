import { useState } from "react";
import { MdExitToApp } from "react-icons/md";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleFormVisibility = () => setIsVisible(!isVisible);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted");
    setFormData({ name: "", email: "", message: "" });
    setIsVisible(false);
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center px-4 sm:px-6">
      <div className=" inset-0 z-50  p-4 sm:p-8 md:p-10">
        <form
          className="2xl:w-[600px] mx-auto w-full bg-[#f8f8f8] rounded-xl p-6 shadow-lg space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between items-center">
            <h2 className="gasoek-one-regular text-[30px] sm:text-[40px] md:text-[50px] uppercase">
              Contact Me
            </h2>                                                                                                         
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              className="p-2 rounded-md border border-gray-300"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              className="p-2 rounded-md border border-gray-300"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              className="p-2 2xl:py-6 rounded-md border border-gray-300  resize-none"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              className="w-full bg-black text-white hover:text-black hover:bg-[#777676a6] rounded-xl py-3 uppercase font-semibold transition"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
