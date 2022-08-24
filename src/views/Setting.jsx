import NavSetting from "../component/navbar/NavSetting";
import SectionSetting from "../component/setting/SectionSetting";
import Tab from "../component/Tab";

export default function Setting() {
  return (
    <div className="w-base m-auto bg-white min-h-screen box-border">
      <NavSetting />
      <SectionSetting />
      <Tab />
    </div>
  );
}
