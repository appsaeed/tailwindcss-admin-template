/**
 * Conditionally access class names
 *
 * @param name - A string, number, or object containing class names
 * @returns A space-separated string of class names
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ccn(...name: any): string {
    let classString = '';

    for (const className of name) {
        // Handle strings and numbers directly
        if (typeof className === 'string' || typeof className === 'number') {
            classString += ` ${className}`;
            continue;
        }

        // Handle objects efficiently
        if (typeof className === 'object') {
            for (const key in className) {
                // Only add classes with truthy values (including non-zero numbers)
                if (className[key]) {
                    classString += ` ${key}`;
                }
            }
        }
    }

    // Remove leading space, if present
    return classString.trim();
}
