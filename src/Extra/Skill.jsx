import Lottie from "lottie-react";
import skilledLottie from '../../public/lottie/skilled.json'


const Skill = () => {
    return (
        <div className="text-center">
           <h3 className="text-3xl font-bold mb-4">Skill Based Courses</h3>
           <p className="md:w-1/2 mx-auto">Discover a wide range of skill-based courses designed to help you learn, grow, and achieve your goals. From coding to creative arts, our platform offers expert-led content, interactive lessons, and flexible learning options to fit your schedule.</p>

           <div className="w-2/3 md:w-1/2 mx-auto">
             <Lottie animationData={skilledLottie}></Lottie>
           </div>
 
        </div>
    );
};

export default Skill;