const DELIMITER = ', ';
const START_POS = 0;
const NO_OF_TRAIL_CHARS = 2;
const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';

class ObjectFormatter {
    static format(obj) {
        if (!obj) {
            throw new Error(INVALID_ARGUMENTS);
        }

        let formattedMessage = '';

        for (let propertyIndex in obj) {
            let property = obj[propertyIndex];

            if (typeof property !== 'function') {
                formattedMessage += `${property}${DELIMITER}`;
            }
        }

        formattedMessage = formattedMessage.substr(
            START_POS, formattedMessage.length - NO_OF_TRAIL_CHARS);

        return formattedMessage;
    }
}

module.exports = ObjectFormatter;
