import './Loader.css';

export default function Loader() {
    return (
        <div className="flex justify-center items-center h-[60vh]">
            <svg className="loader" viewBox="25 25 50 50">
                <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#333333" strokeWidth="4" />
            </svg>
        </div>
    );
}
