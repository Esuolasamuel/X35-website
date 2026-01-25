export default function Container({ children }) {
    return (
        <div className="p-3.5 sm:p-7.5 md:p-15 lg:p-30 w-full max-w-7xl mx-auto">
            {children}
        </div>
    );
}