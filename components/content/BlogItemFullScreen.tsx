"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export const BlogItemFulScreen = (props:any) => {

    return (
        <>
        <section className="flex flex-col justify-center px-2 py-2 rounded m-2">
        <span>
            <Link href="/blogs" className="text-sm bg-gray-200 px-3 py-2 rounded mt-2">
            back
            </Link>
        </span>
        <img src={props.image} alt={props.title} className="rounded h-50 my-5" style={{
            maxHeight: "300px",
            objectFit: "cover"
            
        }}/>
        <section className="mt-5">
            <h1 className="text-lg font-bold"
            >{props.title}</h1>
            <p className="text-xs my-2">{props.body}</p>
        </section>

        </section>
        </>
    )
}