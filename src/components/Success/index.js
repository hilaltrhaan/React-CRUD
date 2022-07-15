
import { React, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Oval } from 'react-loader-spinner'

function createData(
  id,
  email,
  username,
) {
  return {
    id,
    email,
    username,
  };
}

export default function Success(){
  const [loading,setLoading]=useState(true);
  const [users,setUsers] = useState([]);

  useEffect(()=>{
   getAllUser();
  },[])

  const getAllUser = () =>{
    axios.get("http://localhost:3000/users").then((response)=>{
      var temp = response.data.map((user)=>{
        return createData(user.id,user.email,user.username)
      })
      setUsers(temp);
      setLoading(false)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const deleteUser =(id)=>{
    axios.delete(`http://localhost:3000/users/${id}`).then((response)=>{
      console.log("Kullanıcı Silindi!")
      getAllUser();
    }).catch((err)=>{
      console.log(err);
    })
  }
  return(
    loading ? <Oval color="#006666" height={80} width={80} />:

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">
                  <button onClick={() => {
                    deleteUser(row.id)
                  }}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>


                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )

}
