
export const getAllUsers = async () =>{
    const res = await fetch("http://localhost:5000/users/v1");

    return res.json();
}