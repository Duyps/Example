

/*gsap.registerPlugin(ScrollTrigger) ;
gsap.to('.c', {
    scrollTrigger: {
        trigger: '.c',
        toggleActions: "play pause reverse none"
    },
    rotation: 360,
    duration: 2,
    x: 400
});
let animation = gsap.to(".element", { duration: 2, x: 100 });

animation.pause();
animation.play();
animation.reverse();
animation.seek(1);         // Đi đến giây thứ 1 trong hoạt ảnh
animation.progress(0.5);   // Đi đến giữa hoạt ảnh
animation.timeScale(2);    // Tăng tốc độ phát gấp đôi*/
// Chọn tất cả các phần tử có class "box" và tạo hoạt ảnh lần lượt cho từng phần tử
gsap.registerPlugin(ScrollTrigger);

gsap.to(".c", {
  x: 500,
  duration: 10,
  rotation: 360,
  scrollTrigger: {
    trigger: ".c",
    start: "top 80%", // Bắt đầu hoạt ảnh khi phần tử chạm vào 80% từ đỉnh màn hình
    end: "bottom 20%", // Kết thúc hoạt ảnh khi phần tử chạm vào 20% từ đáy màn hình
    scrub: true, // Liên kết hoạt ảnh với cuộn
    markers: true // Hiển thị các điểm bắt đầu và kết thúc để debug
  }
});

gsap.registerPlugin(TextPlugin);

gsap.to(".text-element", {
  duration: 2,
  text: "Hello, world!", // Văn bản sẽ được gõ ra theo thời gian
  ease: "none"
});




