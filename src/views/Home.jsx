import Content from "../component/home/Content";
import { useDispatch } from "react-redux/es/exports";
import { useCallback, useEffect, useState, useRef } from "react";
import { fetchData } from "../store/actions/action";
import Tab from "../component/Tab";
import Navbar from "../component/navbar/Navbar";
export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const changePage = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
  };
  useEffect(() => {
    dispatch(fetchData(page))
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);
  useEffect(() => {
    dispatch(fetchData(page));
  }, [page]);
  return (
    <div>
      <Navbar />
      <div className="max-w-480 bg-white drop-shadow-base m-auto py-20 min-h-screen">
        {isLoading ? (
          <div className="px-20">Loading....</div>
        ) : (
          <Content changePage={changePage} />
        )}
      </div>
      <Tab />
    </div>
  );
}
