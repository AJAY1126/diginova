import React, { useState } from "react";

const Price: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<string>("Business Website");

    const planPrices: Record<string, string> = {
        "Lead Landing": "₹7,000",
        "Business Website": "₹15,000",
        "Business Plus": "₹22,000",
        "CMS Light": "₹30,000",
        "CMS Growth": "₹45,000",
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

    const sectionStyle: React.CSSProperties = {
        width: "100%",
        padding: "50px 20px",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
    };

    const containerStyle: React.CSSProperties = {
        width: "100%",
        maxWidth: "1250px",
        margin: "0 auto",
        textAlign: "center",
    };

    const titleStyle: React.CSSProperties = {
        textAlign: "center",
        marginBottom: "30px",
        fontSize: "30px",
        fontWeight: 700,
        color: "#222",
    };

    const tableWrapperStyle: React.CSSProperties = {
        overflowX: "auto",
        borderRadius: "14px",
        boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
        background: "#fff",
        margin: "0 auto",
        maxWidth: "1200px",
    };

    const tableStyle: React.CSSProperties = {
        width: "100%",
        borderCollapse: "collapse",
        fontFamily: "Arial, sans-serif",
        margin: "0 auto",
        minWidth: "1100px",
    };

    const thStyle: React.CSSProperties = {
        padding: "14px",
        border: "1px solid #ddd",
        textAlign: "center",
        fontWeight: 700,
        background: "#f8f9fa",
        cursor: "pointer",
        minWidth: "180px",
        transition: "0.3s",
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

    const buttonWrapperStyle: React.CSSProperties = {
        textAlign: "center",
        marginTop: "30px",
    };

    const buttonStyle: React.CSSProperties = {
        background: "#e10600",
        color: "#fff",
        border: "none",
        padding: "14px 32px",
        borderRadius: "10px",
        fontSize: "16px",
        fontWeight: 700,
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(37,211,102,0.25)",
    };

    return (
        <section className="service-content" style={sectionStyle}>
            <div className="content-container" style={containerStyle}>
                <h2 style={titleStyle}>
                    Website & Application Design and Development — Pricing
                </h2>

                <div style={tableWrapperStyle}>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Features</th>

                                <th
                                    style={{ ...thStyle, ...selectedHeader("Lead Landing") }}
                                    onClick={() => setSelectedPlan("Lead Landing")}
                                >
                                    Lead Landing
                                </th>

                                <th
                                    style={{ ...thStyle, ...selectedHeader("Business Website") }}
                                    onClick={() => setSelectedPlan("Business Website")}
                                >
                                    Business Website
                                </th>

                                <th
                                    style={{ ...thStyle, ...selectedHeader("Business Plus") }}
                                    onClick={() => setSelectedPlan("Business Plus")}
                                >
                                    Business Plus
                                </th>

                                <th
                                    style={{ ...thStyle, ...selectedHeader("CMS Light") }}
                                    onClick={() => setSelectedPlan("CMS Light")}
                                >
                                    CMS Light
                                </th>

                                <th
                                    style={{ ...thStyle, ...selectedHeader("CMS Growth") }}
                                    onClick={() => setSelectedPlan("CMS Growth")}
                                >
                                    CMS Growth
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td style={tdFeatureStyle}>Structure</td>
                                <td style={tdStyle}>1-page</td>
                                <td style={tdStyle}>Up to 5 pages</td>
                                <td style={tdStyle}>Up to 8 pages</td>
                                <td style={tdStyle}>10–12 pages</td>
                                <td style={tdStyle}>15–18 pages</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Build Type</td>
                                <td style={tdStyle}>Static (fast)</td>
                                <td style={tdStyle}>Static</td>
                                <td style={tdStyle}>Static</td>
                                <td style={tdStyle}>WordPress (CMS)</td>
                                <td style={tdStyle}>WordPress (CMS)</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Lead Form (Email)</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>WhatsApp & Call Buttons</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Google Maps Embed</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>SEO Setup</td>
                                <td style={tdStyle}>Basic (title/meta)</td>
                                <td style={tdStyle}>Standard</td>
                                <td style={tdStyle}>Standard</td>
                                <td style={tdStyle}>CMS SEO basics</td>
                                <td style={tdStyle}>Better structure + CMS SEO</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Google Analytics (GA4)</td>
                                <td style={tdStyle}>✅ (basic)</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅ + events (basic)</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Blog</td>
                                <td style={tdStyle}>❌</td>
                                <td style={tdStyle}>❌</td>
                                <td style={tdStyle}>Add-on</td>
                                <td style={tdStyle}>✅ (basic)</td>
                                <td style={tdStyle}>✅ (better setup)</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Self-edit (CMS)</td>
                                <td style={tdStyle}>❌</td>
                                <td style={tdStyle}>❌</td>
                                <td style={tdStyle}>❌</td>
                                <td style={tdStyle}>✅</td>
                                <td style={tdStyle}>✅</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Training to edit website</td>
                                <td style={tdStyle}>❌</td>
                                <td style={tdStyle}>❌</td>
                                <td style={tdStyle}>❌</td>
                                <td style={tdStyle}>✅ (basic)</td>
                                <td style={tdStyle}>✅ (basic)</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Revisions</td>
                                <td style={tdStyle}>1</td>
                                <td style={tdStyle}>2</td>
                                <td style={tdStyle}>2</td>
                                <td style={tdStyle}>3</td>
                                <td style={tdStyle}>3</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Free Maintenance Support</td>
                                <td style={tdStyle}>7 days</td>
                                <td style={tdStyle}>15 days</td>
                                <td style={tdStyle}>30 days</td>
                                <td style={tdStyle}>45 days</td>
                                <td style={tdStyle}>60 days</td>
                            </tr>

                            <tr>
                                <td style={tdFeatureStyle}>Timeline</td>
                                <td style={tdStyle}>3–5 days</td>
                                <td style={tdStyle}>7–10 days</td>
                                <td style={tdStyle}>10–14 days</td>
                                <td style={tdStyle}>2–3 weeks</td>
                                <td style={tdStyle}>3–5 weeks</td>
                            </tr>

                            <tr style={{ background: "#fff8e1", fontWeight: 700 }}>
                                <td style={tdFeatureStyle}>Price</td>
                                <td style={tdStyle}>₹7,000</td>
                                <td style={tdStyle}>₹15,000</td>
                                <td style={tdStyle}>₹22,000</td>
                                <td style={tdStyle}>₹30,000</td>
                                <td style={tdStyle}>₹45,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={buttonWrapperStyle}>
                    <button onClick={sendWhatsApp} style={buttonStyle}>
                        Continue with {selectedPlan}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Price;