<script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.6.4/showdown.min.js">
</script>
<script>
var converter = new showdown.Converter();

var posts = document.querySelectorAll(".post-body");
Array.prototype.forEach.call(posts, function(el, i){
    var idx = el.innerHTML.indexOf("markdown");
    if(idx != -1 && idx <= 1){
        el.innerHTML = converter.makeHtml(el.innerHTML.replace("markdown",""));
    }
});
</script>

<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js">
</script>
