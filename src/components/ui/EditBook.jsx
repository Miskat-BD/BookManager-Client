"use client";

import { updateBook } from "@/lib/books";
import { Envelope } from "@gravity-ui/icons";
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const EditBook = ({ book }) => {

    const router = useRouter()
    const handleEdit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const updatedData = {
            name: formData.get("name"),
            description: formData.get("description"),
            image: formData.get("image"),
            price: formData.get("price"),
        };

        console.log("Updated Data:", updatedData);

        const result = await updateBook(book.id, updatedData);
        router.push('/manage-books')

        console.log("Update Result:", result);

        if (result?.message === "Data is Updated") {
            alert("Book updated successfully!");
        }
    };

    return (
        <Modal>
            <Button variant="secondary">
                Edit
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">

                        <Modal.CloseTrigger />

                        <Modal.Header>

                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>

                            <Modal.Heading>
                                Edit Book
                            </Modal.Heading>

                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Update your book information.
                            </p>

                        </Modal.Header>

                        <Modal.Body className="p-6">

                            <Surface variant="default">

                                <form
                                    onSubmit={handleEdit}
                                    className="flex flex-col gap-4"
                                >

                                    {/* Name */}
                                    <TextField
                                        className="w-full"
                                        name="name"
                                        type="text"
                                        variant="secondary"
                                        defaultValue={book?.name || ""}
                                    >
                                        <Label>Book Name</Label>

                                        <Input
                                            placeholder="Enter book name"
                                        />
                                    </TextField>


                                    {/* Description */}
                                    <TextField
                                        className="w-full"
                                        name="description"
                                        type="text"
                                        variant="secondary"
                                        defaultValue={book?.description || ""}
                                    >
                                        <Label>Description</Label>

                                        <Input
                                            placeholder="Enter book description"
                                        />
                                    </TextField>


                                    {/* Image */}
                                    <TextField
                                        className="w-full"
                                        name="image"
                                        type="url"
                                        variant="secondary"
                                        defaultValue={book?.image || ""}
                                    >
                                        <Label>Image URL</Label>

                                        <Input
                                            placeholder="Enter image URL"
                                        />
                                    </TextField>


                                    {/* Price */}
                                    <TextField
                                        className="w-full"
                                        name="price"
                                        type="number"
                                        variant="secondary"
                                        defaultValue={book?.price || ""}
                                    >
                                        <Label>Price</Label>

                                        <Input
                                            placeholder="Enter price"
                                        />
                                    </TextField>


                                    {/* Buttons */}
                                    <Modal.Footer>

                                        <Button
                                            slot="close"
                                            variant="secondary"
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            type="submit"
                                            slot="close"
                                        >
                                            Update Book
                                        </Button>

                                    </Modal.Footer>

                                </form>

                            </Surface>

                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditBook;