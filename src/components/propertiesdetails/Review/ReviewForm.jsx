import { useState } from "react";

const ReviewForm = ({ onAddReview }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (rating < 1 || rating > 5 || comment.trim() === '') {
      alert('Please provide a valid rating and comment.');
      return;
    }

    // Create a new review object
    const newReview = {
      rating: Number(rating),
      comment: comment.trim(),
    };

    // Pass the new review to the parent component
    onAddReview(newReview);

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
            type="number"
            id="rating"
            min="1"
            max="5"
            value={rating}
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
