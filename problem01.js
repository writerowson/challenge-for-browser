
// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। 


// my key
const key = '26014200-c8cd57a2c8600f178e14e8426'
// console.log(key)

const showBtn = (id) => {
    const inputFeild = document.getElementById('input-result')
    const inputText = inputFeild.value
    // console.log(inputText)
    const url = `https://pixabay.com/api/?key=${key}=${id}&image_type=photo&pretty=true`
    fetch(url)
        .then(res => res.json())
        .then(data => displayImage(data))
}

// const displayImage = (Images) => {
//     console.log(Images)
//     const displayImg = document.getElementById('showImg')
//     Images.hits.forEach((Image) => {
//         console.log(Image)
//     });
// }     -----or-----
// const displayImage = (Images) => {
//     const displayImg = document.getElementById('showImg')
//     const hits = Images.hits
//     hits.forEach((Image) => {
//         console.log(Image)
//     });
// }    -----or-----
const displayImage = ({ hits }) => {
    const displayImg = document.getElementById('showImg')
    hits.forEach((Image) => {
        let div = document.createElement('div')

        div.classList = "container col-lg-4"
        div.innerHTML = ` <img class="img-fluid img-thumbnail" onclick=selectItem(event,"${Image.webformatURL}") src="${Image.webformatURL}" alt="${Image.tags}">`
        console.log(div.classList)
        console.log(div.innerHTML)
        displayImg.appendChild(div)
    });
}

setTimeout(displayImage, 10000)