import { MdOutlineDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
const PricingSection = () => {
  return (
    <section className="w-full bg-gray-200 rounded-xl p-[20px]">
      <h1 className="text-[30px] font-[500] leading-[40px] text-center">
        The Right Plan for Your Business
      </h1>
      <p className="text-[18px] font-[400] text-gray-400 w-full sm:w-[50%] text-center mx-auto mt-2">
        We have several powerful plans to showcase your business and get
        discovered as a creative entrepreneurs. Everything you need.
      </p>

      {/*  pricing cards  */}
      <div className="flex items-center justify-center flex-wrap bg-gray-200 py-[30px] gap-[30px] sm:px-[40px] rounded-xl mt-10">
        <div className="w-full flex flex-col max-w-[280px] justify-between h-full bg-white rounded-xl p-[20px]">
          <div>
            <h3 className="text-[1.5rem] font-[600] mt-3">Base</h3>

            <div className="flex flex-col gap-[10px] mt-5">
              <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.5rem] p-1 rounded-full text-gray-800" />
                Upload Video with HD Resolution
              </p>
              <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.5rem] p-1 rounded-full text-gray-800" />
                Attachment & Post Scheduling
              </p>
              <p className="text-[1rem] text-gray-300 flex items-center gap-[10px]">
                <RxCross1 className="text-[1.5rem] p-1 rounded-full text-gray-300" />
                Set your rates
              </p>
              <p className="text-[1rem] text-gray-300 flex items-center gap-[10px]">
                <RxCross1 className="text-[1.5rem] p-1 rounded-full text-gray-300" />
                Exclusive Deals
              </p>
              <p className="text-[1rem] text-gray-300 flex items-center gap-[10px]">
                <RxCross1 className="text-[1.5rem] p-1 rounded-full text-gray-300" />
                Advanced Statistics
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-end gap-[8px]">
              <h3 className="text-[1.8rem] font-[800]">$19</h3>
              <span className="text-[1rem] text-gray-400 mb-2">/month</span>
            </div>

            <button className="py-[14px] px-4 w-full bg-[#f8f4ff] text-[#8645FF] rounded-md mt-3">
            <Link to={`/checkout/1`}>Choose</Link>
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col max-w-[280px] justify-between h-full bg-gray-800 rounded-xl p-[25px] sm:mb-[70px]">
          <div className="">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-[1.5rem] font-[600] mt-3 text-white">Pro</h3>
              <span className="rounded-md px-4 py-[5px] bg-[#f8f4ff] text-[#8645FF] text-[0.8rem]">
                Save $40
              </span>
            </div>

            <div className="flex flex-col gap-[10px] mt-5">
              <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.5rem] p-1 rounded-full text-gray-200" />
                Upload Video with HD Resolution
              </p>
              <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.5rem] p-1 rounded-full text-gray-200" />
                Attachment & Post Scheduling
              </p>
              <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.5rem] p-1 rounded-full text-gray-200" />
                Set your rates
              </p>
              <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.5rem] p-1 rounded-full text-gray-200" />
                Exclusive Deals
              </p>
              <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                <RxCross1 className="text-[1.5rem] p-1 rounded-full text-gray-500" />
                Advanced Statistics
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-end gap-[8px]">
              <h3 className="text-[1.8rem] font-[800] text-white">$123</h3>
              <span className="text-[1rem] text-gray-300 mb-2">/month</span>
            </div>

            <button className="py-[14px] px-4 w-full bg-[#8645FF] text-white rounded-md mt-3">
              <Link to={`/checkout/2`}>Choose</Link>
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col max-w-[280px] justify-between h-full bg-white rounded-xl p-[20px]">
          <div>
            <h3 className="text-[1.5rem] font-[600] mt-3">Enterprise</h3>

            <div className="flex flex-col gap-[10px] mt-5">
              <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.5rem] p-1 rounded-full text-gray-800" />
                Upload Video with HD Resolution
              </p>
              <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.5rem] p-1 rounded-full text-gray-800" />
                Attachment & Post Scheduling
              </p>
              <p className="text-[1rem] text-gray-800 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.5rem] p-1 rounded-full text-gray-800" />
                Set your rates
              </p>
              <p className="text-[1rem] text-gray-800 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.5rem] p-1 rounded-full text-gray-800" />
                Exclusive Deals
              </p>
              <p className="text-[1rem] text-gray-800 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.5rem] p-1 rounded-full text-gray-800" />
                Advanced Statistics
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-end gap-[8px]">
              <h3 className="text-[1.8rem] font-[800]">$189</h3>
              <span className="text-[1rem] text-gray-400 mb-2">/month</span>
            </div>

            <button className="py-[14px] px-4 w-full bg-[#f8f4ff] text-[#8645FF] rounded-md mt-3">
            <Link to={`/checkout/3`}>Choose</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
