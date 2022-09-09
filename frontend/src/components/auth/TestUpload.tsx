import React, { useState } from 'react'

export function TestUpload() {
    // const [selectedFile, setSelectedFile] = useState()
    // const [isSelected, setIsSelected] = useState(false)
    const [imageStore, setImageStore] = useState('')
    const handleImageChange = async (e: any) => {
        const file = e.target.files[0]
        var reader = new FileReader()
        var url = reader.readAsDataURL(file)
        reader.onloadend = function (e) {
            console.log('check check url', reader.result)
            setImageStore(reader.result as string)
            console.log('show url', url)
        }

        // const text_format = await file.arrayBuffer()
        console.log(file)
    }

    return (
        <div>
            <input type="file" onChange={handleImageChange}></input>

            <button>Submit</button>
            <img src={imageStore} />
        </div>
    )
}
