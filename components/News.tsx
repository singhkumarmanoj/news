"use client";
import Image from "next/image";

type MyProps = {
    heading: string;
    date: string;
    newspart:React.ReactNode;

    // title: string Image for
    src: string;
    alt: string;
    width? : number;
    height?: number;
    className?: string;
};

export default function News({heading,date,newspart, src, alt, width, height,className}:MyProps){
    return(
        
      <div className="bg-gray-700">
        <h6 className="flex justify-end mr-5">Date: {date}</h6> {/*Date of news */}

        <h1 className="text-xl text-blue-400 mb-1 pl-2 font-serif ">
            {heading}
          
        </h1>  {/*This is Heading of news */}

        <p className="text-sm bg-gray-400 text-black border rounded-xl ml-1 mr-2 p-2 mb-2 font-sans"> 
            {newspart}
        </p>

        <Image 
            src = {src}
            alt = {alt}
            width = {width}
            height = {height}
            className = {className}

        />
        <hr className="text-blue-300 mt-1 " />
      </div>

    )
}