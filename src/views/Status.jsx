import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SectionStatus from "../component/status/SectionStatus";
import { fetchData } from "../store/actions/action";
import { useDispatch } from "react-redux/es/exports";
export default function Status() {
  const [length, setLength] = useState(0);
  const carousel = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(1));
  }, []);
  return (
    <div className="max-w-480 m-auto bg-cover bg-status bg-no-repeat">
      <SectionStatus
        carousel={carousel}
        length={length}
        setLength={setLength}
      />
    </div>
  );
}
