import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, isOpen, onClick }) => (
  <div
    onClick={onClick}
    style={{
      border: "1px solid #DCDCDC",
      borderRadius: 24,
      padding: "24px 32px",
      cursor: "pointer",
      marginBottom: 16,
      background: "#fff",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: 18, fontWeight: 600, color: "#000" }}>
        {question.q}
      </span>
      <span
        style={{
          fontSize: 20,
          color: "#000",
        }}
      >
        {isOpen ? <ChevronDown className="rotate-180" /> : <ChevronDown />}
      </span>
    </div>
    {isOpen && (
      <p
        style={{
          marginTop: 16,
          fontSize: 15,
          color: "rgba(0,0,0,0.6)",
          lineHeight: 1.6,
        }}
      >
        {question.a}
      </p>
    )}
  </div>
);
export default FAQItem;
