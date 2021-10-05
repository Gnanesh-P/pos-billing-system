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
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { AccountCircle } from '@material-ui/icons'

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


const CustomerTable = () => {
    const classes = useStyles()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

const history = useHistory()
  

    const navigateToInvoice = event => {
        history.push("/invoice")
    };
    return (
        <Card elevation={3} className="pt-5 mb-6">
            <div className="flex justify-between items-center px-6 mb-3">
                <span className="card-title">Customer Bills</span>

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
                        
                            <TableCell className="px-6" colSpan={3}>
                                Customer Name
                            </TableCell>
                            <TableCell className="px-6" colSpan={3}>
                                Mobile Number
                            </TableCell>
                            <TableCell className="px-6" colSpan={3}>
                                Invoice Number
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Total Cost
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Bill status
                            </TableCell>
                            <TableCell className="px-0" colSpan={1}>
                                Action
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
                                        colSpan={3}
                                        align="left"
                                    >
                                        <div className="flex items-center">
                                            <IconButton>
                                                <AccountCircle></AccountCircle>
                                            </IconButton>
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
                                                98443234423
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        colSpan={3}
                                        align="left"
                                    >
                                        <div className="flex items-center">
                                            <IconButton>
                                                <AccountCircle></AccountCircle>
                                            </IconButton>
                                            <p className="m-0 ml-8">
                                                11111
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={2}
                                    >
                                       ${product.price}
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={2}
                                    >
                                        Paid
                                    </TableCell>

                                    <TableCell className="px-0" colSpan={1}>
                                        <IconButton onClick={navigateToInvoice}>
                                            <Icon>arrow_right_alt</Icon>
                                        </IconButton>
                                        <IconButton onClick={navigateToInvoice}>
                                        </IconButton>
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
        name: 'Gnanesh',
        price: 100,
        available: 15,
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        name: 'Sujith',
        price: 100,
        available: 30,
    },
    {
        imgUrl: '/assets/images/products/iphone-2.jpg',
        name: 'Manoj',
        price: 1900,
        available: 35,
    },
    {
        imgUrl: '/assets/images/products/headphone-2.jpg',
        name: 'Daniel',
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

export default CustomerTable
