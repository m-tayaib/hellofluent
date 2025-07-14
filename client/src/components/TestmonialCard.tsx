import React from "react";
import type { TestmonialCardProps } from "../Types/TestmonialType";


const TestmonialCard: React.FC<TestmonialCardProps> = ({
  title,
  message,
  author,
  stars = 5,
}) => {
  return (
    <div className="relative shadow-xl flex flex-col gap-4 p-3 sm:px-[18px] sm:py-[24px] bg-white shadow-card rounded-[12px] sm:rounded-[36px] w-full h-[260px]"  >
      <div className="flex">
        {Array.from({ length: stars }).map((_, i) => (
          <svg
            key={i}
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="#FF9900"
            className="inline mr-2 last:mr-0"
            role="img"
            aria-label="star"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <div className="flex h-full flex-col justify-between">
        <div className="flex w-full flex-col gap-2">
          <span className="text-[12px] font-semibold text-gray-900 sm:text-[22px]">{title}</span>
          <span className="text-black-100 text-[12px] sm:text-[16px] sm:leading-[22px]">{message}</span>
        </div>
        <span className="text-right text-[10px] text-[#8F8F8F] sm:text-[16px]">{author}</span>
      </div>
    </div>
  );
};

export default TestmonialCard;
