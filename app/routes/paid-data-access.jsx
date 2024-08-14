import { json } from '@remix-run/node';
import { useFetcher, useLoaderData } from '@remix-run/react';
import React from 'react'
import { getDatabase } from '../../db.server';
export async function loader() {
    const db = await getDatabase();
    const collection = db.collection('subscriptions');
    const data = await collection.find().sort({ created_at: -1 }).toArray();
    return json(data);
}


function NewDate(data) {
    const currentDate = new Date(data);
    const formattedLocalDate = currentDate.toLocaleString();
    return formattedLocalDate;
}
export const meta = () => {
    return [
        { name: "robots", content: "noindex" }
    ];
  };

export default function Index() {

    const FetchData = useLoaderData();
    const data = FetchData.filter(filter => !filter.test&&filter.id);
    let a = data.filter(ele => ele.name == "1500+ Customers").length;
    let b = data.filter(ele => ele.name == "1501-5000 Customers").length;
    let c = data.filter(ele => ele.name == "5001-25000 Customers").length;
    let d = data.filter(ele => ele.name == "More than 25000 Customers").length;
    let activate_shop = data.filter(ele => !ele.cancelled_on).length;
    let cd_total_amount = (a + b) * 4 + c * 10 + d * 20;
    return (
        <div>
            <div class="d-flex bd-highlight">
                <div class="p-2 flex-fill bd-highlight"><p>Total store: {data.length}</p></div>
                <div class="p-2 flex-fill bd-highlight"><p>1501-5000 Customers ($4): {a + b}</p></div>
                <div class="p-2 flex-fill bd-highlight"><p>	5001-25000 Customers ($10): {c} </p></div>
                <div class="p-2 flex-fill bd-highlight"><p>	More than 25000 Customers ($20): {d} </p></div>
                <div class="p-2 flex-fill bd-highlight"><p>	Total : ${cd_total_amount}</p></div>
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sr </th>
                        <th scope="col">Store </th>
                        <th scope="col">Plan Name</th>
                        <th scope="col">Upgrade Date</th>
                        <th scope="col">Cancel Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Activate store: </th>
                        <th colSpan={4}>{activate_shop}</th>
                    </tr>
                    {
                        data?.map((ele, index) => (
                            <tr key={ele.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{ele.shop}</td>
                                <td>{ele.name}</td>
                                <td>{NewDate(ele.created_at)}</td>
                                <td>{ele.cancelled_on}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

