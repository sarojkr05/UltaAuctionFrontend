// src/features/auth/pages/LoginPage.jsx
import React from "react";
import { useLoginForm } from "../hooks/useLoginForm";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  const {
    handleFormSubmit,
    handleUserInput,
    loading,
  } = useLoginForm();

  return (
    <LoginForm
      handleFormSubmit={handleFormSubmit}
      handleUserInput={handleUserInput}
      loading={loading}
    />
  );
}

export default LoginPage;
