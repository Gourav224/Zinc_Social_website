import React, { useId } from "react";
import EmailInput from "../assets/EmailInput.svg";
const MailInput = React.forwardRef(function MailInput(
    { type = "text", className = "", ...props },
    ref
) {
    const id = useId();
    return (
        <div className="flex items-center px-3 rounded-lg bg-customInputColor  w-full">
            <label className=" w-4 sm:w-auto inline-block mr-2 my-1" htmlFor={id}>
                <img src={EmailInput} />
            </label>
            <input
                type={type}
                className={`px-3 py-2  text-black text-[6px] sm:text-lg outline-none rounded-lg bg-customInputColor  w-18 sm:w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    );
});

export default MailInput;
