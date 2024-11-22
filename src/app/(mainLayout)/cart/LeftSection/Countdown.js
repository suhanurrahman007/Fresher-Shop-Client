import Countdown from "react-countdown";
import { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

const BlackFridayCountdown = () => {
  const [targetDate, setTargetDate] = useState(null);

  useEffect(() => {
    // Check if a target date is already saved in local storage
    const savedDate = localStorage.getItem("blackFridayCountdown");
    if (savedDate) {
      setTargetDate(new Date(savedDate));
    } else {
      resetCountdown();
    }
  }, []);

  const resetCountdown = () => {
    const newTargetDate = Date.now() + 7 * 24 * 60 * 60 * 1000; // Add 7 days
    localStorage.setItem(
      "blackFridayCountdown",
      new Date(newTargetDate).toISOString()
    );
    setTargetDate(new Date(newTargetDate));
  };

  // Renderer function with styled boxes for countdown units
  const renderer = ({ days, hours, minutes, seconds }) => {
    const boxStyle =
      "bg-[#000C21] font-bold text-sm px-2 py-1 rounded-sm text-center";

    return (
      <div className="flex gap-2">
        <div className={boxStyle}>{hours}</div>
        <h2>:</h2>
        <div className={boxStyle}>{minutes}</div>
        <h2>:</h2>
        <div className={boxStyle}>{seconds}</div>
      </div>
    );
  };

  return (
    <div className="bg-purple-950 flex justify-between items-center text-white p-4 rounded-md shadow-lg">
      <div className="flex">
        <h2 className="text-xl  font-bold text-center tracking-wide">
          BLACK FRIDAY
        </h2>
        <div className="text-center ml-1 md:ml-4 lg:ml-7 flex justify-center items-center text-lg font-medium">
          {targetDate ? (
            <>
              <span className="text-gray-400">Starts End : </span>
              <span className="text-green-400 ml-2">
                <Countdown
                  date={targetDate}
                  renderer={renderer}
                  onComplete={resetCountdown} // Reset countdown when it ends
                />
              </span>
            </>
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
      <MdOutlineNavigateNext className="text-orange-600 text-lg font-bold" />
    </div>
  );
};

export default BlackFridayCountdown;
