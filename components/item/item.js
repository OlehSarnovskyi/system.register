class Item {
    render({ brand, model, year, color, image }) {
        const card = `
            <div class="item">
                <img src="${image}" alt="${brand + model}">
                <div>
                    <p>${brand}, ${model}, ${year}</p>
                    <p><span class="circle" style="background-color: ${color}"></span>${color}</p>
                </div>
            </div>
        `
        document.body.innerHTML += card
    }
}

System.register([], _export => ({
    execute() {
        _export('Item', Item)
    }
}), { assert: { type: 'javascript' } })
