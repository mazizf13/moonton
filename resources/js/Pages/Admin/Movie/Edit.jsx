import { useState } from 'react';
import Authenticated from "@/Layouts/Authenticated/Index";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import { Head, useForm } from "@inertiajs/react";
import { router } from '@inertiajs/react';

export default function Create({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const [thumbnailPreview, setThumbnailPreview] = useState(
        `/storage/${movie.thumbnail}`
    );

    const onHandleChange = (event) => {
        const { name, type, files, value, checked } = event.target;
        if (type === "file") {
            const file = files[0];
            setData(name, file);
            setThumbnailPreview(URL.createObjectURL(file));
        } else if (type === "checkbox") {
            setData(name, checked);
        } else {
            setData(name, value);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        router.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data,
        });
    };

    return (
        <Authenticated user={auth.user}>
            <Head title="Admin - Update Movie" />
            <h1 className="text-xl">Update Movie: {movie.name}</h1>
            <hr className="mb-4" />
            <InputError errors={errors} />
            <form onSubmit={submit}>
                <Label forInput="name" value="Name" />
                <Input
                    type="text"
                    name="name"
                    defaultValue={movie.name}
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the name of the movie"
                />
                <InputError message={errors.name} className="mt-2" />

                <Label forInput="category" value="Category" className="mt-4" />
                <Input
                    type="text"
                    name="category"
                    defaultValue={movie.category}
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the category of the movie"
                />
                <InputError message={errors.category} className="mt-2" />

                <Label forInput="video_url" value="Video URL" className="mt-4" />
                <Input
                    type="url"
                    name="video_url"
                    defaultValue={movie.video_url}
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the video url of the movie"
                />
                <InputError message={errors.video_url} className="mt-2" />

                <Label forInput="thumbnail" value="Thumbnail" className="mt-4" />
                <img
                    src={thumbnailPreview}
                    alt="Thumbnail Preview"
                    className="w-40"
                />
                <Input
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Insert thumbnail of the movie"
                />
                <InputError message={errors.thumbnail} className="mt-2" />

                <Label forInput="rating" value="Rating" className="mt-4" />
                <Input
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the rating of the movie"
                    defaultValue={movie.rating}
                    step="0.1"
                    min="0"
                    max="10"
                />
                <InputError message={errors.rating} className="mt-2" />

                <div className="flex flex-row mt-4 items-center">
                    <Label
                        forInput="is_featured"
                        value="Is Featured"
                        className="mr-3 mt-1"
                    />
                    <Checkbox
                        name="is_featured"
                        checked={data.is_featured}
                        onChange={onHandleChange}
                    />
                </div>
                <Button type="submit" className="mt-4" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
