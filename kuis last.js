const link = "https://jsonplaceholder.typicode.com/users";
function tampil(){
    fetch(link).then(response => response.json()).then(data =>{
        console.log(data);
        const hasil = data;
        hasil.map((item) => {
            const nama = document.createElement("p");
            nama.src = item.name;
            nama.innerText = item.name
            const div = document.getElementById("data");
            div.appendChild(nama);
            const p = document.createElement("p")
            p.src = item.email
            p.innerText = item.email
            div.appendChild(p)
        })
    })
}
tampil();