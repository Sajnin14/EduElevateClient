import Lottie from "lottie-react";
import academicLottie from '../../public/lottie/academic.json'

const Academic = () => {
    return (
            <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Academic Support</h3>
                <p className="md:w-1/2 mx-auto">Academic courses designed to build a strong foundation in core subjects, helping you achieve your educational goals with confidence. We are here to provide you all kind of help you needed. You can find best support here</p>

                <div className="w-2/3 md:1/2 mx-auto">
                    <Lottie animationData={academicLottie}></Lottie>
                </div>

                
            </div>
    );
};

export default Academic;