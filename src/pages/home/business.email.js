import React from "react";

const Email = () => {
    return (
        <div className=" my-5 py-4" style={{ marginTop: "6rem", display: "flex", flexDirection: "column", alignItems: "center",backgroundColor:'#FBFBFF'}}>
            <div style={{ textAlign: "center", fontWeight: "600", fontSize: "35px" }}>
                Ready to unlock the full potential of reviews
            </div>

            <div style={{ color: "#989898", textAlign: "center", fontWeight: "400", fontSize: "16px" }}>
                Learn what MOSOUQ is capable of
            </div>

            <div
                className="search-bar"
                style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #E4E5E8",
                    borderRadius: "8px",
                    padding: "12px",
                    backgroundColor: "#FFFFFF",
                    position: "relative",
                    marginTop: "2rem",
                    width:"100%",
                    height: "80px",
                    gap: "12px",
                    justifyContent: "center"
                }}
            >
                <input
                    type="text"
                    placeholder="Enter Email"
                    style={{
                        border: "none",
                        outline: "none",
                        padding: "10px 15px",
                        flex: 1,
                        backgroundColor: "transparent",
                        marginLeft: "30px",
                    }}
                />
                <button className="search-button">Email</button>
            </div>
        </div>
    );
}

export default Email;
