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

// export async function updateDesert(desert_uuid: string, desert: Desert) {
//     const { data, error } = await supabase
//         .from(TABLE_NAME)
//         .update(desert)
//         .match({ desert_uuid });

//     if (error) {
//         throw error;
//     }
//     return data;
// }

// export async function deleteDesert(desert_uuid: string) {
//     const { error } = await supabase
//         .from(TABLE_NAME)
//         .delete()
//         .match({ desert_uuid });

//     if (error) {
//         throw error;
//     }
// }