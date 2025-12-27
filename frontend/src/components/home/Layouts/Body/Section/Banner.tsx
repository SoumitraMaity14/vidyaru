import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {  AlignRightIcon,  MagnifyingGlass, MapPin, Microphone, } from '@phosphor-icons/react'; // Using lucide-react for icons

export const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 font-sans">
      
      {/* 1. SEARCH SECTION */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Search across <span className="text-blue-600">10,000+ Courses</span>
        </h2>
        <div className="flex flex-col md:flex-row max-w-4xl border border-[#1b9b7d] rounded-lg overflow-hidden shadow-sm bg-white">
                           <div className="flex items-center px-4 py-3  md:border-b-0 md:border-r min-w-[180px]">
                               <MapPin size={20} className="text-[#013f63] mr-2" />
                               <input type="text" placeholder="Location" className="outline-none w-full text-sm" />
                           </div>
                           <div className="flex items-center px-4 py-3 flex-grow relative">
                               <input type="text" placeholder="Search for Teachers, Coaching..." className="outline-none w-full text-sm" />
                               <div className="flex items-center gap-3">
                                   <Microphone size={20} className="text-[#013f63] cursor-pointer" />
                                   <button className="bg-[#1b9b7d] p-2 rounded text-white transition">
                                       <MagnifyingGlass size={20} weight="bold" />
                                   </button>
                               </div>
                           </div>
                       </div>
      </div>

      {/* 2. MAIN LAYOUT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left: Main Featured Banner (Lottie) */}
        <div className="lg:col-span-6 bg-[#4a2c1d] rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[350px] relative">
          <div className="p-8 flex-1 flex flex-col justify-center text-white z-10">
            <h1 className="text-4xl font-serif italic mb-2">Advance</h1>
            <p className="text-lg mb-4 opacity-90">your skills & <br />book top courses</p>
            <button className="bg-white text-black font-bold py-2 px-6 rounded-md w-fit hover:bg-gray-100 transition">
              GET BEST DEALS
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center bg-[#e5dcd3]">
             <DotLottieReact
                autoplay
                loop
                src="https://lottie.host/e6dd9468-f110-4022-96ad-8896981e48be/pvRjOkmiJw.lottie"
                style={{ height: "300px", width: "300px" }}
              />
          </div>
          {/* Pagination dots (Visual only) */}
          <div className="absolute bottom-4 left-8 flex gap-2">
            {[1,2,3,4].map(i => <div key={i} className={`h-2 w-2 rounded-full ${i===1 ? 'bg-white' : 'bg-gray-500'}`} />)}
          </div>
        </div>

        {/* Right: Recommended Teachers / Categories */}
        <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1: Live Classes */}
          <div className="bg-blue-500 rounded-2xl p-4 text-white relative flex flex-col justify-between group cursor-pointer">
             <div>
                <h3 className="font-bold text-xl">LIVE</h3>
                <p className="text-sm opacity-90">Join Now</p>
             </div>
             <img src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Teacher" className="rounded-lg mt-4 object-cover h-40" />
             <div className="absolute bottom-4 right-4 bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition">
                <AlignRightIcon size={16} />
             </div>
          </div>

          {/* Card 2: Recommended Teacher */}
          <div className="bg-blue-700 rounded-2xl p-4 text-white relative flex flex-col justify-between group cursor-pointer">
             <div>
                <h3 className="font-bold text-xl">TOP RATED</h3>
                <p className="text-sm opacity-90">Expert Tutors</p>
             </div>
             <img src="https://images.pexels.com/photos/5427859/pexels-photo-5427859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Teacher" className="rounded-lg mt-4 object-cover h-40" />
             <div className="absolute bottom-4 right-4 bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition">
                <AlignRightIcon size={16} />
             </div>
          </div>

          {/* Card 3: New Courses */}
          <div className="bg-purple-500 rounded-2xl p-4 text-white relative flex flex-col justify-between group cursor-pointer">
             <div>
                <h3 className="font-bold text-xl">COURSES</h3>
                <p className="text-sm opacity-90">Latest Tech</p>
             </div>
             <img src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Building" className="rounded-lg mt-4 object-cover h-40" />
             <div className="absolute bottom-4 right-4 bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition">
                <AlignRightIcon size={16} />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};