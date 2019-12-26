import { consoleFactory } from './console';

const WebConsole = {
    consoleFactory,
};

window.console = consoleFactory();
window.WebConsole = WebConsole;

export { consoleFactory };
