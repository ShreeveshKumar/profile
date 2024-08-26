import React from "react";

const Message = () => {
  return (
    <div className="flex justify-center place-content-center pt-10 bg-white h-screen text-black ">
      <div className="w-3/5 rounded-md border-2 border-black">
        <div className="p-4 border-b-2 border-black">Messaging</div>
        <div className="flex relative">
          <div className="w-2/5 border-r-2 border-black h-screen">
            <Profilecomp />
          </div>
          <div className="w-3/5 mx-auto min-h-screen flex flex-col">
            <div className="flex flex-row justify-between border-b-2 border-black p-5">
              <div>
                <div>Shreevesh Kumar</div>
                <div>Full stack web and app developer</div>
              </div>
              <div>meet link</div>
            </div>

            <div className="flex-1 p-5"></div>

            <div className="border-t-2 border-black p-5 bg-gray-100">
              <div className="mb-4">
                <textarea
                  className="w-full h-24 p-2 border rounded"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <div className="flex justify-between items-center">
                <div>image, attachment, gif, emoji and</div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Profilecomp = () => {
  return (
    <div className="flex border-l-8 border-green-800 text-black align-middle p-5 gap-10 ">
      <div>photo</div>
      <div>
        <div>Shreevesh Kumar</div>
        <div>Recent messgae</div>
      </div>
    </div>
  );
};

export default Message;
