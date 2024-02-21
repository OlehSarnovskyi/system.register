System.register(['./styles.css'], _export => {
    let styles
    return {
        setters: [ns => {
            styles = ns.default
        }], execute() {
            _export('styles', styles)
        }
    }
}, { assert: {type: 'css' } })
