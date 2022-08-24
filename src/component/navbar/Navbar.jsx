export default function Navbar() {
  return (
    <div className="w-base m-auto">
      <div className="fixed w-base z-40 m-auto bg-blue flex justify-between px-6 py-4 text-white rounded-b-sm border-b font-bold">
        <div className="border-b">
          <h1>JujuApps</h1>
        </div>
        <button className="hover:opacity-50">
          <img
            src="./icon/menu-white.png"
            alt=""
            className="w-[25px] h-[25px]"
          />
        </button>
      </div>
    </div>
  );
}
