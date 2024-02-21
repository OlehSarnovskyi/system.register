class Header {
    render(headerText) {
        const h1 = document.createElement('h1')
        h1.innerText = headerText
        document.body.appendChild(h1)
        const hr = document.createElement('hr')
        document.body.appendChild(hr)
    }
}

System.register([], _export => ({
    execute: () => {
        _export('Header', Header)
    }
}), { assert: { type: 'javascript' } })
