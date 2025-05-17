    const canvas = document.getElementById('rain-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    const drops = [];
    const dropCount = 300;

    for (let i = 0; i < dropCount; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 4 + 4
      });
    }

    function drawRain() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(174,194,224,0.5)';
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';

      for (let i = 0; i < dropCount; i++) {
        let d = drops[i];
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.length);
        ctx.stroke();
        d.y += d.speed;
        if (d.y > canvas.height) {
          d.y = -d.length;
          d.x = Math.random() * canvas.width;
        }
      }
      requestAnimationFrame(drawRain);
    }

    drawRain();