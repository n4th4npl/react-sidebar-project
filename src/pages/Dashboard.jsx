import React from "react";

export default function Dashboard() {
  return (
    <div className="max-w-[60%]">
      <h1 className="mt-28 text-5xl font-bold">What's this all about?</h1>
      <p className="pt-8">
        Are you tired of missing out on exciting local events and activities
        happening right in your own backyard? Look no further our cutting-edge
        web app is here to make sure you never miss another great opportunity in
        your city.
      </p>
      <div className="flex items-end gap-2 mt-16 mb-4">
        <div className="text-6xl font-bold">1.</div>
        <span className="text-2xl font-bold">Explore Local Events</span>
      </div>
      <p>Our web app offers a comprehensive and up-to-date database of local events, from art exhibitions and live music concerts to food festivals and community gatherings. Say goodbye to FOMO (Fear of Missing Out) – you can now explore and discover all the exciting happenings in your area effortlessly.</p>
      <div className="flex items-end gap-2 mt-16 mb-4">
        <div className="text-6xl font-bold">2.</div>
        <span className="text-2xl font-bold">Personalised Recommendations</span>
      </div>    
      <p>We understand that everyone's interests are unique. That's why our web app uses smart algorithms to curate event recommendations tailored specifically to your preferences. Whether you're a foodie, an art enthusiast, a sports fanatic, or simply looking for family-friendly activities, we've got you covered.</p>
      <div className="flex items-end gap-2 mt-16 mb-4">
        <div className="text-6xl font-bold">3.</div>
        <span className="text-2xl font-bold">Easy Event Booking</span>
      </div> 
      <p>Gone are the days of standing in long queues or navigating through multiple websites to purchase event tickets. With our web app, you can easily book tickets and reserve your spot with just a few clicks. It's quick, convenient, and hassle-free.

</p>
    </div>
  );
}
