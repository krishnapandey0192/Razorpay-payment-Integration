import React from "react";

import { useSearchParams, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");
  // In a real application, you would fetch these details from your backend
  const orderDetails = {
    orderId: "ORD-12345",
    amount: "$99.99",
    date: new Date().toLocaleDateString(),
  };

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f3f4f6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "0.5rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      padding: "2rem",
    },
    header: {
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    icon: {
      color: "#10b981",
      fontSize: "4rem",
      marginBottom: "1rem",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#047857",
    },
    message: {
      textAlign: "center",
      color: "#4b5563",
      marginBottom: "1.5rem",
    },
    detailsContainer: {
      backgroundColor: "#f9fafb",
      borderRadius: "0.375rem",
      padding: "1rem",
      marginBottom: "1.5rem",
    },
    detailsTitle: {
      fontWeight: "bold",
      color: "#374151",
      marginBottom: "0.5rem",
    },
    detailsList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    detailItem: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "0.5rem",
    },
    detailLabel: {
      color: "#6b7280",
    },
    detailValue: {
      fontWeight: "500",
    },
    button: {
      backgroundColor: "#3b82f6",
      color: "white",
      padding: "0.75rem 1rem",
      borderRadius: "0.375rem",
      border: "none",
      width: "100%",
      fontSize: "1rem",
      fontWeight: "500",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.icon}>✅</div>
          <h1 style={styles.title}>Payment Successful!</h1>
        </div>
        <p style={styles.message}>
          Thank you for your purchase. Your order has been successfully
          processed.
        </p>
        <div style={styles.detailsContainer}>
          <h3 style={styles.detailsTitle}>Order Details:</h3>
          <ul style={styles.detailsList}>
            <li style={styles.detailItem}>
              <span style={styles.detailLabel}>Order ID:</span>
              <span style={styles.detailValue}>{referenceNum}</span>
            </li>
            <li style={styles.detailItem}>
              <span style={styles.detailLabel}>Amount Paid:</span>
              <span style={styles.detailValue}>{orderDetails.amount}</span>
            </li>
            <li style={styles.detailItem}>
              <span style={styles.detailLabel}>Date:</span>
              <span style={styles.detailValue}>{orderDetails.date}</span>
            </li>
          </ul>
        </div>
        <button style={styles.button} onClick={() => navigate("/")}>
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
