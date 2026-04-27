import React, { useState } from "react";

const Websitedesignpricedetails: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<string>("UX + Conversion Redesign");

    const planPrices: Record<string, string> = {
        "UX + Conversion Redesign": "₹12,000",
        "Full Rebuild": "₹24,000",
        "Best for": "₹36,000",
    };

    const sendWhatsApp = () => {
        const phone = "917338836480";

        const message = `Hello 👋

I am interested in the ${selectedPlan} plan.
Price: ${planPrices[selectedPlan]}

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
                    Website UI Refresh / Redesign Pricing
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
                            fontFamily: "Arial, sans-serif",
                            minWidth: "900px",
                        }}
                    >
                        <thead>
                            <tr>
                                <th style={thStyle}>Features</th>

                                <th
                                    style={{ ...thStyle, ...selectedHeader("UX + Conversion Redesign") }}
                                    onClick={() => setSelectedPlan("UX + Conversion Redesign")}
                                >
                                    UX + Conversion Redesign
                                </th>

                                <th
                                    style={{ ...thStyle, ...selectedHeader("Full Rebuild") }}
                                    onClick={() => setSelectedPlan("Full Rebuild")}
                                >
                                    Full Rebuild
                                </th>

                                <th
                                    style={{ ...thStyle, ...selectedHeader("Best for") }}
                                    onClick={() => setSelectedPlan("Best for")}
                                >
                                    Best for
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td style={tdFeatureStyle}>Best for</td>
                                <td style={tdStyle}>Looks outdated</td>
                                <td style={tdStyle}>Visitors not converting</td>
                                <td style={tdStyle}>Old + slow + many issues</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Pages Covered</td>
                                <td style={tdStyle}>Up to 5</td>
                                <td style={tdStyle}>Up to 8</td>
                                <td style={tdStyle}>Up to 10–12</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>UI Upgrade</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅ (stronger)</td>
                                <td style={tdStyle}>✅ (fresh design)</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Content flow restructure</td>
                                <td style={tdStyle}>❌</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>CTA + Lead improvements</td>
                                <td style={tdStyle}>⚠️ Basic</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Mobile issues fix</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Speed optimization</td>
                                <td style={tdStyle}>⚠️ Basic</td>
                                <td style={tdStyle}>✅ Standard</td>
                                <td style={tdStyle}>✅ Advanced</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>SEO fixes</td>
                                <td style={tdStyle}>✅ Basic</td>
                                <td style={tdStyle}>✅ Standard</td>
                                <td style={tdStyle}>✅ Advanced + structure</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>GA4 tracking</td>
                                <td style={tdStyle}>✅ Basic</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Content Migration</td>
                                <td style={tdStyle}>❌</td>
                                <td style={tdStyle}>⚠️ Partial</td>
                                <td style={tdStyle}>✅ Included</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Redirect handling</td>
                                <td style={tdStyle}>❌</td>
                                <td style={tdStyle}>❌</td>
                                <td style={tdStyle}>✅ Basic</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Revisions</td>
                                <td style={tdStyle}>1</td>
                                <td style={tdStyle}>2</td>
                                <td style={tdStyle}>3</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Free Maintenance Support</td>
                                <td style={tdStyle}>15 days</td>
                                <td style={tdStyle}>30 days</td>
                                <td style={tdStyle}>60 days</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Timeline</td>
                                <td style={tdStyle}>4–7 days</td>
                                <td style={tdStyle}>10–15 days</td>
                                <td style={tdStyle}>3–5 weeks</td>
                            </tr>

                            <tr style={{ background: "#fff8e1", fontWeight: 700 }}>
                                <td style={tdFeatureStyle}>Price</td>
                                <td style={tdStyle}>₹12,000</td>
                                <td style={tdStyle}>₹24,000</td>
                                <td style={tdStyle}>₹36,000</td>
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

export default Websitedesignpricedetails;