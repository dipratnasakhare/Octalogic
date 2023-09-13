import { GET_COURSE } from "./ProdactionTypes";

const students = [
  {user:164, text:'total number of student'},
  {user:12, text:'total number of courses'},
  {user:"$2000", text:'total amount earned'},
  {user:"Guitar", text:'best performing course'},
  {user:"Flute", text:'worst performing course'},
]

const lastest = [
  {enr:"1541235", Sname:"john Doe",Cname:"Percussion",fees:"$120", enrDate:"12-08-2023"},
  {enr:"1541235", Sname:"john Doe",Cname:"Percussion",fees:"$120", enrDate:"12-08-2023"},
  {enr:"1541235", Sname:"john Doe",Cname:"Percussion",fees:"$120", enrDate:"12-08-2023"},
  {enr:"1541235", Sname:"john Doe",Cname:"Percussion",fees:"$120", enrDate:"12-08-2023"},
  {enr:"1541235", Sname:"john Doe",Cname:"Percussion",fees:"$120", enrDate:"12-08-2023"}
]

const bestStudent = [
  {regNo:"1541235", Fname:"john",Lname:"Doe",Course:"3", totalFees:"$300", regDate:"01-06-2023"},
  {regNo:"1541235", Fname:"john",Lname:"Doe",Course:"3", totalFees:"$300", regDate:"01-06-2023"},
  {regNo:"1541235", Fname:"john",Lname:"Doe",Course:"3", totalFees:"$300", regDate:"01-06-2023"},
  {regNo:"1541235", Fname:"john",Lname:"Doe",Course:"3", totalFees:"$300", regDate:"01-06-2023"},
  {regNo:"1541235", Fname:"john",Lname:"Doe",Course:"3", totalFees:"$300", regDate:"01-06-2023"}
]

const init = {
  loading: false,
  data: {},
  students,
  lastest,
  bestStudent
};

export const prodReducer = (state = init, action) => {
  switch (action.type) {

    case GET_COURSE: {
      return {
        ...state,
        data: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
