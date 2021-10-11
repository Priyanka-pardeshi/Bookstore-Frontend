const bookData=[
    {
        "image":"/accests/harry.jpg",
        "title":"Harry Potter 1",
        "Auther":"J.K.Rolling",
        "Rating":4.5
    },
    {
        "image":"/accests/harry.jpg",
        "title":"Harry Potter 2",
        "Auther":"J.K.Rolling",
        "Rating":4.3
    },
    {
        "image":"/accests/harry.jpg",
        "title":"Harry Potter 3",
        "Auther":"J.K.Rolling",
        "Rating":4.4
    },
    {
        "image":"/accests/harry.jpg",
        "title":"Harry Potter 4",
        "Auther":"J.K.Rolling",
        "Rating":4.2
    }
]


document.getElementById("booklist").innerHTML=`
<h1> Number of books ${bookData.length} </h1>
${bookData.map(function(book){
    return `
    <div id="booklist" class="listbook">
        <div class="single-book">
            <div class="book-img">
                <img class="main-book" src=${book.image} alt="">
            </div>
            <div class="book-info">
                <p class="about-font">${book.title}</p>
                <p class="about-font">${book.Auther}</p>
                <div class="star" >
                    <p class="about-font"><span>☆${book.Rating}</span></p>
                </div>
            </div>
        </div>
    </div>        
    `
}).join('')}

`