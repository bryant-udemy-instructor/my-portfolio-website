var counter = 0;

function incrementVisitor() {
    counter = counter + 1;
    return counter;
}

function changeTitle(title) {
    return "타이틀은: " + title;
}

var comments=[];

function addComment() {
    var newComment = prompt("댓글 를 남겨주세요! 커멘트를 더한후 마지막에 - 이름을 추가해주세요");
    comments.push(newComment);
    alert("댓글이 추가 되었습니다");
    document.getElementById("commentsBox").innerHTML = comments;
}
