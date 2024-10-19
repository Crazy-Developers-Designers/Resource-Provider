import Process from "@/components/Process";
const Processes = () => {
  return (
    <div className="bg-gray-50 flex flex-col justify-between ">
      {/* Removed any additional padding or margin at the bottom */}
      <div className="mt-10 w-full flex flex-col flex-grow bg-gray-50">
        {/* Added flex-grow to ensure the content fills available space */}
        <Process />
      </div>
    </div>
  );
};

export default Processes;
