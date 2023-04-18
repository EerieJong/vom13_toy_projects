// Header Sticky Effect
const header = document.querySelector('#header');

const stickyHeader = () => {
  const scry = window.scrollY;
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

window.addEventListener('scroll', stickyHeader);

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-btn');

toggleMobileBtn = (e) => {
  const target = e.currentTarget; // 2. 함수가 실행되면 현재 클릭한 지점의 요소를 target변수에 저장
  // console.log(target); // 3. target 변수 출력
  target.classList.toggle('active');

  if (target.classList.contains('active') /* active가 있다면 */) {
    target.classList.remove('not-active'); /* not-active를 없애준다 */
  } else {
    target.classList.add('not-active'); /* not-active를 추가해준다 */
  }
};

mobileBtn.addEventListener('click', toggleMobileBtn); // 1. 클릭했을때 toggleMobileBtn 함수 실행

function fitHeight() {
  const originalHeight = $('#h').height();
  $('#fh').height(originalHeight);
}

fitHeight();

$(window).on('resize', function () {
  fitHeight();
});

// $(document).ajaxComplete(function () {
//   const ptexts = $('.product-text p');

//   ptexts.each(function (i, item) {
//     // console.log($(item).text().length);
//     const tlength = $(item).text();
//     function shortenText() {
//       const w = $(window).width();
//       let sliceLength;

//       if (w < 900) {
//         sliceLength = tlength.slice(0, 60) + '...';
//         $(item).text(sliceLength);
//       } else if (w > 901) {
//         sliceLength = tlength.slice(0, 200);
//         $(item).text(sliceLength);
//       }
//     }
//     shortenText();

//     $(window).on('resize', function () {
//       shortenText();
//     });
//   });
// });

$(document).ajaxComplete(function () {
  const productWidth = $('.product-item').width();
  $('.product-item img').height(productWidth);

  const ptexts = $('.product-text p');

  ptexts.each(function (i, item) {
    // console.log($(item).text().length);
    const tlength = $(item).text();
    function shortenText() {
      const w = $(window).width();
      let sliceLength;

      if (w < 900) {
        sliceLength = tlength.slice(0, 60) + '...';
        $(item).text(sliceLength);
      } else if (w > 901) {
        sliceLength = tlength.slice(0, 200);
        $(item).text(sliceLength);
      }
    }
    shortenText();

    $(window).on('resize', function () {
      shortenText();
    });
  });
});

// activate to top button
const toTop = document.querySelector('.top-btn');
window.addEventListener('scroll', function () {
  const scrY = window.scrollY;
  if (scrY > 50) {
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});

toTop.addEventListener('click', function () {
  window.scrollTo(0, 0);
});
