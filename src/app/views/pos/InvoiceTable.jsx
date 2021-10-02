import React, { useState } from 'react'
import {
    Card,
    Icon,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    MenuItem, TablePagination,
    Select,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    productTable: {
        '& small': {
            height: 15,
            width: 50,
            borderRadius: 500,
            boxShadow:
                '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
}))



// const [order, setOrder] = useState()
// const [orderBy, setOrderBy] = useState()



const InvoiceTable = () => {
    const classes = useStyles()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, productList.length - page * rowsPerPage);

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };
    return (
        <Card elevation={3} className="pt-5 mb-6">
            <div className="flex justify-between items-center px-6 mb-3">
                <span className="card-title">Billable Products</span>
              
            </div>
            <div className="overflow-auto">
                <Table
                    className={clsx(
                        'whitespace-pre min-w-400',
                        classes.productTable
                    )}
                >
                    <TableHead>
                        <TableRow>
                        <TableCell className="px-6" colSpan={1}>
                                id
                            </TableCell>
                            <TableCell className="px-6" colSpan={5}>
                                Name
                            </TableCell>
                            <TableCell className="px-6" colSpan={3}>
                                Quantity
                            </TableCell>
                            <TableCell className="px-0" colSpan={3}>
                                Price
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Total
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((product, index) => (
                                <TableRow key={index} hover>
                                      <TableCell
                                        className="px-0 capitalize"
                                        colSpan={1}
                                        align="left"
                                    >
                                        <div className="flex items-center">
                                            <p className="m-0 ml-4">
                                                1
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        colSpan={5}
                                        align="left"
                                    >
                                        <div className="flex items-center">
                                            <p className="m-0 ml-8">
                                                {product.name}
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        colSpan={3}
                                        align="left"
                                    >
                                        <div className="flex items-center">
                                            <p className="m-0 ml-8">
                                                10
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        colSpan={3}
                                        align="left"
                                    >
                                        <div className="flex items-center">
                                            <p className="m-0 ml-12">
                                                100
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        colSpan={2}
                                        align="left"
                                    >
                                        <div className="flex items-center">
                                            <p className="m-0 ml-8">
                                                10000
                                            </p>
                                        </div>
                                    </TableCell>
                                   
                                  
                                </TableRow>
                            ))}
                    </TableBody>

                </Table>

            </div>
        </Card>
    )
}

const productList = [
    {
        imgUrl: '/assets/images/products/headphone-2.jpg',
        name: 'earphone',
        price: 100,
        available: 15,
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        name: 'earphone',
        price: 1500,
        available: 30,
    },
    {
        imgUrl: '/assets/images/products/iphone-2.jpg',
        name: 'iPhone x',
        price: 1900,
        available: 35,
    },
    {
        imgUrl: '/assets/images/products/headphone-2.jpg',
        name: 'earphone',
        price: 100,
        available: 15,
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        name: 'earphone',
        price: 1500,
        available: 30,
    },
    {
        imgUrl: '/assets/images/products/iphone-2.jpg',
        name: 'iPhone x',
        price: 1900,
        available: 35,
    },
    {
        imgUrl: '/assets/images/products/headphone-2.jpg',
        name: 'earphone',
        price: 100,
        available: 15,
    },
    {
        imgUrl: '/assets/images/products/headphone-2.jpg',
        name: 'earphone',
        price: 100,
        available: 15,
    }
]

export default InvoiceTable
