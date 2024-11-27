import { useEffect, useState } from "react";

export default function InsidePercentageProgress({ percentage }) {
  const [progressNumber, setProgressNumber] = useState(0);

  useEffect(() => {
    if (progressNumber < percentage) {
      const timeout = setTimeout(() => {
        setProgressNumber(progressNumber + 1);
      }, 100); // Smooth increment for animation
      return () => clearTimeout(timeout);
    }
  }, [progressNumber, percentage]);

  return (
    <div className="mx-auto flex w-full flex-col gap-2">
      <div className="flex h-4 w-full items-center justify-center overflow-hidden rounded-full bg-sky-300">
        <div
          style={{ width: `${progressNumber}%` }}
          className="transition-width mr-auto flex h-full w-0 items-center justify-center rounded-full  bg-sky-600 duration-500"
        >
          <span className="text-center text-xs font-medium text-gray-300">
            {progressNumber}%
          </span>
        </div>
      </div>
    </div>
  );
}
