import ListContact from "../component/ListContact";
import NavChat from "../component/navbar/NavChat";
import Tab from "../component/Tab";
export default function Chat() {
  return (
    <div className="max-w-480 m-auto bg-white min-h-screen box-border">
      <NavChat />
      <ListContact />
      <Tab />
    </div>
  );
}
