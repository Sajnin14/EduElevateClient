import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div>
            <h3 className="font-bold text-3xl my-2 text-center text-[#1E4463]">Unveiling You and Me</h3>
            <p className='italic text-center'>Discovering strengths, building connections, and growing together through learning and understanding!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-6"></div>
            <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
                <div className="col-span-1">
                    <iframe className="w-full rounded-2xl" height="315" src="https://www.youtube.com/embed/z8007YQAuZA?si=pZJ3b_6gCfkmdTbB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className="hero rounded-2xl col-span-2"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/XpQYgVc/creative-composition-with-books-flower.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold ">We </h1>
                            <p className="mb-5">
                            Explore a world of knowledge with our collection of new and pre-loved books, spanning various genres and subjects. Enhance your learning journey with our expertly designed courses, tailored to help you gain valuable skills and achieve your goals. Your one-stop destination for books and education!
                            </p><Link target="blank" to='https://youtube.com/@jhankarmahbub' className="flex items-center gap-2 text-white underline text-center"><button>Subscribe on Youtube</button> <FaBell className="text-xl"></FaBell> </Link>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;