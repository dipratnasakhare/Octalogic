import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddPost } from "../../Redux/products/Prodaction";

export function PopoverDemo() {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [instructer, setInstructer] = useState("");
  const [instruments, setInstruments] = useState("");
  const [dayOfTheWeek, setDayOfTheWeek] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch()

  const HandelSubmit = () => {
    let obj = {
      courseName,
      description,
      instructer,
      instruments,
      dayOfTheWeek,
      numberOfStudents: "26",
      price,
      status: "Active",
    }
    dispatch(AddPost(obj))
  }


  //courseName: "Classical Guitar",
  //     description: "Guitar classes for",
  //     instructer: "ms.Jane Doe",
  //     instruments: "Guitar",
  //     dayOfTheWeek: "Wednesday",
  //     numberOfStudents: "26",
  //     price: "30",
  //     status: "Active",

  return (
    <Popover className="boeder-0">
      <PopoverTrigger asChild>
        <div className="absolute flex  gap-4 bottom-10 right-11 m-auto p-3 rounded bg-pink-300">
          <div>
            <svg
              class="w-4 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </div>
          <div>Add course</div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-screen m-auto border-0 shadow-none">
        <div className="grid gap-4 w-3/12 m-auto border-2 p-5">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Add Course</h4>
          </div>
          <div className="grid gap-2 ">
            <div className="gap-4">
              <Input
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Course Name"
                id="width"
                className="rounded-s col-span-2 h-8 w-full"
              />
            </div>
            <div className="gap-4">
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                id="maxWidth"
                className="rounded-s col-span-2 h-8 w-full"
              />
            </div>
            <div className="gap-4">
              <Input
                value={instructer}
                onChange={(e) => setInstructer(e.target.value)}
                placeholder="Instructor"
                id="maxWidth"
                className="rounded-s col-span-2 h-8 w-full"
              />
            </div>
            <div className="gap-4">
              <Input
                value={instruments}
                onChange={(e) => setInstruments(e.target.value)}
                placeholder="Instructor"
                id="maxWidth"
                className="rounded-s col-span-2 h-8 w-full"
              />
            </div>
            <div className="gap-4">
              <Input
                value={dayOfTheWeek}
                onChange={(e) => setDayOfTheWeek(e.target.value)}
                placeholder="Day of the week"
                id="maxWidth"
                className="rounded-s col-span-2 h-8 w-full"
              />
            </div>
            <div className="gap-4">
              <Input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                id="maxWidth"
                className="rounded-s col-span-2 h-8 w-full"
              />
            </div>
            <div className="flex items-end justify-end gap-3 m-5 ">
              
              <div className="p-2" >Cancel</div>
              <div className="p-2  gap-4  rounded bg-pink-300">
                <div onClick={HandelSubmit}>Add Course</div>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
