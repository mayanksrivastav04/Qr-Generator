import React from 'react'
import Qrgenerator from './QRgenerator'

const FullQr = () => {
  return (
    <div className="border-amber-500 p-5 rounded-2xl w-80 lg:w-[200] border-4 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4 uppercase">QR code Generator</h1>
        <QRgenerator/>
    </div>
  )
}

export default FullQr