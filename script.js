    const expandSection = document.querySelectorAll(".question-and-button");
    
    console.log(document.querySelectorAll(".accordion"));


    expandSection.forEach((section) => {
        section.addEventListener("click", (e) => {

            const button = e.currentTarget;
            const value = button.getAttribute("data-value");
            console.log(value)
            const answer = document.getElementById(`answer${value}`);
            console.log(answer)
            const plusIcon = document.getElementById(`plus-icon${value}`);
            const minusIcon = document.getElementById(`minus-icon${value}`);
            answer.classList.toggle("hide");
            plusIcon.classList.toggle("hide");
            minusIcon.classList.toggle("hide");
        });
    });