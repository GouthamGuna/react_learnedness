const imgData = [
  { id: '316d4784-da7c-4e4c-afed-7d72995ddb9e', url: '/assets/img/hero-bg.jpg', className: '_6d4784-hero', altData: 'hero-background-avatar', width: '', height: '' },
  { id: 'dbd085e2-e77a-4d0e-90ef-e4399085c8b2', url: 'assets/img/profile-img.jpg', className: 'img-fluid', altData: 'about-hero-avatar', width: '', height: '' }
];

(function () {
  "use strict";

  const div = document.getElementById('header');
  div.innerHTML = `<i class="header-toggle d-xl-none bi bi-list"></i>
  <nav id="navmenu" class="navmenu">
    <ul>
      <li><a href="#hero" class="active"><i class="bi bi-house navicon"></i><span>Home</span></a></li>
      <li><a href="#about"><i class="bi bi-person navicon"></i><span>About</span></a></li>
      <li><a href="#resume"><i class="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
      <li><a href="#portfolio"><i class="bi bi-images navicon"></i><span>Portfolio</span></a></li>
      <li><a href="#contact"><i class="bi bi-envelope navicon"></i><span>Contact</span></a></li>
    </ul>
  </nav>`;

  textWrapper(document.getElementById('b223d418-058e-4cf2-801e-2977285e4c27'), 'Gowtham Sankar');

  imgData.forEach((e) => {
    let img = document.getElementById(e.id);
    appendImgElement(e.url, e.className, e.altData, img);
  })

  socialLinksAddOnLoad(document.getElementById('488a0f6a-d143-43e9-90f9-9bcb25000108'));
  contactDataLoader(document.getElementById('contact'));
  footerDataLoader(document.getElementById('footer'));

})();

function footerDataLoader(divId) {
  divId.innerHTML = `<div class="container">
        <h3 class="sitename" style="display: none;"></h3>
        <p style="display: none;"></p>
        <div class="social-links d-flex justify-content-center" style="display: none;"></div>
        <div class="container">
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/license/" target="_blank" rel="noreferrer">BootstrapMade</a>
          </div>
        </div>
      </div>`
}

function contactDataLoader(divId) {
  divId.innerHTML = `<div class="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <h4>
          Need to get in touch with me? Reach out at <a href="mailto:ggowthamsankar@gmail.com" target="_blank" rel="noreferrer"
            >ggowthamsankar@gmail.com</a
          > and I'll try to get back to you!
        </h4>
        <button id="hi-button"><a href="mailto:ggowthamsankar@gmail.com" target="_blank" rel="noreferrer"><img src="https://i.pinimg.com/originals/b9/37/12/b9371273ae94a946e92074d1b9696680.gif" width='50px' alt='Hi'><h3>Say hi</h3></a></button>
      </div>`;
}

function appendImgElement(filePath, classData, altData, divElement) {
  "use strict";

  fetch(filePath)
    .then((res) => res.blob())
    .then((blob) => handler(blob));

  function handler(blob) {
    const URI = URL.createObjectURL(blob);
    const img = new Image();
    img.src = URI;
    img.className = classData
    img.alt = altData;
    img.onload = () => {
      divElement.appendChild(img);
    };
  }
}

function socialLinksAddOnLoad(socialLinksDiv) {

  const socialLinks = [
    { href: '#', class: 'bi bi-twitter-x' },
    { href: '#', class: 'bi bi-facebook' },
    { href: '#', class: 'bi bi-instagram' },
    { href: '#', class: 'bi bi-linkedin' }
  ];

  socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    const i = document.createElement('i');
    i.classList.add(...link.class.split(' '));
    a.appendChild(i);
    socialLinksDiv.appendChild(a);
  });
}

(function () {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  headerTagContantsElements();
  aboutDetails();
  resumeDataWrapper();

})();

function headerTagContantsElements() {

  let func = [title(), getDescription(), getKeywords(), faviconIcon()];

  func.forEach((e) => {
    document.head.appendChild(e);
  });

  //getLanguage();
}

function getKeywords() {
  let tags = ['GGS', 'Gowtham Sankar', 'Gowtham', 'GMSK', 'Sankar', 'GouthamGuna', 'GowthamGuna', 'dev_ggs', 'dev_gmsk'];
  let keywords = document.createElement('meta')
  keywords.content = tags.join(', ');
  keywords.name = 'keywords';

  return keywords;
}

function getDescription() {
  let description = document.createElement('meta')
  description.content = "Full-stack developer with ~3 years of experience in managing multiple teams."
  description.name = 'description';

  return description;
}

function title() {
  let title = document.createElement('title')
  title.textContent = "Gowtham Sankar Gunasekaran";

  return title;
}

function faviconIcon() {
  let link = document.createElement('link')
  link.rel = 'icon'
  link.href = 'assets/img/favicon.ico'

  return link;
}

function aboutDetails() {

  fetch('assets/datascources/about.json')
    .then(response => response.json())
    .then(data => {
      data.forEach((e) => {
        e.header.forEach((h) => {
          textWrapper(document.getElementById('e6f82f4f-6544-4787-b528-c34425aa18d1'), h.title);
          textWrapper(document.getElementById('9a8e7e8c-667a-4b5d-b174-870e3686a4b9'), h.description);
        });
        e.banner.forEach((b) => {
          aboutSection(document.getElementById('6571aa95-b0c4-49ca-baff-b5715bba9b39'), b.title, b.description);
        })
        rowDataWrapper(document.getElementById('8b77edb5-240f-437b-ba2c-9402db2eb71d'), e.left);
        rowDataWrapper(document.getElementById('8b77edb5-240f-437b-ba2c-9402db2eb71d'), e.right)
        e.footer.forEach((f) => {
          htmlDataWrapper(document.getElementById('4dbda401-a5c1-430d-98db-d3692ac44962'), document.createElement('p'), f.text);
        })
      })
    });
}

function getLanguage() {
  let language = document.documentElement.getAttribute('lang');
  console.log(language);

  if (language !== null && language !== undefined) {
    sessionStorage.setItem('language', language);
  }
}

function textWrapper(divElement, data) {
  divElement.innerText = data;
}

function htmlDataWrapper(divElement, dom, data) {
  dom.innerHTML = data;
  divElement.appendChild(dom);
}

function aboutSection(divElement, title, description) {
  let about = document.createElement('div');
  about.classList.add('about');

  let h2 = document.createElement('h2');
  h2.textContent = title;

  let p = document.createElement('p');
  p.textContent = description;

  about.appendChild(h2);
  about.appendChild(p);

  divElement.appendChild(about);
}

function rowDataWrapper(divElement, data) {

  let row = document.createElement('div');
  row.classList.add('col-lg-6');

  let col = document.createElement('ul');

  data.forEach((e) => {

    let li = document.createElement('li');

    let strong = document.createElement('strong');
    strong.innerText = e.key;

    let span = document.createElement('span');
    span.innerText = e.value;

    let i = document.createElement('i');
    i.className = 'bi bi-chevron-right';

    li.appendChild(i);
    li.appendChild(strong);
    li.appendChild(span);
    col.appendChild(li);
    row.appendChild(col);
  })

  divElement.appendChild(row);
};

function resumeDataWrapper() {

  let headerDiv = document.getElementById('927ca246-ec7d-41b1-9769-e80869b50cb9');
  let eduHeaderDiv = document.getElementById('ace63cdb-9b8e-49d5-8f20-f0f2949fe49a');
  let expHeaderDiv = document.getElementById('df5f9af9-07c5-4fae-8faa-db27e5155c7f');

  fetch('assets/datascources/resume.json')
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.experience.items);

      let h2 = document.createElement('h2');
      h2.textContent = data.main.title;
      headerDiv.appendChild(h2);

      let p = document.createElement('p');
      p.textContent = data.main.description;
      headerDiv.appendChild(p);

      let h3 = document.createElement('h3');
      h3.classList.add('resume-title');
      h3.textContent = data.education.title;
      eduHeaderDiv.appendChild(h3);

      data.education.items.forEach((e) => {

        let div = document.createElement('div');
        div.classList.add('resume-item');

        let h4 = document.createElement('h4');
        h4.textContent = e.degree;

        let p = document.createElement('p');
        let em = document.createElement('em');
        em.textContent = e.major;
        p.appendChild(em);

        let ul = document.createElement('ul');

        e.details_band.forEach((d) => {
          let li = document.createElement('li');
          li.textContent = d.text;
          ul.appendChild(li);
        });

        div.appendChild(h4);
        div.appendChild(p);
        div.appendChild(ul);
        eduHeaderDiv.appendChild(div);
      })

      let exp_h3 = document.createElement('h3');
      exp_h3.classList.add('resume-title');
      exp_h3.textContent = data.experience.title;

      let div = document.createElement('div');
      div.classList.add('resume-item');

      let pro_div = document.createElement('div');
      let pro_ul = document.createElement('ul');

      data.experience.items.forEach((e) => {

        let h4 = document.createElement('h4');
        h4.textContent = e.role;
        div.appendChild(h4);

        let h5 = document.createElement('h5');
        h5.textContent = e.doj;
        div.appendChild(h5);

        let p = document.createElement('p');
        let em = document.createElement('em');
        em.textContent = e.address;
        p.appendChild(em);
        div.appendChild(p);

        let ul = document.createElement('ul');

        e.details_band.forEach((d) => {

          d.responsibilities.forEach((r) => {
            let li = document.createElement('li');
            li.textContent = r.text;
            ul.appendChild(li);
          });

          d.projects.forEach((r) => {
            let h4 = document.createElement('h4');
            h4.textContent = r.title;
            pro_div.appendChild(h4);

            r.details.forEach((p) => {
              let li = document.createElement('li');
              li.textContent = p.text;
              pro_ul.appendChild(li);
            })
          });
        });

        div.appendChild(ul);
        div.appendChild(pro_div);
        pro_div.appendChild(pro_ul);
      })

      expHeaderDiv.appendChild(exp_h3);
      expHeaderDiv.appendChild(div);
    });
}