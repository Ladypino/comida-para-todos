import React, { Fragment, useState, useEffect } from 'react';
import { firebase } from '../../firebase';
import './styles/getData.css';
import DataGridDemo from './intranetTable';
import { DataGrid } from '@material-ui/data-grid';
import IntranetDataExport  from './intranetDataExport'
const GetData = () => {
  const [showTable, setShowTable] = useState([])

  const handleFoodShow = () => {
    const obtenerDatos = async () => {
      const db = firebase.firestore()
      try {
        const data = await db.collection('Despensa').get()
        const arrayData = data.docs.map(doc => (doc.data()))
        setShowTable(arrayData)
        console.log(arrayData[0].data.nombre)
        // const columns = [
        //   { field: showTable[0].data.nombre, headerName: 'ID', width: 70 },
        //   { field: 'firstName', headerName: 'First name', width: 130 },
        //   { field: 'lastName', headerName: 'Last name', width: 130 },
        //   {
        //     field: 'age',
        //     headerName: 'Age',
        //     type: 'number',
        //     width: 90,
        //   },
        //   // {
        //   //   field: 'fullName',
        //   //   headerName: 'Full name',
        //   //   description: 'This column has a value getter and is not sortable.',
        //   //   sortable: false,
        //   //   width: 160,
        //   //   valueGetter: (params) =>
        //   //     `${params.getValue('firstName') || ''} ${
        //   //       params.getValue('lastName') || ''
        //   //     }`,
        //   // },
        // ];
        
        // const rows = [
        //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        // ];

      //   showTable.map(data => (
                
      //     <div className="list-group-item" key={data.id}>
      //     <div className="box">
      //       <p>{data.nombreCompleto}</p>
      //       </div>
      //       <div className="box">
      //       <p>{data.correo}</p>
      //       </div>
      //     </div>
      //     ))
      // }
  



      } catch {
        console.log('error')
      }
    }
    obtenerDatos()
  }

  return (
    <Fragment>  
      
      <div className='contentIntranetForms'>
        <div className='textIntranetForms'>
          <h1 className='titleIntranetForms'>¡Bienvenido!</h1>
          <p className='paragraphIntranetForms'>Aquí podrás visualizar en forma de tabla los respectivos postulantes, tan solo haciendo click en los botones adyacentes.</p>
        </div>
        <div className='btnsIntranetForms'>
          <button className='archiveBtnOff' >Huerta</button>
          <button className='archiveBtnOff' >Educación</button>
          <button className='archiveBtnOff' >Talento</button>
          <button onClick={handleFoodShow} className='archiveBtnOff' >Despensa</button>
        </div>
      </div>
      {/* <div className ='tableIntra'>
        {showTable[0]}
      </div> */}
      <IntranetDataExport/>
      {
            showTable.map(arrayData => (
               
                 <div className="list-group-item" key={arrayData.data.id}>
                  <div className="box">
                     <p>{arrayData.data.nombre}</p>
                       </div>
                     <div className="box">
                       <p>{arrayData.data.correo}</p>
                      </div>
                      <div className="box">
                       <p>{arrayData.data.comuna}</p>
                      </div>
                      </div>
                     ))
                }
                  
    </Fragment>
  );
}

export default GetData;