function $(e){
    return document.getElementById(e);
}

const direction = $("direction");
const justify = $("justify");
const align = $("align");
const container = $("container");

const changeDirection = () => container.style.flexDirection = direction.value;

justify.onchange = () => container.style.justifyContent = justify.value;

align.addEventListener("change", () => container.style.alignItems = align.value);