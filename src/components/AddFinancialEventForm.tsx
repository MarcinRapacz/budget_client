import { useContext } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import { FinancialEventContext } from "../contexts/FinancialEventContext";
import { FinancialEvent } from "../models/FinancialEvent";
import { FinancialEventStatus } from "../consts/FinancialEventStatus";

const AddFinancialEventForm = () => {
  const financialEventContext = useContext(FinancialEventContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (financialEvent: FinancialEvent) => {
    financialEvent.status = financialEvent.status
      ? FinancialEventStatus.INCOME
      : FinancialEventStatus.EXPENSE;
    financialEventContext.add(financialEvent);
    reset();
  };

  return (
    <form
      data-testid="form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center relative h-10 input-component"
    >
      <input
        data-testid="value"
        type="number"
        autoComplete="off"
        {...register("value", { required: true })}
        placeholder="Podaj kwotę"
      />
      {errors.value && <p data-testid="required">This field is required</p>}

      <input
        data-testid="description"
        type="text"
        // className={`h-full w-full mr-1 border-gray-300 px-2 transition-all border-blue rounded-sm focus:outline-none`}
        {...register("description", { required: true })}
        autoComplete={"off"}
        placeholder="Dodaj opis"
      />

      <input
        data-testid="date"
        type="date"
        defaultValue={moment().format("YYYY-MM-DD")}
        // className={`h-full border-gray-300 px-2 transition-all border-blue rounded-sm focus:outline-none`}
        {...register("date", { required: true })}
      />
      {/* {errors.date && <p data-testid="required">This field is required</p>} */}
      {/* <p data-testid="required">{errors.date && "This field is required"}</p> */}

      <input
        data-testid="status"
        type="checkbox"
        // className={`h-full border-gray-300 px-2 transition-all border-blue rounded-sm focus:outline-none`}
        {...register("status")}
      />

      <button
        type="submit"
        data-testid="sendButton"
        className="uppercase p-3 flex items-center bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 "
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
    </form>
  );
};

export default AddFinancialEventForm;
