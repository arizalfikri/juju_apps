import Content from "../component/home/Content";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useCallback, useEffect, useState, useRef } from "react";
import { fetchData } from "../store/actions/action";
import Tab from "../component/Tab";
import Navbar from "../component/navbar/Navbar";
import AnimateLoading from "../component/AnimateLoading";
export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isError, setError] = useState(false);
  const [hasMore, setMore] = useState(false);
  const data = useSelector((store) => store.dataReducer.data);
  const dispatch = useDispatch();
  const listen = useRef();
  const lastElement = useCallback(
    (node) => {
      if (listen.current) listen.current.disconnect();
      listen.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) listen.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const show = () => {
    if (isLoading) {
      return <AnimateLoading />;
    } else return <Content data={data} lastElement={lastElement} />;
  };
  useEffect(() => {
    dispatch(fetchData(page))
      .then((result) => {
        setMore(result.length > 0);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [page, hasMore]);
  return (
    <div className="max-w-480 m-auto">
      <Navbar />
      <div className="max-w-480 bg-white drop-shadow-base m-auto py-20 min-h-screen justify-center">
        {show()}
      </div>
      <Tab page={"home"} />
    </div>
  );
}
