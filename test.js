class Menu {
    constructor(elem) {
        this._elem = elem;
    }

    save() {
        alert('saving');
    }

    load() {
        alert('loading');
    }

    search() {
        alert('searching');
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}
const menuElement = document.querySelector("#menu");

const menu = new Menu(menuElement);

menuElement.addEventListener("click", (e) => {
    menu.onClick(e)
})

