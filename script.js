const navigation = [...document.querySelectorAll('.nav-link')];
const sections = navigation.map((link) => document.querySelector(link.getAttribute('href')));
let scrollFrame;

function updateNavigation() {
  const readingLine = Math.min(window.innerHeight * 0.3, 220);
  let activeSection = sections[0];

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= readingLine) activeSection = section;
  }

  // 마지막 섹션이 짧더라도 페이지 끝에 도착하면 연락 메뉴를 활성화합니다.
  if (Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 4) {
    activeSection = sections.at(-1);
  }

  for (const link of navigation) {
    const active = link.getAttribute('href') === `#${activeSection.id}`;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

function scheduleNavigation() {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    updateNavigation();
    scrollFrame = null;
  });
}

window.addEventListener('scroll', scheduleNavigation, { passive: true });
window.addEventListener('resize', scheduleNavigation);
window.addEventListener('pageshow', scheduleNavigation);
updateNavigation();

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
let pointerFrame;
let pointerX;
let pointerY;

window.addEventListener('pointermove', (event) => {
  if (motionPreference.matches || !finePointer.matches || event.pointerType === 'touch') return;
  pointerX = event.clientX;
  pointerY = event.clientY;
  if (pointerFrame) return;
  pointerFrame = requestAnimationFrame(() => {
    document.documentElement.style.setProperty('--pointer-x', `${pointerX}px`);
    document.documentElement.style.setProperty('--pointer-y', `${pointerY}px`);
    pointerFrame = null;
  });
}, { passive: true });
