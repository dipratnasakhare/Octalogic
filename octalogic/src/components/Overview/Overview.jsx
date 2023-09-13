import React from "react";
import { useSelector } from "react-redux";
import logo from "../../icons/overview.png";
import { DataOverview } from "./Table";
import { DataStudent } from "./TableStudent";
export const Overview = () => {
  const { students, lastest, bestStudent } = useSelector(
    (store) => store.prodManager
  );

  return (
    <div className="justify-between m-5">
      <div>
        <div className="w-24 h-10">
          <h5 className="text-gray-500 font-sans text-3xl font-bold leading-9 tracking-normal text-left">
            Overview
          </h5>
        </div>

        <div className="flex gap-5">
          {students.map((ele, i) => {
            return (
              <div className="border-2 p-3">
                <div key={i} className="flex gap-4 ">
                  <div className="flex justify-center">
                    <img src={logo} alt="logo" />
                  </div>
                  <div>
                    <p className="text-xl font-normal leading-7 tracking-normal text-left">
                      {ele.user}
                    </p>
                    <p className="text-xs font-normal leading-4 tracking-normal text-left">
                      {ele.text}
                    </p>
                  </div>
                </div>

                <div className="flex items-end justify-end text-red-700">
                  <p>View</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-5">
        <div>
          <h5 className="text-gray-500 font-sans text-2xl font-bold leading-9 tracking-normal text-left">
            Latest Enrolments{" "}
          </h5>
        </div>
        <DataOverview data={lastest} />
      </div>



      <div className="my-5">
        <div>
          <h5 className="text-gray-500 font-sans text-2xl font-bold leading-9 tracking-normal text-left">
            BEST STUDENTS{" "}
          </h5>
        </div>
        <DataStudent data={bestStudent} />
      </div>
    </div>
  );
};
