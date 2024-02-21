import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../hooks/axiosPublic/useAxiosPublic";
import ManageReview from "./Review";
import toast from "react-hot-toast";

function ManageReviews() {
    const [reviews, setReviews] = useState(null)
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        axiosPublic.get('/home/reviews')
            .then(e => {
                setReviews(e.data)
                console.log(e.data);
            })
            .catch(e => console.log(e.message))
    }, [axiosPublic])
    const deleteReview = (id) => {
        axiosPublic.delete(`/admin/review/delete?id=${id}`)
            .then((e) => {
                if (e.data.deletedCount) {
                    toast.success("Review Deleted Successfull!")
                    const result = reviews.filter(a => a._id !== id)
                    setReviews(result)
                }
            })
            .catch(e => console.log(e.message))
    }
    return (
        <>
            <div>
                {
                    reviews ?
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <tbody>{
                                    reviews.map((d, index) => <ManageReview deleteReview={deleteReview} index={index} d={d} key={d._id}></ManageReview>)
                                }
                                </tbody>
                            </table>
                        </div>
                        :
                        <span className=" w-full h-screen flex justify-center"><span className=" self-center">No data found!</span></span>
                }
            </div>
        </>
    );
}

export default ManageReviews;