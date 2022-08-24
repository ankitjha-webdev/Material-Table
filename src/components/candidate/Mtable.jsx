import React, { useState } from "react";
import { faker } from '@faker-js/faker';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead, TableRow,
  Paper,
  Avatar,
  Grid,
  IconButton,
  Typography,
  TablePagination,
  TableFooter,

} from '@mui/material';
import { Button } from "@material-tailwind/react";
import { FaEye, FaShare, FaShareAlt } from 'react-icons/fa'

const USERS = [];

for (let i = 0; i < 100; i++) {
  USERS[i] = {
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    // email: faker.internet.email(),
    experience: faker.datatype.number(length = 10,),
    salary: faker.datatype.number(length = 15,),
    // phone: faker.phone.number(),
    Posted: faker.date.past().toLocaleDateString('en-US'),
    // address: faker.address.streetAddress(),
    city: faker.address.city(),
    company: faker.company.name(),
    skills: faker.lorem.words(),
    // title: faker.name.jobTitle(),
    status: faker.datatype.boolean(),
  }
}

console.log(USERS);

const Mtable = () => {

  const [userData, setUserData] = useState();
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpen = (row) => {
    // row.preventDefault();
  //  console.log(row);
   setUserData(row);
   console.log(userData);
  }
  return (
    <div>
      <TableContainer component={Paper} className={`rounded-2xl mx-auto mt-5 max-w-6xl shadow-md my-5`}>
        <Table className="min-w-min max-h-[35rem]" stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Info</TableCell>
              <TableCell >Job Info</TableCell>
              <TableCell >Post Date</TableCell>
              <TableCell >Status</TableCell>
              <TableCell >Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className=''>
                  <Grid container spacing={2} >
                    <Grid item lg={2}>
                      {/* {
                        row.avatar ?  <Avatar src={row.avatar} /> : <Avatar alt={row.name} src={`.`} className='' /> 
                      } */}

                      {/* <Avatar alt={row.name} src={row.avatar} /> */}
                      <Avatar alt={row.name} src={`.`} className='' />
                    </Grid>

                    <Grid item lg={10}>
                  
                      <Typography className='font-extrabold font-sans  text-gray-900 text-4xl'>
                        {row.name}
                      </Typography>
                   

                      <Typography className='text-gray-700'>
                        Experience: {row.experience} Years
                      </Typography>
                      <Typography className='text-gray-700'>
                        RPH: {row.salary} LPA
                      </Typography>
                      <span className='text-gray-700'>
                        <small className='text-gray-700 font-bold text-sm'>Skills</small>    {row.skills}
                      </span >
                    </Grid>
                  </Grid>
                </TableCell>

                <TableCell >
                  <div>
                    <Typography className='text-gray-900 font-bold'>
                      {row.company}
                    </Typography>
                  </div>
                  <Typography className='text-gray-700'>
                    Location:  {row.city}
                  </Typography>
                </TableCell>

                <TableCell >
                  {row.Posted}
                </TableCell>

                <TableCell >
                  {row.status ?
                    <> <h1 className='text-green-700 font-bold inline-block font-sans bg-green-50 text-center rounded-xl w-fit px-2 py-1'>Available</h1> </> :
                    <> <h1 className='text-gray-500 font-bold font-sans bg-gray-200 text-center rounded-xl w-fit px-2 py-1'>Not Available</h1> </>}
                </TableCell>

                <TableCell>
                  <Button variant="text" className='hover:text-red-500' onClick={() => handleOpen(row)} >
                    <FaShareAlt className="text-gray-500 text-lg hover:text-red-700" />
                  </Button>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>

        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          className="border-t-2 border-gray-300"
          count={USERS.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

      </TableContainer>
    </div >
  )
}

export default Mtable