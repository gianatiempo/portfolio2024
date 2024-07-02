---
title: '3D Slider with CSS only'
description: '3D Slider animation using only CSS'
date: 2024-07-01T03:00:00.000Z
cover: '3d_slider.jpg'
coverAlt: 'Screen capture of the completed functionality'
---

<section class='body'>
  <div class="banner">
    <div class="slider" style="--quantity: 10">
      <div class="item" style="--position: 1"><img src="/project/3d_slider/dragon_1.jpg" alt=""></div>
      <div class="item" style="--position: 2"><img src="/project/3d_slider/dragon_2.jpg" alt=""></div>
      <div class="item" style="--position: 3"><img src="/project/3d_slider/dragon_3.jpg" alt=""></div>
      <div class="item" style="--position: 4"><img src="/project/3d_slider/dragon_4.jpg" alt=""></div>
      <div class="item" style="--position: 5"><img src="/project/3d_slider/dragon_5.jpg" alt=""></div>
      <div class="item" style="--position: 6"><img src="/project/3d_slider/dragon_6.jpg" alt=""></div>
      <div class="item" style="--position: 7"><img src="/project/3d_slider/dragon_7.jpg" alt=""></div>
      <div class="item" style="--position: 8"><img src="/project/3d_slider/dragon_8.jpg" alt=""></div>
      <div class="item" style="--position: 9"><img src="/project/3d_slider/dragon_9.jpg" alt=""></div>
      <div class="item" style="--position: 10"><img src="/project/3d_slider/dragon_10.jpg" alt=""></div>
    </div>
</section>

<style>
/* basic styles */
.body {background-color: #888; width: min(1232px, 90vw); }

/* setting the banner */
.banner { width: 100%; height: 70vh; text-align: center; overflow: hidden; position: relative; }
.banner .slider { position: absolute; width: 200px; height: 250px; top: 10%; left: calc(50% - 100px); }
.banner .slider .item { position: absolute; inset: 0 0 0 0; }
.banner .slider .item img { width: 100%; height: 100%; object-fit: cover; }

/* 3d transformation */
.banner .slider { transform-style: preserve-3d; transform: perspective(1232px); animation: autoRun 30s linear infinite; }
.banner .slider .item { transform:  rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(480px); }

@keyframes autoRun{
  from{ transform: perspective(1232px) rotateX(-16deg) rotateY(0deg); }
  to{ transform: perspective(1232px) rotateX(-16deg) rotateY(360deg); }
}
</style>
