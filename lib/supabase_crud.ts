import supabase from "./supabase";

const TABLE_NAME = "users";


interface Users{
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
}

export async function getUsers() {
    const { data, error } = await supabase.from('users').select("*");
    if (error) {
        throw error;
    }
    return data;
}
export async function createUsers(user: Users) {
    const { data, error } = await supabase.from(TABLE_NAME).insert([user]);

    if (error) {
        throw error;
    }
    return data;
}