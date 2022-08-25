export default function ListContact({ description }) {
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
      <div className="max-w-480 bg-white m-auto min-h-screen flex flex-col gap-6 pt-4 pb-8 px-6">
        {length.map((element) => {
          return (
            <div
              key={element}
              className="flex justify-between max-h-[60px] items-center w-full border-b pb-1 text-[10px] text-gray"
            >
              <div className="flex gap-3 items-center">
                <img
                  src="./img/kucing.jpg"
                  alt=""
                  className="rounded-full w-[35px] h-[35px]"
                />
                <div>
                  <h3 className="font-bold">Joe</h3>
                  <p>
                    {description.length > 50
                      ? description.slice(0, 50) + "..."
                      : description}
                  </p>
                </div>
              </div>
              <div className="text-[8px]">11.56</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
