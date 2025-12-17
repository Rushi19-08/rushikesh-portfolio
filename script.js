// AOS Initialization
AOS.init({
    duration: 1000,
    once: true
  });
  
  // Scroll Progress Bar
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / height) * 100;
    document.getElementById("scroll-progress").style.width = progress + "%";
  });
  