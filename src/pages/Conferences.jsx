import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { FaCircle, FaCaretRight } from "react-icons/fa6";
import eventData from '../events.json'

function Conferences(props) {
  const [events, setEvents] = useState([]);

  
  useEffect(() => {
    // Update the state with the "events" array from the imported JSON data
    setEvents(eventData.events);
  }, []);

  return (
    <div className="my-32">
      <h1 className="font-bold text-5xl mb-16">What's on?</h1>
      <ul>
        {events.map((event) => (
          <li key={event.title} className="my-10 flex justify-between items-end pb-4 border-b border-b-2 border-gray-200 max-w-[60%] cursor-pointer hover:border-gray-400 transition">
            <div>
              <div className="flex gap-3 items-center text-gray-400">
                <span>{event.time}</span>
                <FaCircle className="text-[6px]" />
                <span>{event.category}</span>
              </div>
              <h4 className="font-semibold text-2xl mt-2 text-gray-900 hover:text-gray-800 transition">
                {event.title}
              </h4>
              <p className="text-md pt-4">{event.description}</p>
            </div>
            <FaCaretRight className="text-xl" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Conferences;
