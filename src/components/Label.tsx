import { Color } from "../consts/Color";

interface IProps {
  header: string;
  text: string;
  color: Color;
}

const Label = (props: IProps) => {
  return (
    <div className={`w-full md:w-1/2 xl:w-1/3 p-6`}>
      <div
        className={`bg-gradient-to-b from-${props.color}-200 to-${props.color}-100 border-b-4 border-${props.color}-600 rounded-lg shadow-xl p-5`}
      >
        <div className={`flex flex-row items-center`}>
          <div className={`flex-shrink pr-4`}>
            <div className={`rounded-full p-5 bg-${props.color}-600`}>
              <i className={`fa fa-wallet fa-2x fa-inverse`}></i>
            </div>
          </div>
          <div className={`flex-1 text-right md:text-center`}>
            <h5 className={`font-bold uppercase text-gray-600`}>
              {props.header}
            </h5>
            <h3 className={`font-bold text-3xl`}>
              <span>{props.text}</span>
              <span className={`text-${props.color}-500`}>
                <i className={`fas fa-caret-up`}></i>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Label;
