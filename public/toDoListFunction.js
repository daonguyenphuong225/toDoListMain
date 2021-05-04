

$(document).ready(function () {

    $('body').on('click', '.fixContent', function () {
        let id = $(this).parent().parent().find('input').val()
        let content1 = $(this).parent().siblings().html()
        console.log($(this).parent().siblings().html());
        $(this).parent().siblings().html('')
        $(this).siblings()[0].remove()
        $(this).siblings()[0].remove()
        $(this).replaceWith(`
        <form action="/routes/update/${id}" method="POST" >
            <input name="content" class = "updateContent1" type="text"> 
            <button class="done">Done</button>
        </form>
        `);
        $('.updateContent1').val(content1)
    })

});
