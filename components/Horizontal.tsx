import React from "react";

interface HorizontalProps { }

export const Horizontal: React.FC<HorizontalProps> = ({ }) => {
    return (
        <>
            <hr style={{
                marginBottom: "30px",
                height: "1px",
                width: "70px",
                borderWidth: "0",
                color: "#ff424d",
                backgroundColor: "#ff424d",
                marginRight: "auto",
                marginLeft: "auto"
            }}
            />
        </>
    )
}