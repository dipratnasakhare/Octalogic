import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCourse } from "../../Redux/products/Prodaction";
import { DataTableDemo } from "./Table";
import { PopoverDemo } from "./Popover";

export const Course = () => {
  const { data } = useSelector((store) => store.prodManager);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCourse());
  }, []);

  return (
    <div  className="relative py-4 px-8 h-full">
      <div className="grid gap-7">
        <div className="w-24 h-10">
          <h5 className="text-gray-500 font-sans text-3xl font-bold leading-9 tracking-normal text-left">
            Courses
          </h5>
        </div>

        <div className="grid gap-4">
          <div>
            <DataTableDemo data={data} />
          </div>
        </div>
      </div>
      {/* <div>Add Course</div> */}
        
        <PopoverDemo />
    </div>
  );
};
