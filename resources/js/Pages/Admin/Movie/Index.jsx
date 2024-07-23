import Authenticated from "@/Layouts/Authenticated/Index"
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import { Link } from "@inertiajs/react";


export default function Index ({auth, flashMessage}) {
    return (
    <Authenticated user={auth.user}>
        <Link href={route('admin.dashboard.movie.create')}>
            <Button type="button" className="w-40 mb-0">Insert New Movie</Button>
        </Link>
        {flashMessage?.message && (
            <FlashMessage message={flashMessage.message} />
        )}
    </Authenticated>
    )
}

