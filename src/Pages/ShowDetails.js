import React from "react";

function ShowDetails(props) {

    let goback = () => {
        window.location.reload();
    }

    return (
        <div className="bg-[#24252A] md:px-24 md:py-12 flex flex-col items-center rounded-xl">
            <h1 className="mb-16 text-3xl text-center font-extrabold md:text-4xl lg:text-5xl text-[#e5f0f1]">Registration Details</h1>
            <div className="shadow-md sm:rounded-lg flex">
                <table className="w-full text-md text-left text-gray-300 border-gray-500 rounded-md mx-auto">
                    <tbody>
                        <tr className="border-2 border-gray-500">
                            <th scope="row" className="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Full Name</th>
                            <td className="px-16 py-5 font-medium text-md text-[#e5f0f1]">{props.fullname}</td>
                        </tr>
                        <tr className="border-2 border-gray-500">
                            <th scope="row" className="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Email</th>
                            <td className="px-16 py-5 font-medium text-md text-[#e5f0f1]">{props.mail}</td>
                        </tr>
                        <tr className="border-2 border-gray-500">
                            <th scope="row" className="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Phone No.</th>
                            <td className="px-16 py-5 font-medium text-md text-[#e5f0f1]">{props.phone}</td>
                        </tr>
                        <tr className="border-2 border-gray-500">
                            <th scope="row" className="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Gender</th>
                            <td className="px-16 py-5 font-medium text-md text-[#e5f0f1]">{props.gender}</td>
                        </tr>
                        <tr className="border-2 border-gray-500">
                            <th scope="row" className="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Birth Date</th>
                            <td className="px-16 py-5 font-medium text-md text-[#e5f0f1]">{props.bdate}</td>
                        </tr>
                        <tr className="border-2 border-gray-500">
                            <th scope="row" className="px-20 py-5 text-lg font-bold whitespace-nowrap text-sky-200 bg-gray-700">Age</th>
                            <td className="px-16 py-5 font-medium text-md text-[#e5f0f1]">{props.age}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={goback} type="button" className="md:mt-12 text-white bg-[rgba(0,136,169,1)] hover:bg-[rgba(0,136,169,0.8)] focus:ring-4 focus:outline-none focus:ring-[rgba(0,136,169,0.8)] font-medium rounded-lg text-sm md:w-1/2 sm:w-auto px-5 py-2.5 text-center">Go back</button>
        </ div>
    )
}

export default ShowDetails;