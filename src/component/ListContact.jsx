export default function ListContact() {
  const chat = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  const length = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div>
      <div className="pt-[5em] bg-white text-xs px-6">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded-md text-black w-full"
        />
      </div>
      <div className="max-w-480 bg-white m-auto min-h-screen flex flex-col gap-4 pt-2 pb-8 px-6">
        {length.map((element) => {
          return (
            <div
              key={element}
              className="flex justify-between max-h-[60px] items-center w-full border-b pb-1 text-xs"
            >
              <div className="flex gap-3 items-center">
                <img
                  src="./img/kucing.jpg"
                  alt=""
                  className="rounded-full w-[32px] h-[32px]"
                />
                <div>
                  <h3 className="font-bold">Joe</h3>
                  <p>{chat.length > 50 ? chat.slice(0, 50) + "..." : chat}</p>
                </div>
              </div>
              <div>11.56</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
