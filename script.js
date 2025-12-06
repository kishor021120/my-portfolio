function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}




------------------------------------------
 const form = document.getElementById('contact-form');
        const status = document.createElement('div');
        status.id = 'status';
        form.appendChild(status);

        async function handleSubmit(event) {
            event.preventDefault();
            const data = new FormData(event.target);
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = 'Thanks for your submission!';
                    form.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data['errors'].map(error => error['message']).join(', ');
                        } else {
                            status.innerHTML = 'Oops! There was a problem submitting your form';
                        }
                    });
                }
            }).catch(error => {
                status.innerHTML = 'Oops! There was a problem submitting your form';
            });
        }
        form.action = 'https://formspree.io/f/xqayezev'; // Replace with your Formspree form ID
        form.method = 'POST';
        form.addEventListener('submit', handleSubmit);

// media query
        



// scroll Bar

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

 const menuIcon = document.getElementById('menu-icon');
  const navUl = document.querySelector('.Nav-bar ul');
  menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });


  HTML CSS JSResult Skip Results Iframe
EDIT ON
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");
const menuToggle = document.querySelector(".menu .button");
menuToggle.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuList.classList.toggle("active");
});




// user cannot access my code



window.onload = function() {

document.addEventListener("contextmenu", function(e){

e.preventDefault();

alert("action blocked");

}, false);

document.addEventListener("keydown", function(e) {

//document.onkeydown = function(e) {

// "I" key

if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {

disabledEvent(e);

alert("action blocked");

}

// "J" key

if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {

disabledEvent(e);

alert("action blocked");

}

// "S" key + macOS

if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {

disabledEvent(e);

alert("action blocked");

}

// "U" key

if (e.ctrlKey && e.keyCode == 85) {

disabledEvent(e);

alert("action blocked");

}

// "F12" key

if (event.keyCode == 123) {

disabledEvent(e);

alert("action blocked");

}

}, false);

function disabledEvent(e){

if (e.stopPropagation){

e.stopPropagation();

} else if (window.event){

window.event.cancelBubble = true;

}

e.preventDefault();

return false;

}

};