import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-blue-800">
      {/* Hero Section */}
      <section className=" bg-gradient-to-r from-green-400 to-dark-green-400 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="bg-gradient-to-r text-white py-16 px-8">
            <h1 className="text-4xl md:text-3xl font-extrabold mb-2 ">
              Welcome to Linkly
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Seamlessly connect with your friends, family, and colleagues using 
              Linkly—the ultimate chat app for instant communication.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-md shadow-lg hover:bg-blue-100">
                Get Started
              </button>
              <button className="px-6 py-3 bg-blue-700 font-semibold rounded-md shadow-lg hover:bg-blue-600">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {/* <img
              src="https://source.unsplash.com/600x400/?chat,technology"
              alt="Hero"
              className="rounded-lg shadow-xl"
            /> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Why Choose Linkly?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-blue-500 mb-2">
                Instant Messaging
              </h3>
              <p className="text-gray-600">
                Real-time chat with lightning-fast delivery and seamless experience.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-purple-500 mb-2">
                Secure Conversations
              </h3>
              <p className="text-gray-600">
                End-to-end encryption ensures your chats are always private.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-green-500 mb-2">
                Cross-Platform
              </h3>
              <p className="text-gray-600">
                Available on mobile, web, and desktop for seamless communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Affordable Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="p-8 shadow-lg rounded-lg bg-gradient-to-r from-green-400 to-cyan-400">
              <h3 className="text-2xl font-semibold mb-4">Free</h3>
              <p className="text-gray-100 mb-6">Basic features for personal use.</p>
              <h4 className="text-4xl font-bold mb-6">$0</h4>
              <ul className="text-left space-y-2">
                <li>✓ Unlimited Messages</li>
                <li>✓ Group Chats</li>
                <li>✓ Emojis & Stickers</li>
              </ul>
              <button className="mt-6 px-6 py-3 bg-blue-500 text-gray-200 font-semibold rounded-md hover:bg-blue-600">
                Get Started
              </button>
            </div>
            {/* Pro Plan */}
            <div className="p-8 shadow-lg rounded-lg bg-gradient-to-r from-green-400 to-cyan-400">
              <h3 className="text-2xl font-semibold mb-4">Pro</h3>
              <p className="text-gray-100 mb-6">Advanced features for professionals.</p>
              <h4 className="text-4xl font-bold mb-6">$9.99/month</h4>
              <ul className="text-left space-y-2">
                <li>✓ All Free Features</li>
                <li>✓ Priority Support</li>
                <li>✓ Custom Themes</li>
              </ul>
              <button className="mt-6 px-6 py-3 bg-blue-500 text-gray-200 font-semibold rounded-md hover:bg-blue-600">
                Get Pro
              </button>
            </div>
            {/* Enterprise Plan */}
            <div className="p-8 shadow-lg rounded-lg bg-gradient-to-r from-green-400 to-cyan-400">
              <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
              <p className="text-gray-100 mb-6">Scalable solutions for businesses.</p>
              <h4 className="text-4xl font-bold mb-6">$49.99/month</h4>
              <ul className="text-left space-y-2">
                <li>✓ All Pro Features</li>
                <li>✓ Dedicated Support</li>
                <li>✓ Team Management</li>
              </ul>
              <button className="mt-6 px-6 py-3 bg-blue-500 text-gray-200 font-semibold rounded-md hover:bg-blue-600">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Linkly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;


export const metadata ={
  title: 'Home - Linkly',
  description: 'Linkly is help you to link with other people'
}