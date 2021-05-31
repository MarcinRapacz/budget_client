import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FinancialEventStatus } from "../consts/FinancialEventStatus";
import { FinancialEvent } from "../models/FinancialEvent";

export interface FinancialEventContextInterface {
  list: FinancialEvent[];
  add: (financialEvent: FinancialEvent) => void;
  remove: (financialEvent: FinancialEvent) => void;
  getById: (id: string) => FinancialEvent | null;
  toggleStatus: (id: string) => void;
}

const dummyData: FinancialEvent[] = [
  {
    date: new Date(),
    value: 100,
    description: "test1",
    id: "asfasdfasd",
    status: FinancialEventStatus.EXPENSE,
  },
  {
    date: new Date(),
    value: 100,
    description: "test2",
    id: "asfasdfassd",
    status: FinancialEventStatus.INCOME,
  },
  {
    date: new Date(),
    value: 100,
    description: "test3",
    id: "asfasdfasdasfasfa",
    status: FinancialEventStatus.EXPENSE,
  },
  {
    date: new Date(),
    value: 100,
    description: "test4",
    id: "asfasasfasdfassd",
    status: FinancialEventStatus.INCOME,
  },
];

const FinancialEventContext = createContext<FinancialEventContextInterface>({
  list: [],
  add: () => null,
  remove: () => null,
  getById: () => null,
  toggleStatus: () => null,
});

const FinancialEventProvider: React.FC = ({ children }) => {
  const [list, setList] = useState<FinancialEvent[]>(dummyData);

  const add = (financialEvent: FinancialEvent) => {
    if (!financialEvent.id) {
      financialEvent.id = uuidv4();
    }
    setList([...list, financialEvent]);
  };

  const remove = (financialEvent: FinancialEvent) => {
    setList(list.filter((item) => item.id !== financialEvent.id));
  };

  const getById = (id: string) => {
    return list.find((FinancialEvent) => FinancialEvent.id === id) || null;
  };

  const toggleStatus = (id: string) => {
    const financialEvent = getById(id);
    if (!financialEvent) {
      return;
    }

    financialEvent.status =
      financialEvent.status === FinancialEventStatus.EXPENSE
        ? FinancialEventStatus.INCOME
        : FinancialEventStatus.EXPENSE;

    setList([...list]);
  };

  return (
    <FinancialEventContext.Provider
      value={{
        list,
        add,
        remove,
        getById,
        toggleStatus,
      }}
    >
      {children}
    </FinancialEventContext.Provider>
  );
};

const useFinancialEventContext = () => useContext(FinancialEventContext);

export {
  FinancialEventContext,
  FinancialEventProvider,
  useFinancialEventContext,
};
