import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Index({ auth, flashMessage, movies }) {
    const {delete: destroy, put} = useForm();

    return (
        <Authenticated user={auth.user}>
            <div className="p-6">
                <Head title="List of Movies" />
                <Link href={route('admin.dashboard.movie.create')}>
                    <Button type="button" className="mb-4 py-2 px-4 text-base">Insert New Movie</Button>
                </Link>
                {flashMessage?.message && (
                    <FlashMessage message={flashMessage.message} />
                )}
                <table className="w-full bg-white border border-gray-200 rounded-md shadow-md table-fixed">
                    <thead className="bg-gray-100 border-b border-gray-200">
                        <tr>
                            <th className="py-3 px-4 text-left w-1/6">Image</th>
                            <th className="py-3 px-4 text-left w-1/3">Name</th>
                            <th className="py-3 px-4 text-left w-1/5">Category</th>
                            <th className="py-3 px-4 text-left w-1/8">Rating</th>
                            <th className="py-3 px-4 text-center w-1/5" colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id} className="border-b border-gray-200">
                                <td className="py-4 px-4">
                                    <img
                                        src={`/storage/${movie.thumbnail}`}
                                        alt={movie.name}
                                        className="w-32 object-cover rounded-md"
                                    />
                                </td>
                                <td className="py-4 px-4 text-left">
                                    <div className="whitespace-normal break-words">{movie.name}</div>
                                </td>
                                <td className="py-4 px-4 text-left">
                                    <div className="whitespace-normal break-words">{movie.category}</div>
                                </td>
                                <td className="py-5 px-8 text-left">{movie.rating.toFixed(1)}</td>
                                <td className="py-2 px-2 text-center">
                                    <Link href={route("admin.dashboard.movie.edit", movie.id)}>
                                        <Button type="button" variant="warning" className="text-sm">
                                            Edit
                                        </Button>
                                    </Link>
                                </td>
                                <td className="py-2 px-2 text-center">
                                    <div
                                        onClick={() => {
                                            movie.deleted_at
                                                ? put(
                                                    route(
                                                        "admin.dashboard.movie.restore",
                                                        movie.id
                                                    )
                                                )
                                                : destroy(
                                                    route(
                                                        "admin.dashboard.movie.destroy",
                                                        movie.id
                                                    )
                                                );
                                        }}
                                    >
                                        <Button type="button" variant="danger" className="text-sm">
                                            {movie.deleted_at
                                                ? "Restore"
                                                : "Delete"}
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Authenticated>
    );
}
