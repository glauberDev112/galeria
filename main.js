$(document).ready(function fun () {
    $('header button').click(function fun () {
        $('form').slideDown()
    })
    $('form').on('submit', function fun (e) {
        e.preventDefault()
        const inp_img = $('#imagem').val()
        console.log(inp_img)
        const novo_item = $('<li style="display:none;"></li>')
        $(`<img src='${inp_img}'>`).appendTo(novo_item)
        $(`
        <div class='view_img'>
        <a href="${inp_img}" target="_blank">ver imagem</a>
        </div>
        `).appendTo(novo_item)
        $(novo_item).appendTo('ul')
        $(novo_item).fadeIn()
        $('#imagem').val('')
    })
    $('form').on('reset',function fun (e) {
        $('form').slideUp()
    })
})