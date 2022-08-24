import React from "react";
import MaterialTable, { Column } from "@material-table/core";
import { faker } from '@faker-js/faker';
import { Button } from "@material-tailwind/react";
import { FaShareAlt } from "react-icons/fa";
import { Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';


const lookup = { true: "Available", false: "Unavailable" };


// const data = [
//   { fullName: "Tod", experience: "10 Years", salary: "RPS 10",Posted:"", availability: true },
//   { firstName: "Jess", lastName: "Smith", birthYear: 2000, availability: false }
// ];
const data = [];
console.log(data);
for (let i = 0; i < 100; i++) {
  data[i] = {
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    // email: faker.internet.email(),
    experience: faker.datatype.number(length = 10,),
    salary: faker.datatype.number(length = 15,),
    // phone: faker.phone.number(),
    Posted: [<Typography className="text-gray-700">{faker.date.past().toLocaleDateString('en-US')}</Typography>,],
    // address: faker.address.streetAddress(),
    // city: faker.address.city(),
    // company: faker.company.name(),
    skills: faker.lorem.words(),
    // title: faker.name.jobTitle(),
    status: faker.datatype.boolean(),
    JobInfo: [<Typography>{faker.name.jobTitle()}</Typography>, <Typography className="text-gray-700">
      Location: {faker.address.city()}
    </Typography>],
    UserInfo: [
      <Typography >{faker.name.fullName()}</Typography>,
      <Typography className="text-gray-700">Experience:{faker.datatype.number(length = 10,)} Years</Typography>,
      <Typography className="text-gray-700">RPH: ₹ {faker.datatype.number(length = 1500,)}</Typography>,
      <Typography className="text-gray-700"><span className="text-gray-700 font-sans font-bold">Skills: </span> {faker.lorem.words(2)}</Typography>,
    ],
  }
}

const columns = [
  { title: "User Info", field: "UserInfo" },
  { title: "Job Info", field: "JobInfo" },
  { title: "Post Date", field: "Posted", type: "numeric" },
  { title: "Availablity", field: "availability", status },
  { title: "Action", field: "Action" },
];

const SelectTable = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <>
      <MaterialTable

        columns={columns}
        data={data.map((row, index) => {
          return {
            ...row,
            availability: row.status ? <h1 key={index} className="text-green-600 font-bold inline-block font-sans bg-green-100 text-center rounded-xl w-fit px-2 py-1">Available</h1> :
              <h1 key={index} className="text-gray-500 font-bold font-sans bg-gray-300 text-center rounded-xl w-fit px-2 py-1">Not available</h1>,
            Avatar: <img key={index} src={row.avatar} alt={row.name} />,
            Action: <Button key={index} variant="text" className='hover:text-red-500' color="red">
              <Link to={`/candidate/${row.name}`}>
                <FaShareAlt className="text-gray-500 text-lg hover:text-red-700" />
              </Link>
            </Button>,
          };
          key = { index }
        }
        )}
        style={{ width: "72rem", margin: "0 auto",paddingBottom:"4rem", borderRadius: "1rem", marginTop: "3rem", marginBottom: "5rem", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", alignItems: "center", textAlign: "center", justifyContent: "center" }}
        title=" "
        options={{
          search: false,
          selection: true,
          paging: true,
          sorting: true,

          headerStyle: {
            borderBottom: "1px solid #e0e0e0",
            color: "#dc2026",
            fontSize: "1rem",
            fontWeight: "700",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            textTransform: "capitalize",
            padding: "0.5rem",
            border: "1px solid #e0e0e0",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
          },
          rowStyle: {
            color: "#000",
            fontSize: "1rem",
            alignItems: "center",
            fontWeight: "bold",
            textAlign: "center",
          },
        }}
        actions={[
          {
            tooltip: 'Remove All Selected Users',
            icon: 'share',
            onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
          }
        ]}
        onSelectionChange={(rows) => alert('You selected ' + rows.length + ' rows')}
      />

    </>
  )
}

export default SelectTable;