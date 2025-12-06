
// Function to show letters for Qilla
function showLetters(student) {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('photos').classList.add('hidden');
    document.getElementById(`letters-${student}`).classList.remove('hidden');
}

// Function to show individual letter
function showLetter(letterId) {
    const contentDiv = document.getElementById(`letter-content-${letterId.split('-')[0]}`);
    let content = '';

    // Template content for letters
    const letters = {
        'qilla-joan': 'Hai Qilla…\nTerima kasih sudah berjuang bareng selama 1 tahun ini.\nKita mulai dari nol, jatuh bangun bareng, capek bareng, bahkan burnout pun bareng…\nTapi lihat kita sekarang, kamu hebat banget! Aku bangga sama kamu.\n\nSemoga semua ilmu di sini bisa jadi bekal terbaik buat masa depanmu.\nMaaf kalau selama ini ada salah kata atau sikap ya…\nTetap semangat kuliahnya, dan terima kasih sudah ikut mewarnai perjalanan Digital Marketing di 2025 ❤️pokoknya bapak love you aku paling ga bisa kalau ada seseorang yang istimewa pergi dari dekat ku alamak sedih nyoooo',
        'qilla-ulfa': 'Syauqilla <3\n\nHai adik cantik\nSelamat yaa atas perjalanan yang kamu tempuh disini sudah usai..\nBanyak sekali rasa yang tercipta selama kamu disini. Mulai dari rasa senang, sedih, marah, hampa, kosong dan mungkin banyak rasa lagi yang kamu lalui..\nKurang lebih tiga ratus tiga puluh hari kamu menjalani hari disini dengan ciri khas yang seringkali menggilitikku ataupun yang lain\nTerima kasih yaa, sudah melengkapi ruang kita..\nTerima kasih juga bisa jadi pribadi yang selalu memperbaiki diri di kondisi apapun.\nMaaf ya kalau peranku di kamu kurang begitu maksimal, tapi aku harap kamu bisa mengambil sisi baik dari aku yaa, siapa tau di kedepannya kamu akan bertemu dengan orang seperti aku..\n\nSemoga banyak harapan dan doa baik yang satu persatu bisa terwujud yaa, see u on top Syauqillaa',
        'qilla-lya': 'Killa Terima kasih untuk 1 Tahun PKLnya \nSudah membersamai suka dan duka digital marketing ini \nSudah menjadi tim yang solid! Kalian keren... \nSemoga ilmu-ilmu yang sudah kalian dapatkan disini bisa bermanfaat kedepannya ya! \na.k.a KOL Killa  (Cihuy..minta ratecardnya dong) \n\nMaaf ya kalau 1 Tahun ini banyak kesalahan yang disengaja atau nggak, yang menyakiti hati dan perkataan. Semoga dibukakan pintu maaf yang sebesar*nya 🥹🥹 . Maafkan diriku yang kadang menjadi pembimbing >Galak<\n\nKejar & Gapai Cita-Citamu setinggi mungkin, ya! \nBahagia selalu untuk hidupmu dan mimpimu..',
        'qilla-abbina': 'Hai Qilla\nKamu sudah hebat udah nglewatin masa-masa ini bersama kami, kita udah buat banyak kenangan bersama semoga ini bisa jadi salah satu masa yang pernah kamu ingat, kami senang bisa dapet teman, sahabat, maupun partner kerja seperti kamu, terima kasih banyak Qilla atas senyumanmu, tawamu, tangismu, sampai semua yang telah kamu berikan ke kita, kami ikut senang kamu bisa terus melanjutkan ke lingkungan yang baru\n\nsemangat terus yaa, raih impian kamu!! jangan sampai pingsan lagi, nanti bingung gendongnya gimana😭',
        'qilla-iga': 'mba killa, jujurrr aku sedih banget waktu aku tau kmu udah mau selese pkl tapi aku seneng banget bisa kenal sama kmu meskipun cmn 2 minggu aja. seneng bgt ketemu orang yg bisa diajak ganyeng" an & encuk encukan (kok bisa tau jokesnya samaan), see u on top ya mba killa. semoga selalu dilancarkan apa yg kmu mau. \n\nahhh terharu bgt aku ngetik ini, akuu gamau kmu selese pkl. Knp sih cmn dikasi waktu 2 minggu ajaa. babayyy killa.. sayangg banyak banyakkkk😞\n\nsukses selalu untuk kamuuu🥺🫶',
        'evant-joan': 'Halo Evant!\nTerima kasih sudah bareng kita 1 tahun ini, dari nol sampai sekeren sekarang.\nKamu luar biasa banget bro!\n\nSemoga makin sukses, makin jis jos,\ndan komunikasinya ditingkatkan ya…\nbiar istri anime kamu makin bangga 🤣\n\nTetap semangat kuliahnya, Van!\nThanks sudah jadi bagian penting perjalanan Digital Marketing 2025! 🚀✨',
        'evant-ulfa': 'Hai Evant\nSelamat buat kamu yang lambat laun mau terbuka dengan kami, yang mau ikut berkembang bersama kami, mau mencoba hal baru yang indah bersama kami, kami senang bisa dapet seseorang yang mau berkembang dan mau belajar bersama, dengan kita selalu bersama, rasanya begitu lengkap satu sama lainnya, terima kasih Evant kamu hebat hingga segala apapun yang telah kamu usahakan, kami dukung kamu untuk terus semangat melanjutkan ke tempat yang bisa membawamu bertumbuh\n\njangan pantang menyerah yaa, penuhi capaianmu! Ungkapkan kata-katamu sebagai bentuk mengeksresikan dirimu',
        'evant-lya': 'Evant Terima kasih untuk 1 Tahun PKLnya \nSudah membersamai suka dan duka digital marketing ini \nSudah menjadi tim yang solid! Kalian keren... \nSemoga ilmu-ilmu yang sudah kalian dapatkan disini bisa bermanfaat kedepannya ya! \nSiap jadi illustrator atau Programer ganteng idaman ky mas Johan WKAKAKAKkk \n\nMaaf ya kalau 1 Tahun ini banyak kesalahan yang disengaja atau nggak, yang menyakiti hati dan perkataan. Semoga dibukakan pintu maaf yang sebesar*nya 🥹🥹 . Maafkan diriku yang kadang menjadi pembimbing >Galak<\n\nKejar & Gapai Cita-Citamu setinggi mungkin, ya! \nBahagia selalu untuk hidupmu dan mimpimu..',
        'evant-abbina': 'Hai Evant\nSelamat buat kamu yang lambat laun mau terbuka dengan kami, yang mau ikut berkembang bersama kami, mau mencoba hal baru yang indah bersama kami, kami senang bisa dapet seseorang yang mau berkembang dan mau belajar bersama, dengan kita selalu bersama, rasanya begitu lengkap satu sama lainnya, terima kasih Evant kamu hebat hingga segala apapun yang telah kamu usahakan, kami dukung kamu untuk terus semangat melanjutkan ke tempat yang bisa membawamu bertumbuh\n\njangan pantang menyerah yaa, penuhi capaianmu! Ungkapkan kata-katamu sebagai bentuk mengeksresikan dirimu',
        'evant-iga': 'mas evant, orang yg pendiem dan gabanyak bicaraa. Makasih udah banyak bantu aku yg sering minta file ini yaa, semoga dilancarkan selalu apa yg kmu inginkan. sukses selalu yaa buat kmuu🙌🙌✨✨'
    };

    content = letters[letterId] || 'Letter content not found.';
    contentDiv.innerHTML = `<p>${content}</p>`;
}

// Function to go back to intro
function backToIntro() {
    document.getElementById('intro').classList.remove('hidden');
    document.getElementById('photos').classList.remove('hidden');
    document.getElementById('letters-qilla').classList.add('hidden');
    document.getElementById('letters-evant').classList.add('hidden');
    document.getElementById('photo-desc').classList.add('hidden');
}

// Function to show photo description
function showPhotoDesc(photoId) {
    const descDiv = document.getElementById('photo-desc');
    let desc = '';

    // Placeholder descriptions for photos
    const descriptions = {
        'photo1': 'This is a moment from our 1-year recap: [Placeholder description for photo 1]',
        'photo2': 'This is a moment from our 1-year recap: [Placeholder description for photo 2]'
    };

    desc = descriptions[photoId] || 'Description not found.';
    descDiv.innerHTML = `<p>${desc}</p>`;
    descDiv.classList.remove('hidden');
}
