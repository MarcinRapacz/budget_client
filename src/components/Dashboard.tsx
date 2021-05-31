import { Color } from "../consts/Color";
import Label from "./Label";

const Dashboard = () => {
  return (
    <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
      <div className="bg-gray-800 pt-3">
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
          <h3 className="font-bold pl-2">Dashboard</h3>
        </div>
      </div>

      <div className="flex flex-wrap">
        <Label color={Color.GREEN} header="Total Revenue" text="$3249" />
        <Label color={Color.PINK} header="Total Users" text="249" />
        <Label color={Color.YELLOW} header="New Users" text="2" />
        <Label color={Color.BLUE} header="Server Uptime" text="152 days" />
        <Label color={Color.INDIGO} header="To Do List" text="7 tasks" />
        <Label color={Color.RED} header="Issues" text="3" />
      </div>
    </div>
  );
};

export default Dashboard;
