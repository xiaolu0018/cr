console.log("========= this is my plugin ======");
document.addEventListener("DOMContentLoaded", function () {
  const hideDomStyle =
    ".footer.no_mod,.o3j99.c93Gbe,#bottom_layer,.s-bottom-layer.s-isindex-wrap{display:none !important;} body.big-event-gray div{filter:none !important;} html{overflow: auto;}";
  var sts = document.createElement("style");
  sts.innerHTML = hideDomStyle;
  document.head.appendChild(sts);
});
