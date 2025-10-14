import React from "react";

function Card2(props) {
    const { image, title, description } = props;

    return (
        <div className="w-64 h-96 border bg-yellow-100 rounded-lg shadow-lg overflow-hidden bg-white">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
}

export default Card2;
