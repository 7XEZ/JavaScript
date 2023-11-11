var path = "/users/download/index.html"
const wrd = "html"

    function isHtml(str, word){
        for (var i = 0; i < str.length; i++){
            if (str.includes(word)){
                console.log(true)
            }
        }
    }


const result = isHtml(path, wrd)
console.log(result)