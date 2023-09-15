import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
type FilterProps = {
  addfilter: (name: string) => void;
  removefilter: (name: string) => void;
  name: string;
};
export default function FilterItem({
  name,
  addfilter,
  removefilter,
}: FilterProps) {
  return (
    <div className="flex justify-between items-center gap-2 my-3">
      <p className="capitalize">{name}</p>
      <div className="flex items-center justify-between px-2 gap-2">
        <button onClick={() => addfilter(name)}>
          <AiOutlinePlusCircle />
        </button>
        <button onClick={() => removefilter(name)}>
          <AiOutlineMinusCircle />
        </button>
      </div>
    </div>
  );
}
