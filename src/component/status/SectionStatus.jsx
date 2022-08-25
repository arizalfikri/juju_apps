import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { motion } from "framer-motion";
export default function SectionStatus({ carousel, length }) {
  const data = useSelector((store) => store.dataReducer.data);
  return (
    <div className="flex flex-col min-h-screen justify-between p-6">
      <div className="flex justify-between gap-6 items-center px-4">
        <Link to={"/"}>
          <img src="./icon/close.png" alt="" className="h-[10px] w-[10px]" />
        </Link>
        <img src="./icon/flash.png" alt="" />
      </div>
      <motion.div>
        <motion.div
          ref={carousel}
          className="carousel  overflow-hidden cursor-grab max-w-base mb-2"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -length }}
            className="flex gap-2 w-full h-full"
          >
            {data.map((el, i) => {
              return (
                <motion.img
                  key={i}
                  src={el.urls.thumb}
                  alt=""
                  className="rounded-md max-h-[50px] object-cover min-w-[90px]"
                />
              );
            })}
          </motion.div>
        </motion.div>
        <motion.div className="flex justify-between items-center px-10">
          <motion.img src="./icon/view.png" alt="" />
          <motion.div className="w-[50px] h-[50px] border-2 rounded-full"></motion.div>
          <motion.img src="./icon/switch-camera.png" alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
}
