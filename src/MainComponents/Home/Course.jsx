import { Link } from "react-router-dom";

const Course = () => {
    return (
        <div>
            <h3 className="font-bold text-3xl my-2 text-center text-[#1E4463]">Our Courses</h3>
            <p className='italic text-center'>Learn, Grow, Succeed – Courses Crafted for Your Journey!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-14">

            <div className="card image-full shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/7X7TSPL/image-750x415-622ef3e4d8a6c.jpg"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-white">Skill based Courses</h2>
                        <p className="text-white">Skill-based courses focused on practical learning to enhance your expertise and prepare you for real-world challenges.</p>
                        <p className="text-white font-semibold text-lg underline">Popular Now →</p>
                        <div className="grid grid-cols-2 gap-3 mb-7">
                            <ul className="text-white font-bold">
                                <li>Web Development</li>
                                <li>App Development</li>
                                <li>Data Analytics</li>
                                <li>Cyber Security</li>
                                <li>Artificial Intelligence</li>
                            </ul>
                            <ul className="text-white font-bold">
                                <li>Web Design</li>
                                <li>Graphic Design</li>
                                <li>Freelancing</li>
                                <li>Digital marketing</li>
                                <li>Content Writing</li>
                            </ul>
                        </div>
                        <div className="card-actions justify-center">
                            <Link to='/skill'><button className="btn bg-[#EDA655] font-semibold border-none">Explore More</button> </Link>
                        </div>
                    </div>
                </div>

                <div className="card image-full shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/WD15hbt/0-zg9a4r-Vvht-Aqq3g4.png"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-white">Academic Courses</h2>
                        <p className="text-white">Academic courses designed to build a strong foundation in core subjects, helping you achieve your educational goals with confidence.</p>
                        <p className="text-white font-semibold text-lg underline">Popular Subjects →</p>
                        <div className="grid grid-cols-2 gap-3 mb-7">
                            <ul className="text-white font-bold">
                                <li>English</li>
                                <li>Data Structure</li>
                                <li>Object Oriented Programming</li>
                                <li>Mathmetics</li>
                                <li>Marketing</li>
                            </ul>
                            <ul className="text-white font-bold">
                                <li>Business Studies</li>
                                <li>Statistics</li>
                                <li>Phychology</li>
                                <li>Physics</li>
                                <li>Chemistry</li>
                            </ul>
                        </div>
                        <div className="card-actions justify-center">
                            <Link to='/academic'><button className="btn bg-[#EDA655] font-semibold border-none">Explore More</button> </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Course;