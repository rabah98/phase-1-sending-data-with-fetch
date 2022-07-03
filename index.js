function submitdata(name, email) {
    return fetch (" http://localhost:3000/users", {
        method: "post",
        headers: {
            "Content-Type": "apolication/json",
            "accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            Email: email,
        }),
    });

}
submitdata(rabah, merzoug);