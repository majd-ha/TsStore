import { ImSpinner3 } from "react-icons/im";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <ImSpinner3 size={"4rem"} color="orange" className="animate-spin" />
    </div>
  );
}
