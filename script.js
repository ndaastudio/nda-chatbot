function chatMasuk(txtMasuk) {
    return `<div class="d-flex justify-content-start mb-10">
    <div class="d-flex flex-column align-items-start">
    <div class="d-flex align-items-center mb-2">
    <div class="symbol symbol-35px symbol-circle">
    <img alt="Pic" src="assets/media/Logo_Bot.png"/>
    </div>
    <div class="ms-3">
    <a class="fs-5 fw-bold text-primary-900 text-hover-primary me-1">Nda ChatBot</a>
    </div>
    </div>
    <div class="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">${txtMasuk}</div>
    </div>
    </div>`
}

function chatKeluar(txtKeluar) {
    return `<div class="d-flex justify-content-end mb-10">
    <div class="d-flex flex-column align-items-end">
    <div class="d-flex align-items-center mb-2">
    <div class="me-3">
    <a class="fs-5 fw-bold text-primary-900 text-hover-primary ms-1">Aprimivi Manda</a>
    </div>
    <div class="symbol symbol-35px symbol-circle">
    <img alt="Pic" src="assets/media/Foto_Saya.jpeg" />
    </div>
    </div>
    <div class="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">${txtKeluar}</div>
    </div>
    </div>`
}

const keyChatUser = [
        'Halo',
        'Hai',
        'Kamu siapa',
        'Hari ini tanggal berapa',
        'Kamu ganteng',
        'Wow',
        'Salah',
        'Lagi apa',
        'Keren',
        'Sayang'
    ];

const valueResponseBot = [
        'Halo juga!',
        'Iya, ada yang bisa bot bantu?',
        'Aku adalah bot yang diprogram oleh @ndaastudio. Aku disini siap menemani mu!',
        'Hari ini adalah tanggal ' + new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
        'Makasih, tapi aku hanyalah bot. Gender ku saja aku tidak tahu. Yang ganteng itu sudah pasti @ndaastudio :v',
        'Hehehe :D',
        'Hmm, maaf. Aku sebagai bot masih butuh banyak belajar dari manusia :(',
        'Lagi nemenin kamu ngobrol disini, hehehe :)',
        'Terimakasih :)',
        'Iyaaa sayang kuu :)'
    ];

document.getElementById("inputChat").addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        document.getElementById("btnKirim").click();
    }
});

document.getElementById("btnKirim").addEventListener("click", function(){
    let isiChat = document.getElementById("inputChat").value;

    if (isiChat !== '') {
        document.getElementById("bgChat").innerHTML += chatKeluar(isiChat);
        document.getElementById("inputChat").value = '';
        document.getElementById("bgChat").scrollTop = parseInt(document.getElementById("bgChat").scrollHeight);
        for (i = 0; i < valueResponseBot.length; i++) {
            if (isiChat.toLowerCase().includes(keyChatUser[i].toLowerCase())) {
                const indexResponseBot = i;
                document.getElementById("botMengetik").classList.remove("d-none");
                setTimeout(() => {
                    document.getElementById("bgChat").innerHTML += chatMasuk(valueResponseBot[indexResponseBot]);
                    document.getElementById("bgChat").scrollTop = parseInt(document.getElementById("bgChat").scrollHeight);
                    document.getElementById("botMengetik").classList.add("d-none");
                }, 2500);
            }
        }
    }

});