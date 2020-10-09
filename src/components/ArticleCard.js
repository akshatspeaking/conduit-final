import React from "react";
import UserAvatar from "./UserAvatar";

export default function ArticleCard(props) {
  return (
    <div className="px-1 inline py-2">
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://web2tailwind.com/assets/docs/master/image-01.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">{props.title}</div>
          <UserAvatar user={props.author} />

          <p className="text-gray-700 text-base mt-2">{props.description}</p>
        </div>
        <div className="px-6 py-4">
          {props.tagList.map((tag) => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #{tag}
            </span>
          ))}
          {/* 
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span> */}
        </div>
      </div>
    </div>
  );
}
