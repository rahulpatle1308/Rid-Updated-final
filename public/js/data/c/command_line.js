QuizData.questions.push(
  // ============ LEVEL 1: BASIC MAIN & ARGUMENT ACCESS (1-10) ============
  {
    id: 'c_cmd_1',
    topicId: 'c_command_line',
    question: 'Write main function with command line arguments',
    mathSolution: 'argc = argument count, argv = argument vector',
    codeSolution: 'int main(int argc, char *argv[]) {\n    return 0;\n}',
    hint: 'argv[0] is program name'
  },
  {
    id: 'c_cmd_2',
    topicId: 'c_command_line',
    question: 'Print program name from command line',
    mathSolution: 'First argument is program name',
    codeSolution: 'int main(int argc, char *argv[]) {\n    printf("Program: %s\\n", argv[0]);\n    return 0;\n}',
    hint: 'argv[0] always exists'
  },
  {
    id: 'c_cmd_3',
    topicId: 'c_command_line',
    question: 'Print all command line arguments',
    mathSolution: 'Loop through argv array',
    codeSolution: 'for(int i = 0; i < argc; i++) {\n    printf("arg[%d]: %s\\n", i, argv[i]);\n}',
    hint: 'argc is number of arguments'
  },
  {
    id: 'c_cmd_4',
    topicId: 'c_command_line',
    question: 'Check if no arguments provided (except program name)',
    mathSolution: 'argc == 1 means no additional args',
    codeSolution: 'if(argc == 1) {\n    printf("No arguments provided\\n");\n}',
    hint: 'Program name counts as arg'
  },
  {
    id: 'c_cmd_5',
    topicId: 'c_command_line',
    question: 'Count number of arguments (excluding program name)',
    mathSolution: 'argc - 1 gives argument count',
    codeSolution: 'printf("Number of arguments: %d\\n", argc - 1);',
    hint: 'Subtract program name'
  },
  {
    id: 'c_cmd_6',
    topicId: 'c_command_line',
    question: 'Check if exactly 2 arguments provided',
    mathSolution: 'Program name + 2 args = argc == 3',
    codeSolution: 'if(argc != 3) {\n    printf("Usage: %s <arg1> <arg2>\\n", argv[0]);\n    return 1;\n}',
    hint: 'Show usage on error'
  },
  {
    id: 'c_cmd_7',
    topicId: 'c_command_line',
    question: 'Check minimum number of arguments',
    mathSolution: 'Need at least 2 additional args',
    codeSolution: 'if(argc < 3) {\n    printf("Need at least 2 arguments\\n");\n    return 1;\n}',
    hint: 'argc includes program name'
  },
  {
    id: 'c_cmd_8',
    topicId: 'c_command_line',
    question: 'Validate argument range',
    mathSolution: 'Ensure arguments count within limits',
    codeSolution: 'if(argc > 10) {\n    printf("Too many arguments (max 9)\\n");\n    return 1;\n}',
    hint: 'Protect against overflow'
  },
  {
    id: 'c_cmd_9',
    topicId: 'c_command_line',
    question: 'Display usage information',
    mathSolution: 'Show how to use the program',
    codeSolution: 'void usage(char *prog) {\n    printf("Usage: %s <input> <output>\\n", prog);\n}',
    hint: 'Call when args invalid'
  },
  {
    id: 'c_cmd_10',
    topicId: 'c_command_line',
    question: 'Check for help option',
    mathSolution: 'Look for -h or --help argument',
    codeSolution: 'if(argc == 2 && (strcmp(argv[1], "-h") == 0 || strcmp(argv[1], "--help") == 0)) {\n    showHelp();\n    return 0;\n}',
    hint: 'Common convention'
  },

  // ============ LEVEL 2: ARGUMENT ACCESS & MANIPULATION (11-20) ============
  {
    id: 'c_cmd_11',
    topicId: 'c_command_line',
    question: 'Get filename from command line',
    mathSolution: 'First argument after program name',
    codeSolution: 'char *filename = argv[1];\nFILE *fp = fopen(filename, "r");',
    hint: 'Check argc first'
  },
  {
    id: 'c_cmd_12',
    topicId: 'c_command_line',
    question: 'Concatenate all arguments into string',
    mathSolution: 'Join args with spaces',
    codeSolution: 'char result[1024] = "";\nfor(int i = 1; i < argc; i++) {\n    strcat(result, argv[i]);\n    if(i < argc-1) strcat(result, " ");\n}',
    hint: 'Watch buffer size'
  },
  {
    id: 'c_cmd_13',
    topicId: 'c_command_line',
    question: 'Get last argument',
    mathSolution: 'argv[argc-1] is last argument',
    codeSolution: 'if(argc > 1) {\n    char *last = argv[argc-1];\n    printf("Last: %s\\n", last);\n}',
    hint: 'Skip program name'
  },
  {
    id: 'c_cmd_14',
    topicId: 'c_command_line',
    question: 'Check if specific argument exists',
    mathSolution: 'Search through arguments',
    codeSolution: 'int found = 0;\nfor(int i = 1; i < argc; i++) {\n    if(strcmp(argv[i], "--verbose") == 0)\n        found = 1;\n}',
    hint: 'Flag detection'
  },
  {
    id: 'c_cmd_15',
    topicId: 'c_command_line',
    question: 'Get argument at specific position',
    mathSolution: 'Access argv[index] with validation',
    codeSolution: 'if(argc > 2) {\n    char *arg = argv[2];\n    printf("Second argument: %s\\n", arg);\n}',
    hint: 'Indices start at 1 for args'
  },
  {
    id: 'c_cmd_16',
    topicId: 'c_command_line',
    question: 'Convert argument to integer',
    mathSolution: 'Use atoi() for conversion',
    codeSolution: 'int num = atoi(argv[1]);',
    hint: 'Returns 0 if conversion fails'
  },
  {
    id: 'c_cmd_17',
    topicId: 'c_command_line',
    question: 'Convert argument to long',
    mathSolution: 'Use strtol() for better error checking',
    codeSolution: 'char *endptr;\nlong num = strtol(argv[1], &endptr, 10);\nif(*endptr != \'\\0\') {\n    printf("Invalid number\\n");\n}',
    hint: 'Check endptr for errors'
  },
  {
    id: 'c_cmd_18',
    topicId: 'c_command_line',
    question: 'Convert argument to float',
    mathSolution: 'Use atof() for conversion',
    codeSolution: 'float f = atof(argv[1]);',
    hint: 'Returns 0.0 on error'
  },
  {
    id: 'c_cmd_19',
    topicId: 'c_command_line',
    question: 'Convert argument to double with validation',
    mathSolution: 'Use strtod() for error checking',
    codeSolution: 'char *endptr;\ndouble d = strtod(argv[1], &endptr);\nif(endptr == argv[1]) {\n    printf("No digits found\\n");\n}',
    hint: 'Check if any conversion done'
  },
  {
    id: 'c_cmd_20',
    topicId: 'c_command_line',
    question: 'Convert hexadecimal argument to integer',
    mathSolution: 'Use strtol with base 16',
    codeSolution: 'long val = strtol(argv[1], NULL, 16);',
    hint: 'Accepts 0x prefix optionally'
  },

  // ============ LEVEL 3: NUMERIC OPERATIONS (21-30) ============
  {
    id: 'c_cmd_21',
    topicId: 'c_command_line',
    question: 'Convert octal argument to integer',
    mathSolution: 'Use strtol with base 8',
    codeSolution: 'long val = strtol(argv[1], NULL, 8);',
    hint: 'Leading zero indicates octal'
  },
  {
    id: 'c_cmd_22',
    topicId: 'c_command_line',
    question: 'Sum all numeric arguments',
    mathSolution: 'Convert and accumulate',
    codeSolution: 'int sum = 0;\nfor(int i = 1; i < argc; i++) {\n    sum += atoi(argv[i]);\n}\nprintf("Sum: %d\\n", sum);',
    hint: 'Ignores non-numeric'
  },
  {
    id: 'c_cmd_23',
    topicId: 'c_command_line',
    question: 'Check if argument is valid integer',
    mathSolution: 'Validate all characters are digits',
    codeSolution: 'int isNumber(char *str) {\n    for(int i = 0; str[i]; i++) {\n        if(!isdigit(str[i]) && str[i] != \'-\')\n            return 0;\n    }\n    return 1;\n}',
    hint: 'Handle negative sign'
  },
  {
    id: 'c_cmd_24',
    topicId: 'c_command_line',
    question: 'Check if argument is within range',
    mathSolution: 'Convert and compare limits',
    codeSolution: 'long val = strtol(argv[1], NULL, 10);\nif(val < 0 || val > 100) {\n    printf("Must be 0-100\\n");\n    return 1;\n}',
    hint: 'Range validation'
  },
  {
    id: 'c_cmd_25',
    topicId: 'c_command_line',
    question: 'Parse multiple numbers from arguments',
    mathSolution: 'Convert all numeric args',
    codeSolution: 'int numbers[argc-1];\nint count = 0;\nfor(int i = 1; i < argc; i++) {\n    numbers[count++] = atoi(argv[i]);\n}',
    hint: 'Store in array'
  },
  {
    id: 'c_cmd_26',
    topicId: 'c_command_line',
    question: 'Process verbose flag (-v)',
    mathSolution: 'Set flag if argument matches',
    codeSolution: 'int verbose = 0;\nfor(int i = 1; i < argc; i++) {\n    if(strcmp(argv[i], "-v") == 0)\n        verbose = 1;\n}',
    hint: 'Boolean flag'
  },
  {
    id: 'c_cmd_27',
    topicId: 'c_command_line',
    question: 'Process multiple flags',
    mathSolution: 'Check for different flags',
    codeSolution: 'int verbose = 0, debug = 0, quiet = 0;\nfor(int i = 1; i < argc; i++) {\n    if(strcmp(argv[i], "-v") == 0) verbose = 1;\n    else if(strcmp(argv[i], "-d") == 0) debug = 1;\n    else if(strcmp(argv[i], "-q") == 0) quiet = 1;\n}',
    hint: 'Independent flags'
  },
  {
    id: 'c_cmd_28',
    topicId: 'c_command_line',
    question: 'Process flags with values (-o output.txt)',
    mathSolution: 'Flag followed by value',
    codeSolution: 'char *output = NULL;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "-o") == 0) {\n        output = argv[i+1];\n        i++;\n    }\n}',
    hint: 'Skip next argument'
  },
  {
    id: 'c_cmd_29',
    topicId: 'c_command_line',
    question: 'Process --long-options',
    mathSolution: 'Handle GNU-style long options',
    codeSolution: 'if(strcmp(argv[i], "--input-file") == 0) {\n    input = argv[++i];\n} else if(strcmp(argv[i], "--verbose") == 0) {\n    verbose = 1;\n}',
    hint: 'Long options with --'
  },
  {
    id: 'c_cmd_30',
    topicId: 'c_command_line',
    question: 'Combined short options (-abc)',
    mathSolution: 'Parse multiple flags in one argument',
    codeSolution: 'if(argv[i][0] == \'-\' && argv[i][1] != \'-\') {\n    for(int j = 1; argv[i][j]; j++) {\n        switch(argv[i][j]) {\n            case \'a\': flag_a = 1; break;\n            case \'b\': flag_b = 1; break;\n        }\n    }\n}',
    hint: 'Handle -abc = -a -b -c'
  },

  // ============ LEVEL 4: FILE OPERATIONS (31-40) ============
  {
    id: 'c_cmd_31',
    topicId: 'c_command_line',
    question: 'Open file specified in command line',
    mathSolution: 'Use first argument as filename',
    codeSolution: 'if(argc < 2) {\n    printf("Usage: %s <filename>\\n", argv[0]);\n    return 1;\n}\nFILE *fp = fopen(argv[1], "r");',
    hint: 'Check file open success'
  },
  {
    id: 'c_cmd_32',
    topicId: 'c_command_line',
    question: 'Specify input and output files',
    mathSolution: 'Two filenames as arguments',
    codeSolution: 'if(argc != 3) {\n    printf("Usage: %s <input> <output>\\n", argv[0]);\n    return 1;\n}\nFILE *in = fopen(argv[1], "r");\nFILE *out = fopen(argv[2], "w");',
    hint: 'First input, second output'
  },
  {
    id: 'c_cmd_33',
    topicId: 'c_command_line',
    question: 'Process multiple files from command line',
    mathSolution: 'Loop through filename arguments',
    codeSolution: 'for(int i = 1; i < argc; i++) {\n    FILE *fp = fopen(argv[i], "r");\n    if(fp) {\n        processFile(fp);\n        fclose(fp);\n    }\n}',
    hint: 'Like cat command'
  },
  {
    id: 'c_cmd_34',
    topicId: 'c_command_line',
    question: 'Copy file with source and destination',
    mathSolution: 'cp command simulation',
    codeSolution: 'if(argc != 3) {\n    printf("Usage: %s <source> <dest>\\n", argv[0]);\n    return 1;\n}\ncopyFile(argv[1], argv[2]);',
    hint: 'Two arguments'
  },
  {
    id: 'c_cmd_35',
    topicId: 'c_command_line',
    question: 'Append to file with -a flag',
    mathSolution: 'Flag changes open mode',
    codeSolution: 'char *mode = "w";\nfor(int i = 1; i < argc; i++) {\n    if(strcmp(argv[i], "-a") == 0) mode = "a";\n    else filename = argv[i];\n}\nFILE *fp = fopen(filename, mode);',
    hint: 'Append vs write'
  },
  {
    id: 'c_cmd_36',
    topicId: 'c_command_line',
    question: 'Simple calculator with operation and operands',
    mathSolution: './calc add 5 3',
    codeSolution: 'if(argc != 4) {\n    printf("Usage: %s <op> <a> <b>\\n", argv[0]);\n    return 1;\n}\ndouble a = atof(argv[2]);\ndouble b = atof(argv[3]);\nif(strcmp(argv[1], "add") == 0) printf("%f\\n", a+b);',
    hint: 'Support add, sub, mul, div'
  },
  {
    id: 'c_cmd_37',
    topicId: 'c_command_line',
    question: 'Calculator with operator as symbol',
    mathSolution: 'Use +, -, x, / as operator',
    codeSolution: 'double a = atof(argv[1]);\ndouble b = atof(argv[3]);\nchar op = argv[2][0];\nswitch(op) {\n    case \'+\': printf("%f\\n", a+b); break;\n    case \'-\': printf("%f\\n", a-b); break;\n    case \'x\': printf("%f\\n", a*b); break;\n    case \'/\': printf("%f\\n", a/b); break;\n}',
    hint: 'Format: 5 + 3'
  },
  {
    id: 'c_cmd_38',
    topicId: 'c_command_line',
    question: 'Variable number of arguments sum',
    mathSolution: 'Sum all numbers provided',
    codeSolution: 'double sum = 0;\nfor(int i = 1; i < argc; i++) {\n    sum += atof(argv[i]);\n}\nprintf("Sum: %f\\n", sum);',
    hint: 'Works with any count'
  },
  {
    id: 'c_cmd_39',
    topicId: 'c_command_line',
    question: 'Average of numbers',
    mathSolution: 'Sum and divide by count',
    codeSolution: 'double sum = 0;\nfor(int i = 1; i < argc; i++) {\n    sum += atof(argv[i]);\n}\nprintf("Average: %f\\n", sum/(argc-1));',
    hint: 'Handle no arguments'
  },
  {
    id: 'c_cmd_40',
    topicId: 'c_command_line',
    question: 'Find minimum of numbers',
    mathSolution: 'Track smallest value',
    codeSolution: 'if(argc < 2) return 1;\ndouble min = atof(argv[1]);\nfor(int i = 2; i < argc; i++) {\n    double val = atof(argv[i]);\n    if(val < min) min = val;\n}\nprintf("Min: %f\\n", min);',
    hint: 'Initialize with first'
  },

  // ============ LEVEL 5: STRING PROCESSING (41-50) ============
  {
    id: 'c_cmd_41',
    topicId: 'c_command_line',
    question: 'Sort numbers from command line',
    mathSolution: 'Collect, sort, print',
    codeSolution: 'double nums[argc-1];\nfor(int i=0; i<argc-1; i++)\n    nums[i] = atof(argv[i+1]);\nqsort(nums, argc-1, sizeof(double), compare);',
    hint: 'Use qsort'
  },
  {
    id: 'c_cmd_42',
    topicId: 'c_command_line',
    question: 'Filter arguments by pattern',
    mathSolution: 'Print only matching arguments',
    codeSolution: 'for(int i = 1; i < argc; i++) {\n    if(strstr(argv[i], pattern) != NULL) {\n        printf("%s\\n", argv[i]);\n    }\n}',
    hint: 'Simple grep'
  },
  {
    id: 'c_cmd_43',
    topicId: 'c_command_line',
    question: 'Remove duplicates from arguments',
    mathSolution: 'Track seen arguments',
    codeSolution: 'for(int i = 1; i < argc; i++) {\n    int seen = 0;\n    for(int j = 1; j < i; j++) {\n        if(strcmp(argv[i], argv[j]) == 0)\n            seen = 1;\n    }\n    if(!seen) printf("%s\\n", argv[i]);\n}',
    hint: 'O(n²) simple approach'
  },
  {
    id: 'c_cmd_44',
    topicId: 'c_command_line',
    question: 'Count frequency of arguments',
    mathSolution: 'Count duplicates',
    codeSolution: 'for(int i = 1; i < argc; i++) {\n    int count = 1;\n    for(int j = i+1; j < argc; j++) {\n        if(strcmp(argv[i], argv[j]) == 0)\n            count++;\n    }\n    printf("%s: %d\\n", argv[i], count);\n}',
    hint: 'Prints duplicates multiple times'
  },
  {
    id: 'c_cmd_45',
    topicId: 'c_command_line',
    question: 'Reverse arguments order',
    mathSolution: 'Print from last to first',
    codeSolution: 'for(int i = argc-1; i >= 1; i--) {\n    printf("%s ", argv[i]);\n}\nprintf("\\n");',
    hint: 'Start from end'
  },
  {
    id: 'c_cmd_46',
    topicId: 'c_command_line',
    question: 'Access environment variables (third main parameter)',
    mathSolution: 'environ or char *envp[]',
    codeSolution: 'int main(int argc, char *argv[], char *envp[]) {\n    for(int i = 0; envp[i] != NULL; i++) {\n        printf("%s\\n", envp[i]);\n    }\n}',
    hint: 'Environment variables'
  },
  {
    id: 'c_cmd_47',
    topicId: 'c_command_line',
    question: 'Get specific environment variable',
    mathSolution: 'Use getenv() function',
    codeSolution: '#include <stdlib.h>\nchar *path = getenv("PATH");\nif(path) printf("PATH=%s\\n", path);',
    hint: 'Returns NULL if not set'
  },
  {
    id: 'c_cmd_48',
    topicId: 'c_command_line',
    question: 'Set environment variable for child',
    mathSolution: 'Use putenv() or setenv()',
    codeSolution: 'putenv("MY_VAR=hello");\n// or\nsetenv("MY_VAR", "hello", 1);',
    hint: 'Affects child processes'
  },
  {
    id: 'c_cmd_49',
    topicId: 'c_command_line',
    question: 'Check if running in debug environment',
    mathSolution: 'Check DEBUG environment variable',
    codeSolution: 'char *debug = getenv("DEBUG");\nif(debug && strcmp(debug, "1") == 0) {\n    printf("Debug mode\\n");\n}',
    hint: 'Common practice'
  },
  {
    id: 'c_cmd_50',
    topicId: 'c_command_line',
    question: 'Use environment for configuration',
    mathSolution: 'Get config from environment',
    codeSolution: 'char *host = getenv("DB_HOST") ? getenv("DB_HOST") : "localhost";\nint port = getenv("DB_PORT") ? atoi(getenv("DB_PORT")) : 3306;',
    hint: 'Default values'
  },

  // ============ LEVEL 6: ADVANCED PARSING (51-60) ============
  {
    id: 'c_cmd_51',
    topicId: 'c_command_line',
    question: 'Simple getopt simulation',
    mathSolution: 'Manual option parsing',
    codeSolution: 'for(int i = 1; i < argc; i++) {\n    if(argv[i][0] == \'-\') {\n        switch(argv[i][1]) {\n            case \'v\': verbose = 1; break;\n            case \'f\': if(i+1 < argc) filename = argv[++i]; break;\n        }\n    }\n}',
    hint: 'Manual parsing'
  },
  {
    id: 'c_cmd_52',
    topicId: 'c_command_line',
    question: 'Use getopt() for option parsing',
    mathSolution: 'Standard getopt function',
    codeSolution: '#include <unistd.h>\nint opt;\nwhile((opt = getopt(argc, argv, "vf:o:")) != -1) {\n    switch(opt) {\n        case \'v\': verbose = 1; break;\n        case \'f\': file = optarg; break;\n    }\n}',
    hint: 'POSIX getopt'
  },
  {
    id: 'c_cmd_53',
    topicId: 'c_command_line',
    question: 'Use getopt_long() for long options',
    mathSolution: 'GNU-style long options',
    codeSolution: 'static struct option long_options[] = {\n    {"verbose", no_argument, 0, \'v\'},\n    {"file", required_argument, 0, \'f\'},\n    {0,0,0,0}\n};\nwhile((opt = getopt_long(argc, argv, "vf:", long_options, NULL)) != -1)',
    hint: 'GNU extension'
  },
  {
    id: 'c_cmd_54',
    topicId: 'c_command_line',
    question: 'Parse key=value arguments',
    mathSolution: 'Split on = character',
    codeSolution: 'for(int i = 1; i < argc; i++) {\n    char *eq = strchr(argv[i], \'=\');\n    if(eq) {\n        *eq = \'\\0\';\n        set_config(argv[i], eq+1);\n    }\n}',
    hint: 'Format: key=value'
  },
  {
    id: 'c_cmd_55',
    topicId: 'c_command_line',
    question: 'Handle quoted arguments with spaces',
    mathSolution: 'Shell handles quotes, argv gets strings',
    codeSolution: '// If run as: ./prog "hello world"\n// argv[1] = "hello world" (single string)',
    hint: 'Shell parsing'
  },
  {
    id: 'c_cmd_56',
    topicId: 'c_command_line',
    question: 'Simple wildcard matching (*)',
    mathSolution: 'Check if argument contains pattern',
    codeSolution: 'int match(char *pattern, char *str) {\n    if(*pattern == \'*\')\n        return strstr(str, pattern+1) != NULL;\n    return strcmp(pattern, str) == 0;\n}',
    hint: 'Basic wildcard'
  },
  {
    id: 'c_cmd_57',
    topicId: 'c_command_line',
    question: 'Filter files by extension',
    mathSolution: 'Check filename extension',
    codeSolution: 'for(int i = 1; i < argc; i++) {\n    char *dot = strrchr(argv[i], \'.\');\n    if(dot && strcmp(dot, ".txt") == 0)\n        process(argv[i]);\n}',
    hint: 'Only .txt files'
  },
  {
    id: 'c_cmd_58',
    topicId: 'c_command_line',
    question: 'Check if argument starts with prefix',
    mathSolution: 'Compare beginning of string',
    codeSolution: 'if(strncmp(argv[i], "prefix", 6) == 0) {\n    printf("Starts with prefix\\n");\n}',
    hint: 'strncmp for prefix'
  },
  {
    id: 'c_cmd_59',
    topicId: 'c_command_line',
    question: 'Check if argument ends with suffix',
    mathSolution: 'Compare end of string',
    codeSolution: 'int len = strlen(argv[i]);\nint suffixLen = strlen(".txt");\nif(len >= suffixLen && strcmp(argv[i] + len - suffixLen, ".txt") == 0)',
    hint: 'Pointer arithmetic'
  },
  {
    id: 'c_cmd_60',
    topicId: 'c_command_line',
    question: 'Extract numbers from mixed arguments',
    mathSolution: 'Find numeric arguments',
    codeSolution: 'for(int i = 1; i < argc; i++) {\n    char *endptr;\n    strtod(argv[i], &endptr);\n    if(*endptr == \'\\0\')\n        printf("Number: %s\\n", argv[i]);\n}',
    hint: 'Check if whole string is number'
  },

  // ============ LEVEL 7: CONFIGURATION PARAMETERS (61-70) ============
  {
    id: 'c_cmd_61',
    topicId: 'c_command_line',
    question: 'Set debug level from command line',
    mathSolution: '-d 2 sets debug level',
    codeSolution: 'int debug = 0;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "-d") == 0) {\n        debug = atoi(argv[++i]);\n    }\n}',
    hint: 'Level increases verbosity'
  },
  {
    id: 'c_cmd_62',
    topicId: 'c_command_line',
    question: 'Set buffer size from argument',
    mathSolution: 'Parse size with suffix (K, M)',
    codeSolution: 'long size = atol(argv[1]);\nif(strchr(argv[1], \'K\')) size *= 1024;\nelse if(strchr(argv[1], \'M\')) size *= 1024*1024;',
    hint: 'Support K, M suffixes'
  },
  {
    id: 'c_cmd_63',
    topicId: 'c_command_line',
    question: 'Set logging level',
    mathSolution: '--log-level=error',
    codeSolution: 'char *level = "info";\nfor(int i = 1; i < argc; i++) {\n    if(strncmp(argv[i], "--log-level=", 12) == 0) {\n        level = argv[i] + 12;\n    }\n}',
    hint: 'Parse after ='
  },
  {
    id: 'c_cmd_64',
    topicId: 'c_command_line',
    question: 'Choose algorithm by name',
    mathSolution: '--algorithm=quick',
    codeSolution: 'if(strcmp(argv[i], "--algorithm=quick") == 0)\n    useQuickSort();\nelse if(strcmp(argv[i], "--algorithm=merge") == 0)\n    useMergeSort();',
    hint: 'String comparison'
  },
  {
    id: 'c_cmd_65',
    topicId: 'c_command_line',
    question: 'Enable features with flags',
    mathSolution: '--enable-feature-x',
    codeSolution: 'if(strcmp(argv[i], "--enable-cache") == 0)\n    cache_enabled = 1;\nelse if(strcmp(argv[i], "--enable-logging") == 0)\n    logging_enabled = 1;',
    hint: 'Multiple features'
  },
  {
    id: 'c_cmd_66',
    topicId: 'c_command_line',
    question: 'Run in interactive mode with -i',
    mathSolution: 'Flag triggers interactive',
    codeSolution: 'int interactive = 0;\nfor(int i = 1; i < argc; i++) {\n    if(strcmp(argv[i], "-i") == 0)\n        interactive = 1;\n}\nif(interactive) runPrompt();\nelse batchMode();',
    hint: 'Two modes'
  },
  {
    id: 'c_cmd_67',
    topicId: 'c_command_line',
    question: 'Set prompt string',
    mathSolution: '--prompt "> "',
    codeSolution: 'char *prompt = "$ ";\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--prompt") == 0) {\n        prompt = argv[++i];\n    }\n}',
    hint: 'Custom prompt'
  },
  {
    id: 'c_cmd_68',
    topicId: 'c_command_line',
    question: 'Command history size',
    mathSolution: '--history=100',
    codeSolution: 'int history = 50;\nfor(int i = 1; i < argc; i++) {\n    if(strncmp(argv[i], "--history=", 10) == 0) {\n        history = atoi(argv[i] + 10);\n    }\n}',
    hint: 'Default 50'
  },
  {
    id: 'c_cmd_69',
    topicId: 'c_command_line',
    question: 'Timeout parameter',
    mathSolution: '--timeout 30',
    codeSolution: 'int timeout = 0;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--timeout") == 0) {\n        timeout = atoi(argv[++i]);\n    }\n}\nalarm(timeout);',
    hint: 'Set alarm'
  },
  {
    id: 'c_cmd_70',
    topicId: 'c_command_line',
    question: 'Color output control',
    mathSolution: '--color=auto/always/never',
    codeSolution: 'char *color = "auto";\nfor(int i = 1; i < argc; i++) {\n    if(strncmp(argv[i], "--color=", 8) == 0) {\n        color = argv[i] + 8;\n    }\n}\nuseColor = strcmp(color, "never") != 0;',
    hint: 'Like ls --color'
  },

  // ============ LEVEL 8: NETWORK & SYSTEM PARAMETERS (71-80) ============
  {
    id: 'c_cmd_71',
    topicId: 'c_command_line',
    question: 'Get hostname and port',
    mathSolution: './client localhost 8080',
    codeSolution: 'if(argc != 3) {\n    printf("Usage: %s <host> <port>\\n", argv[0]);\n}\nchar *host = argv[1];\nint port = atoi(argv[2]);',
    hint: 'Port must be number'
  },
  {
    id: 'c_cmd_72',
    topicId: 'c_command_line',
    question: 'Server with optional port',
    mathSolution: 'Default port if not specified',
    codeSolution: 'int port = 8080; // default\nif(argc >= 2) port = atoi(argv[1]);',
    hint: 'Optional argument'
  },
  {
    id: 'c_cmd_73',
    topicId: 'c_command_line',
    question: 'Set protocol type',
    mathSolution: '--protocol tcp/udp',
    codeSolution: 'int use_tcp = 1;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--protocol") == 0) {\n        use_tcp = (strcmp(argv[++i], "tcp") == 0);\n    }\n}',
    hint: 'Default TCP'
  },
  {
    id: 'c_cmd_74',
    topicId: 'c_command_line',
    question: 'Set buffer size for socket',
    mathSolution: '--buffer 8192',
    codeSolution: 'int bufsize = 4096;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--buffer") == 0) {\n        bufsize = atoi(argv[++i]);\n    }\n}\nsetsockopt(sock, SOL_SOCKET, SO_RCVBUF, &bufsize, sizeof(bufsize));',
    hint: 'Set socket buffer'
  },
  {
    id: 'c_cmd_75',
    topicId: 'c_command_line',
    question: 'Connection timeout',
    mathSolution: '--timeout 5000',
    codeSolution: 'int timeout = 3000;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--timeout") == 0) {\n        timeout = atoi(argv[++i]);\n    }\n}',
    hint: 'Milliseconds'
  },
  {
    id: 'c_cmd_76',
    topicId: 'c_command_line',
    question: 'Password from command line (insecure)',
    mathSolution: 'Not recommended for passwords',
    codeSolution: 'if(argc < 2) {\n    printf("Password required\\n");\n    return 1;\n}\nchar *password = argv[1];',
    hint: 'Visible in process list'
  },
  {
    id: 'c_cmd_77',
    topicId: 'c_command_line',
    question: 'Username and password arguments',
    mathSolution: '-u username -p password',
    codeSolution: 'char *user = NULL, *pass = NULL;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "-u") == 0) user = argv[++i];\n    if(strcmp(argv[i], "-p") == 0) pass = argv[++i];\n}',
    hint: 'Security warning'
  },
  {
    id: 'c_cmd_78',
    topicId: 'c_command_line',
    question: 'Permission mode as octal',
    mathSolution: '--mode 0644',
    codeSolution: 'int mode = 0644;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--mode") == 0) {\n        mode = strtol(argv[++i], NULL, 8);\n    }\n}\nchmod(filename, mode);',
    hint: 'Octal conversion'
  },
  {
    id: 'c_cmd_79',
    topicId: 'c_command_line',
    question: 'Encryption key from argument',
    mathSolution: '--key "secret"',
    codeSolution: 'char *key = NULL;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--key") == 0) {\n        key = argv[++i];\n    }\n}',
    hint: 'Zero key after use?'
  },
  {
    id: 'c_cmd_80',
    topicId: 'c_command_line',
    question: 'Hash algorithm selection',
    mathSolution: '--md5, --sha256',
    codeSolution: 'int use_md5 = 0, use_sha256 = 0;\nfor(int i = 1; i < argc; i++) {\n    if(strcmp(argv[i], "--md5") == 0) use_md5 = 1;\n    if(strcmp(argv[i], "--sha256") == 0) use_sha256 = 1;\n}',
    hint: 'Mutually exclusive?'
  },

  // ============ LEVEL 9: TEXT PROCESSING PARAMETERS (81-90) ============
  {
    id: 'c_cmd_81',
    topicId: 'c_command_line',
    question: 'Word wrap width',
    mathSolution: '--width 80',
    codeSolution: 'int width = 80;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--width") == 0) {\n        width = atoi(argv[++i]);\n    }\n}',
    hint: 'Default 80 columns'
  },
  {
    id: 'c_cmd_82',
    topicId: 'c_command_line',
    question: 'Tab stop setting',
    mathSolution: '--tabs 4',
    codeSolution: 'int tabsize = 8;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--tabs") == 0) {\n        tabsize = atoi(argv[++i]);\n    }\n}',
    hint: 'Default 8 spaces'
  },
  {
    id: 'c_cmd_83',
    topicId: 'c_command_line',
    question: 'Line numbering options',
    mathSolution: '-n for numbers',
    codeSolution: 'int number_lines = 0;\nfor(int i = 1; i < argc; i++) {\n    if(strcmp(argv[i], "-n") == 0) number_lines = 1;\n    else filename = argv[i];\n}',
    hint: 'Like cat -n'
  },
  {
    id: 'c_cmd_84',
    topicId: 'c_command_line',
    question: 'Case insensitive search',
    mathSolution: '-i flag',
    codeSolution: 'int ignore_case = 0;\nfor(int i = 1; i < argc; i++) {\n    if(strcmp(argv[i], "-i") == 0) ignore_case = 1;\n}',
    hint: 'For grep-like tool'
  },
  {
    id: 'c_cmd_85',
    topicId: 'c_command_line',
    question: 'Context lines for search',
    mathSolution: '-C 3 for 3 lines context',
    codeSolution: 'int context = 0;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "-C") == 0) {\n        context = atoi(argv[++i]);\n    }\n}',
    hint: 'Before and after'
  },
  {
    id: 'c_cmd_86',
    topicId: 'c_command_line',
    question: 'Set number of threads',
    mathSolution: '--threads 4',
    codeSolution: 'int threads = 1;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--threads") == 0) {\n        threads = atoi(argv[++i]);\n    }\n}',
    hint: 'Parallel execution'
  },
  {
    id: 'c_cmd_87',
    topicId: 'c_command_line',
    question: 'Enable profiling',
    mathSolution: '--profile',
    codeSolution: 'int profile = 0;\nfor(int i = 1; i < argc; i++) {\n    if(strcmp(argv[i], "--profile") == 0) {\n        profile = 1;\n    }\n}\nif(profile) startProfiling();',
    hint: 'Measure performance'
  },
  {
    id: 'c_cmd_88',
    topicId: 'c_command_line',
    question: 'Set cache size',
    mathSolution: '--cache 1024',
    codeSolution: 'int cache_size = 256;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--cache") == 0) {\n        cache_size = atoi(argv[++i]);\n    }\n}',
    hint: 'KB or MB?'
  },
  {
    id: 'c_cmd_89',
    topicId: 'c_command_line',
    question: 'Batch size for processing',
    mathSolution: '--batch 1000',
    codeSolution: 'int batch = 100;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--batch") == 0) {\n        batch = atoi(argv[++i]);\n    }\n}',
    hint: 'Records per batch'
  },
  {
    id: 'c_cmd_90',
    topicId: 'c_command_line',
    question: 'Verbosity level numeric',
    mathSolution: '-v, -vv, -vvv',
    codeSolution: 'int verbose = 0;\nfor(int i = 1; i < argc; i++) {\n    if(argv[i][0] == \'-\' && argv[i][1] == \'v\') {\n        verbose = strlen(argv[i]);\n    }\n}',
    hint: 'More v = more verbose'
  },

  // ============ LEVEL 10: COMPLEX APPLICATIONS (91-100) ============
  {
    id: 'c_cmd_91',
    topicId: 'c_command_line',
    question: 'Git-like command structure',
    mathSolution: 'git commit -m "message"',
    codeSolution: 'if(argc < 2) showHelp();\nchar *command = argv[1];\nif(strcmp(command, "commit") == 0) {\n    handleCommit(argc-1, argv+1);\n} else if(strcmp(command, "push") == 0) {\n    handlePush(argc-1, argv+1);\n}',
    hint: 'Subcommands'
  },
  {
    id: 'c_cmd_92',
    topicId: 'c_command_line',
    question: 'Docker-like options before command',
    mathSolution: 'docker --debug run image',
    codeSolution: 'int debug = 0;\nint i = 1;\nwhile(i < argc && argv[i][0] == \'-\') {\n    if(strcmp(argv[i], "--debug") == 0) debug = 1;\n    i++;\n}\nchar *command = argv[i++];',
    hint: 'Global options'
  },
  {
    id: 'c_cmd_93',
    topicId: 'c_command_line',
    question: 'Configuration file override',
    mathSolution: '--config file.conf',
    codeSolution: 'char *config = "default.conf";\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--config") == 0) {\n        config = argv[++i];\n    }\n}\nloadConfig(config);',
    hint: 'Override defaults'
  },
  {
    id: 'c_cmd_94',
    topicId: 'c_command_line',
    question: 'Plugin directory specification',
    mathSolution: '--plugins /usr/lib/myapp',
    codeSolution: 'char *plugindir = "/usr/lib/app";\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--plugins") == 0) {\n        plugindir = argv[++i];\n    }\n}\nloadPlugins(plugindir);',
    hint: 'Dynamic loading'
  },
  {
    id: 'c_cmd_95',
    topicId: 'c_command_line',
    question: 'Log file location',
    mathSolution: '--log /var/log/app.log',
    codeSolution: 'char *logfile = NULL;\nfor(int i = 1; i < argc-1; i++) {\n    if(strcmp(argv[i], "--log") == 0) {\n        logfile = argv[++i];\n    }\n}\nif(logfile) freopen(logfile, "a", stderr);',
    hint: 'Redirect stderr'
  },
  {
    id: 'c_cmd_96',
    topicId: 'c_command_line',
    question: 'Handle unknown options',
    mathSolution: 'Error on unrecognized option',
    codeSolution: 'for(int i = 1; i < argc; i++) {\n    if(argv[i][0] == \'-\') {\n        printf("Unknown option: %s\\n", argv[i]);\n        return 1;\n    }\n}',
    hint: 'Stop on error'
  },
  {
    id: 'c_cmd_97',
    topicId: 'c_command_line',
    question: 'Missing argument for option',
    mathSolution: 'Check if value exists',
    codeSolution: 'for(int i = 1; i < argc; i++) {\n    if(strcmp(argv[i], "-o") == 0) {\n        if(i+1 >= argc) {\n            printf("Option -o requires argument\\n");\n            return 1;\n        }\n        output = argv[++i];\n    }\n}',
    hint: 'Check next index'
  },
  {
    id: 'c_cmd_98',
    topicId: 'c_command_line',
    question: 'Number conversion error handling',
    mathSolution: 'Validate numeric conversion',
    codeSolution: 'char *endptr;\nlong val = strtol(argv[i], &endptr, 10);\nif(*endptr != \'\\0\') {\n    printf("Invalid number: %s\\n", argv[i]);\n    return 1;\n}',
    hint: 'Check entire string'
  },
  {
    id: 'c_cmd_99',
    topicId: 'c_command_line',
    question: 'Exit codes for different errors',
    mathSolution: 'Return different exit codes',
    codeSolution: 'if(no_args) return 1; // missing args\nif(bad_option) return 2; // invalid option\nif(file_not_found) return 3; // file error',
    hint: 'Useful for scripts'
  },
  {
    id: 'c_cmd_100',
    topicId: 'c_command_line',
    question: 'Complete argument parser with all features',
    mathSolution: 'Combine flags, options, subcommands',
    codeSolution: 'int verbose = 0;\nchar *input = NULL;\nchar *output = NULL;\nint i = 1;\nwhile(i < argc && argv[i][0] == \'-\') {\n    if(strcmp(argv[i], "-v") == 0) verbose = 1;\n    else if(strcmp(argv[i], "-o") == 0 && i+1 < argc) output = argv[++i];\n    else {\n        printf("Unknown option %s\\n", argv[i]);\n        return 1;\n    }\n    i++;\n}\nif(i < argc) input = argv[i];\nelse {\n    printf("Input file required\\n");\n    return 1;\n}',
    hint: 'Complete parser'
  }
);