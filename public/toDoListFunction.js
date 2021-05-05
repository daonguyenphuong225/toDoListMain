

$(document).ready(function () {

    $('body').on('click', '.fixContent', function () {
        let parent = $(this).parent().parent()
        let content = parent.find('p').text().trim()
    
        if($(this).siblings().length == 2){
            $(this).siblings()[0].remove()
        }
        $(this).siblings()[0].remove()
        $(this).parent().siblings().eq(0).replaceWith('<input class = "updateContent1" type="text"> ');
        $('.updateContent1').val(content)
        $(this).replaceWith('<button class="finish">Hoàn Thành</button>');
    })

    $('body').on('click', '.moving', function () {
        let parent = $(this).parent().parent()
        let content = parent.find('p').text().trim()
        console.log(content);
    
        let parentInput = parent.find('input')
        let status = parentInput.eq(0).val()
        let id = parentInput.eq(1).val()
        $('.content').val(content)
    
            status = status == 'toDo' ? 'doing' : 'done'
    
        $('.status').val(status)
        let url = `/update/${id}`
        $('#form-update').attr('action', url)
        $('#form-update').submit()
    })

    $('body').on('click', '.finish', function () {
        let parent = $(this).parent().parent()
        let parentInput = parent.find('input')
        let content = parentInput.eq(0).val()
        let status = parentInput.eq(1).val()
        let id = parentInput.eq(2).val()

        $('.content').val(content)
        $('.status').val(status)
        
        let url = `/update/${id}`
        $('#form-update').attr('action', url)
        $('#form-update').submit()
    })
});


