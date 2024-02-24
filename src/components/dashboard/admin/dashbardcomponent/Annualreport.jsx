import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import useAxiosPublic from "../../../../hooks/axiosPublic/useAxiosPublic";

const Annualreport = () => {
    const [propertydata, setPropertydata] = useState([])
    const useAxios = useAxiosPublic()
    useEffect(() => {
        useAxios.get('/admin/annual')
            .then(e => {
                const datas = e.data
                function aggregateMonthlyData(transactions) {
                    const monthlyData = {};
                    const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

                    transactions.forEach(transaction => {
                        const date = new Date(transaction.date);
                        const month = date.toLocaleString('en-US', { month: 'short' });

                        if (!monthlyData[month]) {
                            monthlyData[month] = { name: month, Sale: 0, Rent: 0 };
                        }

                        const transactionType = transaction.property.property_status.toLowerCase();
                        const amount = transaction.amount;

                        if (transactionType.includes('sale')) {
                            monthlyData[month].Sale += amount;
                        } else if (transactionType.includes('rent')) {
                            monthlyData[month].Rent += amount;
                        }
                    });

                    // Ensure the data is in the correct order and handle undefined values
                    const sortedData = monthOrder.map(month => monthlyData[month] || { name: month, Sale: 0, Rent: 0 });

                    return sortedData;
                }

                const result = aggregateMonthlyData([...datas.sale, ...datas.rent]);
                setPropertydata(result)
                // // Function to filter and store properties by month
                // const filterAndStorePropertiesByMonth = (data) => {
                //     const propertiesByMonth = {};

                //     data.forEach(property => {
                //         const propertyMonth = new Date(property.date).getMonth() + 1;
                //         const monthKey = `Month${propertyMonth}`;

                //         if (!propertiesByMonth[monthKey]) {
                //             propertiesByMonth[monthKey] = [];
                //         }

                //         propertiesByMonth[monthKey].push(property);
                //     });

                //     return propertiesByMonth;
                // };

                // const rentData = filterAndStorePropertiesByMonth(e.data.rent);
                // setRents(rentData)
                // const saleData = filterAndStorePropertiesByMonth(e.data.sale);
                // setSales(saleData)
                // const data = [

                // ];

                // const mergedData = data.reduce((acc, current) => {
                //     const existingProduct = acc.find((product) => product.name === current.name);

                //     if (existingProduct) {
                //         // Merge the current object with the existing one
                //         Object.assign(existingProduct, current);
                //     } else {
                //         // If the product doesn't exist in the accumulator, add it
                //         acc.push(current);
                //     }

                //     return acc;
                // }, []);

                // console.log(mergedData);

            })
    }, [useAxios])


    const [chartWidth, setChartWidth] = useState(window.innerWidth <= 768 ? window.innerWidth - 20 : window.innerWidth - 280);

    useEffect(() => {
        const handleResize = () => {
            setChartWidth(window.innerWidth <= 768 ? window.innerWidth - 20 : window.innerWidth - 280);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // custom tooltip section 
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p>{label}</p>
                    <p>
                        Sale: {payload[0].value} BDT
                        <br />
                        Rent: {payload[1].value} BDT
                    </p>
                </div>
            );
        }

        return null;
    };
    return (
        <div>
            <h1 className=" font-bold text-xl my-3">Annual Sale and Rent Report</h1>
            {/* md screen  */}
            <div className=" overflow-x-auto">
                <AreaChart width={chartWidth} height={300} data={propertydata}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <Legend iconType="rect"></Legend>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="Sale" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="Rent" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Annualreport;