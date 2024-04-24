export default function Button({
    children,
    type = "button",
    bgColor = "bg-customBlue",
    textColor = " text-white",
    className = "",
    ...props
}) {
    return (
        <button
            className={`" px-2 py-1 rounded ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
