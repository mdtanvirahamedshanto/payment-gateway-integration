
// react icons
import {FaPlay} from "react-icons/fa";

const HeroSection = () => {

    return (
        <div className="w-full h-full rounded-md"
             style={{backgroundImage: "url(https://i.ibb.co/x1rvpZs/0f-Y6ep3cd1c.png)", backgroundSize: "cover"}}
>

            {/* header */}
            <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-0 items-center lg:mt-3">
                <div className="px-8 mt-8 lg:mt-0 w-full lg:w-[50%]">
                    <h1 className="text-[40px] lg:text-[60px] leading-[45px] lg:leading-[65px] font-[500]">Helping
                        you sell
                        your products
                        faster</h1>
                    <p className="text-[16px] mt-2">You can read this text, but it doesn’t matter. It’s concept, not
                        important for your life or life your friends</p>

                    <div className="flex items-center flex-wrap gap-[20px] mt-6">
                        <button
                            className="py-2 px-6 min-w-fit bg-black text-white rounded-full hover:bg-transparent hover:border-black hover:text-black transition-all duration-200 border">Get
                            Started
                        </button>

                        <button
                            className="bg-gray-200 min-w-fit rounded-full py-1.5 px-2 flex items-center gap-[10px] ">
                            <FaPlay className="text-white bg-black rounded-full py-2 text-[2rem]"/>
                            How to set up a shop
                        </button>
                    </div>
                </div>

                {/* image */}
                <div className="w-full lg:w-[50%]">
                    <img
                        src="https://i.ibb.co/kGnQZJ5/free-iphone-12-mini-mockup-scene-1-removebg-preview.png"
                        alt="image" className="w-full"/>
                </div>
            </header>
        </div>
    );
};

export default HeroSection;
                    