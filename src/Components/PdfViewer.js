import React, { useState } from 'react';
import cv from "../files/CV_Ihor_Vasyliev.pdf"

const PDFViewer = () => {
 return (
 <div style = {{height:"100vh"}}>
 <iframe src={cv} width="100%" height="100%" />
 </div>
 );
};
export default PDFViewer;