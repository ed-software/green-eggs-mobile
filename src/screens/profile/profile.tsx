import React from "react";
import GenericProfile from "./generic-profile";

const Profile = ({ route }: any) => {
  const { userId } = route.params;

  return <GenericProfile userId={userId} />;
};

export default Profile;