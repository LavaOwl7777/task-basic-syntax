export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.

| Символ | Значение |
| ------ | -------- |
| I      | 1        |
| V      | 5        |
| X      | 10       |
| L      | 50       |
| C      | 100      |
| D      | 500      |
| M      | 1000     |
     */
    let len = 0;
    len = str.length;

    let i = 0;

    while (i <= len) {
        switch (str.charAt(i)) {
            case 'M':
                result += 1000;
                break;

            case 'D':
                result += 500;
                break;

            case 'C':
                if (str.charAt(i + 1) === 'D') {
                    result += 400;
                    i += 1;
                } else {
                    if (str.charAt(i + 1) === 'M') {
                        result += 900;
                        i += 1;
                    } else {
                        result += 100;
                    }
                }

                break;

            case 'L':
                result += 50;
                break;

            case 'X':
                if (str.charAt(i + 1) === 'L') {
                    result += 40;
                    i += 1;
                } else {
                    if (str.charAt(i + 1) === 'C') {
                        result += 90;
                        i += 1;
                    } else {
                        result += 10;
                    }
                }

                break;

            case 'V':
                result += 5;
                break;

            case 'I':
                if (str.charAt(i + 1) === 'V') {
                    result += 4;
                    i += 1;
                } else {
                    if (str.charAt(i + 1) === 'X') {
                        result += 9;
                        i += 1;
                    } else {
                        result += 1;
                    }
                }

                break;
        }
        i += 1;
    }
    return result;
}
