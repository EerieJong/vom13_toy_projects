const imgWrapper = document.querySelector('section');
console.log(imgWrapper);
let images = [];
for (let i = 0; i < 200; i++) {
  images += `<img src='img/pic${i}.jpg'>`;
}

// console.log(images);

imgWrapper.innerHTML = images;

imgWrapper.addEventListener('mousemove', function (e) {
  let x = e.offsetX;
  const screenW = document.body.offsetWidth;
  const imgTags = document.querySelectorAll('section img');

  imgTags.forEach((tag) => {
    tag.style.display = 'none';
  });

  const percent = Math.floor((x / screenW) * 200);
  // console.log(percent);

  imgTags[percent].style.display = 'block';
});

// 커서 : 10px
// 커서 : 1000px
// 브라우저 : 1000px

// (커서 / 브라우저) * 200
// 0.01 * 200
// 2
// 0.988 * 200
// 197.6
