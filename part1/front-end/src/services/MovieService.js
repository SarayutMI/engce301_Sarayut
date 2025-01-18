export async function searchMovie(search_data) {
    try {
      console.log("search_data: " + search_data);
      const response = await fetch(
        "http://localhost:3001/api/movie/search?search_text=" + search_data
      );
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error searching movie: ", error);
      return [];
    }
  }
  
  export async function getAllMovies() {
    try {
      const response = await fetch("http://localhost:3001/api/movie/all");
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error getting all movies: ", error);
      return [];
    }
  }
  
  export async function createMovie(data) {
    try {
      const response = await fetch("http://localhost:3001/api/movie/insert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error creating movie: ", error);
      return [];
    }
  }