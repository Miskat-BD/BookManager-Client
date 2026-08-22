import BookDelete from "@/components/ui/BookDelete";
import EditBook from "@/components/ui/EditBook";
import { getBooks } from "@/lib/books";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const ManageBooksPage = async () => {
    const data = await getBooks();
    const books = data?.data || [];

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Manage Books
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Manage all books from here.
                    </p>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">

                            {/* Table Head */}
                            <thead className="bg-gray-100 border-b">
                                <tr>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        #
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Book
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Description
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Price
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="divide-y divide-gray-200">

                                {books.map((book, index) => (
                                    <tr
                                        key={book.id}
                                        className="hover:bg-gray-50 transition"
                                    >

                                        {/* Number */}
                                        <td className="px-6 py-5 text-gray-500">
                                            {index + 1}
                                        </td>

                                        {/* Book */}
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-4">

                                                {book.image ? (
                                                    <img
                                                        src={book.image}
                                                        alt={book.name || "Book"}
                                                        className="w-14 h-20 object-cover rounded-lg border"
                                                    />
                                                ) : (
                                                    <div className="w-14 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
                                                        No Image
                                                    </div>
                                                )}

                                                <div>
                                                    <h2 className="font-semibold text-gray-900">
                                                        {book.name}
                                                    </h2>

                                                    <p className="text-xs text-gray-400 mt-1">
                                                        ID: {book.id}
                                                    </p>
                                                </div>

                                            </div>
                                        </td>

                                        {/* Description */}
                                        <td className="px-6 py-5 max-w-md">
                                            <p className="text-sm text-gray-600 line-clamp-2">
                                                {book.description}
                                            </p>
                                        </td>

                                        {/* Price */}
                                        <td className="px-6 py-5">
                                            <span className="font-semibold text-blue-600">
                                                ৳{book.price}
                                            </span>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">

                                                {/* Edit */}
                                                <EditBook book={book}/>

                                                {/* Delete */}
                                                <BookDelete book={book} />
                                            </div>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>
                    </div>

                    {/* No Books */}
                    {books.length === 0 && (
                        <div className="py-16 text-center">
                            <p className="text-gray-500">
                                No books found.
                            </p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ManageBooksPage;