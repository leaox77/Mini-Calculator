import Big from "big.js";
import operate from "./operate";
import numberValidation from "./numberValidation";

export default function operation(state, buttonName) {
    if (buttonName === "AC") {
        return {
            total: null,
            next: null,
            operation: null
        };
    }

    if (numberValidation(buttonName)) {
        if (buttonName === "0" && state.next === "0") {
            return {};
        }
        if (state.operation) {
            if (state.next) {
                return { next: state.next + buttonName };
            }
            return { next: buttonName };
        }
        if (state.next) {
            const next = state.nexy === "0" ? buttonName : state.next + buttonName;
            return {
                next,
                total: null
            }
        }
        return {
            next: buttonName,
            total: null
        }
    }

    if (buttonName === "%") {
        if (state.operation && state.next) {
            const result = operate(state.total, state.next, state.operation);

            return {
                total: Big(result).div(Big("100")).toString(),
                next: null,
                operation: null
            }
        }
        if (state.next) {
            return {
                next: Big(state.next).div(Big("100")).toString(),
            }
        }
        return {};
    }

    if (buttonName === ".") {
        if (state.next) {
            if (state.next.includes(".")) {
                return {};
            }
            return { next: state.next + "." };
        }
        
        return { next: "0." };
    }

    if (buttonName === "=") {
        if (state.next && state.operation) {
            return {
                total: operate(state.total, state.next, state.operation),
                next: null,
                operation: null
            }
        }
        return {};
    }

    if (buttonName === "+/-") {
        if (state.next) {
            return { next: (-1 * parseFloat(state.next)).toString() };
        }
        if (state.total) {
            return { total: (-1 * parseFloat(state.total)).toString() };
        }
        return {};
    }

    if (state.operation) {
        return {
            total: operate(state.total, state.next, state.operation),
            next: null,
            operation: buttonName
        }
    }

    if (!state.next) {
        return { operation: buttonName };
    }

    return {
        total: state.next,
        next: null,
        operation: buttonName
    }
}