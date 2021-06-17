import { useLocation } from "react-router"

const NotFound : React.FC<{}> = () => {
    const location = useLocation();
    return (
        <div className="h-screen w-screen flex items-center justify-center flex-col">
            <span>404 - Not Found</span>

            <span className="text-gray-600 italic text-sm">{location.pathname}</span>
        </div>
    );
}

export default NotFound;