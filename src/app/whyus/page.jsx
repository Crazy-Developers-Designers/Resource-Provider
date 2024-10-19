"use client";
import Expectation from "@/components/Expectation";

function Page() {
  return (
    <div className="bg-gray-50  flex flex-col mt-10 ">
      {/* Content area with flex-grow to fill available space */}
      <div className="w-full flex flex-col flex-grow">
        <Expectation />
      </div>
    </div>
  );
}

export default Page;
