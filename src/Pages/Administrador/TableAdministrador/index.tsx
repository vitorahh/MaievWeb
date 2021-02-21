
import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationListStandalone, PaginationProvider } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { lstLancesInterface } from '../../../Interfaces/Lance';

import './styles.css';

export function TableLances(lstTable:Array<lstLancesInterface>){

    const { SearchBar } = Search;
    
    function DTLance(DT_LANCE:string) {
      var date = new Date(DT_LANCE);
      return(<>
          {date.toLocaleString("pt-BR", {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          })}
      </>
      )
    }
    function VlLance(VlLance:Number) {
      return(<>
          {VlLance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
      </>
      )
    }
    const ColunsUser = [
      {
        dataField: 'iD_LANCE',
        text: 'Id Lance'
      }, {
        dataField: 'dT_LANCE',
        text: 'Data do Lance',
        formatter: DTLance,
        formatExtraData:{
            dT_LANCE:'dT_LANCE'
        }
      }, {
        dataField: 'dS_PRODUTO',
        text: 'Produto'
      }, {
        dataField: 'dS_USUARIO',
        text: 'Usuario'
      }, {
        dataField: 'vL_LANCE',
        text: 'Valor',
        formatter: VlLance,
        formatExtraData:{
          vL_LANCE:'vL_LANCE'
        }
      }
    ];
    const options = {
        paginationSize: 3,
        pageStartIndex: 1,
        firstPageText: 'Primeira',
        prePageText: 'Voltar',
        nextPageText: 'Proximo',
        lastPageText: 'Última',
        disablePageTitle: true,
        custom: true
        
      };
      
    return (
        
        <ToolkitProvider
        keyField='iD_LANCE'
        data={lstTable}
        columns={ColunsUser}
        search >
        {
            props => (
                <div className="table">
                    <SearchBar { ...props.searchProps } className="searchTable" placeholder="Pesquisar"/>
                    <hr />
                    <PaginationProvider
                        pagination={ paginationFactory(options) } >
                            {({ paginationProps, paginationTableProps }) => (
                            <div>
                        
                                <BootstrapTable  {... props.baseProps}
                                    headerClasses="thead-dark"
                                    hover
                                    { ...paginationTableProps }
                                />
                                <PaginationListStandalone { ...paginationProps }/>
                            </div>)}
                    </PaginationProvider>
            </div>)
        }
        </ToolkitProvider>
            
    )
} 