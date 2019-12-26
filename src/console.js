class Console {
    constructor(arg = {}) {
        const { target } = arg;
        this.target = target;
    }
    log(...args) {
        this.render(args, 'log');
    }
    info(...args) {
        this.render(args, 'info');
    }

    render(msgs, type) {
        const msg = msgs
            .map(arg => {
                switch (typeof arg) {
                    case 'object':
                        if (Array.isArray(arg)) {
                            return JSON.stringify(arg, null, 0).replace(/,/gi, ', ');
                        }
                        return JSON.stringify(arg, null, 0);
                    default:
                        return arg;
                }
            })
            .join(' ');

        const pre = document.createElement('pre');
        pre.className = type;
        pre.innerHTML = `<code>${msg}</code>`;

        this.target.append(pre);
    }
}

export function consoleFactory(selector) {
    const target = document.querySelector(selector) || document.body;
    return new Console({ target });
}
