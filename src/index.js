import "./styles.css";

// Select items
const comment = document.getElementById("comment");
const commentList = document.getElementById("customerComment");
const submitBtn = document.getElementById("add-comment");
const clearBtn = document.getElementById("remove-comments");

// Event listener
submitBtn.addEventListener("click", addComment);
clearBtn.addEventListener("click", clearComment);

//Function
// Function for submit button
function addComment(e) {
  e.preventDefault();
  const commentText = comment.value;
  if (commentText) {
    const itemList = document.createElement("li");
    itemList.innerHTML = commentText;
    commentList.appendChild(itemList);
  }
  comment.value = "";
}

function clearComment(e) {
  e.preventDefault();
  let confirmText = "Are you sure to delete?";
  if (confirm(confirmText)) {
    commentList.innerHTML = "";
  }
}
