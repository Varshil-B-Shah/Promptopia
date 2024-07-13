import { ImageResponse } from "next/og";
import Image from "next/image";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bolder",
          borderRadius : 50,
          fontFamily: "sans-serif"
        }}
        
      >
        V
      </div>
    ),
    {...size}
  );
}
