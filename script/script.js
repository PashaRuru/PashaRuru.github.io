
//--slick--//

$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



//--scroll reveal--//

  window.sr = ScrollReveal({
    distance: '20px',
    duration: 1500,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    reset: true
      // origin: "bottom",  // 起始位置
			// distance: "20px",  // 距離
			// duration: 500,  // 動畫時間
			// delay: 0,  // 動畫延遲時間
			// rotate: { x: 0, y: 0, z: 0 },  // 旋轉角度
			// opacity: 0.2,  // 透明度
			// scale: 0.9, // 縮放比例
			// easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", // 動畫速度線
			// container: window.document.documentElement, // 外層
			// mobile: true, // 支援行動裝置
			// reset: true, // 每次都啟動動畫
			// useDelay: "always", // 延遲動畫次數
			// viewFactor: 0.2, // 當該物件在可視範圍內，則顯示此物件(0.2表示可視範圍20%)
			// viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, // 當外層有設定間隔造成偏移，則請設定在此維持精準度
			// beforeReveal: function (domEl) { console.log(1) }, // 當啟動前，則執行此函式
			// beforeReset: function (domEl) {console.log(2) }, // 當重啟前，則執行此函式
			// afterReveal: function (domEl) {console.log(3) }, // 當啟動後，則執行此函式
			// afterReset: function (domEl) {console.log(4) } // 當重啟後，則執行此函式
		});

  sr.reveal('.work_text_area', { origin:'top' });
  sr.reveal('.work_data', { origin:'left' });
  sr.reveal('.work_team', { origin:'right' });
  sr.reveal('.work_image_box',{ origin:'bottom' });
  sr.reveal('.related_title', { origin:'top' }); 
  sr.reveal('.related_work_slick', { origin:'top' }); 