import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Carousel } from "react-responsive-carousel";
export default function SectionStatus() {
  const data = useSelector((store) => store.dataReducer.data);
  return (
    <div className="flex flex-col min-h-screen justify-between p-6">
      <div className="flex justify-between gap-6 items-center px-4">
        <Link to={"/"}>
          <img src="./icon/close.png" alt="" className="h-[10px] w-[10px]" />
        </Link>
        <img src="./icon/flash.png" alt="" />
      </div>
      <div>
        <Carousel>
          {data.map((el, i) => {
            return (
              <img
                key={i}
                src={el.user.profile_image.large}
                alt=""
                className="w-[80px] h-[100px] rounded-md"
              />
            );
          })}
        </Carousel>
        <div className="flex justify-between items-center px-10">
          <img src="./icon/view.png" alt="" />
          <div className="w-[50px] h-[50px] border-2 rounded-full"></div>
          <img src="./icon/switch-camera.png" alt="" />
        </div>
      </div>
    </div>
  );
}
