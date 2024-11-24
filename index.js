import lodash from 'lodash';

/**
 * Возвращает массив квадратов чисел.
 * @param {number[]} numbers - Массив чисел.
 * @returns {number[]} - Массив квадратов чисел.
 */
export function squareNumbers(numbers) {
    return lodash.map(numbers, (n) => n * n);
}

/**
 * Группирует массив объектов по указанному ключу.
 * @param {Object[]} items - Массив объектов.
 * @param {string} key - Ключ для группировки.
 * @returns {Object} - Объект, сгруппированный по ключу.
 */
export function groupBy(items, key) {
    return lodash.groupBy(items, key);
}
