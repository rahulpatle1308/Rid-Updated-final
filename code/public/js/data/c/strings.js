QuizData.questions.push(
  // ============ LEVEL 1: STRING BASICS - DECLARATION AND INITIALIZATION (1-5) ============
  {
    id: 'c_str_01',
    topicId: 'c_strings',
    question: 'Declare a character array to store the string "Hello"',
    mathSolution: 'Array needs 6 characters (5 letters + null terminator)',
    codeSolution: 'char str[6] = "Hello";',
    hint: 'Don\'t forget space for null character \\0'
  },
  {
    id: 'c_str_02',
    topicId: 'c_strings',
    question: 'Initialize a string pointer to point to "World"',
    mathSolution: 'Pointer points to string literal in read-only memory',
    codeSolution: 'char *str = "World";',
    hint: 'String literals are arrays of characters'
  },
  {
    id: 'c_str_03',
    topicId: 'c_strings',
    question: 'Create an empty string of size 20',
    mathSolution: 'Can store up to 19 characters + null terminator',
    codeSolution: 'char str[20] = "";',
    hint: 'Empty string still needs null terminator'
  },
  {
    id: 'c_str_04',
    topicId: 'c_strings',
    question: 'Declare a string without specifying size',
    mathSolution: 'Compiler automatically allocates exact size needed',
    codeSolution: 'char str[] = "Programming";',
    hint: 'Size is determined by the initializer'
  },
  {
    id: 'c_str_05',
    topicId: 'c_strings',
    question: 'Create an array of 5 strings',
    mathSolution: '2D array with 5 rows, each can hold strings',
    codeSolution: 'char names[5][20];',
    hint: 'First dimension is number of strings, second is max length'
  },

  // ============ LEVEL 2: STRING INPUT/OUTPUT (6-10) ============
  {
    id: 'c_str_06',
    topicId: 'c_strings',
    question: 'Read a string using scanf (without spaces)',
    mathSolution: 'scanf stops at first whitespace',
    codeSolution: 'scanf("%s", str);',
    hint: 'No & operator needed for character arrays'
  },
  {
    id: 'c_str_07',
    topicId: 'c_strings',
    question: 'Read a line of text including spaces',
    mathSolution: 'fgets reads until newline or size-1 characters',
    codeSolution: 'fgets(str, sizeof(str), stdin);',
    hint: 'fgets includes newline if space allows'
  },
  {
    id: 'c_str_08',
    topicId: 'c_strings',
    question: 'Print a string using printf',
    mathSolution: 'Prints characters until null terminator',
    codeSolution: 'printf("%s", str);',
    hint: '%s format specifier for strings'
  },
  {
    id: 'c_str_09',
    topicId: 'c_strings',
    question: 'Print first 5 characters of a string',
    mathSolution: 'Use precision specifier in printf',
    codeSolution: 'printf("%.5s", str);',
    hint: '%.*s allows dynamic precision'
  },
  {
    id: 'c_str_10',
    topicId: 'c_strings',
    question: 'Read string with gets() (deprecated)',
    mathSolution: 'Dangerous - no bounds checking',
    codeSolution: 'gets(str); // Never use this',
    hint: 'Use fgets() instead for safety'
  },

  // ============ LEVEL 3: STRING LENGTH (11-15) ============
  {
    id: 'c_str_11',
    topicId: 'c_strings',
    question: 'Find length of string "Hello" using strlen',
    mathSolution: 'Length is 5 (excludes null terminator)',
    codeSolution: 'int len = strlen("Hello");',
    hint: 'strlen returns number of characters before \\0'
  },
  {
    id: 'c_str_12',
    topicId: 'c_strings',
    question: 'Calculate string length manually',
    mathSolution: 'Iterate until null terminator found',
    codeSolution: 'for(len = 0; str[len] != \'\\0\'; len++);',
    hint: 'Stop when character is \\0'
  },
  {
    id: 'c_str_13',
    topicId: 'c_strings',
    question: 'Find length of empty string',
    mathSolution: 'Empty string length is 0',
    codeSolution: 'int len = strlen("");',
    hint: 'String with just null terminator'
  },
  {
    id: 'c_str_14',
    topicId: 'c_strings',
    question: 'Compare string lengths of two strings',
    mathSolution: 'Use strlen() and compare results',
    codeSolution: 'if(strlen(s1) > strlen(s2))',
    hint: 'Length comparison is numeric'
  },
  {
    id: 'c_str_15',
    topicId: 'c_strings',
    question: 'Get size of character array (not string length)',
    mathSolution: 'sizeof gives total bytes allocated',
    codeSolution: 'int size = sizeof(str);',
    hint: 'Different from strlen for arrays'
  },

  // ============ LEVEL 4: STRING COPY (16-20) ============
  {
    id: 'c_str_16',
    topicId: 'c_strings',
    question: 'Copy string using strcpy',
    mathSolution: 'Copies including null terminator',
    codeSolution: 'strcpy(dest, src);',
    hint: 'Ensure destination has enough space'
  },
  {
    id: 'c_str_17',
    topicId: 'c_strings',
    question: 'Copy first n characters using strncpy',
    mathSolution: 'Copies n chars, may not add null terminator',
    codeSolution: 'strncpy(dest, src, n);',
    hint: 'Manually add null terminator if needed'
  },
  {
    id: 'c_str_18',
    topicId: 'c_strings',
    question: 'Copy string manually without library functions',
    mathSolution: 'Loop until null terminator from source',
    codeSolution: 'while((dest[i] = src[i]) != \'\\0\') i++;',
    hint: 'Copy character by character'
  },
  {
    id: 'c_str_19',
    topicId: 'c_strings',
    question: 'Create duplicate of string using strdup',
    mathSolution: 'Allocates memory and copies string',
    codeSolution: 'char *copy = strdup(original);',
    hint: 'Must free() the allocated memory'
  },
  {
    id: 'c_str_20',
    topicId: 'c_strings',
    question: 'Safe string copy with bounds checking',
    mathSolution: 'Use strlcpy or snprintf for safety',
    codeSolution: 'snprintf(dest, dest_size, "%s", src);',
    hint: 'snprintf guarantees null termination'
  },

  // ============ LEVEL 5: STRING CONCATENATION (21-25) ============
  {
    id: 'c_str_21',
    topicId: 'c_strings',
    question: 'Concatenate two strings using strcat',
    mathSolution: 'Appends src to end of dest',
    codeSolution: 'strcat(dest, src);',
    hint: 'Dest must have enough space'
  },
  {
    id: 'c_str_22',
    topicId: 'c_strings',
    question: 'Concatenate with limit using strncat',
    mathSolution: 'Appends up to n characters',
    codeSolution: 'strncat(dest, src, n);',
    hint: 'Always adds null terminator'
  },
  {
    id: 'c_str_23',
    topicId: 'c_strings',
    question: 'Manually concatenate two strings',
    mathSolution: 'Find end of first, then copy second',
    codeSolution: 'while(dest[i]) i++; while((dest[i++] = src[j++]));',
    hint: 'First find null of dest, then copy src'
  },
  {
    id: 'c_str_24',
    topicId: 'c_strings',
    question: 'Append character to string',
    mathSolution: 'Find end, add char, add null terminator',
    codeSolution: 'int len = strlen(str); str[len] = ch; str[len+1] = \'\\0\';',
    hint: 'Need space for 2 more characters'
  },
  {
    id: 'c_str_25',
    topicId: 'c_strings',
    question: 'Combine multiple strings into one',
    mathSolution: 'Calculate total length, allocate, concatenate',
    codeSolution: 'strcpy(result, s1); strcat(result, s2); strcat(result, s3);',
    hint: 'Ensure result buffer is large enough'
  },

  // ============ LEVEL 6: STRING COMPARISON (26-30) ============
  {
    id: 'c_str_26',
    topicId: 'c_strings',
    question: 'Compare two strings using strcmp',
    mathSolution: 'Returns 0 if equal, negative if s1<s2, positive if s1>s2',
    codeSolution: 'int result = strcmp(s1, s2);',
    hint: 'Compares lexicographically'
  },
  {
    id: 'c_str_27',
    topicId: 'c_strings',
    question: 'Compare first n characters using strncmp',
    mathSolution: 'Compare only first n chars',
    codeSolution: 'int result = strncmp(s1, s2, n);',
    hint: 'Useful for prefixes'
  },
  {
    id: 'c_str_28',
    topicId: 'c_strings',
    question: 'Case-insensitive string comparison',
    mathSolution: 'Convert to same case before comparing',
    codeSolution: 'int result = strcasecmp(s1, s2);',
    hint: 'strcasecmp on Unix, stricmp on Windows'
  },
  {
    id: 'c_str_29',
    topicId: 'c_strings',
    question: 'Check if two strings are equal',
    mathSolution: 'strcmp returns 0 for equality',
    codeSolution: 'if(strcmp(s1, s2) == 0)',
    hint: 'Not if(!strcmp(s1,s2)) which is common'
  },
  {
    id: 'c_str_30',
    topicId: 'c_strings',
    question: 'Manually compare two strings',
    mathSolution: 'Compare char by char until mismatch or end',
    codeSolution: 'while(*s1 && *s1 == *s2) { s1++; s2++; } return *s1 - *s2;',
    hint: 'Return difference of first mismatching chars'
  },

  // ============ LEVEL 7: STRING SEARCHING (31-35) ============
  {
    id: 'c_str_31',
    topicId: 'c_strings',
    question: 'Find first occurrence of character in string',
    mathSolution: 'Search linearly for character',
    codeSolution: 'char *pos = strchr(str, ch);',
    hint: 'Returns pointer to first match or NULL'
  },
  {
    id: 'c_str_32',
    topicId: 'c_strings',
    question: 'Find last occurrence of character in string',
    mathSolution: 'Search from end backwards',
    codeSolution: 'char *pos = strrchr(str, ch);',
    hint: 'r stands for reverse'
  },
  {
    id: 'c_str_33',
    topicId: 'c_strings',
    question: 'Find first occurrence of substring',
    mathSolution: 'Search for substring pattern',
    codeSolution: 'char *pos = strstr(str, substr);',
    hint: 'Returns pointer to start of match'
  },
  {
    id: 'c_str_34',
    topicId: 'c_strings',
    question: 'Find any character from set in string',
    mathSolution: 'Search for first char that matches any in set',
    codeSolution: 'char *pos = strpbrk(str, charset);',
    hint: 'Returns pointer to first matching char'
  },
  {
    id: 'c_str_35',
    topicId: 'c_strings',
    question: 'Find first non-matching character',
    mathSolution: 'Skip characters that match the set',
    codeSolution: 'size_t len = strspn(str, charset);',
    hint: 'Returns number of matching chars at start'
  },

  // ============ LEVEL 8: STRING TOKENIZATION (36-40) ============
  {
    id: 'c_str_36',
    topicId: 'c_strings',
    question: 'Split string into tokens using strtok',
    mathSolution: 'Tokenizes based on delimiters',
    codeSolution: 'char *token = strtok(str, delimiters);',
    hint: 'First call with string, subsequent with NULL'
  },
  {
    id: 'c_str_37',
    topicId: 'c_strings',
    question: 'Continue tokenizing with strtok',
    mathSolution: 'Pass NULL for subsequent tokens',
    codeSolution: 'token = strtok(NULL, delimiters);',
    hint: 'Function maintains internal state'
  },
  {
    id: 'c_str_38',
    topicId: 'c_strings',
    question: 'Thread-safe tokenization',
    mathSolution: 'Use strtok_r or strtok_s for reentrancy',
    codeSolution: 'char *saveptr; token = strtok_r(str, delim, &saveptr);',
    hint: 'Pass save pointer for context'
  },
  {
    id: 'c_str_39',
    topicId: 'c_strings',
    question: 'Count tokens in a string',
    mathSolution: 'Tokenize and count until NULL',
    codeSolution: 'while(strtok(NULL, delim)) count++;',
    hint: 'Make a copy before tokenizing'
  },
  {
    id: 'c_str_40',
    topicId: 'c_strings',
    question: 'Extract first word from sentence',
    mathSolution: 'Tokenize with space as delimiter',
    codeSolution: 'char *word = strtok(sentence, " ");',
    hint: 'Modifies original string'
  },

  // ============ LEVEL 9: CHARACTER CLASSIFICATION (41-45) ============
  {
    id: 'c_str_41',
    topicId: 'c_strings',
    question: 'Check if character is uppercase',
    mathSolution: 'Use isupper() from ctype.h',
    codeSolution: 'if(isupper(ch))',
    hint: 'Include <ctype.h>'
  },
  {
    id: 'c_str_42',
    topicId: 'c_strings',
    question: 'Check if character is lowercase',
    mathSolution: 'Use islower() function',
    codeSolution: 'if(islower(ch))',
    hint: 'Returns non-zero if true'
  },
  {
    id: 'c_str_43',
    topicId: 'c_strings',
    question: 'Check if character is digit',
    mathSolution: 'Use isdigit() function',
    codeSolution: 'if(isdigit(ch))',
    hint: 'Digits are 0-9'
  },
  {
    id: 'c_str_44',
    topicId: 'c_strings',
    question: 'Check if character is alphabetic',
    mathSolution: 'Use isalpha() function',
    codeSolution: 'if(isalpha(ch))',
    hint: 'Both uppercase and lowercase'
  },
  {
    id: 'c_str_45',
    topicId: 'c_strings',
    question: 'Check if character is alphanumeric',
    mathSolution: 'Use isalnum() function',
    codeSolution: 'if(isalnum(ch))',
    hint: 'Letters or digits'
  },

  // ============ LEVEL 10: CHARACTER CONVERSION (46-50) ============
  {
    id: 'c_str_46',
    topicId: 'c_strings',
    question: 'Convert character to uppercase',
    mathSolution: 'Use toupper() function',
    codeSolution: 'char upper = toupper(ch);',
    hint: 'Returns uppercase version if lowercase'
  },
  {
    id: 'c_str_47',
    topicId: 'c_strings',
    question: 'Convert character to lowercase',
    mathSolution: 'Use tolower() function',
    codeSolution: 'char lower = tolower(ch);',
    hint: 'Returns lowercase version if uppercase'
  },
  {
    id: 'c_str_48',
    topicId: 'c_strings',
    question: 'Convert entire string to uppercase',
    mathSolution: 'Loop through and convert each char',
    codeSolution: 'for(i = 0; str[i]; i++) str[i] = toupper(str[i]);',
    hint: 'Modifies string in place'
  },
  {
    id: 'c_str_49',
    topicId: 'c_strings',
    question: 'Convert entire string to lowercase',
    mathSolution: 'Loop through and convert each char',
    codeSolution: 'for(i = 0; str[i]; i++) str[i] = tolower(str[i]);',
    hint: 'Non-alphabetic chars unchanged'
  },
  {
    id: 'c_str_50',
    topicId: 'c_strings',
    question: 'Toggle case of string',
    mathSolution: 'Uppercase to lowercase and vice versa',
    codeSolution: 'if(isupper(str[i])) str[i] = tolower(str[i]); else if(islower(str[i])) str[i] = toupper(str[i]);',
    hint: 'Check case before converting'
  },

  // ============ LEVEL 11: STRING TO NUMBER CONVERSION (51-55) ============
  {
    id: 'c_str_51',
    topicId: 'c_strings',
    question: 'Convert string to integer',
    mathSolution: 'Use atoi() function',
    codeSolution: 'int num = atoi("123");',
    hint: 'Returns 0 if conversion fails'
  },
  {
    id: 'c_str_52',
    topicId: 'c_strings',
    question: 'Convert string to long integer',
    mathSolution: 'Use strtol() for better error handling',
    codeSolution: 'long num = strtol(str, NULL, 10);',
    hint: 'Base 10 for decimal'
  },
  {
    id: 'c_str_53',
    topicId: 'c_strings',
    question: 'Convert string to double',
    mathSolution: 'Use atof() or strtod()',
    codeSolution: 'double val = atof("3.14");',
    hint: 'Handles decimal points'
  },
  {
    id: 'c_str_54',
    topicId: 'c_strings',
    question: 'Convert string to float with error checking',
    mathSolution: 'Use strtof() and check end pointer',
    codeSolution: 'char *end; float f = strtof(str, &end);',
    hint: 'end points to first invalid character'
  },
  {
    id: 'c_str_55',
    topicId: 'c_strings',
    question: 'Convert hexadecimal string to integer',
    mathSolution: 'Use strtol with base 16',
    codeSolution: 'long val = strtol("1A", NULL, 16);',
    hint: 'Handles 0x prefix optionally'
  },

  // ============ LEVEL 12: NUMBER TO STRING CONVERSION (56-60) ============
  {
    id: 'c_str_56',
    topicId: 'c_strings',
    question: 'Convert integer to string',
    mathSolution: 'Use sprintf() function',
    codeSolution: 'sprintf(str, "%d", num);',
    hint: 'Ensure buffer is large enough'
  },
  {
    id: 'c_str_57',
    topicId: 'c_strings',
    question: 'Convert float to string with precision',
    mathSolution: 'Use sprintf with format specifier',
    codeSolution: 'sprintf(str, "%.2f", 3.14159);',
    hint: '%.2f shows 2 decimal places'
  },
  {
    id: 'c_str_58',
    topicId: 'c_strings',
    question: 'Safe integer to string conversion',
    mathSolution: 'Use snprintf to prevent overflow',
    codeSolution: 'snprintf(str, sizeof(str), "%d", num);',
    hint: 'Writes at most size bytes'
  },
  {
    id: 'c_str_59',
    topicId: 'c_strings',
    question: 'Convert integer to binary string',
    mathSolution: 'Manually convert or use bit operations',
    codeSolution: 'itoa(num, str, 2); // Not standard C',
    hint: 'Non-standard, implement manually'
  },
  {
    id: 'c_str_60',
    topicId: 'c_strings',
    question: 'Convert integer to hexadecimal string',
    mathSolution: 'Use %x format specifier',
    codeSolution: 'sprintf(str, "%x", num);',
    hint: '%X for uppercase hex'
  },

  // ============ LEVEL 13: MEMORY OPERATIONS (61-65) ============
  {
    id: 'c_str_61',
    topicId: 'c_strings',
    question: 'Copy memory block (may contain nulls)',
    mathSolution: 'memcpy copies n bytes regardless of content',
    codeSolution: 'memcpy(dest, src, n);',
    hint: 'For non-string binary data'
  },
  {
    id: 'c_str_62',
    topicId: 'c_strings',
    question: 'Compare memory blocks',
    mathSolution: 'memcmp compares byte by byte',
    codeSolution: 'int result = memcmp(ptr1, ptr2, n);',
    hint: 'Useful for binary data'
  },
  {
    id: 'c_str_63',
    topicId: 'c_strings',
    question: 'Set memory block to specific value',
    mathSolution: 'memset fills with byte value',
    codeSolution: 'memset(str, 0, sizeof(str));',
    hint: 'Commonly used to initialize'
  },
  {
    id: 'c_str_64',
    topicId: 'c_strings',
    question: 'Move overlapping memory blocks',
    mathSolution: 'memmove handles overlap safely',
    codeSolution: 'memmove(dest, src, n);',
    hint: 'Safer than memcpy for overlap'
  },
  {
    id: 'c_str_65',
    topicId: 'c_strings',
    question: 'Search for byte in memory',
    mathSolution: 'memchr finds first occurrence',
    codeSolution: 'void *pos = memchr(ptr, byte, n);',
    hint: 'Works with any data type'
  },

  // ============ LEVEL 14: STRING MANIPULATION - ADVANCED (66-70) ============
  {
    id: 'c_str_66',
    topicId: 'c_strings',
    question: 'Reverse a string in place',
    mathSolution: 'Swap first with last, move inward',
    codeSolution: 'for(i = 0, j = len-1; i < j; i++, j--) {\n    char temp = str[i];\n    str[i] = str[j];\n    str[j] = temp;\n}',
    hint: 'Stop when indices cross'
  },
  {
    id: 'c_str_67',
    topicId: 'c_strings',
    question: 'Remove trailing newline from fgets input',
    mathSolution: 'Find newline and replace with null',
    codeSolution: 'str[strcspn(str, "\\n")] = 0;',
    hint: 'strcspn finds first occurrence'
  },
  {
    id: 'c_str_68',
    topicId: 'c_strings',
    question: 'Trim leading whitespace',
    mathSolution: 'Move pointer past whitespace',
    codeSolution: 'while(isspace(*str)) str++;',
    hint: 'Returns pointer inside original string'
  },
  {
    id: 'c_str_69',
    topicId: 'c_strings',
    question: 'Trim trailing whitespace',
    mathSolution: 'Find end and move back over whitespace',
    codeSolution: 'int len = strlen(str);\nwhile(len > 0 && isspace(str[len-1]))\n    str[--len] = 0;',
    hint: 'Modifies string by adding nulls'
  },
  {
    id: 'c_str_70',
    topicId: 'c_strings',
    question: 'Remove all occurrences of character',
    mathSolution: 'Shift characters left when match found',
    codeSolution: 'int j = 0;\nfor(int i = 0; str[i]; i++)\n    if(str[i] != ch) str[j++] = str[i];\nstr[j] = 0;',
    hint: 'Use two indices - read and write'
  },

  // ============ LEVEL 15: STRING VALIDATION (71-75) ============
  {
    id: 'c_str_71',
    topicId: 'c_strings',
    question: 'Check if string is palindrome',
    mathSolution: 'Compare first with last, etc',
    codeSolution: 'for(i = 0, j = len-1; i < j; i++, j--)\n    if(str[i] != str[j]) return 0;',
    hint: 'Ignore case for flexibility'
  },
  {
    id: 'c_str_72',
    topicId: 'c_strings',
    question: 'Check if string contains only digits',
    mathSolution: 'Verify each character is digit',
    codeSolution: 'for(i = 0; str[i]; i++)\n    if(!isdigit(str[i])) return 0;',
    hint: 'Empty string? Handle accordingly'
  },
  {
    id: 'c_str_73',
    topicId: 'c_strings',
    question: 'Validate email format (simple)',
    mathSolution: 'Check for @ and . after @',
    codeSolution: 'char *at = strchr(email, \'@\');\nchar *dot = strrchr(email, \'.\');',
    hint: 'Very basic validation only'
  },
  {
    id: 'c_str_74',
    topicId: 'c_strings',
    question: 'Check if string starts with prefix',
    mathSolution: 'Compare first n characters',
    codeSolution: 'if(strncmp(str, prefix, strlen(prefix)) == 0)',
    hint: 'n is length of prefix'
  },
  {
    id: 'c_str_75',
    topicId: 'c_strings',
    question: 'Check if string ends with suffix',
    mathSolution: 'Compare from end backwards',
    codeSolution: 'int len = strlen(str);\nint slen = strlen(suffix);\nif(len >= slen && !strcmp(str + len - slen, suffix))',
    hint: 'Move pointer to possible start of suffix'
  },

  // ============ LEVEL 16: DYNAMIC STRING ALLOCATION (76-80) ============
  {
    id: 'c_str_76',
    topicId: 'c_strings',
    question: 'Allocate memory for string dynamically',
    mathSolution: 'Use malloc to allocate space',
    codeSolution: 'char *str = (char*)malloc(size);',
    hint: 'Remember to free later'
  },
  {
    id: 'c_str_77',
    topicId: 'c_strings',
    question: 'Create dynamic copy of string',
    mathSolution: 'Allocate and copy',
    codeSolution: 'char *copy = malloc(strlen(orig) + 1);\nstrcpy(copy, orig);',
    hint: '+1 for null terminator'
  },
  {
    id: 'c_str_78',
    topicId: 'c_strings',
    question: 'Resize dynamically allocated string',
    mathSolution: 'Use realloc to change size',
    codeSolution: 'str = (char*)realloc(str, new_size);',
    hint: 'May move to new location'
  },
  {
    id: 'c_str_79',
    topicId: 'c_strings',
    question: 'Free dynamically allocated string',
    mathSolution: 'Use free() to deallocate',
    codeSolution: 'free(str); str = NULL;',
    hint: 'Avoid double free'
  },
  {
    id: 'c_str_80',
    topicId: 'c_strings',
    question: 'Concatenate using dynamic allocation',
    mathSolution: 'Allocate new space for result',
    codeSolution: 'char *result = malloc(strlen(s1) + strlen(s2) + 1);\nsprintf(result, "%s%s", s1, s2);',
    hint: 'sprintf does concatenation'
  },

  // ============ LEVEL 17: WIDE CHARACTERS AND UNICODE (81-85) ============
  {
    id: 'c_str_81',
    topicId: 'c_strings',
    question: 'Declare wide character string',
    mathSolution: 'Use wchar_t type for Unicode',
    codeSolution: 'wchar_t wstr[] = L"Hello";',
    hint: 'L prefix for wide literals'
  },
  {
    id: 'c_str_82',
    topicId: 'c_strings',
    question: 'Print wide character string',
    mathSolution: 'Use wprintf or %ls with printf',
    codeSolution: 'wprintf(L"%ls", wstr);',
    hint: 'Set locale for proper output'
  },
  {
    id: 'c_str_83',
    topicId: 'c_strings',
    question: 'Get length of wide string',
    mathSolution: 'Use wcslen() function',
    codeSolution: 'int len = wcslen(wstr);',
    hint: 'Similar to strlen for wide chars'
  },
  {
    id: 'c_str_84',
    topicId: 'c_strings',
    question: 'Convert multibyte to wide character',
    mathSolution: 'Use mbstowcs() function',
    codeSolution: 'mbstowcs(wstr, mbstr, size);',
    hint: 'Depends on current locale'
  },
  {
    id: 'c_str_85',
    topicId: 'c_strings',
    question: 'Convert wide to multibyte string',
    mathSolution: 'Use wcstombs() function',
    codeSolution: 'wcstombs(mbstr, wstr, size);',
    hint: 'May lose information'
  },

  // ============ LEVEL 18: STRING ARRAYS (86-90) ============
  {
    id: 'c_str_86',
    topicId: 'c_strings',
    question: 'Create array of string literals',
    mathSolution: 'Array of pointers to strings',
    codeSolution: 'char *colors[] = {"Red", "Green", "Blue"};',
    hint: 'Strings may be in read-only memory'
  },
  {
    id: 'c_str_87',
    topicId: 'c_strings',
    question: 'Create mutable array of strings',
    mathSolution: '2D character array',
    codeSolution: 'char colors[3][10] = {"Red", "Green", "Blue"};',
    hint: 'Each row can be modified'
  },
  {
    id: 'c_str_88',
    topicId: 'c_strings',
    question: 'Sort array of strings alphabetically',
    mathSolution: 'Use qsort with strcmp',
    codeSolution: 'qsort(arr, n, sizeof(char*), strcmp);',
    hint: 'Compare function receives pointers to pointers'
  },
  {
    id: 'c_str_89',
    topicId: 'c_strings',
    question: 'Find longest string in array',
    mathSolution: 'Iterate and track maximum length',
    codeSolution: 'int max = strlen(arr[0]);\nfor(i = 1; i < n; i++)\n    if(strlen(arr[i]) > max) max = strlen(arr[i]);',
    hint: 'Store index of longest too'
  },
  {
    id: 'c_str_90',
    topicId: 'c_strings',
    question: 'Concatenate all strings in array',
    mathSolution: 'Calculate total length, allocate, concatenate',
    codeSolution: 'for(i = 0; i < n; i++)\n    strcat(result, arr[i]);',
    hint: 'Ensure result is large enough'
  },

  // ============ LEVEL 19: COMMAND LINE ARGUMENTS (91-95) ============
  {
    id: 'c_str_91',
    topicId: 'c_strings',
    question: 'Access command line arguments',
    mathSolution: 'argv[0] is program name, argv[1] first argument',
    codeSolution: 'int main(int argc, char *argv[])',
    hint: 'argc is argument count'
  },
  {
    id: 'c_str_92',
    topicId: 'c_strings',
    question: 'Convert command line argument to number',
    mathSolution: 'Use atoi or strtol on argv[1]',
    codeSolution: 'int num = atoi(argv[1]);',
    hint: 'Check argc first'
  },
  {
    id: 'c_str_93',
    topicId: 'c_strings',
    question: 'Check if enough arguments provided',
    mathSolution: 'Compare argc with required count',
    codeSolution: 'if(argc < 3) {\n    printf("Usage: ...");\n    exit(1);\n}',
    hint: 'Program name counts as argc=1'
  },
  {
    id: 'c_str_94',
    topicId: 'c_strings',
    question: 'Process all command line arguments',
    mathSolution: 'Loop through argv[1] to argv[argc-1]',
    codeSolution: 'for(i = 1; i < argc; i++)\n    printf("%s\\n", argv[i]);',
    hint: 'Start from index 1'
  },
  {
    id: 'c_str_95',
    topicId: 'c_strings',
    question: 'Concatenate all command line arguments',
    mathSolution: 'Calculate total length, allocate, concatenate',
    codeSolution: 'for(i = 1; i < argc; i++) {\n    strcat(result, argv[i]);\n    if(i < argc-1) strcat(result, " ");\n}',
    hint: 'Add spaces between arguments'
  },

  // ============ LEVEL 20: COMMON ALGORITHMS (96-100) ============
  {
    id: 'c_str_96',
    topicId: 'c_strings',
    question: 'Count word frequency in string',
    mathSolution: 'Tokenize and count occurrences',
    codeSolution: 'char *token = strtok(str, " ");\nwhile(token) {\n    if(strcmp(token, word) == 0) count++;\n    token = strtok(NULL, " ");\n}',
    hint: 'Make a copy before tokenizing'
  },
  {
    id: 'c_str_97',
    topicId: 'c_strings',
    question: 'Replace substring in string',
    mathSolution: 'Find occurrence, then replace',
    codeSolution: '// Complex - need to shift or allocate new\nchar *pos = strstr(str, old);\nif(pos) {\n    memmove(pos + strlen(new), pos + strlen(old), strlen(pos + strlen(old)) + 1);\n    memcpy(pos, new, strlen(new));\n}',
    hint: 'Consider using dynamic allocation'
  },
  {
    id: 'c_str_98',
    topicId: 'c_strings',
    question: 'Compress consecutive spaces to single space',
    mathSolution: 'Skip multiple spaces while copying',
    codeSolution: 'int j = 0;\nfor(int i = 0; str[i]; i++) {\n    if(!isspace(str[i]) || (j > 0 && !isspace(result[j-1])))\n        result[j++] = str[i];\n}\nresult[j] = 0;',
    hint: 'Keep track of last character written'
  },
  {
    id: 'c_str_99',
    topicId: 'c_strings',
    question: 'Find most frequent character',
    mathSolution: 'Count all characters, find max',
    codeSolution: 'int count[256] = {0};\nfor(i = 0; str[i]; i++)\n    count[(unsigned char)str[i]]++;',
    hint: 'Array index by ASCII value'
  },
  {
    id: 'c_str_100',
    topicId: 'c_strings',
    question: 'Generate all substrings of a string',
    mathSolution: 'Nested loops for start and end positions',
    codeSolution: 'for(int i = 0; i < len; i++)\n    for(int j = i; j < len; j++) {\n        for(int k = i; k <= j; k++) putchar(str[k]);\n        printf("\\n");\n    }',
    hint: 'Number of substrings = n*(n+1)/2'
  }
);