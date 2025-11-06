function extractFile(filePath){ //we only need the last element
    let fileParts = filePath.split('\\');
    let fileInfo = fileParts.pop();

    let lastDotIdx = fileInfo.lastIndexOf('.'); // takes the LAST index of the requested element (in case there are more dots and not having to use .inludes() and so on)

    let fileName = fileInfo.substring(0, lastDotIdx);
    let fileExtention = fileInfo.substring(lastDotIdx + 1); //to not include the dot

    console.log(`File name: ${fileName}`);
    console.log(`File extention: ${fileExtention}`);    
}

extractFile('C:\\Internal\\training-internal\\Template.bat.pptx');