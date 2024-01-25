import React from 'react'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../../network/axiosInstance'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { queryClient } from '../../..'

function List() {

    const { data, isLoading } = useQuery('suppliers', () => {
        return axiosInstance.get('suppliers')
    },
    {
        staleTime: 20000
    }
    )


    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100
        },
        {
            field: 'companyName',
            headerName: 'Company Name',
            width: 400
        }
    ]

    const clear = () => {
        queryClient.clear()
    }

    return (<>
    <button onClick={() => clear()}>Clear Cache</button>
        <DataGrid
            rows={data?.data || []}
            columns={columns}
            loading={isLoading}
        />
    </>
    )
}

export default List