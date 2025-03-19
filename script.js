let author  = document.querySelector("#quoteContainer h5") 
let content = document.querySelector("#quoteContainer h1")
let nextQuote = document.querySelector("#nextQuote")
let copybutton = document.querySelector("#copybutton")
let twitterShare = document.querySelector("#twitterShare")
let quoteContainer = document.querySelector("#quoteContainer")
let exportImage = document.querySelector("#exportImage")


// author.style.mixBlendMode = "difference" 
const natureImageUrls = [
    'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg',
    'https://images.pexels.com/photos/34950/pexels-photo.jpg',
    'https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg',
    'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
    'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg',
    // 'https://images.pexels.com/photos/349758/pexels-photo-349758.jpeg',
    // 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
    'https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg',
    'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
    'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg',
    'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    'https://images.pexels.com/photos/164025/pexels-photo-164025.jpeg',
    'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg',
    'https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg',
    'https://images.pexels.com/photos/34950/pexels-photo.jpg',
    'https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg',
    'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
    'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg',
    // 'https://images.pexels.com/photos/349758/pexels-photo-349758.jpeg',
    'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
    'https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg',
    'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
    'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg',
    'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    'https://images.pexels.com/photos/164025/pexels-photo-164025.jpeg',
    'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg',
    'https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg',
    'https://images.pexels.com/photos/34950/pexels-photo.jpg',
    'https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg',
    'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg'
  ];




function getQuote(){
    url = "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    url2 = "https://source.unsplash.com/random"

    let randomNumber = Math.floor((Math.random() * 20))
    console.log(randomNumber)
    quoteContainer.style.backgroundImage  =   `url(${natureImageUrls[randomNumber]})`
    console.log(natureImageUrls[randomNumber]);
    
        quoteContainer.style.backgroundSize = "cover"
        quoteContainer.style.backgroundPosition = "center"
    fetch(url)
    .then(res => res.json())
    .then(resData => {
        author.textContent = resData.data.author
        content.textContent = resData.data.content
    })

    
    // fetch('https://picsum.photos/200/300')
    // .then(response => {
    //     quoteContainer.style.backgroundImage  =   `url(${response.url})`
    //     quoteContainer.style.backgroundSize = "cover"
    //     quoteContainer.style.backgroundPosition = "center"
    // }
    // );
    
        
}

nextQuote.addEventListener('click', getQuote)


copybutton.addEventListener('click', function(){
    let copyText = `${content.textContent} \n ${author.textContent}`
    navigator.clipboard.writeText(copyText).then(alert("text Copied"))
})

exportImage.addEventListener('click', function(){
    domtoimage.toPng(quoteContainer).then(res => {
        let img = res
        const link = document.createElement('a')
        link.href = img
        link.download = "quote.png"
        link.click()
    })
    
})

twitterShare.addEventListener('click', function(){
    let shareText = encodeURIComponent(`${content.textContent}\n${author.textContent}`)
    window.open("https://twitter.com/intent/tweet?text=" + shareText)

})


getQuote()

