export const allBooks = async () =>{
    const res = await fetch("https://y-kappa-sage.vercel.app/books");

    return res.json();
}