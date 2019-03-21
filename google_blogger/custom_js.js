<script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.6.4/showdown.min.js">
</script>
<script>

// The > will replaced to &gt; when using innerHTML, so replace it back to >
// for showdown to render blockquote
function blockquote(str) {
    return str.replace(/\n&gt;/g,'\n>') ;
}

var converter = new showdown.Converter();
var posts = document.querySelectorAll(".post-body");
var s = "";
Array.prototype.forEach.call(posts, function(el, i) {
    var idx = el.innerHTML.indexOf("markdown");
    if(idx != -1 && idx <= 1) {
        el.innerHTML = converter.makeHtml(blockquote(el.innerHTML).replace("markdown",""));
        var pres = el.querySelectorAll("pre");
        for (var i = 0; i < pres.length; i++) {
            pres[i].classList.add("prettyprint");
            pres[i].classList.add("linenums:1");
        }
    }
});
</script>

<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js">
</script>
