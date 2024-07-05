import React from "react";

const Profile = () => {
  return (
    // <section
    //   id="profile"
    //   className="h-screen flex items-center justify-center bg-gray-800"
    // >
    //   <div className="text-center">
    //     <h1 className="text-white text-4xl">John Doe</h1>
    //     <p className="text-white text-xl mt-2">Software Engineer</p>
    //   </div>
    // </section>

    <section
      id="profile"
      className="flex items-center justify-center py-12 mt-20 mb-14"
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-white text-4xl">Profile</h1>
        <p className="text-white text-xl mt-2">John Doe</p>
        <p className="text-white text-xl mt-2">Software Engineer</p>
      </div>
    </section>
  );
};

export default Profile;
