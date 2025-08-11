import React, { useState } from "react";
import { Rate, Button, Input, message } from "antd";

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

        // Clear form
        setEmail("");
        setComment("");
        setRating(0);
    };

    return (
        <div
            className="flex justify-center items-center "
            style={{ backgroundImage: "url('https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg')", height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-1/3 p-10 backdrop-blur-3xl bg-black/5 rounded-xl  shadow-[0_5px_90px_-30px_rgba(0,0,0,0.3)] shadow-orange-500">
                <h2 className="text-2xl font-bold text-white mb-4 text-center">
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
                    value={rating}
                    onChange={(value) => setRating(value)}
                    style={{ color: "white", marginBottom: 16 }}
                />

                <div
                    onClick={!email || !comment || rating === 0 ? null : handleSubmit}
                    className={`cursor-pointer text-white font-bold bg-orange-500 
                        rounded-md py-2 px-1 text-center select-none
                        ${!email || !comment || rating === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"}`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !(!email || !comment || rating === 0)) {
                            handleSubmit();
                        }
                    }}
                >
                    Submit Feedback
                </div>


            </div>
        </div>
    );
};

export default FeedbackComponent;
