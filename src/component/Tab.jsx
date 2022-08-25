import { Link } from "react-router-dom";
export default function Tab({ page }) {
  return (
    <div className="w-full md:w-base flex gap-20 justify-center fixed bottom-0 border-t bg-white">
      <div className="m-auto flex gap-24 relative items-center py-4 text-[10px]">
        <div className="flex gap-6 z-40 items-center">
          <Link to={"/"} className="flex flex-col items-center">
            <img src="./icon/home.png" alt="" />
            {page === "home" ? (
              <p className="bg-blue rounded-md px-2 text-white">Home</p>
            ) : (
              <p className="rounded-md px-2">Home</p>
            )}
          </Link>
          <Link
            to={"/call"}
            className="flex flex-col items-center opacity-90 hover:opacity-100"
          >
            <img src="./icon/phone-call.png" alt="" />
            {page === "calls" ? (
              <p className="bg-blue rounded-md px-2 text-white">Calls</p>
            ) : (
              <p className="rounded-md px-2">Calls</p>
            )}
          </Link>
        </div>
        <div className="absolute -top-2 right-0 left-0">
          <div className="flex flex-col items-center">
            <Link
              to={"/status"}
              className="opacity-90 hover:opacity-100 text-center"
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
        <div className="flex gap-6 z-40 items-center">
          <Link
            to={"/chat"}
            className="flex flex-col items-center opacity-90 hover:opacity-100"
          >
            <img src="./icon/chat.png" alt="" />
            {page === "chat" ? (
              <p className="bg-blue rounded-md px-2 text-white">Chat</p>
            ) : (
              <p className="rounded-md px-2">Chat</p>
            )}
          </Link>
          <Link
            to={"/setting"}
            className="flex flex-col items-center opacity-90 hover:opacity-100"
          >
            <img src="./icon/setting.png" alt="" />
            {page === "setting" ? (
              <p className="bg-blue rounded-md px-2 text-white">Setting</p>
            ) : (
              <p className="rounded-md px-2">Setting</p>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
