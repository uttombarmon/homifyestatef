
function ManageReview({ d, index, deleteReview }) {
    const { comment, name, image } = d
    return (
        <>
            <tr className=" w-full px-3 py-4">
                <th>{index + 1}</th>
                <td>
                    <div>
                        <div className="flex mb-2">
                            <img src={image} className=" w-8 h-8 mr-3 rounded-full" />
                            <div className=" text-sm font-mono font-semibold self-center">
                                <p className=" text-lg font-semibold">{name}</p>
                            </div>
                        </div>
                        <p>{comment}</p>
                    </div>
                </td>
                <td className=" text-right"><button onClick={() => deleteReview(d._id)} className=" btn btn-error">Delete</button></td>
            </tr>
        </>
    );
}

export default ManageReview;
