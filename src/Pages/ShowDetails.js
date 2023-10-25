import React from "react";

function ShowDetails (props) {

    return (
        <div>
            <h1 className="mb-16 text-3xl text-center font-extrabold md:text-4xl lg:text-5xl text-gray-500">Registration Details</h1>
            <div className="shadow-md sm:rounded-lg flex">
                <table className="w-full text-md text-left text-gray-300 border-gray-500 rounded-md mx-auto">
                    <tbody>
                        <tr className="border-2 border-gray-500">
                            <th scope="row" className="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Full Name</th>
                            <td className="px-16 py-5 font-medium text-md text-black">{props.fullname}</td>
                        </tr>
                        <tr className="border-2 border-gray-500">
                            <th scope="row" className="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Email</th>
                            <td className="px-16 py-5 font-medium text-md text-black">{props.mail}</td>
                        </tr>
                        <tr className="border-2 border-gray-500">
                            <th scope="row" className="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Password</th>
                            <td className="px-16 py-5 font-medium text-md text-black">{props.pass}</td>
                        </tr>
                        <tr className="border-2 border-gray-500">
                            <th scope="row" className="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Phone No.</th>
                            <td className="px-16 py-5 font-medium text-md text-black">{props.phone}</td>
                        </tr>
                        <tr className="border-2 border-gray-500">
                            <th scope="row" className="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Gender</th>
                            <td className="px-16 py-5 font-medium text-md text-black">{props.gender}</td>
                        </tr>
                        <tr className="border-2 border-gray-500">
                            <th scope="row" className="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Birth Date</th>
                            <td className="px-16 py-5 font-medium text-md text-black">{props.bdate}</td>
                        </tr>
                        <tr className="border-2 border-gray-500">
                            <th scope="row" className="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Age</th>
                            <td className="px-16 py-5 font-medium text-md text-black">{props.age}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </ div>
    )
}

export default ShowDetails ;