// Major declarations

let body = document.querySelector ('body');
let p1 = document.querySelector ('.p1');
let p2 = document.querySelector ('.p2');
let p3 = document.querySelector ('.p3');
let p4 = document.querySelector ('.p4');
let p5 = document.querySelector ('.p5');
let p6 = document.querySelector ('.p6');
let p7 = document.querySelector ('.p7');
let p8 = document.querySelector ('.p8');
let p9 = document.querySelector ('.p9');
let p10 = document.querySelector ('.p10');
let p11 = document.querySelector ('.p11');
let p12 = document.querySelector ('.p12');
let p13 = document.querySelector ('.p13');
let p14 = document.querySelector ('.p14');
let p15 = document.querySelector ('.p15');
let p16 = document.querySelector ('.p16');
let p17 = document.querySelector ('.p17');
let p18 = document.querySelector ('.p18');
let p19 = document.querySelector ('.p19');
let p20 = document.querySelector ('.p20');
let p21 = document.querySelector ('.p21');
let p22 = document.querySelector ('.p22');
let p23 = document.querySelector ('.p23');
let p24 = document.querySelector ('.p24');
let p25 = document.querySelector ('.p25');
let p26 = document.querySelector ('.p26');
let backgroundpop = document.querySelector ('.backgroundpop');
let popcontainer = document.querySelector ('.popcontainer');
let pimage = document.querySelector ('.pimage');
let r1 = document.querySelector ('.r1');
let r2 = document.querySelector ('.r2');
let r3 = document.querySelector ('.r3');
let r4 = document.querySelector ('.r4');
let r5 = document.querySelector ('.r5');
let smallimage;

// Border declarations

let b0 = document.querySelector ('.b0');
let b1 = document.querySelector ('.b1');
let b2 = document.querySelector ('.b2');
let b3 = document.querySelector ('.b3');
let b4 = document.querySelector ('.b4');
let b5 = document.querySelector ('.b5');
let b6 = document.querySelector ('.b6');
let b7 = document.querySelector ('.b7');
let b8 = document.querySelector ('.b8');
let b9 = document.querySelector ('.b9');
let b10 = document.querySelector ('.b10');
let b11 = document.querySelector ('.b11');
let b12 = document.querySelector ('.b12');
let b13 = document.querySelector ('.b13');
let b14 = document.querySelector ('.b14');
let b15 = document.querySelector ('.b15');
let b16 = document.querySelector ('.b16');
let b17 = document.querySelector ('.b17');
let b18 = document.querySelector ('.b18');

// hover listeners

p1.addEventListener ('mouseenter', () => {
  p2.classList.add ('glowborder');
  p11.classList.add ('glowborder');
  p20.classList.add ('glowborder');
  p23.classList.add ('glowborder');
  b0.classList.add ('highlightborderleft');
  b1.classList.add ('highlightborderleft-top-right');
  b2.classList.add ('highlightbordertop-right');
  b14.classList.add ('highlightbordertop-right');
});
p1.addEventListener ('mouseleave', () => {
  p2.classList.remove ('glowborder');
  p11.classList.remove ('glowborder');
  p20.classList.remove ('glowborder');
  p23.classList.remove ('glowborder');
  b0.classList.remove ('highlightborderleft');
  b1.classList.remove ('highlightborderleft-top-right');
  b2.classList.remove ('highlightbordertop-right');
  b14.classList.remove ('highlightbordertop-right');
});
p2.addEventListener ('mouseenter', () => {
  p4.classList.add ('glowborder');
  p7.classList.add ('glowborder');
  p8.classList.add ('glowborder');
  b3.classList.add ('highlightborderleft');
  b4.classList.add ('highlightborderleft-top-right');
  b5.classList.add ('highlightbordertop-right');
});
p2.addEventListener ('mouseleave', () => {
  p4.classList.remove ('glowborder');
  p7.classList.remove ('glowborder');
  p8.classList.remove ('glowborder');
  b4.classList.remove ('highlightborderleft-top-right');
  b3.classList.remove ('highlightborderleft');
  b5.classList.remove ('highlightbordertop-right');
});
p3.addEventListener ('mouseenter', () => {
  p4.classList.add ('glowborder');
  p7.classList.add ('glowborder');
  p8.classList.add ('glowborder');
  b3.classList.add ('highlightborderleft');
  b4.classList.add ('highlightborderleft-top-right');
  b5.classList.add ('highlightbordertop-right');
});
p3.addEventListener ('mouseleave', () => {
  p4.classList.remove ('glowborder');
  p7.classList.remove ('glowborder');
  p8.classList.remove ('glowborder');
  b4.classList.remove ('highlightborderleft-top-right');
  b3.classList.remove ('highlightborderleft');
  b5.classList.remove ('highlightbordertop-right');
});

p11.addEventListener ('mouseenter', () => {
  p15.classList.add ('glowborder');
  p16.classList.add ('glowborder');
  p13.classList.add ('glowborder');
  b8.classList.add ('highlightborderleft');
  b9.classList.add ('highlightborderleft-top-right');
  b10.classList.add ('highlightbordertop-right');
});
p11.addEventListener ('mouseleave', () => {
  p15.classList.remove ('glowborder');
  p16.classList.remove ('glowborder');
  p13.classList.remove ('glowborder');
  b9.classList.remove ('highlightborderleft-top-right');
  b8.classList.remove ('highlightborderleft');
  b10.classList.remove ('highlightbordertop-right');
});
p12.addEventListener ('mouseenter', () => {
  p15.classList.add ('glowborder');
  p16.classList.add ('glowborder');
  p13.classList.add ('glowborder');
  b8.classList.add ('highlightborderleft');
  b9.classList.add ('highlightborderleft-top-right');
  b10.classList.add ('highlightbordertop-right');
});
p12.addEventListener ('mouseleave', () => {
  p15.classList.remove ('glowborder');
  p16.classList.remove ('glowborder');
  p13.classList.remove ('glowborder');
  b9.classList.remove ('highlightborderleft-top-right');
  b8.classList.remove ('highlightborderleft');
  b10.classList.remove ('highlightbordertop-right');
});
p20.addEventListener ('mouseenter', () => {
  p22.classList.add ('glowborder');
  b15.classList.add ('highlightborderleft');
});
p20.addEventListener ('mouseleave', () => {
  p22.classList.remove ('glowborder');
  b15.classList.remove ('highlightborderleft');
});
p21.addEventListener ('mouseenter', () => {
  p22.classList.add ('glowborder');
  b15.classList.add ('highlightborderleft');
});
p21.addEventListener ('mouseleave', () => {
  p22.classList.remove ('glowborder');
  b15.classList.remove ('highlightborderleft');
});
p23.addEventListener ('mouseenter', () => {
  p25.classList.add ('glowborder');
  p26.classList.add ('glowborder');
  b17.classList.add ('highlightborderleft');
  b18.classList.add ('highlightborderleft-top-right');
});
p23.addEventListener ('mouseleave', () => {
  p25.classList.remove ('glowborder');
  p26.classList.remove ('glowborder');
  b18.classList.remove ('highlightborderleft-top-right');
  b17.classList.remove ('highlightborderleft');
});
p24.addEventListener ('mouseenter', () => {
  p25.classList.add ('glowborder');
  p26.classList.add ('glowborder');
  b17.classList.add ('highlightborderleft');
  b18.classList.add ('highlightborderleft-top-right');
});
p24.addEventListener ('mouseleave', () => {
  p25.classList.remove ('glowborder');
  p26.classList.remove ('glowborder');
  b18.classList.remove ('highlightborderleft-top-right');
  b17.classList.remove ('highlightborderleft');
});
p7.addEventListener ('mouseenter', () => {
  p9.classList.add ('glowborder');
  p10.classList.add ('glowborder');
  b6.classList.add ('highlightborderleft');
  b7.classList.add ('highlightborderleft-top-right');
});
p7.addEventListener ('mouseleave', () => {
  p9.classList.remove ('glowborder');
  p10.classList.remove ('glowborder');
  b6.classList.remove ('highlightborderleft');
  b7.classList.remove ('highlightborderleft-top-right');
});
p6.addEventListener ('mouseenter', () => {
  p9.classList.add ('glowborder');
  p10.classList.add ('glowborder');
  b6.classList.add ('highlightborderleft');
  b7.classList.add ('highlightborderleft-top-right');
});
p6.addEventListener ('mouseleave', () => {
  p9.classList.remove ('glowborder');
  p10.classList.remove ('glowborder');
  b6.classList.remove ('highlightborderleft');
  b7.classList.remove ('highlightborderleft-top-right');
});
p13.addEventListener ('mouseenter', () => {
  p17.classList.add ('glowborder');
  p18.classList.add ('glowborder');
  b11.classList.add ('highlightborderleft');
  b12.classList.add ('highlightborderleft-top-right');
});
p13.addEventListener ('mouseleave', () => {
  p17.classList.remove ('glowborder');
  p18.classList.remove ('glowborder');
  b11.classList.remove ('highlightborderleft');
  b12.classList.remove ('highlightborderleft-top-right');
});
p14.addEventListener ('mouseenter', () => {
  p17.classList.add ('glowborder');
  p18.classList.add ('glowborder');
  b11.classList.add ('highlightborderleft');
  b12.classList.add ('highlightborderleft-top-right');
});
p14.addEventListener ('mouseleave', () => {
  p17.classList.remove ('glowborder');
  p18.classList.remove ('glowborder');
  b11.classList.remove ('highlightborderleft');
  b12.classList.remove ('highlightborderleft-top-right');
});
p15.addEventListener ('mouseenter', () => {
  p19.classList.add ('glowborder');
  b13.classList.add ('highlightborderleft');
});
p15.addEventListener ('mouseleave', () => {
  p19.classList.remove ('glowborder');
  b13.classList.remove ('highlightborderleft');
});

// funtions
let pop = (a, b, c, d, e) => {
  backgroundpop.style.cssText = 'opacity:1; pointer-events:all';
  popcontainer.style.cssText = 'transform: scale(1); pointer-events:all';
  body.classList.add ('bodyscroll');
  r1.innerHTML = a;
  r2.innerHTML = b;
  r3.innerHTML = c;
  r4.innerHTML = d;
  r5.innerHTML = e;
};
let closepop = () => {
  backgroundpop.style.cssText = 'opacity:0; pointer-events:none';
  popcontainer.style.cssText = 'transform: scale(0); pointer-events:none';
  body.classList.remove ('bodyscroll');
  pimage.classList.remove ('pimg1');
  pimage.classList.remove ('pimg2');
  pimage.classList.remove ('pimg3');
  pimage.classList.remove ('pimg4');
  pimage.classList.remove ('pimg5');
  pimage.classList.remove ('pimg6');
  pimage.classList.remove ('pimg7');
  pimage.classList.remove ('pimg8');
  pimage.classList.remove ('pimg9');
  pimage.classList.remove ('pimg10');
  pimage.classList.remove ('pimg11');
  pimage.classList.remove ('pimg12');
  pimage.classList.remove ('pimg13');
  pimage.classList.remove ('pimg14');
  pimage.classList.remove ('pimg15');
  pimage.classList.remove ('pimg16');
  pimage.classList.remove ('pimg17');
  pimage.classList.remove ('pimg18');
  pimage.classList.remove ('pimg19');
  pimage.classList.remove ('pimg20');
  pimage.classList.remove ('pimg21');
  pimage.classList.remove ('pimg22');
  pimage.classList.remove ('pimg23');
  pimage.classList.remove ('pimg24');
  pimage.classList.remove ('pimg25');
  pimage.classList.remove ('pimg26');
};
// click listeners

p1.addEventListener ('click', function () {
  pop (
    'Comfort Ikekhide (mama)',
    'Lagos, Nigeria',
    ' ******',
    'Married',
    '****** '
  );
  pimage.classList.add ('pimg1');
});
p2.addEventListener ('click', function () {
  pop (
    'Patricia Adebayo',
    'Abuja, Nigeria',
    '18th May',
    'Married',
    '8th October'
  );
  pimage.classList.add ('pimg2');
});
p3.addEventListener ('click', function () {
  pop (
    'Ezekiel Adebayo',
    'Abuja, Nigeria',
    '10th october',
    'Married',
    '8th October'
  );
  pimage.classList.add ('pimg3');
});
p4.addEventListener ('click', function () {
  pop (
    'Kemi Adepoju',
    'Abuja, Nigeria',
    '23rd Febuary',
    'Married',
    '19th October'
  );
  pimage.classList.add ('pimg4');
});
p5.addEventListener ('click', function () {
  pop (
    'Fikayo Adepoju',
    'Abuja, Nigeria',
    '17th January',
    'Married',
    '19th October'
  );
  pimage.classList.add ('pimg5');
});
p6.addEventListener ('click', function () {
  pop (
    'Adebayo Akinade',
    'Ondo, Nigeria',
    '29th october',
    'Married',
    '12th May'
  );
  pimage.classList.add ('pimg6');
});
p7.addEventListener ('click', function () {
  pop (
    'Damilola Akinade',
    'Ondo, Nigeria',
    '12th october',
    'Married',
    '12th May'
  );
  pimage.classList.add ('pimg7');
});
p8.addEventListener ('click', function () {
  pop ('Samuel Adebayo', 'Abuja, Nigeria', '5th July', 'Single', 'Nil');
  pimage.classList.add ('pimg8');
});
p9.addEventListener ('click', function () {
  pop ('Eseohe Akinade', 'Ondo, Nigeria', '7th April', 'Nil', 'Nil');
  pimage.classList.add ('pimg9');
});
p10.addEventListener ('click', function () {
  pop ('Ifeoluwa Akinade', 'Ondo, Nigeria', '19th September', 'Nil', 'Nil');
  pimage.classList.add ('pimg10');
});
p11.addEventListener ('click', function () {
  pop (
    'Helen Omozokpia',
    'Lagos, Nigeria',
    '28th August',
    'Married',
    '8th June'
  );
  pimage.classList.add ('pimg11');
});
p12.addEventListener ('click', function () {
  pop (
    'Sunday Omozokpia',
    'Lagos, Nigeria',
    '26th September',
    'Married',
    '8th June'
  );
  pimage.classList.add ('pimg12');
});
p13.addEventListener ('click', function () {
  pop (
    'Edeowede Omozokpia',
    'Norwich, UK',
    '30th December',
    'Married',
    '19th June'
  );
  pimage.classList.add ('pimg13');
});
p14.addEventListener ('click', function () {
  pop ('Helena Omozokpia', 'Norwich, UK', '7th July', 'Married', '19th June');
  pimage.classList.add ('pimg14');
});
p15.addEventListener ('click', function () {
  pop ('Otibhor Omozokpia', 'Lagos, Nigeria', '31th March', 'Single', 'Nil');
  pimage.classList.add ('pimg15');
});
p16.addEventListener ('click', function () {
  pop ('Ofure Omozokpia', 'Lagos, Nigeria', '3rd June', 'Single', 'Nil');
  pimage.classList.add ('pimg16');
});

p17.addEventListener ('click', function () {
  pop ('Athena Omozokpia', '  Norwich, UK', '18th January', 'Nil', 'Nil');
  pimage.classList.add ('pimg17');
});
p18.addEventListener ('click', function () {
  pop ('Kaia Omozokpia', 'Norwich, UK', '10th July', 'Nil', 'Nil');
  pimage.classList.add ('pimg18');
});
p19.addEventListener ('click', function () {
  pop ('Isreal Omozokpia', '  Lagos, Nigeria', '3rd December', 'Nil', 'Nil');
  pimage.classList.add ('pimg19');
});
p20.addEventListener ('click', function () {
  pop (
    'Andy ikekhide',
    ' Lagos, Nigeria',
    '6th December',
    'Married',
    '6th December'
  );
  pimage.classList.add ('pimg20');
});
p21.addEventListener ('click', function () {
  pop (
    'Faith Ikekhide',
    'Lagos, Nigeria',
    '11th May',
    'Married',
    '6th December'
  );
  pimage.classList.add ('pimg21');
});
p22.addEventListener ('click', function () {
  pop ('Victory Ikekhide', 'Lagos, Nigeria', '28th August', 'Nil', 'Nil');
  pimage.classList.add ('pimg22');
});
p23.addEventListener ('click', function () {
  pop (
    'Emmanuel Ikekhide',
    'Texas, USA',
    '14th September',
    'Married',
    '30th April'
  );
  pimage.classList.add ('pimg23');
});
p24.addEventListener ('click', function () {
  pop (
    'Patrish Ikekhide',
    'Texas, USA',
    '28th January',
    'Married',
    '30th April'
  );
  pimage.classList.add ('pimg24');
});
p25.addEventListener ('click', function () {
  pop ('Zohan Ikekhide', 'Texas, USA', '20th August', 'Nil', 'Nil');
  pimage.classList.add ('pimg25');
});
p26.addEventListener ('click', function () {
  pop ('Zachary Ikekhide', 'Texas, USA', '18th december', 'Nil', 'Nil');
  pimage.classList.add ('pimg26');
});

backgroundpop.addEventListener ('click', closepop);
