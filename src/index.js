import { consoleFactory } from './console';

const WebConsole = {
    consoleFactory,
};

window.WebConsole = WebConsole;

const console = consoleFactory();
console.log('chk this', { abc: 'xyx' }, [1, 2, 3, 4, [5, 6]]);

export { console, consoleFactory };
