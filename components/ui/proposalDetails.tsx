"use client";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";
import Voters from "../voters";

function ProposalDetails() {
  return (
    <div className="p-8">
      <h2 className="font-semi-bold text-3xl mb-5">Hello world Title</h2>

      <p>
        This proposal is to payout <strong>{3} ETH</strong> and currently has{" "}
        <strong> {16} votes</strong> that will expire in{" "}
        <strong>{3} days</strong>
      </p>

      <hr className="my-6 border-gray-200 dark:border-gray-500" />
      <p>
        More details below: Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Repellendus, repellat. Distinctio explicabo deleniti quas esse
        porro adipisci, ad asperiores ea modi atque et. Fugiat velit, harum,
        pariatur architecto itaque natus tenetur facere a incidunt soluta
        nostrum corporis aspernatur at consequatur aliquid repudiandae culpa
        temporibus animi nulla, numquam explicabo voluptatibus et!
      </p>

      <div className="flex justify-start items-center sm:w-full mt-4 overflow-auto ">
        <BarChart
          width={730}
          height={250}
          data={[]}
          className="w-[300px] h-[100px] sm:w-[400px]  md:w-full">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Acceptees" fill="#2563eb" />
          <Bar dataKey="Rejectees" fill="#dc2626" />
        </BarChart>
      </div>

      <div
        className="flex justify-start items-center space-x-3 mt-4 "
        role="group">
        <Button
          className=" dark:bg-[#262936] bg-white  px-6 text-blue-500 py-2.5
			rounded-full font-medium text-sm leading-tight uppercase shadow-md
			border border-blue-500 shadow-gray-400 hover:bg-blue-500 hover:text-white
			dark:shadow-none dark:text-white">
          Accept
        </Button>
        <Button
          className="rounded-full px-6 py-2.5 bg-white text-red-500 dark:bg-transparent
			font-medium text-sm leading-tight uppercase shadow-md
			border border-red-500  shadow-gray-400 hover:bg-red-500 hover:border-red-500 hover:text-white
			dark:shadow-none dark:text-red-500 dark:hover:text-white">
          Reject
        </Button>
      </div>
    </div>
  );
}

export default ProposalDetails;
