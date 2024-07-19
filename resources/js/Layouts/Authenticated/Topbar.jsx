import { useState, useRef, useEffect } from "react";
import { Link } from "@inertiajs/react";

export default function Topbar({name}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownTarget = useRef();
    const dropdownButton = useRef();

    const triggerDropdown = () => {
        if (dropdownOpen) {
            dropdownTarget.current.classList.add("hidden");
        } else {
            dropdownTarget.current.classList.remove("hidden");
        }
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownTarget.current &&
            !dropdownTarget.current.contains(event.target) &&
            !dropdownButton.current.contains(event.target)
        ) {
            dropdownTarget.current.classList.add("hidden");
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex justify-between items-center cursor-pointer">
            <input
                type="text"
                className="top-search focus:bg-slate-100 focus:text-black"
                placeholder="Search movie, cast, genre"
            />
            <div className="flex items-center gap-4">
                <span className="text-black text-sm font-medium">
                    Welcome, {name}
                </span>
                <div className="collapsible-dropdown flex flex-col gap-2 relative">
                    <div
                        className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                        onClick={triggerDropdown}
                        ref={dropdownButton}
                    >
                        <img
                            src="/images/avatar.png"
                            className="rounded-full object-cover w-full"
                            alt=""
                        />
                    </div>
                    <div
                        className="bg-slate-100 rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                        ref={dropdownTarget}
                    >
                        <Link
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Settings
                        </Link>
                        <Link
                            href={route('logout')}
                            method="post"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Sign Out
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx="true">{`
                .top-search {
                    background-image: url("/icons/ic_search.svg");
                }
            `}</style>
        </div>
    );
}
