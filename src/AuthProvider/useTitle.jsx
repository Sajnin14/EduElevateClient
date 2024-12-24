import { useEffect } from "react";


const useTitle = (title) => {

    useEffect(() => {
        const defaultTitle = 'EduElevate';
        document.title = title ? `${title}|${defaultTitle}` : defaultTitle; 
    },[title])
    
    return (
        <div>
            
        </div>
    );
};

export default useTitle;