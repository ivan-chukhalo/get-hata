import {useState} from "react";
import {toast} from "react-toastify";
import {motion} from "motion/react";

const Contact = () => {

  const [result, setResult] = useState("")

  const submitHandler = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch(
      "https://api.web3forms.com/submit",
    {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success){
      toast.success("Message sent successfully!");
      setResult(""); // we set this result to that button will display "Send Message" again because of operator "||" in button
      event.target.reset();
    } else {
      toast.error("Error sending your message. Please try again later.");
      setResult(""); // we set this result to that button will display "Send Message" again because of operator "||" in button
      console.error("Error:", data.message);
    }
  }

  return (
    <motion.div
      initial={{opacity: 0, x: -200,}} // Initial animation properties
      whileInView={{opacity: 1, x: 0,}} // Fade in when the element enters the viewport:
      transition={{ duration: 1, ease: "easeInOut" }} 
      viewport={{ once: true }}  // It defines how the element is tracked within the viewport. In this case, animation will only happen once when the component is in view
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="contact"
    >
      <h1 className="text-2xl sm:text-4xl front-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together
      </p>
      <form
        onSubmit={submitHandler}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              name="Name"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              name="Email"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="text-left my-6">
          Message
          <textarea
            name="Message"
            placeholder="Message"
            required
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white py-2 px-12 mb-10 rounded">
          {result || "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
