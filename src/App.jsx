
import { useState } from "react";
import john from "../src/images/image-john.jpg";
import tanya from "../src/images/image-tanya.jpg";
import iconPrev from "../src/images/icon-prev.svg";
import iconNext from "../src/images/icon-next.svg";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: john,
      alt: "This is john, a junior frontend developer",
      text: `&quot;If you want to lay the best foundation possible I’d recommend
      taking this course. The depth the instructors go into is incredible. I
      now feel so confident about starting up as a professional developer.&quot;`,
      name: "John Tarkpor",
      title: "Junior Front-end Developer",
    },
    {
      image: tanya,
      alt: "This is tanya, a UX engineer",
      text: `&quot;I’ve been interested in coding for a while but never taken the
      jump, until now. I couldn’t recommend this course enough. I’m now in
      the job of my dreams and so excited about the future.&quot;`,
      name: "Tanya Sinclair",
      title: "UX Engineer",
    },
  ];

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setIsAnimating(false);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <main className="lg:flex justify-center items-center min-h-screen bg-pattern-curve bg-[length:280px_100px] lg:bg-[length:600px_200px] bg-no-repeat bg-left-bottom">
      <div className="flex flex-col lg:flex-row-reverse lg:w-full lg:max-w-[80rem] items-center py-10">
        <div className="sm:max-w-[35rem] sm:mx-auto lg:max-w-none lg:w-[90%] bg-pattern-background bg-no-repeat bg-contain bg-top px-6 pt-3 flex justify-center items-center flex-col relative">
          <div
            className={`transition-opacity duration-500 ease-in-out py-4 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              className="rounded-md w-[90%] mx-auto lg:w-[95%] lg:mx-0"
            />
          </div>
          <div className="bg-white py-3 rounded-full flex gap-6 justify-center items-center w-20 absolute left-0 right-0 mx-auto bottom-2 lg:bottom-5 lg:left-[20%] lg:mx-0 shadow-[rgba(32,32,70,0.25)_-20px_10px_40px_10px]">
            <img src={iconPrev} alt="Previous slide" onClick={handlePrev} className="cursor-pointer"/>
            <img src={iconNext} alt="Next slide" onClick={handleNext} className="cursor-pointer"/>
          </div>
        </div>
        <div className="sm:max-w-[35rem] sm:mx-auto lg:max-w-none lg:w-[90%] bg-pattern-quotes bg-no-repeat bg-[length:90px_110px] lg:bg-[length:90px_150px] bg-[50%_-20%] lg:bg-[20%_-30%] px-7 pt-7 pb-24 mt-10 lg:mt-0 lg:py-10 lg:translate-x-40">
          <div
            className={`transition-opacity duration-500 ease-in-out w-full ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <p
              className="text-center text-[1.2rem] lg:text-[2rem] inter-300 lg:text-left lg:mb-8"
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].text }}
            />
            <div className="flex flex-col lg:flex-row gap-2 justify-center items-center lg:justify-start lg:items-start">
              <h1 className="text-Dark-Blue inter-700 lg:text-[1.2rem]">
                {slides[currentSlide].name}
              </h1>
              <p className="text-Grayish-Blue lg:text-[1.1rem]">{slides[currentSlide].title}</p>
            </div>
          </div>
        </div>
     
      </div>
    </main>
  );
}

export default App;
