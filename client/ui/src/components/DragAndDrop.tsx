const DragAndDrop: React.FC<{ dragIsActive: boolean, setDragIsActive: React.Dispatch<React.SetStateAction<boolean>>, onFileUpload: (file: File) => void }> = ({ dragIsActive, setDragIsActive, onFileUpload }) => {

    // Initial drag event when file enters the dropzone
    function handleDragEnter(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragIsActive(true);
    }

    // Maintain drag event
    function handleDragOver(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragIsActive(true);
    }

    // Stop drag event if no longer hovering
    function handleDragLeave(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragIsActive(false);
    }

    // Trigger API once file is dropped
    function handleDrop(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragIsActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
                onFileUpload(e.dataTransfer.files[i]);
            }
        }
    }

    return (
        <div
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        ></div>
    )
}

export default DragAndDrop;
