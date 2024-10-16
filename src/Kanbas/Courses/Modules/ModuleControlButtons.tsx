import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { HiPlus } from "react-icons/hi2";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <HiPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}