function submitData(name, email){
    const bioData = {
        name : name,
        email : email
    }
    return fetch("http://localhost:3000/users", {
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(bioData)
    })
    .then(res => res.json())
    .then(function(data){document.body.innerHTML = data.id})
    .catch(function(error){
        alert("Bad request");
        document.body.innerHTML += error.message
    })
}
