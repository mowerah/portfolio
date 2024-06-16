import React from "react";

const Profile = () => {
  return (
    <section
      id="profile"
      className="h-screen flex items-center justify-center bg-gray-200"
    >
      <div className="text-center">
        <h1 className="text-white text-4xl">John Doe</h1>
        <p className="text-white text-xl mt-2">Software Engineer</p>
      </div>
    </section>
  );
};

export default Profile;
