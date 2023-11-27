import supabase from "./supabase"

export async function getCabins() {

    let { data, error } = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        console.error(error)
        throw new Error("cabins not loaded")
    }
    return data
}