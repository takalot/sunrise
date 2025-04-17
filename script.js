// חישוב הדף היומי
async function calculateDafYomi() {
    try {
        // שליפת הנתונים מקובץ JSON
        const response = await fetch('data.json');
        const masechtot = await response.json();

        // תאריך ההתחלה של הדף היומי
        const startDate = new Date("2020-01-05");
        const currentDate = new Date();
        const daysPassed = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

        let totalDaf = 0;
        let dafYomi = "מחזור הושלם";

        // חישוב הדף היומי
        for (const masechet of masechtot) {
            totalDaf += masechet.total_pages;
            if (daysPassed < totalDaf) {
                const dafNumber = daysPassed - (totalDaf - masechet.total_pages) + 1;
                dafYomi = `${masechet.masechet_name} דף ${dafNumber}`;
                break;
            }
        }

        // הצגת הדף היומי
        document.getElementById('daily-daf').textContent = dafYomi;
    } catch (error) {
        console.error("Failed to load daf yomi data:", error);
        document.getElementById('daily-daf').textContent = "שגיאה בטעינת הנתונים";
    }
}

// קריאה לפונקציה בעת טעינת הדף
calculateDafYomi();