import React, { useState } from "react";
import { Rate, Input, message } from "antd";

const FeedbackComponent = () => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (!email || !comment || rating === 0) {
      message.error("Please fill in all fields and provide a rating.");
      return;
    }
    const feedback = { email, comment, rating };
    console.log("User Feedback:", feedback);
    message.success("Thanks for your feedback!");

    setEmail("");
    setComment("");
    setRating(0);
  };

  return (
    <div
      className="flex justify-center items-center p-4"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg')",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-lg p-6 sm:p-10 backdrop-blur-3xl bg-black/40 rounded-xl shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
          Leave Your Feedback
        </h2>

        <label className="block mb-2 font-semibold text-white">Email</label>
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />

        <label className="block mb-2 font-semibold text-white">Comment</label>
        <Input.TextArea
          rows={4}
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mb-4"
        />

        <label className="block mb-2 font-semibold text-white">Rate</label>
        <Rate
          allowHalf
          value={rating || 4}
          onChange={(value) => setRating(value)}
          style={{ color: "orange", marginBottom: 16 }}
        />

        <button
          onClick={handleSubmit}
          disabled={!email || !comment || rating === 0}
          className={`w-full py-2 mt-4 text-white font-bold rounded-md transition ${
            !email || !comment || rating === 0
              ? "bg-orange-500/50 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default FeedbackComponent;
