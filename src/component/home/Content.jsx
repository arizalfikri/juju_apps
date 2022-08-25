import "./css/content.css";
import { Link } from "react-router-dom";
export default function Content({ data, lastElement }) {
  return (
    <div className="flex flex-col gap-4 box-border">
      <div className="flex gap-4 justify-center text-xs text-center">
        <div className="w-[50px]">
          <p className="border-b-2 border-blue">All</p>
        </div>
        <div className="w-[1px] bg-blue"></div>
        <div className="w-[50px]">
          <p>Friends</p>
        </div>
      </div>
      <div className="thisGrid px-2 w-full">
        {data.map((item, i) => {
          if (data.length - 1 === i) {
            return (
              <div
                ref={lastElement}
                className="drop-shadow text-xs bg-white rounded-md"
                key={i}
              >
                <div className="flex flex-col gap-2">
                  <img src={item.urls.full} alt="" className="rounded-xl" />
                  <div className="flex w-full justify-between items-center px-2">
                    <p>{item.alt_description}</p>
                    <Link to={`/detail/${item.id}`}>
                      <img
                        src="./icon/more.png"
                        alt=""
                        width={"16px"}
                        height={"16px"}
                      />
                    </Link>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded-md drop-shadow text-[8px] text-gray">
                    <div className="flex gap-2 items-center max-w-[50px] font-bold">
                      <img
                        src={item.user.profile_image.large}
                        alt=""
                        className="rounded-full w-[24px] h-[24px] border"
                      />
                      <p>{item.user.name}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src="./icon/like.png"
                        alt=""
                        width={"12px"}
                        height={"12px"}
                      />
                      {item.likes}
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="drop-shadow text-xs bg-white rounded-md" key={i}>
                <div className="flex flex-col gap-2">
                  <img src={item.urls.thumb} alt="" className="rounded-xl" />
                  <div className="flex w-full justify-between items-center px-2">
                    <p>{item.alt_description}</p>
                    <Link to={`/detail/${item.id}`}>
                      <img
                        src="./icon/more.png"
                        alt=""
                        width={"16px"}
                        height={"16px"}
                      />
                    </Link>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded-md drop-shadow text-[8px] text-gray">
                    <div className="flex gap-2 items-center max-w-[50px] font-bold">
                      <img
                        src={item.user.profile_image.large}
                        alt=""
                        className="rounded-full w-[24px] h-[24px] border"
                      />
                      <p>{item.user.name}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src="./icon/like.png"
                        alt=""
                        width={"12px"}
                        height={"12px"}
                      />
                      {item.likes}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      {/* <a href="" onClick={(e) => changePage(e)}>
        More...
      </a> */}
    </div>
  );
}
