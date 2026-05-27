function addComment() {
    const input = document.getElementById("commentInput");
    const text = input.value;

    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    document.getElementById("commentList").appendChild(li);

    input.value = "";
}