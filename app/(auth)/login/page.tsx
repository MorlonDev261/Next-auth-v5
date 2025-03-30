import React from "react";
import LoginForm from "@/components/auth/login-form";

const BasicComponent = () => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        <LoginForm />
      </h1>
    </div>
  );
};

export default BasicComponent;
