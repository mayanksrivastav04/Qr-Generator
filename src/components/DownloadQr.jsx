import React from "react";

const DownloadQr = () => {
  const downloadQR = () => {
    const canvas = document.getElementById("qrCode");

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");

    downloadLink.href = pngUrl;
    downloadLink.download = "QRCode.png";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return <button className="bg-green-400 rounded-2xl py-2 px-4 font-bold hover:bg-green-500 cursor-pointer" onClick={downloadQR}>Donwload QR</button>;
};

export default DownloadQr;
