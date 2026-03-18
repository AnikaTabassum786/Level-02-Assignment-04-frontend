import { medicineService } from "@/services/medicine.service"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default async function AllMedicine() {

    const medicines = await medicineService.getMedicines()
    console.log(medicines)

    return (
        <>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead >Medicine Name</TableHead>
                            <TableHead>Manufacturer</TableHead>
                            <TableHead>Stock</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="flex  items-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {medicines?.data?.data?.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center">
                                    No medicines found
                                </TableCell>
                            </TableRow>
                        ) : (
                            medicines?.data?.data?.map((medicine: any) => (
                                <TableRow key={medicine.id}>
                                    <TableCell className="font-medium">{medicine.name}</TableCell>
                                    <TableCell>{medicine.manufacturer}</TableCell>
                                    <TableCell>{medicine.stock}</TableCell>
                                    <TableCell>{medicine.price}</TableCell>
                                    <TableCell className="flex gap-2">
                                        <div><Button>Edit</Button></div>
                                        <div><Button>Delete</Button></div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}




