import { Link } from "react-router-dom";
export default function Tab() {
  return (
    <div className="w-full md:w-base flex gap-20 justify-center fixed bottom-0 border-t bg-white">
      <div className="m-auto flex gap-28 relative items-center py-4 text-[10px]">
        <div className="flex gap-12 z-40 items-center">
          <Link to={"/"} className="flex flex-col items-center">
            <img src="./icon/home.png" alt="" />
            <p className="bg-blue rounded-md px-2">Home</p>
          </Link>
          <Link
            to={"/call"}
            className="flex flex-col items-center opacity-75 hover:opacity-100"
          >
            <img src="./icon/phone-call.png" alt="" />
            Calls
          </Link>
        </div>
        <div className="absolute -top-2 right-0 left-0">
          <div className="flex flex-col items-center">
            <Link
              to={"/status"}
              className="opacity-75 hover:opacity-100 text-center"
            >
              <img
                src="./icon/plus.png"
                alt=""
                className="m-auto bg-blue p-3 rounded-full drop-shadow"
              />
              Status
            </Link>
          </div>
        </div>
        <div className="flex gap-12 z-40 items-center">
          <Link
            to={"/chat"}
            className="flex flex-col items-center opacity-75 hover:opacity-100"
          >
            <img src="./icon/chat.png" alt="" />
            Chat
          </Link>
          <Link
            to={"/setting"}
            className="flex flex-col items-center opacity-75 hover:opacity-100"
          >
            <img src="./icon/setting.png" alt="" />
            Setting
          </Link>
        </div>
      </div>
    </div>
  );
}
