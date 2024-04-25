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
            className={`"p-2  ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
