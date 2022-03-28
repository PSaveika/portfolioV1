    let calculateAngle = function(e, item, parent) {
        let dropShadowColor = `rgba(0, 0, 0, 0.3)`

        parent.classList.add('animated');
        // Get the x position relative to the mouse
        let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
        // Get the y position relative to the mouse
        let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

        // Calculate half the width and height
        let halfWidth  = item.getBoundingClientRect().width / 2;
        let halfHeight = item.getBoundingClientRect().height / 2;

        // Create an angle to change the depth
        let calcAngleX = (x - halfWidth) / 14;
        let calcAngleY = (y - halfHeight) / 18;
      
        // Container perspective.
        parent.style.perspective = `${halfWidth * 6}px`
        item.style.perspective = `${halfWidth * 6}px`

        // Container transform
        item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.02)`;
        

        // Shadow
        let calcShadowX = (x - halfWidth) / 3;
        let calcShadowY = (y - halfHeight) / 6;
        
        // Filter shadow
        item.style.filter = `drop-shadow(${-calcShadowX}px ${-calcShadowY}px 15px ${dropShadowColor})`;
    }

    document.querySelectorAll('.about-me-doing-box').forEach(function(item) {
        item.addEventListener('mouseenter', function(e) {
            calculateAngle(e, this.querySelector('.about-me-doing-inner'), this);
        });

        item.addEventListener('mousemove', function(e) {
            calculateAngle(e, this.querySelector('.about-me-doing-inner'), this);
        });

        item.addEventListener('mouseleave', function(e) {
            let dropShadowColor = `rgba(0, 0, 0, 0.3)`
            if(item.getAttribute('data-filter-color') !== null) {
                dropShadowColor = item.getAttribute('data-filter-color')
            }
            item.classList.remove('animated');
            item.querySelector('.about-me-doing-inner').style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
            item.querySelector('.about-me-doing-inner').style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
        });
    })