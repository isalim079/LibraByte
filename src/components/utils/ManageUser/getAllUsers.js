
export const getAllUsers = async () =>{
    const res = await fetch("https://y-kappa-sage.vercel.app/users/v1");

    return res.json();
}