export default function NavCall() {
  return (
    <div className="w-base m-auto">
      <div className="fixed z-40 text-white w-base m-auto bg-blue flex justify-between px-6 py-4">
        <div className="border-b">
          <h1>JujuApps</h1>
        </div>
        <div className="flex items-center font-normal text-xs text-center gap-1">
          <div className="w-[60px]  text-black bg-white px-2 rounded-md">
            All
          </div>
          <div className="w-[60px] px-2 rounded-md">missed</div>
        </div>
        <div className="w-[50px] text-right w-[50px]">+</div>
      </div>
    </div>
  );
}
