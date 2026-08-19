const baseURL = process.env.BACKEND_API

export const getBooks = async () => {
    const res = await fetch(`${baseURL}/books`)
    const data = res.json()
    return data;
}