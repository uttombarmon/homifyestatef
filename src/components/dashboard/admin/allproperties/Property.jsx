function Property({ d, index, deleteProperty }) {
    const { title, location, author, property_details } = d

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{title}</td>
                <td>{location}</td>
                <td>{author?.contact}</td>
                <td>{property_details?.price}</td>
                <td><button onClick={()=>deleteProperty(d._id)} className={`btn btn-error`}>Remove</button></td>
            </tr>
        </>
    );
}

export default Property;