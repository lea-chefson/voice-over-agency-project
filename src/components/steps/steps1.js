import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
export const Step = () => {
  return (
    <section tw="max-w-5xl mx-auto py-10">
   <div>
      <div tw="flex flex-row">
         <div tw="hidden md:flex flex-col items-center">
            <div tw="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
               <div tw="text-3xl font-black text-gray-500">Step 1</div>
               <div tw="text-gray-500 text-sm">Idea</div>
            </div>
            <div tw="h-full border-l-4 border-transparent">
               <div tw="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
            </div>
         </div>
         <div tw="flex-auto border rounded  border-gray-300">
            <div tw="flex md:flex-row flex-col items-center">
               <div tw="flex-auto">
                  <div tw="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span tw="font-black">Step 1</span> - Idea</div>
                  <div tw="p-3 text-3xl text-gray-800">Find your best idea</div>
                  <div tw="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
               </div>
               <div tw="md:w-96 w-full p-5"><img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 1" tw="object-scale-down"/></div>
            </div>
         </div>
      </div>
      <div tw="flex items-start flex-row">
         <div tw="border-t-4 border-r-4 border-transparent">
            <div tw="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
         </div>
         <div tw="border-t-4 border-transparent flex-auto">
            <div tw="h-16 border-b-4 border-gray-300 border-dashed"></div>
         </div>
         <div tw="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
      </div>
      <div tw="flex flex-row-reverse">
         <div tw="hidden md:flex flex-col items-center">
            <div tw="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
               <div tw="text-3xl font-black text-gray-500">Step 2</div>
               <div tw="text-gray-500 text-sm">Collaboration</div>
            </div>
            <div tw="h-full border-r-4 border-transparent">
               <div tw="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
            </div>
         </div>
         <div tw="flex-auto border rounded  border-gray-300">
            <div tw="flex md:flex-row flex-col items-center">
               <div tw="flex-auto">
                  <div tw="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span tw="font-black">Step 2</span> - Collaboration</div>
                  <div tw="p-3 text-3xl text-gray-800">Find your team and collaborate</div>
                  <div tw="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
               </div>
               <div tw="md:w-96 w-full p-5"><img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 2" tw="object-scale-down"/></div>
            </div>
         </div>
      </div>
      <div tw="flex items-start flex-row-reverse">
         <div tw="border-t-4 border-l-4 border-transparent">
            <div tw="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
         </div>
         <div tw="border-t-4 border-transparent flex-auto">
            <div tw="h-16 border-b-4 border-gray-300 border-dashed"></div>
         </div>
         <div tw="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
      </div>
      <div tw="flex flex-row">
         <div tw="hidden md:flex flex-col items-center">
            <div tw="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
               <div tw="text-3xl font-black text-gray-500">Step 3</div>
               <div tw="text-gray-500 text-sm">Planification</div>
            </div>
            <div tw="h-full border-l-4 border-transparent">
               <div tw="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
            </div>
         </div>
         <div tw="flex-auto border rounded  border-gray-300">
            <div tw="flex md:flex-row flex-col items-center">
               <div tw="flex-auto">
                  <div tw="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span tw="font-black">Step 3</span> - Planification</div>
                  <div tw="p-3 text-3xl text-gray-800 ">Make a good plan and prepare tasks</div>
                  <div tw="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
               </div>
               <div tw="md:w-96 w-full p-5"><img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 3" tw="object-scale-down"/></div>
            </div>
         </div>
      </div>
      <div tw="flex items-start flex-row">
         <div tw="border-t-4 border-r-4 border-transparent">
            <div tw="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
         </div>
         <div tw="border-t-4 border-transparent flex-auto">
            <div tw="h-16 border-b-4 border-gray-300 border-dashed"></div>
         </div>
         <div tw="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
      </div>
      <div tw="flex flex-row-reverse">
         <div tw="hidden md:flex flex-col items-center">
            <div tw="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
               <div tw="text-3xl font-black text-gray-500">Step 4</div>
               <div tw="text-gray-500 text-sm">Implementation</div>
            </div>
         </div>
         <div tw="flex-auto border rounded  border-gray-300">
            <div tw="flex md:flex-row flex-col items-center">
               <div tw="flex-auto">
                  <div tw="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span tw="font-black">Step 4</span> - Implementation</div>
                  <div tw="p-3 text-3xl text-gray-800 ">Execute, impletement your solution</div>
                  <div tw="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
               </div>
               <div tw="md:w-96 w-full p-5"><img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 4" tw="object-scale-down"/></div>
            </div>
         </div>
      </div>
   </div>
</section>
  );
};