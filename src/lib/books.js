const baseURL = process.env.NEXT_PUBLIC_BACKEND_API

export const getBooks = async () => {
    const res = await fetch(`${baseURL}/books`)
    const data = await res.json()
    return data;
}

export const addBook = async (data) => {
    const res = await fetch(`${baseURL}/books`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return res.json()
}