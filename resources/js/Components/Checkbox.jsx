export default function Checkbox({ className = '', checked = false, onChange, ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            checked={checked}  // Controlled checkbox state
            onChange={onChange}  // Event handler for change
            className={
                'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
                className
            }
        />
    );
}
