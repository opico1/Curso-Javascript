//$(Selector).accion()

//$("h1").hide()

$(document).ready(() => {
    //Selectores:
    // id="el-1" => "#el-1"
    //$("#el-1").hide()

    $(".hide-btn").click(() => {
        console.log("Ocultando...")
        //$("h1").hide()
        $("h1").fadeOut()
    })

    $(".show-btn").click(() => {
        console.log("Mostrando...")
        //$("h1").show()
        $("h1").fadeIn()
    })

    $("li").click(() => {
        $("h1").css({color: "blue"})
    })

    $("li").dblclick(() => {
        $("h1").css({color: "red"})
    })

    $(".new-element").click(() => {
        //$("ul").append("<li>Nuevo Elemento</li>")
        $("ul").prepend("<li>Nuevo Elemento</li>")
    })

    $("li").mouseenter((elem) => {
        //console.log("Ha entrado el raton (hover)")
        elem.target.style.color = "green"
    })

    $("li").mouseleave((elem) => {
        //console.log("Ha entrado el raton (hover)")
        elem.target.style.color = "black"
    })
})