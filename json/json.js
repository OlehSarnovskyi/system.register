System.register(['./data.json'], _export => {
    let data
    return {
        setters: [ns => {
            data = ns.default
        }], execute() {
            _export('data', data)
        }
    }
}, { assert: {type: 'json' }})
