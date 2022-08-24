export default function SectionSetting() {
  return (
    <div className="px-6 flex flex-col gap-6 mt-6">
      <div className="flex justify-between items-center drop-shadow bg-white text-sm border-b py-3 rounded-md px-4">
        <div className="flex gap-4 items-center">
          <img
            src="./img/kucing.jpg"
            alt=""
            className="w-[50px] h-[50px] rounded-full drop-shadow"
          />
          <div className="flex flex-col gap-1">
            <p className="font-bold">Kucing Garong</p>
            <p className="text-xs text-gray">lagi pengen tidur Zzz</p>
          </div>
        </div>
        <div>
          <img src="./icon/qr-code.png" alt="" className="w-[24px] h-[24px]" />
        </div>
      </div>
      <div className="flex flex-col gap-5 text-xs px-8  py-4 rounded-sm">
        <div className="flex gap-4 items-center">
          <img src="./icon/profile.png" alt="" className="w-[20px] h-[20px]" />
          <p>Account</p>
        </div>
        <div className="flex gap-4 items-center">
          <img
            src="./icon/chat-bubbles.png"
            alt=""
            className="w-[20px] h-[20px]"
          />
          <p>Chat</p>
        </div>
        <div className="flex gap-4 items-center">
          <img
            src="./icon/notification.png"
            alt=""
            className="w-[20px] h-[20px]"
          />
          <p>Notification</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="./icon/help.png" alt="" className="w-[20px] h-[20px]" />
          <p>Help</p>
        </div>
        <div className="flex gap-4 items-center">
          <img
            src="./icon/conversation.png"
            alt=""
            className="w-[20px] h-[20px]"
          />
          <p>Tell a friend</p>
        </div>
      </div>
    </div>
  );
}
