import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
type TProps = {
  setFile: any;
};
export const DropZone: React.FC<TProps> = ({ setFile }) => {
  const [file, setFiles] = useState<any>();
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      setFiles(acceptedFiles[0]);
    },
    [setFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div
      className={`drop-zone ${isDragActive ? "active-zone" : ""}`}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {file !== undefined ? (
        <p>{file ? file.name : ""}</p>
      ) : isDragActive ? (
        <p>ПРЯМО СЮДА))</p>
      ) : (
        <p>Закинь сюда файл или нажми на меня</p>
      )}
    </div>
  );
};
