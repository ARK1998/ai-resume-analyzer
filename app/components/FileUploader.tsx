// import {useState, useCallback} from 'react'
// import {useDropzone} from 'react-dropzone'
// import { formatSize } from '../lib/utils'
//
// interface FileUploaderProps {
//     onFileSelect?: (file: File | null) => void;
// }
//
// const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
//     const onDrop = useCallback((acceptedFiles: File[]) => {
//         const file = acceptedFiles[0] || null;
//
//         onFileSelect?.(file);
//     }, [onFileSelect]);
//
//     const maxFileSize = 20 * 1024 * 1024; // 20MB in bytes
//
//     const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
//         onDrop,
//         multiple: false,
//         accept: { 'application/pdf': ['.pdf']},
//         maxSize: maxFileSize,
//     })
//
//     const file = acceptedFiles[0] || null;
//
//
//
//     return (
//         <div className="w-full gradient-border">
//             <div {...getRootProps()}>
//                 <input {...getInputProps()} />
//
//                 <div className="space-y-4 cursor-pointer">
//                     {file ? (
//                         <div className="uploader-selected-file" onClick={(e) => e.stopPropagation()}>
//                             <img src="/images/pdf.png" alt="pdf" className="size-10" />
//                             <div className="flex items-center space-x-3">
//                                 <div>
//                                     <p className="text-sm font-medium text-gray-700 truncate max-w-xs">
//                                         {file.name}
//                                     </p>
//                                     <p className="text-sm text-gray-500">
//                                         {formatSize(file.size)}
//                                     </p>
//                                 </div>
//                             </div>
//                             <button className="p-2 cursor-pointer" onClick={(e) => {
//                                 onFileSelect?.(null)
//                             }}>
//                                 <img src="/icons/cross.svg" alt="remove" className="w-4 h-4" />
//                             </button>
//                         </div>
//                     ): (
//                         <div>
//                             <div className="mx-auto w-16 h-16 flex items-center justify-center mb-2">
//                                 <img src="/icons/info.svg" alt="upload" className="size-20" />
//                             </div>
//                             <p className="text-lg text-gray-500">
//                                 <span className="font-semibold">
//                                     Click to upload
//                                 </span> or drag and drop
//                             </p>
//                             <p className="text-lg text-gray-500">PDF (max {formatSize(maxFileSize)})</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default FileUploader

///////////////////////////////

// FileUploader.tsx (updated with responsive classes)
import {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { formatSize } from '../lib/utils'

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null;

        onFileSelect?.(file);
    }, [onFileSelect]);

    const maxFileSize = 20 * 1024 * 1024; // 20MB in bytes

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
        onDrop,
        multiple: false,
        accept: { 'application/pdf': ['.pdf']},
        maxSize: maxFileSize,
    })

    const file = acceptedFiles[0] || null;

    return (
        <div className="w-full gradient-border p-2 md:p-4">
            <div {...getRootProps()}>
                <input {...getInputProps()} />

                <div className="space-y-2 md:space-y-4 cursor-pointer">
                    {file ? (
                        <div className="uploader-selected-file flex items-center justify-between p-2 md:p-3" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center space-x-2 md:space-x-3">
                                <img src="/images/pdf.png" alt="pdf" className="size-8 md:size-10" />
                                <div>
                                    <p className="text-xs md:text-sm font-medium text-gray-700 truncate max-w-[120px] md:max-w-xs">
                                        {file.name}
                                    </p>
                                    <p className="text-xs md:text-sm text-gray-500">
                                        {formatSize(file.size)}
                                    </p>
                                </div>
                            </div>
                            <button className="p-1 md:p-2 cursor-pointer" onClick={(e) => {
                                onFileSelect?.(null)
                            }}>
                                <img src="/icons/cross.svg" alt="remove" className="w-3 h-3 md:w-4 md:h-4" />
                            </button>
                        </div>
                    ): (
                        <div className="text-center p-4 md:p-6">
                            <div className="mx-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-1 md:mb-2">
                                <img src="/icons/info.svg" alt="upload" className="size-12 md:size-20" />
                            </div>
                            <p className="text-sm md:text-lg text-gray-500">
                                <span className="font-semibold">
                                    Click to upload
                                </span> or drag and drop
                            </p>
                            <p className="text-sm md:text-lg text-gray-500">PDF (max {formatSize(maxFileSize)})</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default FileUploader