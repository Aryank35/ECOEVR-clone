let docReady=e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):setTimeout(e,1)},resize=e=>window.addEventListener("resize",e),isIterableArray=e=>Array.isArray(e)&&!!e.length,camelize=e=>{let t=e.replace(/[-_\s.]+(.)?/g,(e,t)=>t?t.toUpperCase():"");return`${t.substr(0,1).toLowerCase()}${t.substr(1)}`},getData=(e,t)=>{try{return JSON.parse(e.dataset[camelize(t)])}catch(r){return e.dataset[camelize(t)]}},hexToRgb=e=>{let t;t=0===e.indexOf("#")?e.substring(1):e;let r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t.replace(r,(e,t,r,a)=>t+t+r+r+a+a));return a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),]:null},rgbaColor=(e="#fff",t=.5)=>`rgba(${hexToRgb(e)}, ${t})`,colors={primary:"#0091e9",secondary:"#002147",success:"#00d27a",info:"#27bcfd",warning:"#FFC928",danger:"#EE4D47",light:"#F9FAFD",dark:"#000"},grays={white:"#fff",100:"#f9fafd",200:"#edf2f9",300:"#d8e2ef",400:"#b6c1d2",500:"#9da9bb",600:"#748194",700:"#5e6e82",800:"#4d5969",900:"#344050",1e3:"#232e3c",1100:"#0b1727",black:"#000"},hasClass=(e,t)=>e.classList.value.includes(t),addClass=(e,t)=>{e.classList.add(t)},getOffset=e=>{let t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,a=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+a,left:t.left+r}},isScrolledIntoView=e=>{let t=e.offsetTop,r=e.offsetLeft,a=e.offsetWidth,s=e.offsetHeight;for(;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,r+=e.offsetLeft;return{all:t>=window.pageYOffset&&r>=window.pageXOffset&&t+s<=window.pageYOffset+window.innerHeight&&r+a<=window.pageXOffset+window.innerWidth,partial:t<window.pageYOffset+window.innerHeight&&r<window.pageXOffset+window.innerWidth&&t+s>window.pageYOffset&&r+a>window.pageXOffset}},breakpoints={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1540},getBreakpoint=e=>{let t=e&&e.classList.value,r;return t&&(r=breakpoints[t.split(" ").filter(e=>e.includes("navbar-expand-")).pop().split("-").pop()]),r},setCookie=(e,t,r)=>{let a=new Date;a.setTime(a.getTime()+r),document.cookie=e+"="+t+";expires="+a.toUTCString()},getCookie=e=>{var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:t},settings={tinymce:{theme:"oxide"},chart:{borderColor:"rgba(255, 255, 255, 0.8)"}},newChart=(e,t)=>{let r=e.getContext("2d");return new window.Chart(r,t)},getItemFromStore=(e,t,r=localStorage)=>{try{return JSON.parse(r.getItem(e))||t}catch{return r.getItem(e)||t}},setItemToStore=(e,t,r=localStorage)=>r.setItem(e,t),getStoreSpace=(e=localStorage)=>parseFloat((escape(encodeURIComponent(JSON.stringify(e))).length/1048576).toFixed(2)),utils={docReady,resize,isIterableArray,camelize,getData,hasClass,addClass,hexToRgb,rgbaColor,colors,grays,getOffset,isScrolledIntoView,getBreakpoint,setCookie,getCookie,newChart,settings,getItemFromStore,setItemToStore,getStoreSpace};export default utils;