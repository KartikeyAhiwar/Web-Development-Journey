import React from "react";

const Chats = () => {
  const chatTopics = [
    { name: "Python", color: "bg-blue-500" },
    { name: "WebDev", color: "bg-green-500" },
    { name: "React", color: "bg-purple-500" },
    { name: "ML", color: "bg-red-500" },
    { name: "Blockchain", color: "bg-yellow-500" },
  ];

  return (
    <div className="Chats bg-gray-100 text-gray-900 h-screen flex flex-col items-center p-8 relative top-[100px]">
      <h1 className="text-4xl font-bold mb-6">Chats</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-5xl">
        {chatTopics.map((topic, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg text-white ${topic.color} flex items-center justify-center hover:scale-105 transition-transform`}
          >
            <h2 className="text-lg font-semibold">{topic.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chats;
