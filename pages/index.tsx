/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [rate, setRate] = useState<number | null>(null);

  const handleRate = (rateVal: number) => {
    setRate(rateVal);
  };

  return (
    <div>
      <Head>
        <title>Frontend Mentor - Interactive Rating Component</title>
        <meta
          name="description"
          content="Frontend Mentor - Interactive Rating Component"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className="relative bg-dark-blue sm:w-[413px] sm:h-[418px] mx-6 rounded-2xl p-6 md:p-[30px] pb-8 overflow-clip">
          <div className="absolute left-0 z-0 -top-[60%] h-full w-full bg-gradient-radial blur-lg from-[#282f39] opacity-90 to-dark-blue rounded-full"></div>
          <div className="relative z-30">
            <div className="w-10 h-10 sm:w-[50px] sm:h-[50px] p-[14px] rounded-full bg-med-dark-blue flex justify-center items-center text-light-grey">
              <span>
                <img
                  src="./icon-star.svg"
                  alt="icon-star"
                  width={17}
                  height={16}
                />
              </span>
            </div>
            <div>
              <h1 className="text-white font-bold text-2xl mt-5 sm:mt-9">
                How did we do?
              </h1>
            </div>
            <div>
              <p className="text-light-grey text-sm font-normal mt-4">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div className="mt-[27px] flex flex-row justify-between items-center">
              <div
                onClick={() => handleRate(1)}
                className={`${
                  rate === 1
                    ? "bg-primary text-white"
                    : "bg-med-dark-blue text-light-grey hover:bg-[#7c8898]"
                } transition-all duration-300 hover:cursor-pointer hover:text-white w-10 h-10 sm:w-[54px] sm:h-[54px] text-center rounded-full flex flex-row justify-center items-center`}
              >
                <span>1</span>
              </div>
              <div
                onClick={() => handleRate(2)}
                className={`${
                  rate === 2
                    ? "bg-primary text-white"
                    : "bg-med-dark-blue text-light-grey hover:bg-[#7c8898]"
                } transition-all duration-300 hover:cursor-pointer hover:text-white w-10 h-10 sm:w-[54px] sm:h-[54px] text-center rounded-full flex flex-row justify-center items-center`}
              >
                <span>2</span>
              </div>
              <div
                onClick={() => handleRate(3)}
                className={`${
                  rate === 3
                    ? "bg-primary text-white"
                    : "bg-med-dark-blue text-light-grey hover:bg-[#7c8898]"
                } transition-all duration-300 hover:cursor-pointer hover:text-white w-10 h-10 sm:w-[54px] sm:h-[54px] text-center rounded-full flex flex-row justify-center items-center`}
              >
                <span>3</span>
              </div>
              <div
                onClick={() => handleRate(4)}
                className={`${
                  rate === 4
                    ? "bg-primary text-white"
                    : "bg-med-dark-blue text-light-grey hover:bg-[#7c8898]"
                } transition-all duration-300 hover:cursor-pointer hover:text-white w-10 h-10 sm:w-[54px] sm:h-[54px] text-center rounded-full flex flex-row justify-center items-center`}
              >
                <span>4</span>
              </div>
              <div
                onClick={() => handleRate(5)}
                className={`${
                  rate === 5
                    ? "bg-primary text-white"
                    : "bg-med-dark-blue text-light-grey hover:bg-[#7c8898]"
                } transition-all duration-300 hover:cursor-pointer hover:text-white w-10 h-10 sm:w-[54px] sm:h-[54px] text-center rounded-full flex flex-row justify-center items-center`}
              >
                <span>5</span>
              </div>
            </div>
            <div className="mt-6 sm:mt-9">
              <button
                type="button"
                className="bg-primary border hover:bg-white hover:font-bold hover:text-primary transition-all duration-300 border-[#c28357] border-b-0 text-center flex flex-row justify-center items-center tracking-[3px] h-[45px] w-full rounded-full text-white"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
