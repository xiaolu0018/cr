document.addEventListener("DOMContentLoaded", function () {
  console.log("========= this is my plugin 3======");
  const hideDomStyle = ".below_sbox>#tobPrompt{display:none;}";
  var sts = document.createElement("style");
  sts.innerHTML = hideDomStyle;
  document.head.appendChild(sts);
});
