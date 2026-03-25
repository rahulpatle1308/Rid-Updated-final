QuizData.questions.push(
  // ============ LEVEL 1: BASIC PRINTF (1-10) ============
  {
    id: 'c_io_1',
    topicId: 'c_input_output',
    question: 'Write a printf statement to print an integer variable x with value 10.',
    mathSolution: 'Display integer value 10',
    codeSolution: 'printf("%d", x);',
    hint: 'Use %d format specifier for integers'
  },
  {
    id: 'c_io_2',
    topicId: 'c_input_output',
    question: 'Write code to print a float variable pi with value 3.14159 showing 2 decimal places.',
    mathSolution: 'Display pi with 2 decimal digits: 3.14',
    codeSolution: 'printf("%.2f", pi);',
    hint: 'Use %.2f to limit decimal places'
  },
  {
    id: 'c_io_3',
    topicId: 'c_input_output',
    question: 'Write a printf statement to print a character variable ch with value A.',
    mathSolution: 'Display character A',
    codeSolution: 'printf("%c", ch);',
    hint: 'Use %c format specifier for characters'
  },
  {
    id: 'c_io_4',
    topicId: 'c_input_output',
    question: 'Write code to print a string "Hello" using printf.',
    mathSolution: 'Display the word Hello',
    codeSolution: 'printf("%s", "Hello");',
    hint: 'Use %s for strings'
  },
  {
    id: 'c_io_5',
    topicId: 'c_input_output',
    question: 'Write a printf to print the address of variable x in hexadecimal.',
    mathSolution: 'Display memory address in hex format',
    codeSolution: 'printf("%p", (void*)&x);',
    hint: 'Use %p format specifier for pointers'
  },
  {
    id: 'c_io_6',
    topicId: 'c_input_output',
    question: 'Write code to print an integer in octal format. Number is 64.',
    mathSolution: 'Convert 64 to octal = 100',
    codeSolution: 'printf("%o", 64);',
    hint: 'Use %o for octal representation'
  },
  {
    id: 'c_io_7',
    topicId: 'c_input_output',
    question: 'Write code to print an integer 255 in hexadecimal format.',
    mathSolution: 'Convert 255 to hexadecimal = FF',
    codeSolution: 'printf("%X", 255);',
    hint: 'Use %X for uppercase hexadecimal'
  },
  {
    id: 'c_io_8',
    topicId: 'c_input_output',
    question: 'Write a printf to print an integer with width 5, right aligned. Value is 42.',
    mathSolution: 'Print "   42" with 3 spaces before 42',
    codeSolution: 'printf("%5d", 42);',
    hint: 'Use %5d to specify minimum width'
  },
  {
    id: 'c_io_9',
    topicId: 'c_input_output',
    question: 'Write code to print an integer with width 5, left aligned. Value is 42.',
    mathSolution: 'Print "42   " with 3 spaces after 42',
    codeSolution: 'printf("%-5d", 42);',
    hint: 'Use %-5d for left alignment'
  },
  {
    id: 'c_io_10',
    topicId: 'c_input_output',
    question: 'Write a printf to print a float with total width 8 and 2 decimal places. Value is 123.456.',
    mathSolution: 'Print "  123.46" with 2 spaces before',
    codeSolution: 'printf("%8.2f", 123.456);',
    hint: 'Format: %width.precisionf'
  },

  // ============ LEVEL 2: BASIC SCANF (11-20) ============
  {
    id: 'c_io_11',
    topicId: 'c_input_output',
    question: 'Write scanf to read an integer into variable x.',
    mathSolution: 'Read integer from user input',
    codeSolution: 'scanf("%d", &x);',
    hint: 'Don\'t forget the & operator'
  },
  {
    id: 'c_io_12',
    topicId: 'c_input_output',
    question: 'Write code to read a float into variable f using scanf.',
    mathSolution: 'Read floating-point number',
    codeSolution: 'scanf("%f", &f);',
    hint: 'Use %f for float'
  },
  {
    id: 'c_io_13',
    topicId: 'c_input_output',
    question: 'Write scanf to read a character into variable ch.',
    mathSolution: 'Read a single character',
    codeSolution: 'scanf("%c", &ch);',
    hint: 'Use %c for character input'
  },
  {
    id: 'c_io_14',
    topicId: 'c_input_output',
    question: 'Write code to read a string into array str of size 50.',
    mathSolution: 'Read a word (no spaces)',
    codeSolution: 'scanf("%s", str);',
    hint: 'String arrays don\'t need &'
  },
  {
    id: 'c_io_15',
    topicId: 'c_input_output',
    question: 'Write scanf to read two integers separated by space into a and b.',
    mathSolution: 'Read values like: 10 20',
    codeSolution: 'scanf("%d %d", &a, &b);',
    hint: 'Use multiple format specifiers'
  },
  {
    id: 'c_io_16',
    topicId: 'c_input_output',
    question: 'Write code to read an integer and a float in one scanf statement.',
    mathSolution: 'Read input like: 45 3.14',
    codeSolution: 'scanf("%d %f", &i, &f);',
    hint: 'Combine different format specifiers'
  },
  {
    id: 'c_io_17',
    topicId: 'c_input_output',
    question: 'Write scanf to read a string with spaces using gets() alternative.',
    mathSolution: 'Read entire line including spaces',
    codeSolution: 'scanf("%[^\\n]", str);',
    hint: 'Use %[^\\n] to read until newline'
  },
  {
    id: 'c_io_18',
    topicId: 'c_input_output',
    question: 'Write code to read a hexadecimal number into variable hex.',
    mathSolution: 'Read hex like FF or 1A',
    codeSolution: 'scanf("%x", &hex);',
    hint: 'Use %x for hexadecimal input'
  },
  {
    id: 'c_io_19',
    topicId: 'c_input_output',
    question: 'Write scanf to read an octal number into variable oct.',
    mathSolution: 'Read octal like 17 or 777',
    codeSolution: 'scanf("%o", &oct);',
    hint: 'Use %o for octal input'
  },
  {
    id: 'c_io_20',
    topicId: 'c_input_output',
    question: 'Write code to read a double variable d using scanf.',
    mathSolution: 'Read double precision number',
    codeSolution: 'scanf("%lf", &d);',
    hint: 'Use %lf for double (long float)'
  },

  // ============ LEVEL 3: CHARACTER I/O (21-25) ============
  {
    id: 'c_io_21',
    topicId: 'c_input_output',
    question: 'Write code to read a character using getchar() and store in c.',
    mathSolution: 'Get single character from input',
    codeSolution: 'int c = getchar();',
    hint: 'getchar() returns int, not char'
  },
  {
    id: 'c_io_22',
    topicId: 'c_input_output',
    question: 'Write code to print character A using putchar().',
    mathSolution: 'Output character A',
    codeSolution: "putchar('A');",
    hint: 'putchar() outputs a single character'
  },
  {
    id: 'c_io_23',
    topicId: 'c_input_output',
    question: 'Write a loop using getchar() to read characters until EOF.',
    mathSolution: 'Read all input until end of file',
    codeSolution: 'while((c = getchar()) != EOF) { }',
    hint: 'EOF is end of file marker'
  },
  {
    id: 'c_io_24',
    topicId: 'c_input_output',
    question: 'Write code to print all characters from A to Z using putchar().',
    mathSolution: 'Output ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    codeSolution: "for(char c = 'A'; c <= 'Z'; c++) putchar(c);",
    hint: 'Characters can be incremented'
  },
  {
    id: 'c_io_25',
    topicId: 'c_input_output',
    question: 'Write code to read a line using getchar() until newline.',
    mathSolution: 'Read characters until \\n is encountered',
    codeSolution: "while((c = getchar()) != '\\n') { }",
    hint: 'Check for newline character'
  },

  // ============ LEVEL 4: STRING I/O (26-30) ============
  {
    id: 'c_io_26',
    topicId: 'c_input_output',
    question: 'Write code to print string "Hello World" using puts().',
    mathSolution: 'Output Hello World with newline',
    codeSolution: 'puts("Hello World");',
    hint: 'puts() automatically adds newline'
  },
  {
    id: 'c_io_27',
    topicId: 'c_input_output',
    question: 'Write code to read a string using gets() (though unsafe).',
    mathSolution: 'Read a line of text',
    codeSolution: 'gets(str);',
    hint: 'gets() is deprecated but shows concept'
  },
  {
    id: 'c_io_28',
    topicId: 'c_input_output',
    question: 'Write safe alternative to gets() using fgets().',
    mathSolution: 'Read line with buffer limit',
    codeSolution: 'fgets(str, sizeof(str), stdin);',
    hint: 'fgets() limits buffer size'
  },
  {
    id: 'c_io_29',
    topicId: 'c_input_output',
    question: 'Write printf to print integer with leading zeros, width 5. Value 42.',
    mathSolution: 'Print 00042',
    codeSolution: 'printf("%05d", 42);',
    hint: 'Use 0 flag for zero padding'
  },
  {
    id: 'c_io_30',
    topicId: 'c_input_output',
    question: 'Write code to print a float with sign always shown. Value 3.14.',
    mathSolution: 'Print +3.14',
    codeSolution: 'printf("%+f", 3.14);',
    hint: 'Use + flag to show sign'
  },

  // ============ LEVEL 5: FORMAT FLAGS (31-40) ============
  {
    id: 'c_io_31',
    topicId: 'c_input_output',
    question: 'Write printf to print integer with space for positive values. Value 42.',
    mathSolution: 'Print " 42" with a leading space',
    codeSolution: 'printf("% d", 42);',
    hint: 'Space flag leaves space for missing sign'
  },
  {
    id: 'c_io_32',
    topicId: 'c_input_output',
    question: 'Write code to print octal with 0 prefix. Value 64.',
    mathSolution: 'Print 0100 (octal with prefix)',
    codeSolution: 'printf("%#o", 64);',
    hint: 'Use # flag for alternate form'
  },
  {
    id: 'c_io_33',
    topicId: 'c_input_output',
    question: 'Write printf to print hex with 0x prefix. Value 255.',
    mathSolution: 'Print 0xFF',
    codeSolution: 'printf("%#X", 255);',
    hint: '# adds 0x for hex'
  },
  {
    id: 'c_io_34',
    topicId: 'c_input_output',
    question: 'Write code to print pointer address in hex with padding.',
    mathSolution: 'Display pointer with width 12',
    codeSolution: 'printf("%12p", (void*)ptr);',
    hint: 'Width can be applied to pointers'
  },
  {
    id: 'c_io_35',
    topicId: 'c_input_output',
    question: 'Write printf to print scientific notation of 123.456.',
    mathSolution: 'Print 1.234560e+02',
    codeSolution: 'printf("%e", 123.456);',
    hint: 'Use %e for scientific notation'
  },
  {
    id: 'c_io_36',
    topicId: 'c_input_output',
    question: 'Write code to print in shortest representation: %g for 123.456.',
    mathSolution: 'Print 123.456 (not scientific if shorter)',
    codeSolution: 'printf("%g", 123.456);',
    hint: '%g chooses %f or %e automatically'
  },
  {
    id: 'c_io_37',
    topicId: 'c_input_output',
    question: 'Write code to read 3 integers in one line and store in a,b,c.',
    mathSolution: 'Read values like: 1 2 3',
    codeSolution: 'scanf("%d %d %d", &a, &b, &c);',
    hint: 'Separate with spaces in format string'
  },
  {
    id: 'c_io_38',
    topicId: 'c_input_output',
    question: 'Write printf to print a table row: num, square, cube for 5.',
    mathSolution: 'Print: 5 25 125',
    codeSolution: 'printf("%d\\t%d\\t%d", num, num*num, num*num*num);',
    hint: 'Use \\t for tab alignment'
  },
  {
    id: 'c_io_39',
    topicId: 'c_input_output',
    question: 'Write code to read comma-separated values: 10,20,30.',
    mathSolution: 'Parse numbers separated by commas',
    codeSolution: 'scanf("%d,%d,%d", &a, &b, &c);',
    hint: 'Include commas in format string'
  },
  {
    id: 'c_io_40',
    topicId: 'c_input_output',
    question: 'Write printf with escape sequences to print "Hello" in quotes.',
    mathSolution: 'Print: "Hello"',
    codeSolution: 'printf("\\"Hello\\"");',
    hint: 'Use \\" to print double quotes'
  },

  // ============ LEVEL 6: RETURN VALUES & VALIDATION (41-45) ============
  {
    id: 'c_io_41',
    topicId: 'c_input_output',
    question: 'Write code to check if scanf successfully read an integer.',
    mathSolution: 'Check return value of scanf',
    codeSolution: 'if(scanf("%d", &x) == 1) { success }',
    hint: 'scanf returns number of successful conversions'
  },
  {
    id: 'c_io_42',
    topicId: 'c_input_output',
    question: 'Write code to count characters printed by printf.',
    mathSolution: 'Get number of characters output',
    codeSolution: 'int count = printf("Hello");',
    hint: 'printf returns number of characters printed'
  },
  {
    id: 'c_io_43',
    topicId: 'c_input_output',
    question: 'Write code to read until 2 valid integers are entered.',
    mathSolution: 'Continue reading until 2 numbers received',
    codeSolution: 'while(scanf("%d %d", &a, &b) != 2) { clear input }',
    hint: 'Check return value in loop'
  },
  {
    id: 'c_io_44',
    topicId: 'c_input_output',
    question: 'Write code to open a file "data.txt" for reading.',
    mathSolution: 'Open file in read mode',
    codeSolution: 'FILE *fp = fopen("data.txt", "r");',
    hint: 'Use "r" for read mode'
  },
  {
    id: 'c_io_45',
    topicId: 'c_input_output',
    question: 'Write code to open a file "output.txt" for writing.',
    mathSolution: 'Open file in write mode',
    codeSolution: 'FILE *fp = fopen("output.txt", "w");',
    hint: 'Use "w" for write mode'
  },

  // ============ LEVEL 7: FILE I/O BASICS (46-55) ============
  {
    id: 'c_io_46',
    topicId: 'c_input_output',
    question: 'Write fprintf to write integer 100 to file fp.',
    mathSolution: 'Write to file instead of console',
    codeSolution: 'fprintf(fp, "%d", 100);',
    hint: 'fprintf takes FILE* as first argument'
  },
  {
    id: 'c_io_47',
    topicId: 'c_input_output',
    question: 'Write fscanf to read integer from file fp into variable x.',
    mathSolution: 'Read integer from file',
    codeSolution: 'fscanf(fp, "%d", &x);',
    hint: 'fscanf works like scanf but from file'
  },
  {
    id: 'c_io_48',
    topicId: 'c_input_output',
    question: 'Write code to close a file pointer fp.',
    mathSolution: 'Close opened file',
    codeSolution: 'fclose(fp);',
    hint: 'Always close files after use'
  },
  {
    id: 'c_io_49',
    topicId: 'c_input_output',
    question: 'Write code to check if file opened successfully.',
    mathSolution: 'Verify file pointer is not NULL',
    codeSolution: 'if(fp == NULL) { error }',
    hint: 'fopen returns NULL on failure'
  },
  {
    id: 'c_io_50',
    topicId: 'c_input_output',
    question: 'Write fgetc() to read character from file fp.',
    mathSolution: 'Get next character from file',
    codeSolution: 'int ch = fgetc(fp);',
    hint: 'fgetc returns int for EOF detection'
  },
  {
    id: 'c_io_51',
    topicId: 'c_input_output',
    question: 'Write fputc() to write character A to file fp.',
    mathSolution: 'Write single character to file',
    codeSolution: "fputc('A', fp);",
    hint: 'fputc(char, FILE*)'
  },
  {
    id: 'c_io_52',
    topicId: 'c_input_output',
    question: 'Write code to copy file contents character by character.',
    mathSolution: 'Copy from source to destination',
    codeSolution: 'while((ch = fgetc(source)) != EOF) fputc(ch, dest);',
    hint: 'Read until EOF'
  },
  {
    id: 'c_io_53',
    topicId: 'c_input_output',
    question: 'Write fgets() to read a line from file fp into buffer of size 100.',
    mathSolution: 'Read line from file safely',
    codeSolution: 'fgets(buffer, 100, fp);',
    hint: 'fgets(buffer, size, stream)'
  },
  {
    id: 'c_io_54',
    topicId: 'c_input_output',
    question: 'Write fputs() to write string "Hello" to file fp.',
    mathSolution: 'Write string to file',
    codeSolution: 'fputs("Hello", fp);',
    hint: 'fputs doesn\'t add newline automatically'
  },
  {
    id: 'c_io_55',
    topicId: 'c_input_output',
    question: 'Write code to read all lines from file until EOF using fgets.',
    mathSolution: 'Process entire file line by line',
    codeSolution: 'while(fgets(line, sizeof(line), fp) != NULL) { }',
    hint: 'fgets returns NULL on EOF'
  },

  // ============ LEVEL 8: ADVANCED FILE I/O (56-65) ============
  {
    id: 'c_io_56',
    topicId: 'c_input_output',
    question: 'Write fprintf to write formatted table header to file.',
    mathSolution: 'Write "Name\\tAge\\tScore" to file',
    codeSolution: 'fprintf(fp, "Name\\tAge\\tScore\\n");',
    hint: 'Same format as printf'
  },
  {
    id: 'c_io_57',
    topicId: 'c_input_output',
    question: 'Write fscanf to read name and age from file.',
    mathSolution: 'Parse formatted data from file',
    codeSolution: 'fscanf(fp, "%s %d", name, &age);',
    hint: 'String doesn\'t need &'
  },
  {
    id: 'c_io_58',
    topicId: 'c_input_output',
    question: 'Write fwrite() to write structure s to file in binary mode.',
    mathSolution: 'Write binary data to file',
    codeSolution: 'fwrite(&s, sizeof(s), 1, fp);',
    hint: 'fwrite(ptr, size, count, stream)'
  },
  {
    id: 'c_io_59',
    topicId: 'c_input_output',
    question: 'Write fread() to read structure from binary file into s.',
    mathSolution: 'Read binary data from file',
    codeSolution: 'fread(&s, sizeof(s), 1, fp);',
    hint: 'fread returns number of items read'
  },
  {
    id: 'c_io_60',
    topicId: 'c_input_output',
    question: 'Write ungetc() to push character back to input stream.',
    mathSolution: 'Return character to input buffer',
    codeSolution: 'ungetc(ch, stdin);',
    hint: 'Use for lookahead operations'
  },
  {
    id: 'c_io_61',
    topicId: 'c_input_output',
    question: 'Write clearerr() to reset error and EOF indicators.',
    mathSolution: 'Clear file stream errors',
    codeSolution: 'clearerr(fp);',
    hint: 'Resets error state of stream'
  },
  {
    id: 'c_io_62',
    topicId: 'c_input_output',
    question: 'Write feof() to check if end of file reached.',
    mathSolution: 'Test for EOF condition',
    codeSolution: 'if(feof(fp)) { }',
    hint: 'Returns non-zero if EOF'
  },
  {
    id: 'c_io_63',
    topicId: 'c_input_output',
    question: 'Write ferror() to check for file errors.',
    mathSolution: 'Test for file stream errors',
    codeSolution: 'if(ferror(fp)) { }',
    hint: 'Returns non-zero if error'
  },
  {
    id: 'c_io_64',
    topicId: 'c_input_output',
    question: 'Write perror() to print error message for last error.',
    mathSolution: 'Print system error message',
    codeSolution: 'perror("Error message");',
    hint: 'Prints description of errno'
  },
  {
    id: 'c_io_65',
    topicId: 'c_input_output',
    question: 'Write sprintf() to format string into buffer.',
    mathSolution: 'Create formatted string in memory',
    codeSolution: 'sprintf(buffer, "%d + %d = %d", a, b, a+b);',
    hint: 'sprintf writes to character array'
  },

  // ============ LEVEL 9: STRING STREAMS & SAFETY (66-75) ============
  {
    id: 'c_io_66',
    topicId: 'c_input_output',
    question: 'Write sscanf() to parse data from string.',
    mathSolution: 'Extract values from string',
    codeSolution: 'sscanf("123 456", "%d %d", &x, &y);',
    hint: 'sscanf reads from string'
  },
  {
    id: 'c_io_67',
    topicId: 'c_input_output',
    question: 'Write snprintf() for safe string formatting with buffer size 50.',
    mathSolution: 'Formatted output with size limit',
    codeSolution: 'snprintf(buffer, 50, "%s", str);',
    hint: 'Prevents buffer overflow'
  },
  {
    id: 'c_io_68',
    topicId: 'c_input_output',
    question: 'Write code to print a box border using characters.',
    mathSolution: 'Draw rectangle with +, -, |',
    codeSolution: 'printf("+----+\\n|    |\\n+----+");',
    hint: 'Use ASCII line characters'
  },
  {
    id: 'c_io_69',
    topicId: 'c_input_output',
    question: 'Write printf to print a right triangle pattern of stars with 5 rows.',
    mathSolution: 'Print:\\n*\\n**\\n***\\n****\\n*****',
    codeSolution: 'for(i = 1; i <= 5; i++) {\n    for(j = 1; j <= i; j++) printf("*");\n    printf("\\n");\n}',
    hint: 'Nested loops for pattern'
  },
  {
    id: 'c_io_70',
    topicId: 'c_input_output',
    question: 'Write code to clear screen using escape sequences.',
    mathSolution: 'Clear console screen',
    codeSolution: 'printf("\\033[2J\\033[1;1H");',
    hint: 'ANSI escape codes for terminal'
  },
  {
    id: 'c_io_71',
    topicId: 'c_input_output',
    question: 'Write printf to print colored text (red) using ANSI codes.',
    mathSolution: 'Change text color to red',
    codeSolution: 'printf("\\033[31mRed Text\\033[0m");',
    hint: '\\033[31m sets red, \\033[0m resets'
  },
  {
    id: 'c_io_72',
    topicId: 'c_input_output',
    question: 'Write code to clear input buffer after scanf.',
    mathSolution: 'Remove leftover newline from buffer',
    codeSolution: "while(getchar() != '\\n');",
    hint: 'Loop reads until newline'
  },
  {
    id: 'c_io_73',
    topicId: 'c_input_output',
    question: 'Write code to read integer, handle non-numeric input.',
    mathSolution: 'Validate numeric input',
    codeSolution: 'while(scanf("%d", &num) != 1) {\n    while(getchar() != \'\\n\');\n    printf("Try again: ");\n}',
    hint: 'Clear invalid input and retry'
  },
  {
    id: 'c_io_74',
    topicId: 'c_input_output',
    question: 'Write fprintf to stderr for error message.',
    mathSolution: 'Print error to standard error',
    codeSolution: 'fprintf(stderr, "Error occurred\\n");',
    hint: 'stderr is unbuffered error stream'
  },
  {
    id: 'c_io_75',
    topicId: 'c_input_output',
    question: 'Write code to redirect stdout to file using freopen.',
    mathSolution: 'Change stdout to file',
    codeSolution: 'freopen("output.txt", "w", stdout);',
    hint: 'Redirects all printf to file'
  },

  // ============ LEVEL 10: ADVANCED TECHNIQUES (76-85) ============
  {
    id: 'c_io_76',
    topicId: 'c_input_output',
    question: 'Write code to read from stdin using fread.',
    mathSolution: 'Read binary data from standard input',
    codeSolution: 'fread(buffer, 1, sizeof(buffer), stdin);',
    hint: 'stdin is FILE* stream'
  },
  {
    id: 'c_io_77',
    topicId: 'c_input_output',
    question: 'Write printf to print float with thousands separator (locale-specific).',
    mathSolution: 'Print 1,234.56',
    codeSolution: 'setlocale(LC_NUMERIC, ""); printf("%\'f", 1234.56);',
    hint: '\' flag adds thousands separator'
  },
  {
    id: 'c_io_78',
    topicId: 'c_input_output',
    question: 'Write printf with dynamic width using *.',
    mathSolution: 'Width specified by variable',
    codeSolution: 'printf("%*d", width, value);',
    hint: '* takes width from argument'
  },
  {
    id: 'c_io_79',
    topicId: 'c_input_output',
    question: 'Write printf with dynamic precision using *.',
    mathSolution: 'Precision from variable',
    codeSolution: 'printf("%.*f", precision, value);',
    hint: '.* takes precision from argument'
  },
  {
    id: 'c_io_80',
    topicId: 'c_input_output',
    question: 'Write printf to print a backslash character.',
    mathSolution: 'Print single backslash',
    codeSolution: 'printf("\\\\");',
    hint: 'Backslash needs escaping'
  },
  {
    id: 'c_io_81',
    topicId: 'c_input_output',
    question: 'Write printf to print a percent sign.',
    mathSolution: 'Print % character',
    codeSolution: 'printf("%%");',
    hint: 'Use %% to print %'
  },
  {
    id: 'c_io_82',
    topicId: 'c_input_output',
    question: 'Write code to print ASCII table from 32 to 126.',
    mathSolution: 'Display printable ASCII characters',
    codeSolution: 'for(i = 32; i <= 126; i++) printf("%d: %c\\n", i, i);',
    hint: 'Print both value and character'
  },
  {
    id: 'c_io_83',
    topicId: 'c_input_output',
    question: 'Write code to display menu and get user choice.',
    mathSolution: 'Interactive menu system',
    codeSolution: 'printf("1. Option A\\n2. Option B\\nChoice: ");\nscanf("%d", &choice);',
    hint: 'Clear and simple prompts'
  },
  {
    id: 'c_io_84',
    topicId: 'c_input_output',
    question: 'Write code to pause until Enter key pressed.',
    mathSolution: 'Wait for user input',
    codeSolution: 'printf("Press Enter to continue...");\nwhile(getchar() != \'\\n\');\ngetchar();',
    hint: 'Wait for newline'
  },
  {
    id: 'c_io_85',
    topicId: 'c_input_output',
    question: 'Write code to read 5 integers into array arr.',
    mathSolution: 'Input array elements',
    codeSolution: 'for(i = 0; i < 5; i++) scanf("%d", &arr[i]);',
    hint: 'Loop for array input'
  },

  // ============ LEVEL 11: ARRAY & PATTERN I/O (86-95) ============
  {
    id: 'c_io_86',
    topicId: 'c_input_output',
    question: 'Write code to print array arr of size n in reverse order.',
    mathSolution: 'Display array backwards',
    codeSolution: 'for(i = n-1; i >= 0; i--) printf("%d ", arr[i]);',
    hint: 'Start from last index'
  },
  {
    id: 'c_io_87',
    topicId: 'c_input_output',
    question: 'Write code to print 2D array matrix of 3x3.',
    mathSolution: 'Display matrix format',
    codeSolution: 'for(i = 0; i < 3; i++) {\n    for(j = 0; j < 3; j++) printf("%d ", mat[i][j]);\n    printf("\\n");\n}',
    hint: 'Nested loops with newline after row'
  },
  {
    id: 'c_io_88',
    topicId: 'c_input_output',
    question: 'Write code to read string with spaces using scanf.',
    mathSolution: 'Read until newline',
    codeSolution: 'scanf("%[^\\n]", str);',
    hint: 'Character set scanset'
  },
  {
    id: 'c_io_89',
    topicId: 'c_input_output',
    question: 'Write code to print string character by character.',
    mathSolution: 'Output each character individually',
    codeSolution: 'for(i = 0; str[i] != \'\\0\'; i++) putchar(str[i]);',
    hint: 'Loop until null terminator'
  },
  {
    id: 'c_io_90',
    topicId: 'c_input_output',
    question: 'Write vprintf() example for variable arguments.',
    mathSolution: 'Print using variable argument list',
    codeSolution: 'vprintf(format, args);',
    hint: 'Used in custom printf functions'
  },
  {
    id: 'c_io_91',
    topicId: 'c_input_output',
    question: 'Write setbuf() to set custom buffer for file.',
    mathSolution: 'Assign buffer to stream',
    codeSolution: 'setbuf(fp, buffer);',
    hint: 'NULL for unbuffered'
  },
  {
    id: 'c_io_92',
    topicId: 'c_input_output',
    question: 'Write setvbuf() for full buffering with size.',
    mathSolution: 'Set buffer mode and size',
    codeSolution: 'setvbuf(fp, buffer, _IOFBF, BUFSIZ);',
    hint: '_IOFBF for full buffering'
  },
  {
    id: 'c_io_93',
    topicId: 'c_input_output',
    question: 'Write fseek() to move to position 10 in file.',
    mathSolution: 'Seek to byte 10 from start',
    codeSolution: 'fseek(fp, 10, SEEK_SET);',
    hint: 'SEEK_SET for beginning'
  },
  {
    id: 'c_io_94',
    topicId: 'c_input_output',
    question: 'Write ftell() to get current file position.',
    mathSolution: 'Get file position indicator',
    codeSolution: 'long pos = ftell(fp);',
    hint: 'Returns current offset'
  },
  {
    id: 'c_io_95',
    topicId: 'c_input_output',
    question: 'Write rewind() to reset file position to beginning.',
    mathSolution: 'Go to start of file',
    codeSolution: 'rewind(fp);',
    hint: 'Same as fseek(fp, 0, SEEK_SET)'
  },

  // ============ LEVEL 12: TEMP FILES & WIDE I/O (96-100) ============
  {
    id: 'c_io_96',
    topicId: 'c_input_output',
    question: 'Write tmpfile() to create temporary file.',
    mathSolution: 'Create temp file automatically deleted',
    codeSolution: 'FILE *tmp = tmpfile();',
    hint: 'File removed when closed'
  },
  {
    id: 'c_io_97',
    topicId: 'c_input_output',
    question: 'Write tmpnam() to generate unique filename.',
    mathSolution: 'Get unique temporary name',
    codeSolution: 'char *name = tmpnam(NULL);',
    hint: 'Returns unique string'
  },
  {
    id: 'c_io_98',
    topicId: 'c_input_output',
    question: 'Write wprintf() to print wide character string.',
    mathSolution: 'Print Unicode/wide string',
    codeSolution: 'wprintf(L"Hello World");',
    hint: 'L prefix for wide strings'
  },
  {
    id: 'c_io_99',
    topicId: 'c_input_output',
    question: 'Write fgetwc() to read wide character from file.',
    mathSolution: 'Read wide character',
    codeSolution: 'wint_t ch = fgetwc(fp);',
    hint: 'Wide character version of fgetc'
  },
  {
    id: 'c_io_100',
    topicId: 'c_input_output',
    question: 'Write code to print current date and time using I/O.',
    mathSolution: 'Display system time',
    codeSolution: 'time_t t = time(NULL);\nprintf("%s", ctime(&t));',
    hint: 'Use time() and ctime() functions'
  }
);