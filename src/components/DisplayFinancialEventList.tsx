import { useContext } from "react";
import moment from "moment";
import { FinancialEventContext } from "../contexts/FinancialEventContext";
import { FinancialEventStatus } from "../consts/FinancialEventStatus";

const DisplayFinancialEventList = () => {
  const financialEventContext = useContext(FinancialEventContext);

  return (
    <ul>
      <li className="flex border-b">
        <span className="font-semibold w-2/12">Data</span>
        <span className="font-semibold w-2/12">Wartość</span>
        <span className="font-semibold flex-grow">Opis</span>
        <span className="font-semibold w-1/12">Zmień status</span>
      </li>
      {financialEventContext.list.map((financialEvent) => (
        <li
          data-testid="financialEventItemList"
          key={financialEvent.id}
          className={`flex ${
            financialEvent.status === FinancialEventStatus.INCOME
              ? "bg-green-200"
              : "bg-red-200"
          }`}
        >
          <span className="w-2/12">
            {moment(financialEvent.date).format("DD MMMM YYYY")}
          </span>
          <span className="w-2/12">{financialEvent.value}</span>
          <span className="flex-grow">{financialEvent.description}</span>
          <button
            data-testid="changeStatusButton"
            className="uppercase p-3 flex items-center bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 "
            onClick={() =>
              financialEventContext.toggleStatus(financialEvent.id)
            }
          >
            <svg
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
              style={{ transform: "rotate(360deg)" }}
            >
              <path
                d="M26 18A10 10 0 1 1 16 8h6.182l-3.584 3.585L20 13l6-6l-6-6l-1.402 1.414L22.185 6H16a12 12 0 1 0 12 12z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DisplayFinancialEventList;
