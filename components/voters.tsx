"use client";
import { column2 } from "@/components/columns";
import { Button } from "@nextui-org/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import Link from "next/link";
import React from "react";
import { GiAchievement } from "react-icons/gi";

const Voters = () => {
  const active = `inline-block bg-blue-500 px-6 text-white py-2.5
			rounded-l-full font-medium text-sm leading-tight uppercase shadow-md
			border border-blue-500 shadow-gray-400 hover:bg-blue-500 hover:text-white
			dark:shadow-none dark:text-white`;

  const deactive = `inline-block px-6 py-2.5 dark:bg-transparent
			font-medium text-sm leading-tight uppercase shadow-md
			border  shadow-gray-400 hover:bg-blue-500 hover:border-blue-500 hover:text-white
			dark:shadow-none dark:text-blue-400 dark:hover:text-white`;

  return (
    <div className="flex flex-col min-w-7xl  dark:bg-[#262936] w-full">
      <div className="flex items-center justify-center" role="group">
        <Button className={`${active}`}>All</Button>
        <Button className={`rounded-none ${deactive}`}>Acceptees</Button>
        <Button className={`rounded-r-full ${deactive}`}>Rejectees</Button>
      </div>

      {/* Voters table */}

      <div className="py-2  w-full">
        <div className="h-[cal(100vh-20rem)] overflow-y-auto shadow-md rounded-md ">
          <Table
            removeWrapper
            aria-label="My table"
            className="mt-8 min-w-full ">
            <TableHeader columns={column2}>
              {(column2) => (
                <TableColumn
                  className="border-b border-r  border-l boder-solid dark:border-gray-700 bg-white dark:bg-[#262936]"
                  key={column2.key}>
                  {column2.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-sm font-light py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <GiAchievement
                      string="Hello"
                      size={25}
                      className=" rounded-full w-[30px] h-[30px]"
                    />
                    <span>0x21...eh12</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm font-light  py-4 ">
                  {new Date().getTime()}
                </TableCell>
                <TableCell className="text-sm font-light py-4 whitespace-nowrap ">
                  <Link
                    href="#"
                    className="inline-block bg-blue-500 px-6 text-white py-2.5
			rounded-full font-medium text-sm leading-tight uppercase shadow-md
			border border-blue-500 shadow-gray-400 hover:bg-blue-500 hover:text-white
			dark:shadow-none dark:text-white ">
                    Accepted
                  </Link>
                  <Button
                    className="inline-block bg-red-500 px-6 text-white py-2.5
			rounded-full font-medium text-sm leading-tight uppercase shadow-md
			border border-red-500 shadow-gray-400 hover:bg-red-600 hover:text-white
			dark:shadow-none dark:text-white ">
                    Rejected
                  </Button>
                  {/*
							<Button
								className='inline-block bg-red-500 px-6 text-white py-2.5
			rounded-full font-medium text-sm leading-tight uppercase shadow-md
			border border-red-500 shadow-gray-400 hover:bg-red-600 hover:text-white
			dark:shadow-none dark:text-white'>
								payout
							</Button> */}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="mt-20 text-center ">
        <Button className="rounded-full px-6 py-2 bg-blue-500 dark:bg-[#262936] dark:border  dark:border-blue-500 dark:text-blue-500 uppercase dark:hover:bg-blue-500 dark:hover:text-white text-white  ">
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Voters;
