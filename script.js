const hamburger=document.querySelector(".hamburger");
const navLinks=document.querySelector(".nav-links");
hamburger.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});

const form = document.getElementById('contactForm');
const notifikasi = document.getElementById('notif-sent');

form.addEventListener('submit', function(e){
    e.preventDefault(); //mencegah reload

    const data = new FormData(form);

    fetch('https://formsubmit.co/muhammadfaizniwansyah23@gmail.com', {
        method:'POST',
        body: data
    })
    .then(response =>{
        if(response.ok){
            notifikasi.style.visibility = "visible"; //tampilkan pesan notifikasi
            form.reset(); //reset form
            setTimeout(()=>{ 
                notifikasi.style.visibility = "hidden";
            }, 2000); //menghilangkan notif setelah 2s
        }else{
            alert("Terjadi kesalahan, mohon coba lagi.");
        }
        })
        .catch(error => {
            alert("Gagal mengirim: " + error.message);
    });
});