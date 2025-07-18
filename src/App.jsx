import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={formData.firstName}
          placeholder="Enter a First Name..."
          type="text"
          onChange={handleChange}
        />
        <input
          name="lastName"
          value={formData.lastName}
          placeholder="Enter a Last Name..."
          type="text"
          onChange={handleChange}
        />
        <input
          name="email"
          value={formData.email}
          placeholder="Enter a Email..."
          type="email"
          onChange={handleChange}
        />
        <input
          name="password"
          value={formData.password}
          placeholder="Enter a Password..."
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
        />
        <input
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Enter a Confirm Password..."
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
        />
        <button type="button" onClick={toggleShowPassword}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
        >
          <option value="">Select User Type</option>
          <option value="Admin">Admin</option>
          <option value="Customer">Customer</option>
          <option value="Guest">Guest</option>
        </select>
        <button type="submit">Log In</button>
      </form>

      {isSubmitted && (
        <p>
          Welcome, {formData.firstName}! You've registered as{" "}
          {formData.userType}.
        </p>
      )}
    </div>
  );
}
export default App;
