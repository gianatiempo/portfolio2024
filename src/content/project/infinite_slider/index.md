---
title: 'Infinite Slider with CSS only'
description: 'Slider animation using only CSS'
date: 2024-06-30T03:00:00.000Z
cover: 'infinite_slider.jpg'
coverAlt: 'Screen capture of the completed functionality'
---

<section class='body'>
  <div class='main'>
    <div class="slider" style=" --width: 100px; --height: 50px; --quantity: 9; ">
      <div class="list">
        <div class="item" style="--position: 1"><img src="/project/infinite_slider/slider1_1.png" alt=""></div>
        <div class="item" style="--position: 2"><img src="/project/infinite_slider/slider1_2.png" alt=""></div>
        <div class="item" style="--position: 3"><img src="/project/infinite_slider/slider1_3.png" alt=""></div>
        <div class="item" style="--position: 4"><img src="/project/infinite_slider/slider1_4.png" alt=""></div>
        <div class="item" style="--position: 5"><img src="/project/infinite_slider/slider1_5.png" alt=""></div>
        <div class="item" style="--position: 6"><img src="/project/infinite_slider/slider1_6.png" alt=""></div>
        <div class="item" style="--position: 7"><img src="/project/infinite_slider/slider1_7.png" alt=""></div>
        <div class="item" style="--position: 8"><img src="/project/infinite_slider/slider1_8.png" alt=""></div>
        <div class="item" style="--position: 9"><img src="/project/infinite_slider/slider1_9.png" alt=""></div>
      </div>
    </div>
    <div class="slider" reverse="true" style=" --width: 200px; --height: 200px; --quantity: 9; ">
      <div class="list">
        <div class="item" style="--position: 1"><img src="/project/infinite_slider/slider2_1.png" alt=""></div>
        <div class="item" style="--position: 2"><img src="/project/infinite_slider/slider2_2.png" alt=""></div>
        <div class="item" style="--position: 3"><img src="/project/infinite_slider/slider2_3.png" alt=""></div>
        <div class="item" style="--position: 4"><img src="/project/infinite_slider/slider2_4.png" alt=""></div>
        <div class="item" style="--position: 5"><img src="/project/infinite_slider/slider2_5.png" alt=""></div>
        <div class="item" style="--position: 6"><img src="/project/infinite_slider/slider2_6.png" alt=""></div>
        <div class="item" style="--position: 7"><img src="/project/infinite_slider/slider2_7.png" alt=""></div>
        <div class="item" style="--position: 8"><img src="/project/infinite_slider/slider2_8.png" alt=""></div>
        <div class="item" style="--position: 9"><img src="/project/infinite_slider/slider2_9.png" alt=""></div>
      </div>
    </div>
  </div>
</section>

<style>
/* basic styles */
.body{ margin: 0; background-color: #888; width: min(1232px, 90vw); padding:50px 0; /* last 2 are to fix my own website styles */}
.main{ width: min(1232px, 90vw); margin: auto; }

/* slider initialization */
.slider{ width: 100%; height: var(--height); }
.slider .list{ display: flex; width: 100%; min-width: calc(var(--width) * var(--quantity)); }
.slider .list .item{ width: var(--width); height: var(--height); }
.slider .list .item img{ width: 100%; margin:0; /* margin is to fix my own website styles */ }

/* slider animation */
.slider .list{ position: relative; }
.slider .list .item{ position: absolute; left: 100%; animation: autoRun 10s linear infinite; }

@keyframes autoRun{
  from{ left: 100%; }
  to{ left: calc(var(--width) * -1); }
}

/* slider animation delay (for each image) */
.slider .list .item{ animation-delay: calc( (10s / var(--quantity)) * (var(--position) - 1) )!important; }

/* hide unanimated items and add gradient*/
.slider{ overflow: hidden; mask-image: linear-gradient( to right, transparent, #000 10% 90%, transparent ); }

/* slider pause and grayscale unhovered with transition*/
.slider .list .item{ transition: filter 0.5s; }
.slider:hover .item{ animation-play-state: paused!important; filter: grayscale(1); }
.slider .item:hover{ filter: grayscale(0); }

/* enble reverse animation */
.slider[reverse="true"] .item{ animation: reversePlay 10s linear infinite; }

@keyframes reversePlay{
  from{ left: calc(var(--width) * -1); }
  to{ left: 100%; }
} 
</style>
