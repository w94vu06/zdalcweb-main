import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const FileUploadButton = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('File uploaded successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow items-center justify-center">
                <div className="p-40">
                    <input type="file" onChange={handleFileChange} className="mb-2" />
                    <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        上傳檔案分析
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
    
};

export default FileUploadButton;
