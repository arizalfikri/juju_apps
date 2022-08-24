import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./css/content.css";
export default function Content({ changePage }) {
  const data = useSelector((store) => store.dataReducer.data);
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
      <div className="thisGrid px-2">
        {data.map((item, i) => {
          return (
            <div className="drop-shadow text-xs bg-white rounded-md" key={i}>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center p-2 bg-white rounded-md drop-shadow">
                  <div className="flex gap-2 items-center">
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
                <img src={item.urls.full} alt="" className="rounded-xl" />
                <div className="flex w-full justify-between items-center px-2">
                  <p>{item.alt_description}</p>
                  <img
                    src="./icon/more.png"
                    alt=""
                    width={"16px"}
                    height={"16px"}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <a href="" onClick={(e) => changePage(e)}>
        More...
      </a>
    </div>
  );
}
