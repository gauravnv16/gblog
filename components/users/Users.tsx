"use client"

import { useState } from "react";

export const Users = (props:any) => {
    const [users, setUsers] = useState<any>(props.props|| []);

    return     <section 
    className="flex flex-col justify-center items-center mt-5 w-full" style={{
        maxWidth: "500px"
    }}
>
    <section className="flex justify-between items-center my-5 w-full" >
        <h1 className="text-2xl font-bold my-2">Users</h1>
        {/* <section className="flex items-center my-5">
            <input type="text" className="px-1 py-1 border border-gray-100 text-sm rounded" placeholder="search" />
            <button className="text-sm bg-gray-100 px-3 py-1 rounded">
                search
            </button>
        </section> */}
    </section>
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col"
                    className="text-sm p-2"
                >S.NO</th>
                <th scope="col"
                    className="text-sm p-2"
                >Name</th>
                <th scope="col"
                className="text-sm p-2"
                >email</th>
            </tr>
        </thead>
        <tbody>
           {
                 users.map((user:any,i:number)=>{
                      return(
                        <tr key={i}>
                             <th scope="row"
                                  className="text-sm p-2"
                             >{i+1}</th>
                             <td
                                  className="text-sm p-2"
                             >{user.name}</td>
                             <td
                                  className="text-sm p-2"
                             >{user.email}</td>
                        </tr>
                      )
                 })
           }
        </tbody>
    </table></section>
}