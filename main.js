System.register([
    './json/json.js',
    './css/css.js',
    './components/header/header.js',
    './components/item/item.js'
], (_export, _context) => {
    let items
    return {
        setters: [
            ({ data }) => {
                // Set items from the json file
                items = data
            },
            ({ styles }) => {
                // Apply the CSSStyleSheet to the document
                document.adoptedStyleSheets = [styles]
            },
            ({ Header }) => {
                // Rendering the Header
                const header = new Header()
                header.render('Cars store')
            },
            ({ Item }) => {
                // Rendering the Items
                items.forEach(({ brand, model, year, color, image }) => {
                    const item = new Item()
                    item.render({ brand, model, year, color, image })
                })
            }
        ]
    }
})
