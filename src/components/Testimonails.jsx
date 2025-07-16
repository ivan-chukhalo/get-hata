import { assets, testimonailsData } from "../assets/assets";

const Testimonails = () => {
  return (
    <div
      id="#testimonails"
      className="conainer mx-auto py-10 lg:px-32 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl front-bold mb-2 text-center">
        Customer
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testomonails
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Reasl Stories from Those Who Found Home with Us
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonailsData.map((testimonail, index, arr) => (
          <div
            key={index}
            className="max-w-80 border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonail.image}
              alt={testimonail.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonail.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonail.title}</p>
            {/* Array.from({length: 5}... Common trick to generate a numeric array of given length. Creates an array from a dummy object with "length" property. Often used for loops, placeholders, pagination, etc. */}
            {/* Using "_" to ignore the first argument (unused). Common dev convention for better readability. It is not a part of JS */}
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonail.rating }, (item, index) => (
                <img src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="text-gray-600">{testimonail.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonails;
