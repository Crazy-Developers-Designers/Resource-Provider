// components/AnimatedVideo.js
import { motion } from "framer-motion";

const AnimatedVideo = () => {
  const circlePath = "M20,20 H200 V200 H20 Z"; // Example path for animation

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.svg width="200" height="200" viewBox="0 0 200 200">
        <motion.path d={circlePath} fill="none" stroke="gray" strokeWidth="2" />
        <motion.circle
          cx="20"
          cy="20"
          r="10"
          fill="pink"
          animate={{ path: circlePath }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedVideo;

// <div className="space-y-12">
//           {/* Vision Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <img
//               src="/vision 1.jpg"
//               alt="Vision"
//               className="rounded-lg order-1 lg:order-1 max-w-full lg:max-w-md" // Image on left on large screens
//             />
//             <div className="order-2 lg:order-2">
//               <h2 className="text-2xl text-gray-800 font-bold mb-4">
//                 Our Vision
//               </h2>
//               <p className="text-tracking-wide text-lg text-gray-600 ">
//                 ResourceHub is a dynamic online platform designed to
//                 revolutionize resource accessibility. Our vision is to create a
//                 centralized hub where users can effortlessly discover, share,
//                 and collaborate on a vast array of educational, professional,
//                 and creative resources. By fostering a diverse community, we aim
//                 to empower individuals to reach their full potential through
//                 seamless access to knowledge and tools.
//               </p>
//             </div>
//           </div>

//           {/* Approach Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <Image
//               src="/Mission 2.jpg"
//               alt="Approach"
//               width={1200}
//               height={900}
//               className="rounded-lg order-1 lg:order-2 w-full lg:w-auto lg:max-w-xl" // Image on right for large screens
//             />
//             <div className="order-2 lg:order-1">
//               <h2 className="text-2xl text-gray-800 font-bold mb-4">
//                 Our Mision
//               </h2>
//               <p className="text-tracking-wide text-lg text-gray-600 pr-14">
//                 To revolutionize how businesses leverage Artificial
//                 Intelligence, driving innovation, efficiency, and sustainable
//                 growth.
//                 <br />
//                 We aim to empower companies across diverse industries by
//                 delivering cutting-edge AI solutions that transform raw data
//                 into actionable insights. By harnessing the full potential of
//                 machine learning, data analysis, and automation, businesses can
//                 make faster, more accurate decisions, streamline operations, and
//                 reduce costs
//               </p>
//             </div>
//           </div>

//           {/* Process Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <img
//               src="/Mission.png"
//               alt="Process"
//               className="rounded-lg order-1 lg:order-1 max-w-full lg:max-w-md" // Image on left for large screens
//             />
//             <div className="order-2 lg:order-2">
//               <h2 className="text-2xl text-gray-800  font-bold mb-4">
//                 Our Process
//               </h2>
//               <p className=" text-tracking-wide text-lg text-gray-600 ">
//                 Our process is a meticulous journey from idea to impact. It
//                 begins with comprehensive research, followed by collaborative
//                 brainstorming to shape innovative solutions. Rigorous testing
//                 refines and strengthens our creations, ensuring seamless
//                 integration. Continuous feedback loops and agile adaptation
//                 characterize our dynamic approach, guaranteeing the delivery of
//                 high-quality, user-centric solutions with every project.
//               </p>
//             </div>
//           </div>
//         </div>
