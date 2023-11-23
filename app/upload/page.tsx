'use client'

import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
    public_id: string;
}

const UploadImg = () => {
    const [publicId, setPublicId] = useState("");

    return (
        <>
            {publicId ?
                <CldImage
                    src={publicId}
                    width={270}
                    height={180}
                    alt="A coffee image"
                /> : <h1>Error Occured</h1>}
            <CldUploadWidget uploadPreset="uexnmpsl" onUpload={(result, widget) => {
                if (result.event !== "success") return;
                const info = result.info as CloudinaryResult;
                setPublicId(info.public_id);
            }}  options={{
                sources: ["local"],
                multiple: false
              }}>
                {({ open }) => {
                    return (
                        <button onClick={() => open()} className='btn btn-primary ml-5'>
                            Upload an Image
                        </button>
                    );
                }}
            </CldUploadWidget>
        </>
    )
}

export default UploadImg