function newItem (){
// adding a new item
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue ==='') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

// crossing an item out
}

