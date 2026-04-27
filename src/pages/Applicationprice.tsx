import React, { useState } from "react";

const ApplicationPrice: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<string>("AI Starter (FAQ)");

    const planPrices: Record<string, string> = {
        "AI Starter (FAQ)": "₹9,999",
        "AI Lead Qualifier": "₹19,999",
        "AI Appointment + CRM": "₹34,999",
    };

    const sendWhatsApp = () => {
        const phone = "917338836480";

        const message = `Hello 👋

I am interested in the ${selectedPlan} AI Website Agent plan.
Setup Price: ${planPrices[selectedPlan]}

Please share more details.`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const thStyle: React.CSSProperties = {
        padding: "14px",
        border: "1px solid #ddd",
        textAlign: "center",
        fontWeight: 700,
        background: "#f8f9fa",
        cursor: "pointer",
        minWidth: "180px",
    };

    const tdStyle: React.CSSProperties = {
        padding: "14px",
        border: "1px solid #ddd",
        textAlign: "center",
        background: "#fff",
    };

    const tdFeatureStyle: React.CSSProperties = {
        padding: "14px",
        border: "1px solid #ddd",
        textAlign: "left",
        fontWeight: 600,
        background: "#fafafa",
        minWidth: "240px",
    };

    const selectedHeader = (plan: string): React.CSSProperties =>
        selectedPlan === plan
            ? {
                background: "#e10600",
                color: "#fff",
            }
            : {};

    return (
        <section className="service-content">
            <div className="content-container">
                <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
                    AI Website Agent (Website Chat + WhatsApp Handoff)
                </h2>

                <div
                    style={{
                        overflowX: "auto",
                        borderRadius: "12px",
                        boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                        background: "#fff",
                    }}
                >
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            fontFamily: "Arial",
                            minWidth: "900px",
                        }}
                    >
                        <thead>
                            <tr>
                                <th style={thStyle}>Features</th>

                                <th
                                    style={{ ...thStyle, ...selectedHeader("AI Starter (FAQ)") }}
                                    onClick={() => setSelectedPlan("AI Starter (FAQ)")}
                                >
                                    AI Starter (FAQ)
                                </th>

                                <th
                                    style={{ ...thStyle, ...selectedHeader("AI Lead Qualifier") }}
                                    onClick={() => setSelectedPlan("AI Lead Qualifier")}
                                >
                                    AI Lead Qualifier
                                </th>

                                <th
                                    style={{ ...thStyle, ...selectedHeader("AI Appointment + CRM") }}
                                    onClick={() => setSelectedPlan("AI Appointment + CRM")}
                                >
                                    AI Appointment + CRM
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td style={tdFeatureStyle}>Best for</td>
                                <td style={tdStyle}>Reduce repeat questions</td>
                                <td style={tdStyle}>More & better leads</td>
                                <td style={tdStyle}>Bookings + serious lead flow</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Website Chat Widget</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>FAQ Answering</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Lead Capture</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Qualification Questions</td>
                                <td style={tdStyle}>❌</td>
                                <td style={tdStyle}>5–7 questions</td>
                                <td style={tdStyle}>7–10 questions</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>WhatsApp Handoff</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Admin Alerts</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Analytics</td>
                                <td style={tdStyle}>Basic</td>
                                <td style={tdStyle}>Standard</td>
                                <td style={tdStyle}>Advanced</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>CRM / Google Sheet Integration</td>
                                <td style={tdStyle}>Add-on</td>
                                <td style={tdStyle}>Basic</td>
                                <td style={tdStyle}>Advanced</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Multi-language</td>
                                <td style={tdStyle}>Add-on</td>
                                <td style={tdStyle}>Add-on</td>
                                <td style={tdStyle}>Included</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Revisions</td>
                                <td style={tdStyle}>1</td>
                                <td style={tdStyle}>2</td>
                                <td style={tdStyle}>3</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Free Support</td>
                                <td style={tdStyle}>7 days</td>
                                <td style={tdStyle}>15 days</td>
                                <td style={tdStyle}>30 days</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Timeline</td>
                                <td style={tdStyle}>3–5 days</td>
                                <td style={tdStyle}>7–10 days</td>
                                <td style={tdStyle}>10–15 days</td>
                            </tr>

                            <tr style={{ background: "#fff8e1", fontWeight: 700 }}>
                                <td style={tdFeatureStyle}>Setup Price</td>
                                <td style={tdStyle}>₹9,999</td>
                                <td style={tdStyle}>₹19,999</td>
                                <td style={tdStyle}>₹34,999</td>
                            </tr>

                            <tr style={{ background: "#f0fdf4", fontWeight: 700 }}>
                                <td style={tdFeatureStyle}>Monthly Care</td>
                                <td style={tdStyle}>₹1,999/mo</td>
                                <td style={tdStyle}>₹3,999/mo</td>
                                <td style={tdStyle}>₹5,999/mo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ textAlign: "center", marginTop: "28px" }}>
                    <button
                        onClick={sendWhatsApp}
                        style={{
                            background: "#e10600",
                            color: "#fff",
                            border: "none",
                            padding: "14px 32px",
                            borderRadius: "10px",
                            fontSize: "16px",
                            fontWeight: 700,
                            cursor: "pointer",
                            boxShadow: "0 4px 12px rgba(37,211,102,0.25)",
                        }}
                    >
                        Continue with {selectedPlan}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ApplicationPrice;