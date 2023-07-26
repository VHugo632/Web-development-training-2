const body = document.body
const box = document.getElementById("box")
const left_side = document.getElementById("left_side")
const right_side = document.getElementById("right_side")
const title = document.getElementById("title")
const form = document.getElementById("form")
const form_text = document.getElementById("form_text")
const validated_box = document.getElementById("validated_box")
const validated_icon = document.getElementById("validated_icon")
const validated_title = document.getElementById("validated_title")
const validated_text = document.getElementById("validated_text")
const dismiss = document.getElementById("dismiss")

form_submit.addEventListener("mouseover", function(){
    title.style.color = "hsl(4, 100%, 67%)"
})
form_submit.addEventListener("mouseout", function(){
    title.style.color = "hsl(234, 29%, 20%)"
})
form.addEventListener("submit", function(data){
    data.preventDefault()
    if ((form_text.value).includes("@") == false || (form_text.value).includes(".") == false){
        body.classList.add("error")
    }
    else {
        validated_text.innerHTML = "A confirmation email has been sent to <strong>" + form_text.value + "</strong>. Please open it and click the button inside to confirm your subscription."
        body.classList.remove("error")
        left_side.style.filter = "opacity(0%)"
        right_side.style.filter = "opacity(0%)"
        setTimeout(function(){
            left_side.style.display = "none"
            right_side.style.display = "none"
            box.style.transform = "translate(-50%, -50%) scale(52%, 80%)"
            box.style.borderRadius = "70px"
            setTimeout(function(){
                box.style.filter = "opacity(0%)"
                setTimeout(function(){
                    box.style.display = "none"
                }, 250)
            }, 300)
        }, 250)
    }
})
form_text.addEventListener("input", function(){
    body.classList.remove("error")
})
dismiss.addEventListener("click", function(){
    body.classList.add("end")
    setTimeout(function(){
        validated_icon.style.display = "none"
        validated_title.style.display = "none"
        validated_text.style.display = "none"
        dismiss.style.display = "none"
        validated_box.style.transform = "translate(-50%, -50%) scale(0%)"
        setTimeout(function(){
            validated_box.style.display = "none"
        }, 300)
    }, 250)
})