export async function searchMovie(search_data) {

    try {

        console.log('search_data: ' + search_data);

        const response = await fetch('http://localhost:3001/api/movie/search?search_text=' + search_data);

        return await response.json(); //***

        // console.log('Search Movie response: ' + await response);

    } catch (error) {
        return [];
    }

}

export async function getAllMovies() {

    try{
        //const response = await fetch('/api/users');
         const response = await fetch('http://localhost:3001/api/movie/all');
        //const response = await fetch('/api/movie/all');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createMovie(data) {
    try {
        // ส่งคำขอ POST ไปยัง API สำหรับสร้างภาพยนตร์ใหม่
        const response = await fetch('http://localhost:3001/api/movie/insert', {
            method: 'POST', // ใช้ Method POST
            headers: {
                'Content-Type': 'application/json' // ระบุว่า Body เป็น JSON
            },
            body: JSON.stringify({
                title: data.title,
                genre: data.genre,
                director: data.director,
                release_year: data.release_year
            }) // แปลงข้อมูลเป็น JSON
        });

        // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่
        if (!response.ok) {
            throw new Error('Failed to create movie');
        }

        // คืนค่าผลลัพธ์จากเซิร์ฟเวอร์
        return await response.json();
    } catch (error) {
        console.error('Error creating movie:', error);
        return { error: 'Failed to create movie' };
    }
}

