import React from "react";

const Contact = () => {
  return (
    <div className="bg-black p-8 m-7 rounded-lg shadow-2xl">
      {/* Header */} <br /><br /><br />
      
     <h1 className="text-4xl font-bold text-center mb-20 text-white p-2">Contact</h1>

    {/* Contact yr details */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-lg text-white m-20">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8762F6"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 16.92v3.01c0 1.1-.9 2-2 2a19.937 19.937 0 01-8.94-2.36 19.937 19.937 0 01-6.58-6.58A19.937 19.937 0 012.07 4C2.07 2.9 2.97 2 4.07 2h3.01c.88 0 1.67.57 1.88 1.44l.62 2.54c.16.64-.02 1.31-.46 1.76l-2.2 2.2a15.978 15.978 0 006.58 6.58l2.2-2.2c.45-.45 1.12-.63 1.76-.46l2.54.62c.87.21 1.44 1 1.44 1.88z"
            />
          </svg>
          <span>070 2805593</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#8762F6"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 12h.01M21 16.8c0 .39-.28.68-.64.68H3.64a.7.7 0 01-.64-.68V5.2c0-.38.28-.68.64-.68H20.4c.36 0 .64.3.64.68v11.6zM3.6 5.8l8.4 5.7 8.4-5.7"
            />
          </svg>
          <span>nimeshid24@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#8762F6"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2C8.13401 2 5 5.13401 5 9C5 13.858 12 21 12 21C12 21 19 13.858 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"
            />
          </svg>
          <span>No. 208/1, Walpita ,Batawala, Padukka</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
