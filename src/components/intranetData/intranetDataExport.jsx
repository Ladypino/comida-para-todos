import React from 'react';
import Button from 'devextreme-react/button';
import TabPanel, { Item } from 'devextreme-react/tab-panel';
import DataGrid, { Column, Export } from 'devextreme-react/data-grid';
import ExcelJS from 'exceljs';
import saveAs from 'file-saver';

import { exportDataGrid } from 'devextreme/excel_exporter';
import 'devextreme/data/odata/store';


class IntranetDataExport extends React.Component {
  constructor(props) {
    super(props);
    this.HuertasGridRef = React.createRef();
    this.TalentoGridRef = React.createRef();
    this.DespensaGridRef = React.createRef();
    this.EducacionGridRef = React.createRef();
  }

  render() {

    return (
      <div>
        <div id="exportContainer">
          <Button
            text="Exportar a planilla excel"
            icon="xlsxfile"
            onClick={this.exportGrids}
          />
        </div>
        <TabPanel id="tabPanel" deferRendering={false}>
          <Item title="HUERTAS">
            <DataGrid id="DataGrid" ref={this.HuertasGridRef} columnAutoWidth={true} dataSource={this.props.dataHuerta} showBorders={true} rowAlternationEnabled={true}>
              <Column dataField="nombreCompleto" caption="Nombre" />
              <Column dataField="correo" caption="Correo" />
              <Column dataField="numeroTelefonico" caption="Telefono"/>
              <Column dataField="region" caption="Region"/>
              <Column dataField="comuna" caption="Comuna"/>
              <Column dataField="ayudarHuerta" caption="Ayudar Huerta"/>
              <Column dataField="donarHuerta" caption="Donar Huerta"/>
              <Column dataField="tamanoTerreno" caption="m2 terreno"/>
              <Column dataField="detalle" caption="detalles"/>
            </DataGrid>
          </Item>
          <Item title="TALENTO">
            <DataGrid id="DataGrid" ref={this.TalentoGridRef} columnAutoWidth={true} dataSource={this.props.dataTalento} showBorders={true} rowAlternationEnabled={true}>
              <Column dataField="nombreCompleto" caption="Nombre" />
              <Column dataField="correo" caption="Correo" />
              <Column dataField="numeroTelefonico" caption="Telefono"/>
              <Column dataField="region" caption="Region"/>
              <Column dataField="comuna" caption="Comuna"/>
              <Column dataField="talento" caption="Talento"/>
              <Column dataField="horario" caption="Disponibilidad horaria"/>
              <Column dataField="detalle" caption="Detalle"/>
            </DataGrid>
          </Item>
          <Item title="DESPENSA">
            <DataGrid id="DataGrid" ref={this.DespensaGridRef} columnAutoWidth={true} dataSource={this.props.dataDespensa} showBorders={true} rowAlternationEnabled={true}>
              <Column dataField="nombreCompleto" caption="Nombre" />
              <Column dataField="correo" caption="Correo" />
              <Column dataField="numeroTelefonico" caption="Telefono"/>
              <Column dataField="region" caption="Region"/>
              <Column dataField="comuna" caption="Comuna"/>
              <Column dataField="helpFood" caption="Donar y trasladar"/>
              <Column dataField="DonarFood" caption="Solo Donar"/>
              <Column dataField="empresa" caption="Empresa"/>
              <Column dataField="numeroPedido" caption="N° Pedido"/>
              <Column dataField="detalle" caption="Detalles"/>
            </DataGrid>
          </Item>
          <Item title="EDUCACION">
            <DataGrid id="DataGrid" ref={this.EducacionGridRef} columnAutoWidth={true} dataSource={this.props.dataEducacion} showBorders={true} rowAlternationEnabled={true}>
              <Column dataField="nombreCompleto" caption="Nombre" />
              <Column dataField="correo" caption="Correo" />
              <Column dataField="numeroTelefonico" caption="Telefono"/>
              <Column dataField="region" caption="Region"/>
              <Column dataField="comuna" caption="Comuna"/>
              <Column dataField="capacitacion" caption="Capacitación"/>
              <Column dataField="horario" caption="Horario"/>
              <Column dataField="detalle" caption="Detalle"/>
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
    const TalentoSheet = workbook.addWorksheet('Talento');
    const DespensaSheet = workbook.addWorksheet('Despensa');
    const EducacionSheet = workbook.addWorksheet('Educacion');

    HuertasSheet.getRow(2).getCell(2).value = 'Huertas';
    HuertasSheet.getRow(2).getCell(2).font = { bold: true, size: 16, underline: 'double' };

    TalentoSheet.getRow(2).getCell(2).value = 'Talento';
    TalentoSheet.getRow(2).getCell(2).font = { bold: true, size: 16, underline: 'double' };

    DespensaSheet.getRow(2).getCell(2).value = 'Despensa';
    DespensaSheet.getRow(2).getCell(2).font = { bold: true, size: 16, underline: 'double' };

    EducacionSheet.getRow(2).getCell(2).value = 'Educacion';
    EducacionSheet.getRow(2).getCell(2).font = { bold: true, size: 16, underline: 'double' };


    exportDataGrid({
      worksheet: HuertasSheet,
      component: context.HuertasDataGrid,
      topLeftCell: { row: 4, column: 2 },
      customizeCell: function (options) {
        context.setAlternatingRowsBackground(options.gridCell, options.excelCell);
      }
    }).then(function () {
      return exportDataGrid({
        worksheet: TalentoSheet,
        component: context.TalentoDataGrid,
        topLeftCell: { row: 4, column: 2 },
        customizeCell: function (options) {
          context.setAlternatingRowsBackground(options.gridCell, options.excelCell);
        }
      });
    }).then(function () {
      return exportDataGrid({
        worksheet: DespensaSheet,
        component: context.DespensaDataGrid,
        topLeftCell: { row: 4, column: 2 },
        customizeCell: function (options) {
          context.setAlternatingRowsBackground(options.gridCell, options.excelCell);
        }
      });
    }).then(function () {
      return exportDataGrid({
        worksheet: EducacionSheet,
        component: context.EducacionDataGrid,
        topLeftCell: { row: 4, column: 2 },
        customizeCell: function (options) {
          context.setAlternatingRowsBackground(options.gridCell, options.excelCell);
        }
      });
    }).then(function () {
      workbook.xlsx.writeBuffer().then(function (buffer) {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'MultipleGrids.xlsx');
      });
    });
  }

  setAlternatingRowsBackground(gridCell, excelCell) {
    if (gridCell.rowType === 'header' || gridCell.rowType === 'data') {
      if (excelCell.fullAddress.row % 2 === 0) {
        excelCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'D3D3D3' }, bgColor: { argb: 'D3D3D3' } };
      }
    }
  }

  get HuertasDataGrid() {
    return this.HuertasGridRef.current.instance;
  }

  get TalentoDataGrid() {
    return this.TalentoGridRef.current.instance;
  }
  get DespensaDataGrid() {
    return this.DespensaGridRef.current.instance;
  }

  get EducacionDataGrid() {
    return this.EducacionGridRef.current.instance;
  }

}

export default IntranetDataExport;
