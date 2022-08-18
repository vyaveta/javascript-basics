var library = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];
 for(let a in library){
    if(library[a].readingStatus===true){
        console.log("You have already read the book "+library[a].title+ " by "+library[a].author)
    }
    else
    console.log("You have not yet read the book "+library[a].title+" by "+library[a].author)
 }