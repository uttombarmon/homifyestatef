function Transection({ d, index }) {
    const { name,email,amount,date,paymentStatus,transectionId} = d
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{transectionId}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{date}</td>
                <td>{amount} BDT</td>
                <td>{paymentStatus?'paid':'canceled'}</td>
            </tr>
        </>
    );
}

export default Transection;