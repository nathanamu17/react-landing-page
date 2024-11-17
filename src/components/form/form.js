import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Success from "../../pages/Success-state/Success";
import "./form.css";

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null); // State to pass data to Success component

  // Validation schema with Yup
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Function to handle form submission
  const handleFormSubmit = (data) => {
    setFormData(data);
    setIsModalOpen(true); // Open the modal upon successful submission
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label htmlFor="email">Email Address</label>
        {errors.email && (
          <span className="error-message">{errors.email?.message}</span>
        )}

        <input
          id="email"
          type="text"
          placeholder="email@company.com"
          {...register("email")}
          style={{
            borderColor: errors.email ? "hsl(4, 67%, 54%)" : "",
            backgroundColor: errors.email ? "hsla(4, 100%, 67%, 0.1)" : "",
            color: errors.email ? "hsl(4, 100%, 67%)" : "",
          }}
        />

        <button type="submit">Subscribe to Monthly Newsletter</button>
      </form>

      {/* Conditional rendering of Success component */}
      {formData && isModalOpen && (
        <Success formData={formData} closeModal={setIsModalOpen} />
      )}
    </>
  );
};

export default Form;