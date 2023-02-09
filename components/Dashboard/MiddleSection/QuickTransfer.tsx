import { MdAdd } from "react-icons/md";

type Props = React.ComponentProps<"form">;

function QuickTransfer(props: Props) {
  return (
    <form {...props}>
      <h2 className="text-lg font-semibold text-[#1A1A1A] mb-5">
        Quick Transfer
      </h2>
      {/* */}
      <div className="flex justify-end gap-3 w-full overflow-x-auto my-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <button className="w-[40px] h-[40px] bg-[#EEF1FF] rounded-full" />
        ))}
        <button className="w-[40px] h-[40px] bg-[#EEF1FF] rounded-full flex justify-center items-center text-2xl text-primary border-dashed border-primary border-2">
          <MdAdd />
        </button>
      </div>

      {/* input */}
      <input
        name="cardNumber"
        type="number"
        placeholder="1234 5678 0099 ****"
        list="cardNumbers"
        className="px-3 py-2 w-full rounded-md border text-primary hover:border-primary hover:outline-primary focus-visible:outline-primary my-2 transition"
      />
      <datalist id="cardNumbers">
        <option value="1234 5678 0091 ****" />
        <option value="1234 5678 0092 ****" />
        <option value="1234 5678 0093 ****" />
        <option value="1234 5678 0094 ****" />
        <option value="1234 5678 0095 ****" />
      </datalist>

      <input
        type="number"
        placeholder="Enter your amount"
        className="px-3 py-2 w-full rounded-md border text-primary hover:border-primary hover:outline-primary focus-visible:outline-primary my-2 transition"
      />

      {/* Bottom actions */}
      <div className="flex gap-3 w-full">
        <button
          type="submit"
          className="capitalize px-3 py-1 bg-primary text-white text-lg rounded-md basis-full hover:shadow-lg hover:shadow-blue-300 transition"
        >
          Send Money
        </button>
        <button
          type="button"
          className="capitalize px-3 py-2 bg-[#F8F8F8] text-[#9E9E9E] text-lg rounded-md basis-full hover:bg-primary-container transition"
        >
          Save as Draft
        </button>
      </div>
    </form>
  );
}

export default QuickTransfer;
