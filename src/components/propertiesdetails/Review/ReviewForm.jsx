import { useContext, useState } from "react";
import toast from "react-hot-toast";
import useAxiosPrivate from "../../../hooks/axiosPrivate/useAxiosPrivate";
import { AuthContext } from "../../../utils/provider/AuthProvider";

const ReviewForm = ({id}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const { userInfo } = useContext(AuthContext);
  const axiosPrivate = useAxiosPrivate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (rating < 1 || rating > 5 || comment.trim() === '') {
      toast.error('Please provide a valid rating(1-5) and comment.');
      return;
    }
    if(comment.length>170){
      toast.error('Please Write Review in 30 words!')
      return;
    }
    const currentDate = new Date();
    const localDate = currentDate.toISOString().split('T')[0];
    toast.success('Successfully, Reviewed')
    const datas = {
      'id':id,
      'date':localDate,
      'comment': e.target.comment.value,
      'rating': e.target.rating.value,
      'name': userInfo?.name,
      'image': userInfo?.photoURL
    }

    axiosPrivate.post('/home/reviews', { datas })
      .then(e => console.log(e))
      .catch(err => console.log(err.message))
    // Clear form fields after submission
    setRating(0);
    setComment('');
  };

  return (
    <div className="max-w-md mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating:
          </label>
          <input
            type="text"
            id="rating"
            min="1"
            max="5"
            value={rating}
            name="rating"
            onChange={(e) => setRating(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Comment:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            name="comment"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
