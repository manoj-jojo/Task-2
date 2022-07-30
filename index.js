// To Search Blog by ID

function searchBlog(url){
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        $(".details").text("Title: "+ data.title+" Author: "+ data.author+" Details: "+ data.details);
    });
}


$(".search-button").click(function() {
    const iD = document.getElementById('blogID').value
    searchBlog("https://adg-rec-task-1.herokuapp.com/getBlog/"+iD)
    console.log("Clicked");
    console.log(iD);
});


// To Get All Blogs


function getAllBlogs(url){
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        // $(".details").text("Title: "+ data.title+" Author: "+ data.author+" Details: "+ data.details);
        $(".details").text(data.title)
        console.log(data);
    });
}


$(".getAll-btn").click(function() {
    getAllBlogs("https://adg-rec-task-1.herokuapp.com/");
    console.log("Clicked")
});


// To Create A Blog


function createBlog(url){
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value
    var det = document.getElementById('det').value
    params = {
    method: "post",
    headers: {
        "Content-Type": "application/json",
    },
    body:JSON.stringify({
        "title": title,
        "author": author,
        "details": det 
    }),

    };

    fetch(url, params)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
}


$(".createBlog-btn").click(function() {
    var title = document.getElementById("title");
    var author = document.getElementById("author");
    var details = document.getElementById("det");
    var but = document.getElementById("go-button");
    title.classList.toggle("show");
    author.classList.toggle("show");
    details.classList.toggle("show");
    but.classList.toggle("show");
    $("#go-button").click(function(){
        createBlog("https://adg-rec-task-1.herokuapp.com/createBlog");
        title.classList.toggle("show");
        author.classList.toggle("show");
        details.classList.toggle("show");
        but.classList.toggle("show");
    })
});

// To Delete A Blog

function deleteBlog(url){
    fetch(url, { method: "DELETE"})
    .then((res) => {
    return res.json();
    })
    .then((data) => {
        console. log(data);
    });
}

$(".deleteBlog-btn").click(function() {
    var id = document.getElementById("iD");
    var del = document.getElementById("delete");
    id.classList.toggle("show");
    del.classList.toggle("show");
    $("#delete").click(function(){
        const iD = document.getElementById('iD').value;
        deleteBlog("https://adg-rec-task-1.herokuapp.com/deleteBlog/"+iD);
        id.classList.toggle("show");
        del.classList.toggle("show");
    })
    


});



function updateBlog(url){
    fetch(url,{
        method: "PATCH",
        body: JSON.stringify({
        title: "newtitle",
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        });
}