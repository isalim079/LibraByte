"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddBooks = () => {

    const { register, handleSubmit, reset } = useForm();

    // const [image, setImage] = useState("")
    //     const [authorImage, setAuthorImage] = useState("")


// console.log(image);
  

    const onSubmit = async (data) => {

        /* converted image to base 64 */

        

        let readerImage = new FileReader()
        readerImage.readAsDataURL(data.image[0])
        // readerImage.onload = () => {
        //     // console.log(readerImage.result);
        //     setImage(readerImage.result)
        // }
        // readerImage.onerror = error => {
        //     console.log("Error in base 64 in add Books", error);
        // }
        // console.log(readerImage.result);
       
        // console.log(data.image[0].name);

        let readerAuthor = new FileReader()
        readerAuthor.readAsDataURL(data.authorImage[0])
        readerAuthor.onload = () => {
            // console.log(readerAuthor.result);
            setAuthorImage(readerAuthor.result)
        }
        readerAuthor.onerror = error => {
            console.log("Error in base 64 in add Books", error);
        }
       
        // console.log(data.image[0].name);



        
            const addBooksData = {
                name : data.name,
                category: data.category,
                image:  readerImage.onload = () => {
                    // console.log(readerImage.result);
                  return  readerImage.result
                },
                authorImage: readerAuthor.onload = () => {
                    // console.log(readerAuthor.result);
                    return readerAuthor.result
                },
                bookDetails: data.bookDetails,
                description: data.description,
                authorDetails: data.authorDetails,
                rating: data.rating,
                publishingTime: data.publishingTime,
                authorName: data.authorName,
                editor: data.editor,
                language: data.language,
                paperback: data.paperback,
    
            }
            console.log(addBooksData);
        

    }


    return (
        <div className="w-full mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h1 className='text-center mb-4 md:text-4xl text-2xl font-semibold'>Add New Book</h1>
        <form 
        onSubmit={handleSubmit(onSubmit)}
        >
            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">Book Name</label>
                <input
                    type="text"
                    name="name"
                    className="w-full p-2 border rounded-md"
                    {...register('name', 
                    // { required: true }
                    )}
                />
            </div>

            <div className='flex gap-5 flex-col md:flex-row'>

                <div className="mb-4 flex-1">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Book Category</label>
                    <select
                        name="category"
                        className="w-full p-2 border rounded-md"
                        {...register('category', 
                        // { required: true }
                        )}
                    >
                        <option value="">Select</option>
                        <option value="breakfast">Mystery</option>
                        <option value="lunch">Sci-Fi</option>
                        <option value="dinner">Fantasy</option>
                        <option value="dinner">Fiction</option>
                        <option value="dinner">Thriller</option>
                        <option value="dinner">Comics</option>
                        <option value="dinner">Others</option>
                    </select>
                </div>

                <div className="mb-4  flex-1">
                    <label className=" text-gray-600 text-sm font-semibold mb-2">Book Cover</label>
                    <input
                        
                        type="file"
                        name="image"
                        className="w-full p-2 border rounded-md"
                        {...register('image', 
                        // { required: true }
                        )}
                    />
                </div>

                <div className="mb-4  flex-1">
                    <label className=" text-gray-600 text-sm font-semibold mb-2">Author Image</label>
                    <input
                        type="file"
                        name="authorImage"
                        className="w-full p-2 border rounded-md"
                        {...register('authorImage', 
                        // { required: true }
                        )}
                    />
                </div>

            </div>

            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">Book Details</label>
                <textarea
                    name="bookDetails"
                    className="w-full p-2 border rounded-md"
                    {...register('bookDetails', 
                    // { required: true }
                    )}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">Book Overview</label>
                <textarea
                    name="description"
                    className="w-full p-2 border rounded-md"
                    {...register('description', 
                    // { required: true }
                    )}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">Author Overview</label>
                <textarea
                    name="authorDetails"
                    className="w-full p-2 border rounded-md"
                    {...register('authorDetails', 
                    // { required: true }
                    )}
                />
            </div>

            <div className='flex gap-5 md:flex-row flex-col'>
                <div className="mb-4 flex-1">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Rating</label>
                    <input
                        step='any'
                        type="number"
                        name="rating"
                        className="w-full p-2 border rounded-md"
                        {...register('rating', 
                        // { required: true }
                        )}
                    />
                </div>

                <div className="mb-4 flex-1">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">Publishing Time/Date</label>
                    <input
                        type="datetime-local"
                        name="publishingTime"
                        className="w-full p-2 border rounded-md"
                        {...register('publishingTime', 
                        // { required: true }
                        )}
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">Author Name</label>
                <input
                    type="text"
                    name="authorName"
                    className="w-full p-2 border rounded-md"
                    {...register('authorName', 
                    // { required: true }
                    )}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">Editor Name</label>
                <input
                    type="text"
                    name="editor"
                    className="w-full p-2 border rounded-md"
                    {...register('editor', 
                    // { required: true }
                    )}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">Language</label>
                <input
                    type="text"
                    name="language"
                    className="w-full p-2 border rounded-md"
                    {...register('language', 
                    // { required: true }
                    )}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-semibold mb-2">Paperback</label>
                <input
                    type="text"
                    name="paperback"
                    className="w-full p-2 border rounded-md"
                    {...register('paperback', 
                    // { required: true }
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