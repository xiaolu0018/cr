/**
 * @fileName custom3.js
 * @description 必应
 * @date 2024-10-14 13:59:09
 * @author lxl
 */
document.addEventListener("DOMContentLoaded", function () {
  console.log("========= this is my plugin 3======");
  const hideDomStyle = ".below_sbox>#tobPrompt,.sb_feedback_button{display:none !important;}";
  var sts = document.createElement("style");
  sts.innerHTML = hideDomStyle;
  document.head.appendChild(sts);
});
