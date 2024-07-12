export default function Label({ value, className = "", children, forInput }) {
    return (
        <label
            htmlFor={forInput}
            className={`text-base block mb-2 ${className}`}
        >
            {value ? value : children}
        </label>
    );
}
