"use server";

export async function testServerAction() {
  console.log("ini action dari server yang dipanggil oleh client"); 
  // ketika button di page.tsx di klik maka
  // pesan ini akan muncul di terminal
}

export async function submitBlog(
    previousState: Record<string, string>,          // Menyimpan state sebelumnya dari form submission.
    formData: unknown                               // formData : Data yang dikirimkan oleh form
)   {
    try {
      const response = await fetch("pokeapi");      // Mengambil data dari API
  
      const data = await response.json();           // Mengubah response ke JSON
  
      return data;                                  // Mengembalikan hasil data
    } catch (error) {                               // Menangani error jika terjadi
      console.log(error);
    }
}