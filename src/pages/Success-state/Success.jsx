import "./Success.css";

const Success = ({ formData, closeModal }) => {
  const handleDismiss = () => {
    closeModal(false); // Close the modal when the button is clicked
  };

  return (
    <div className="background">
      <div className="message-box">
        <div className="content">
          <div className="img tick-img"></div>
          <h1>Thank You for Subscribing!</h1>
          <p className="message">
            A confirmation email has been sent to{" "}
            <strong>{formData.email}</strong>. Please open it and click the
            button inside to confirm your subscription.
          </p>
          <button onClick={handleDismiss}>Dismiss</button>
        </div>
      </div>
    </div>
  );
};

export default Success;