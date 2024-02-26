"use client";

import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddBooks = () => {
    const { register, handleSubmit, reset } = useForm();

    const axiosPublic = useAxiosPublic();

    const [image, setImage] = useState("")
        const [authorImage, setAuthorImage] = useState("")

    

    const onSubmit = async (data) => {
        /* converted image to base 64 */

      const imageData = await new Promise((resolve, reject) => {
        const readerImage = new FileReader()
        readerImage.readAsDataURL(data.image[0])
        readerImage.onload = () => resolve(readerImage.result)
        readerImage.onerror = error => reject(error)
      })

      const authorImageData = await new Promise((resolve, reject) => {
        const readerImage = new FileReader()
        readerImage.readAsDataURL(data.authorImage[0])
        readerImage.onload = () => resolve(readerImage.result)
        readerImage.onerror = error => reject(error)
      })

        const addBooksData = {
            name: data.name,
            category: data.category,
            image: imageData,
            authorImage: authorImageData,
            bookDetails: data.bookDetails,
            description: data.description,
            authorDetails: data.authorDetails,
            rating: data.rating,
            publishingTime: data.publishingTime,
            author: data.authorName,
            editor: data.editor,
            language: data.language,
            format: data.paperback,
            
        };
        console.log(addBooksData);

        axiosPublic
            .post("/books", addBooksData)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("New books added successfully");
                    // data.target.reset()
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="w-full mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h1 className="text-center mb-4 md:text-4xl text-2xl font-semibold">
                Add New Book
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">
                        Book Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="w-full p-2 border rounded-md"
                        {...register(
                            "name",
                            { required: true }
                        )}
                    />
                </div>

                <div className="flex gap-5 flex-col md:flex-row">
                    <div className="mb-4 flex-1">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">
                            Book Category
                        </label>
                        <select
                            name="category"
                            className="w-full p-2 border rounded-md"
                            {...register(
                                "category",
                                { required: true }
                            )}
                        >
                            <option value="">Select</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Comics">Comics</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className="mb-4  flex-1">
                        <label className=" text-gray-600 text-sm font-semibold mb-2">
                            Book Cover
                        </label>
                        <input
                            type="file"
                            name="image"
                            className="w-full p-2 border rounded-md"
                            {...register(
                                "image",
                                { required: true }
                            )}
                        />
                    </div>

                    <div className="mb-4  flex-1">
                        <label className=" text-gray-600 text-sm font-semibold mb-2">
                            Author Image
                        </label>
                        <input
                            type="file"
                            name="authorImage"
                            className="w-full p-2 border rounded-md"
                            {...register(
                                "authorImage",
                                { required: true }
                            )}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">
                        Book Details
                    </label>
                    <textarea
                        name="bookDetails"
                        className="w-full p-2 border rounded-md"
                        {...register(
                            "bookDetails",
                            { required: true }
                        )}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">
                        Book Overview
                    </label>
                    <textarea
                        name="description"
                        className="w-full p-2 border rounded-md"
                        {...register(
                            "description",
                            { required: true }
                        )}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">
                        Author Overview
                    </label>
                    <textarea
                        name="authorDetails"
                        className="w-full p-2 border rounded-md"
                        {...register(
                            "authorDetails",
                            { required: true }
                        )}
                    />
                </div>

                <div className="flex gap-5 md:flex-row flex-col">
                    <div className="mb-4 flex-1">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">
                            Rating
                        </label>
                        <input
                            step="any"
                            type="number"
                            name="rating"
                            className="w-full p-2 border rounded-md"
                            {...register(
                                "rating",
                                { required: true }
                            )}
                        />
                    </div>

                    <div className="mb-4 flex-1">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">
                            Publishing Time/Date
                        </label>
                        <input
                            type="datetime-local"
                            name="publishingTime"
                            className="w-full p-2 border rounded-md"
                            {...register(
                                "publishingTime",
                                { required: true }
                            )}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">
                        Author Name
                    </label>
                    <input
                        type="text"
                        name="authorName"
                        className="w-full p-2 border rounded-md"
                        {...register(
                            "authorName",
                            { required: true }
                        )}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">
                        Editor Name
                    </label>
                    <input
                        type="text"
                        name="editor"
                        className="w-full p-2 border rounded-md"
                        {...register(
                            "editor",
                            { required: true }
                        )}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">
                        Language
                    </label>
                    <input
                        type="text"
                        name="language"
                        className="w-full p-2 border rounded-md"
                        {...register(
                            "language",
                            { required: true }
                        )}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">
                        Paperback
                    </label>
                    <input
                        type="text"
                        name="paperback"
                        className="w-full p-2 border rounded-md"
                        {...register(
                            "paperback",
                            { required: true }
                        )}
                    />
                </div>

                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    >
                        Add Book
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBooks;
