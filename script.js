    const expandSection = document.querySelectorAll(".question-and-button");
    
    console.log(document.querySelectorAll(".accordion"));


    expandSection.forEach((section) => {
        section.addEventListener("click", (e) => {

            const button = e.currentTarget;
            const value = button.getAttribute("data-value");
            console.log(value)
            const wrapper = document.getElementById(`wrapper${value}`);
            console.log(wrapper)
            const plusIcon = document.getElementById(`plus-icon${value}`);
            const minusIcon = document.getElementById(`minus-icon${value}`);
            wrapper.classList.toggle("show");
            plusIcon.classList.toggle("hide");
            minusIcon.classList.toggle("hide");
        });
    });