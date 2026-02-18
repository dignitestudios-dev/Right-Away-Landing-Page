import Image from "next/image";

const Logo = ({ white = false }) => (
  <div
    style={{ display: "flex", alignItems: "center", width: 104, height: 60 }}
  >
    <img src={white ? "/white-logo.png" : "/logo.png"} alt="Rightaway Logo" />
  </div>
);

export default Logo;
