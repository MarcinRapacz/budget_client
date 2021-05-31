import AddFinancialEventForm from "../components/AddFinancialEventForm";
import DisplayFinancialEventList from "../components/DisplayFinancialEventList";
import { FinancialEventProvider } from "../contexts/FinancialEventContext";

const FinancialEventPage = () => {
  return (
    <FinancialEventProvider>
      <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
        <div className="bg-gray-800 pt-3">
          <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h3 className="font-bold pl-2">Zdarzenie</h3>
          </div>
        </div>

        <div className="flex flex-wrap p-5 flex-col">
          <AddFinancialEventForm />
          <DisplayFinancialEventList />
        </div>
      </div>
    </FinancialEventProvider>
  );
};

export default FinancialEventPage;
