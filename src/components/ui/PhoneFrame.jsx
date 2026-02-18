const PhoneFrame = () => (
  <div style={{
    width: 280, height: 560, background: "#111", borderRadius: 40, padding: "12px 8px",
    boxShadow: "0 40px 80px rgba(0,0,0,0.3)", position: "relative", overflow: "hidden"
  }}>
    <div style={{
      width: "100%", height: "100%", background: "#fff", borderRadius: 32, overflow: "hidden",
      display: "flex", flexDirection: "column"
    }}>
      {/* Status bar */}
      <div style={{ background: "#fff", padding: "8px 16px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 10, fontWeight: 700 }}>9:41</span>
        <div style={{ background: "#111", borderRadius: 10, width: 80, height: 18 }}/>
        <div style={{ display: "flex", gap: 4 }}>
          <div style={{ width: 12, height: 8, background: "#22B573", borderRadius: 2 }}/>
          <div style={{ width: 14, height: 8, background: "#111", borderRadius: 2 }}/>
        </div>
      </div>
      {/* App header */}
      <div style={{ padding: "8px 12px", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#22B573" }}>Right Away</div>
            <div style={{ fontSize: 9, color: "#999" }}>New York, USA ▼</div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 24, height: 24, borderRadius: 12, background: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 10, height: 10, border: "1.5px solid #333", borderRadius: 10 }}/>
            </div>
            <div style={{ width: 24, height: 24, borderRadius: 12, background: "#f5f5f5" }}/>
          </div>
        </div>
        <div style={{ marginTop: 8, background: "#f5f5f5", borderRadius: 8, padding: "6px 10px", fontSize: 9, color: "#aaa" }}>
          🔍 Search for products...
        </div>
      </div>
      {/* Categories */}
      <div style={{ display: "flex", gap: 0, padding: "8px 0", borderBottom: "1px solid #f0f0f0" }}>
        {["All", "Inventory", "Equipment", "Library"].map((cat, i) => (
          <div key={cat} style={{
            flex: 1, textAlign: "center", fontSize: 8, fontWeight: i === 0 ? 800 : 500,
            color: i === 0 ? "#22B573" : "#999",
            borderBottom: i === 0 ? "2px solid #22B573" : "none", paddingBottom: 4
          }}>{cat}</div>
        ))}
      </div>
      {/* Products */}
      <div style={{ padding: 8, flex: 1, overflowY: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            { name: "Product Name", price: "$12.00", color: "#e8f5e9" },
            { name: "Product Name", price: "$24.00", color: "#e3f2fd" },
            { name: "Product Name", price: "$8.50", color: "#fff3e0" },
            { name: "Product Name", price: "$35.00", color: "#fce4ec" },
          ].map((p, i) => (
            <div key={i} style={{ background: p.color, borderRadius: 12, padding: 8 }}>
              <div style={{ height: 50, background: "rgba(255,255,255,0.5)", borderRadius: 8, marginBottom: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 30, height: 30, background: "#ddd", borderRadius: 4 }}/>
              </div>
              <div style={{ fontSize: 8, fontWeight: 700, color: "#333" }}>{p.name}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 3 }}>
                <span style={{ fontSize: 8, fontWeight: 800, color: "#22B573" }}>{p.price}</span>
                <div style={{ width: 14, height: 14, background: "#22B573", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontSize: 10, lineHeight: 1 }}>+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);