import React from 'react';
import Button from 'devextreme-react/button';
import TabPanel, { Item } from 'devextreme-react/tab-panel';
import DataGrid, { Column, Export } from 'devextreme-react/data-grid';
import ExcelJS from 'exceljs';
import saveAs from 'file-saver';

import { exportDataGrid } from 'devextreme/excel_exporter';
import 'devextreme/data/odata/store';

const HuertasDataSource = { 
  
  // funcion para traer data huerta

  /* store: {
    type: 'odata',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Products'
  },
  select: ['Product_ID', 'Product_Name', 'Product_Sale_Price', 'Product_Retail_Price'],
  filter: ['Product_ID', '<', 10] */
};
const DespensaDataSource = {
  
  /* funcion para traer Despensa */

   store: {
    type: 'odata',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Products'
  },
  select: ['Product_ID', 'Product_Name', 'Product_Consumer_Rating', 'Product_Category'],
  filter: ['Product_ID', '<', 10] 
};

class IntranetDataExport extends React.Component {
  constructor(props) {
    super(props);

    this.HuertasGridRef = React.createRef();
    this.DespensaGridRef = React.createRef();
  }

  render() {
    return (
      <div>
        <div id="exportContainer">
          <Button
            text="Export multiple grids"
            icon="xlsxfile"
            onClick={this.exportGrids}
          />
        </div>
        <TabPanel id="tabPanel" deferRendering={false}>
          <Item title="Huertas">
            <DataGrid id="DataGrid" ref={this.HuertasGridRef} dataSource={HuertasDataSource} showBorders={true} rowAlternationEnabled={true}>
              <Column dataField="Product_ID" caption="ID" width={50} />
              <Column dataField="Product_Name" caption="Nombre" />
              <Column dataField="Product_Sale_Price" caption="Ccorreo" dataType="number" format="currency" />
              <Column dataField="Product_Retail_Price" caption="Comuna" dataType="number" format="currency" />
            </DataGrid>
          </Item>
          <Item title="Despensa">
            <DataGrid id="DespensaDataGrid" ref={this.DespensaGridRef} dataSource={DespensaDataSource} showBorders={true} rowAlternationEnabled={true}>
              <Column dataField="Product_ID" caption="ID" width={50} />
              <Column dataField="Product_Name" caption="Nombre" />
              <Column dataField="Product_Consumer_Rating" caption="Correo" />
              <Column dataField="Product_Category" caption="Comuna" />
            </DataGrid>
          </Item>
        </TabPanel>
      </div>
    );
  }

  exportGrids = () => {
    const context = this;
    const workbook = new ExcelJS.Workbook();
    const HuertasSheet = workbook.addWorksheet('Huertas');
    const DespensaSheet = workbook.addWorksheet('Despensa');

    HuertasSheet.getRow(2).getCell(2).value = 'Huertas';
    HuertasSheet.getRow(2).getCell(2).font = { bold: true, size: 16, underline: 'double' };

    DespensaSheet.getRow(2).getCell(2).value = 'Despensa';
    DespensaSheet.getRow(2).getCell(2).font = { bold: true, size: 16, underline: 'double' };

    exportDataGrid({
      worksheet: HuertasSheet,
      component: context.HuertasDataGrid,
      topLeftCell: { row: 4, column: 2 },
      customizeCell: function(options) {
        context.setAlternatingRowsBackground(options.gridCell, options.excelCell);
      }
    }).then(function() {
      return exportDataGrid({
        worksheet: DespensaSheet,
        component: context.DespensaDataGrid,
        topLeftCell: { row: 4, column: 2 },
        customizeCell: function(options) {
          context.setAlternatingRowsBackground(options.gridCell, options.excelCell);
        }
      });
    }).then(function() {
      workbook.xlsx.writeBuffer().then(function(buffer) {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'MultipleGrids.xlsx');
      });
    });
  }

  setAlternatingRowsBackground(gridCell, excelCell) {
    if(gridCell.rowType === 'header' || gridCell.rowType === 'data') {
      if(excelCell.fullAddress.row % 2 === 0) {
        excelCell.fill = { type: 'pattern', pattern : 'solid', fgColor: { argb: 'D3D3D3' }, bgColor: { argb: 'D3D3D3' } };
      }
    }
  }

  get HuertasDataGrid() {
    return this.HuertasGridRef.current.instance;
  }

  get DespensaDataGrid() {
    return this.DespensaGridRef.current.instance;
  }
}

export default IntranetDataExport;
