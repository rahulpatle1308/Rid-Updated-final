QuizData.questions.push(
  // ============ LEVEL 1: FILE OPENING AND CLOSING (1-10) ============
  {
    id: 'c_file_01',
    topicId: 'c_file_handling',
    question: 'Open a file named "data.txt" in read mode',
    mathSolution: 'Returns FILE pointer or NULL on error',
    codeSolution: 'FILE *fp = fopen("data.txt", "r");',
    hint: 'Check if fp == NULL for error'
  },
  {
    id: 'c_file_02',
    topicId: 'c_file_handling',
    question: 'Open a file for writing (creates new or truncates)',
    mathSolution: 'Creates file if doesn\'t exist',
    codeSolution: 'FILE *fp = fopen("output.txt", "w");',
    hint: 'Existing content will be lost'
  },
  {
    id: 'c_file_03',
    topicId: 'c_file_handling',
    question: 'Open a file for appending data',
    mathSolution: 'Writes at end of file',
    codeSolution: 'FILE *fp = fopen("log.txt", "a");',
    hint: 'Creates file if doesn\'t exist'
  },
  {
    id: 'c_file_04',
    topicId: 'c_file_handling',
    question: 'Open a file for reading and writing',
    mathSolution: 'File must exist',
    codeSolution: 'FILE *fp = fopen("data.txt", "r+");',
    hint: 'Can read and modify'
  },
  {
    id: 'c_file_05',
    topicId: 'c_file_handling',
    question: 'Open a file for write/read (creates new)',
    mathSolution: 'Creates new file for writing and reading',
    codeSolution: 'FILE *fp = fopen("new.txt", "w+");',
    hint: 'Truncates existing file'
  },
  {
    id: 'c_file_06',
    topicId: 'c_file_handling',
    question: 'Open a file for append/read',
    mathSolution: 'Read from anywhere, write only at end',
    codeSolution: 'FILE *fp = fopen("data.txt", "a+");',
    hint: 'Writing always at end'
  },
  {
    id: 'c_file_07',
    topicId: 'c_file_handling',
    question: 'Close an opened file',
    mathSolution: 'Flushes buffers and releases resources',
    codeSolution: 'fclose(fp);',
    hint: 'Always close files when done'
  },
  {
    id: 'c_file_08',
    topicId: 'c_file_handling',
    question: 'Check if file opened successfully',
    mathSolution: 'fopen returns NULL on failure',
    codeSolution: 'if(fp == NULL) {\n    printf("Error opening file");\n    exit(1);\n}',
    hint: 'Essential error checking'
  },
  {
    id: 'c_file_09',
    topicId: 'c_file_handling',
    question: 'Open file in binary read mode',
    mathSolution: 'For non-text files',
    codeSolution: 'FILE *fp = fopen("image.jpg", "rb");',
    hint: 'b for binary mode'
  },
  {
    id: 'c_file_10',
    topicId: 'c_file_handling',
    question: 'Open file in binary write mode',
    mathSolution: 'Write binary data',
    codeSolution: 'FILE *fp = fopen("data.bin", "wb");',
    hint: 'No newline translation'
  },

  // ============ LEVEL 2: CHARACTER INPUT/OUTPUT (11-15) ============
  {
    id: 'c_file_11',
    topicId: 'c_file_handling',
    question: 'Read a single character from file',
    mathSolution: 'Returns EOF at end of file',
    codeSolution: 'int ch = fgetc(fp);',
    hint: 'Returns int, not char'
  },
  {
    id: 'c_file_12',
    topicId: 'c_file_handling',
    question: 'Write a single character to file',
    mathSolution: 'Writes character to current position',
    codeSolution: 'fputc(\'A\', fp);',
    hint: 'Returns character written or EOF'
  },
  {
    id: 'c_file_13',
    topicId: 'c_file_handling',
    question: 'Read character and check for EOF',
    mathSolution: 'Loop until end of file',
    codeSolution: 'int ch;\nwhile((ch = fgetc(fp)) != EOF) {\n    putchar(ch);\n}',
    hint: 'EOF is usually -1'
  },
  {
    id: 'c_file_14',
    topicId: 'c_file_handling',
    question: 'Unget a character back to stream',
    mathSolution: 'Push back character to read again',
    codeSolution: 'ungetc(ch, fp);',
    hint: 'Only one character guaranteed'
  },
  {
    id: 'c_file_15',
    topicId: 'c_file_handling',
    question: 'Copy file character by character',
    mathSolution: 'Read from source, write to destination',
    codeSolution: 'int ch;\nwhile((ch = fgetc(src)) != EOF) {\n    fputc(ch, dest);\n}',
    hint: 'Simple file copy'
  },

  // ============ LEVEL 3: STRING INPUT/OUTPUT (16-20) ============
  {
    id: 'c_file_16',
    topicId: 'c_file_handling',
    question: 'Read a string from file (line)',
    mathSolution: 'Reads until newline or EOF',
    codeSolution: 'char buffer[100];\nfgets(buffer, sizeof(buffer), fp);',
    hint: 'Includes newline if space'
  },
  {
    id: 'c_file_17',
    topicId: 'c_file_handling',
    question: 'Write a string to file',
    mathSolution: 'Writes string without null terminator',
    codeSolution: 'fputs("Hello World", fp);',
    hint: 'Doesn\'t add newline'
  },
  {
    id: 'c_file_18',
    topicId: 'c_file_handling',
    question: 'Read entire file line by line',
    mathSolution: 'Process each line',
    codeSolution: 'char line[256];\nwhile(fgets(line, sizeof(line), fp)) {\n    printf("%s", line);\n}',
    hint: 'fgets returns NULL on EOF'
  },
  {
    id: 'c_file_19',
    topicId: 'c_file_handling',
    question: 'Write multiple lines to file',
    mathSolution: 'Write strings with newlines',
    codeSolution: 'fputs("First line\\n", fp);\nfputs("Second line\\n", fp);',
    hint: 'Add \\n explicitly'
  },
  {
    id: 'c_file_20',
    topicId: 'c_file_handling',
    question: 'Remove trailing newline from fgets input',
    mathSolution: 'Replace newline with null terminator',
    codeSolution: 'char *p = strchr(line, \'\\n\');\nif(p) *p = \'\\0\';',
    hint: 'Or use strcspn'
  },

  // ============ LEVEL 4: FORMATTED INPUT/OUTPUT (21-25) ============
  {
    id: 'c_file_21',
    topicId: 'c_file_handling',
    question: 'Write formatted data to file',
    mathSolution: 'Like printf but to file',
    codeSolution: 'fprintf(fp, "Name: %s, Age: %d", "John", 25);',
    hint: 'First argument is FILE*'
  },
  {
    id: 'c_file_22',
    topicId: 'c_file_handling',
    question: 'Read formatted data from file',
    mathSolution: 'Parse data from file',
    codeSolution: 'char name[50];\nint age;\nfscanf(fp, "%s %d", name, &age);',
    hint: 'Returns number of items read'
  },
  {
    id: 'c_file_23',
    topicId: 'c_file_handling',
    question: 'Write data in columns to file',
    mathSolution: 'Formatted columns',
    codeSolution: 'fprintf(fp, "%-10s %5d %8.2f\\n", name, id, salary);',
    hint: 'Use width specifiers'
  },
  {
    id: 'c_file_24',
    topicId: 'c_file_handling',
    question: 'Read CSV data from file',
    mathSolution: 'Parse comma-separated values',
    codeSolution: 'fscanf(fp, "%d,%[^,],%f", &id, name, &salary);',
    hint: 'Use %[^,] to read until comma'
  },
  {
    id: 'c_file_25',
    topicId: 'c_file_handling',
    question: 'Check if fscanf reached EOF',
    mathSolution: 'fscanf returns EOF on error/EOF',
    codeSolution: 'int result;\nwhile((result = fscanf(fp, "%d", &num)) != EOF) {\n    process(num);\n}',
    hint: 'Also check result for match count'
  },

  // ============ LEVEL 5: BINARY FILE I/O (26-30) ============
  {
    id: 'c_file_26',
    topicId: 'c_file_handling',
    question: 'Write a structure to binary file',
    mathSolution: 'Write raw bytes',
    codeSolution: 'struct Student s = {"John", 20, 85.5};\nfwrite(&s, sizeof(s), 1, fp);',
    hint: 'Writes entire structure'
  },
  {
    id: 'c_file_27',
    topicId: 'c_file_handling',
    question: 'Read a structure from binary file',
    mathSolution: 'Read raw bytes into structure',
    codeSolution: 'struct Student s;\nfread(&s, sizeof(s), 1, fp);',
    hint: 'Assumes same memory layout'
  },
  {
    id: 'c_file_28',
    topicId: 'c_file_handling',
    question: 'Write array of structures to file',
    mathSolution: 'Write multiple records at once',
    codeSolution: 'struct Student students[10];\nfwrite(students, sizeof(struct Student), 10, fp);',
    hint: 'Count is number of elements'
  },
  {
    id: 'c_file_29',
    topicId: 'c_file_handling',
    question: 'Read specific record from binary file',
    mathSolution: 'Seek to position and read',
    codeSolution: 'fseek(fp, index * sizeof(struct Student), SEEK_SET);\nfread(&s, sizeof(s), 1, fp);',
    hint: 'Calculate offset by index'
  },
  {
    id: 'c_file_30',
    topicId: 'c_file_handling',
    question: 'Write an integer array to binary file',
    mathSolution: 'Write raw integer data',
    codeSolution: 'int arr[100];\nfwrite(arr, sizeof(int), 100, fp);',
    hint: 'Portability concerns with endianness'
  },

  // ============ LEVEL 6: FILE POSITIONING (31-40) ============
  {
    id: 'c_file_31',
    topicId: 'c_file_handling',
    question: 'Get current file position',
    mathSolution: 'Returns offset from beginning',
    codeSolution: 'long pos = ftell(fp);',
    hint: 'Returns -1 on error'
  },
  {
    id: 'c_file_32',
    topicId: 'c_file_handling',
    question: 'Move to beginning of file',
    mathSolution: 'Seek to offset 0 from start',
    codeSolution: 'fseek(fp, 0, SEEK_SET);',
    hint: 'Rewind also works'
  },
  {
    id: 'c_file_33',
    topicId: 'c_file_handling',
    question: 'Move to end of file',
    mathSolution: 'For appending or getting size',
    codeSolution: 'fseek(fp, 0, SEEK_END);',
    hint: 'Then use ftell for size'
  },
  {
    id: 'c_file_34',
    topicId: 'c_file_handling',
    question: 'Move 10 bytes forward from current position',
    mathSolution: 'Relative seek',
    codeSolution: 'fseek(fp, 10, SEEK_CUR);',
    hint: 'Can use negative for backward'
  },
  {
    id: 'c_file_35',
    topicId: 'c_file_handling',
    question: 'Get file size using fseek and ftell',
    mathSolution: 'Seek end, get position',
    codeSolution: 'fseek(fp, 0, SEEK_END);\nlong size = ftell(fp);\nrewind(fp);',
    hint: 'Rewind after getting size'
  },
  {
    id: 'c_file_36',
    topicId: 'c_file_handling',
    question: 'Reset file position to beginning',
    mathSolution: 'Simpler than fseek',
    codeSolution: 'rewind(fp);',
    hint: 'Also clears error indicator'
  },
  {
    id: 'c_file_37',
    topicId: 'c_file_handling',
    question: 'Move to specific record in binary file',
    mathSolution: 'Direct access by record number',
    codeSolution: 'int recordNum = 5;\nfseek(fp, recordNum * sizeof(Record), SEEK_SET);',
    hint: 'Zero-based indexing'
  },
  {
    id: 'c_file_38',
    topicId: 'c_file_handling',
    question: 'Check if file position is at end',
    mathSolution: 'Compare with file size',
    codeSolution: 'long current = ftell(fp);\nfseek(fp, 0, SEEK_END);\nlong end = ftell(fp);\nfseek(fp, current, SEEK_SET);',
    hint: 'Or use feof later'
  },
  {
    id: 'c_file_39',
    topicId: 'c_file_handling',
    question: 'Append data after seeking',
    mathSolution: 'Writing moves position',
    codeSolution: 'fseek(fp, 0, SEEK_END);\nfprintf(fp, "Appended text");',
    hint: 'a+ mode also works'
  },
  {
    id: 'c_file_40',
    topicId: 'c_file_handling',
    question: 'Get file position for error recovery',
    mathSolution: 'Save position before operation',
    codeSolution: 'long pos = ftell(fp);\nif(fscanf(fp, "%d", &num) != 1) {\n    fseek(fp, pos, SEEK_SET);\n}',
    hint: 'Rollback on parse error'
  },

  // ============ LEVEL 7: ERROR HANDLING (41-45) ============
  {
    id: 'c_file_41',
    topicId: 'c_file_handling',
    question: 'Check for end of file',
    mathSolution: 'Returns non-zero if EOF',
    codeSolution: 'if(feof(fp)) {\n    printf("End of file reached");\n}',
    hint: 'Only set after read attempt'
  },
  {
    id: 'c_file_42',
    topicId: 'c_file_handling',
    question: 'Check for file error',
    mathSolution: 'Returns non-zero if error',
    codeSolution: 'if(ferror(fp)) {\n    printf("File error occurred");\n}',
    hint: 'Clear with clearerr'
  },
  {
    id: 'c_file_43',
    topicId: 'c_file_handling',
    question: 'Clear file error and EOF indicators',
    mathSolution: 'Reset error state',
    codeSolution: 'clearerr(fp);',
    hint: 'Use after handling error'
  },
  {
    id: 'c_file_44',
    topicId: 'c_file_handling',
    question: 'Print descriptive error message',
    mathSolution: 'Use perror with errno',
    codeSolution: 'if(fp == NULL) {\n    perror("Error opening file");\n}',
    hint: 'Includes system error message'
  },
  {
    id: 'c_file_45',
    topicId: 'c_file_handling',
    question: 'Get error number from file operation',
    mathSolution: 'errno set by system calls',
    codeSolution: '#include <errno.h>\nif(fopen("none.txt", "r") == NULL) {\n    printf("Error %d", errno);\n}',
    hint: 'errno from <errno.h>'
  },

  // ============ LEVEL 8: STANDARD STREAMS (46-50) ============
  {
    id: 'c_file_46',
    topicId: 'c_file_handling',
    question: 'Write to standard output',
    mathSolution: 'stdout is FILE*',
    codeSolution: 'fprintf(stdout, "Hello World\\n");',
    hint: 'Same as printf'
  },
  {
    id: 'c_file_47',
    topicId: 'c_file_handling',
    question: 'Read from standard input',
    mathSolution: 'stdin is FILE*',
    codeSolution: 'char buffer[100];\nfgets(buffer, sizeof(buffer), stdin);',
    hint: 'Same as gets (but safe)'
  },
  {
    id: 'c_file_48',
    topicId: 'c_file_handling',
    question: 'Write error message to stderr',
    mathSolution: 'stderr unbuffered usually',
    codeSolution: 'fprintf(stderr, "Error: Invalid input\\n");',
    hint: 'Always use for errors'
  },
  {
    id: 'c_file_49',
    topicId: 'c_file_handling',
    question: 'Redirect stdout to file temporarily',
    mathSolution: 'Save and replace stdout',
    codeSolution: 'FILE *original = stdout;\nstdout = fopen("out.txt", "w");\nprintf("To file");\nfclose(stdout);\nstdout = original;',
    hint: 'Not recommended, but possible'
  },
  {
    id: 'c_file_50',
    topicId: 'c_file_handling',
    question: 'Flush standard output',
    mathSolution: 'Force write of buffer',
    codeSolution: 'fflush(stdout);',
    hint: 'Use before long operations'
  },

  // ============ LEVEL 9: TEMPORARY FILES (51-55) ============
  {
    id: 'c_file_51',
    topicId: 'c_file_handling',
    question: 'Create temporary file',
    mathSolution: 'Automatically deleted on close',
    codeSolution: 'FILE *tmp = tmpfile();',
    hint: 'Binary read/write mode'
  },
  {
    id: 'c_file_52',
    topicId: 'c_file_handling',
    question: 'Generate temporary filename',
    mathSolution: 'Creates unique name',
    codeSolution: 'char name[L_tmpnam];\ntmpnam(name);\nFILE *fp = fopen(name, "w+");',
    hint: 'Security concerns with tmpnam'
  },
  {
    id: 'c_file_53',
    topicId: 'c_file_handling',
    question: 'Create named temporary file safely',
    mathSolution: 'mkstemp (POSIX)',
    codeSolution: 'char template[] = "/tmp/mytempXXXXXX";\nint fd = mkstemp(template);\nFILE *fp = fdopen(fd, "r+");',
    hint: 'Not standard C, POSIX'
  },
  {
    id: 'c_file_54',
    topicId: 'c_file_handling',
    question: 'Use temporary file for sorting',
    mathSolution: 'External sorting',
    codeSolution: 'FILE *tmp = tmpfile();\nfwrite(data, sizeof(int), count, tmp);\nrewind(tmp);\nfread(data, sizeof(int), count, tmp);',
    hint: 'Disk as memory extension'
  },
  {
    id: 'c_file_55',
    topicId: 'c_file_handling',
    question: 'Delete file after use',
    mathSolution: 'remove() deletes by name',
    codeSolution: 'char filename[] = "temp.txt";\nFILE *fp = fopen(filename, "w");\nfclose(fp);\nremove(filename);',
    hint: 'File must be closed'
  },

  // ============ LEVEL 10: FILE MANIPULATION (56-60) ============
  {
    id: 'c_file_56',
    topicId: 'c_file_handling',
    question: 'Rename a file',
    mathSolution: 'Move/rename file',
    codeSolution: 'rename("old.txt", "new.txt");',
    hint: 'Returns 0 on success'
  },
  {
    id: 'c_file_57',
    topicId: 'c_file_handling',
    question: 'Delete a file',
    mathSolution: 'Remove from filesystem',
    codeSolution: 'remove("unwanted.txt");',
    hint: 'File must be closed'
  },
  {
    id: 'c_file_58',
    topicId: 'c_file_handling',
    question: 'Copy file using standard I/O',
    mathSolution: 'Read and write blocks',
    codeSolution: 'FILE *src = fopen("src.txt", "rb");\nFILE *dest = fopen("dest.txt", "wb");\nchar buffer[4096];\nsize_t bytes;\nwhile((bytes = fread(buffer, 1, sizeof(buffer), src)) > 0) {\n    fwrite(buffer, 1, bytes, dest);\n}',
    hint: 'Use binary mode'
  },
  {
    id: 'c_file_59',
    topicId: 'c_file_handling',
    question: 'Check if file exists',
    mathSolution: 'Try to open for reading',
    codeSolution: 'FILE *fp = fopen("file.txt", "r");\nif(fp) {\n    fclose(fp);\n    printf("File exists");\n}',
    hint: 'fopen returns NULL if not exist'
  },
  {
    id: 'c_file_60',
    topicId: 'c_file_handling',
    question: 'Get file modification time',
    mathSolution: 'Use stat() function',
    codeSolution: '#include <sys/stat.h>\nstruct stat st;\nstat("file.txt", &st);\nprintf("Modified: %s", ctime(&st.st_mtime));',
    hint: 'POSIX function, not standard C'
  },

  // ============ LEVEL 11: BUFFERING (61-65) ============
  {
    id: 'c_file_61',
    topicId: 'c_file_handling',
    question: 'Set full buffering for file',
    mathSolution: 'Buffer until full',
    codeSolution: 'setvbuf(fp, NULL, _IOFBF, 8192);',
    hint: 'Default for disk files'
  },
  {
    id: 'c_file_62',
    topicId: 'c_file_handling',
    question: 'Set line buffering for file',
    mathSolution: 'Flush on newline',
    codeSolution: 'setvbuf(fp, NULL, _IOLBF, 0);',
    hint: 'Default for terminal'
  },
  {
    id: 'c_file_63',
    topicId: 'c_file_handling',
    question: 'Set no buffering for file',
    mathSolution: 'Immediate write',
    codeSolution: 'setvbuf(fp, NULL, _IONBF, 0);',
    hint: 'Use for error logs'
  },
  {
    id: 'c_file_64',
    topicId: 'c_file_handling',
    question: 'Provide custom buffer for file',
    mathSolution: 'User-allocated buffer',
    codeSolution: 'char buffer[4096];\nsetvbuf(fp, buffer, _IOFBF, sizeof(buffer));',
    hint: 'Buffer must exist while file open'
  },
  {
    id: 'c_file_65',
    topicId: 'c_file_handling',
    question: 'Flush file buffer to disk',
    mathSolution: 'Force write of buffer',
    codeSolution: 'fflush(fp);',
    hint: 'Important before critical operations'
  },

  // ============ LEVEL 12: READING DIRECTORIES (66-70) ============
  {
    id: 'c_file_66',
    topicId: 'c_file_handling',
    question: 'Open directory for reading',
    mathSolution: 'POSIX directory functions',
    codeSolution: '#include <dirent.h>\nDIR *dir = opendir(".");',
    hint: 'Not standard C'
  },
  {
    id: 'c_file_67',
    topicId: 'c_file_handling',
    question: 'Read directory entries',
    mathSolution: 'Iterate through files',
    codeSolution: 'struct dirent *entry;\nwhile((entry = readdir(dir)) != NULL) {\n    printf("%s\\n", entry->d_name);\n}',
    hint: 'Includes . and ..'
  },
  {
    id: 'c_file_68',
    topicId: 'c_file_handling',
    question: 'Close directory',
    mathSolution: 'Release resources',
    codeSolution: 'closedir(dir);',
    hint: 'Always close'
  },
  {
    id: 'c_file_69',
    topicId: 'c_file_handling',
    question: 'Get current working directory',
    mathSolution: 'POSIX getcwd',
    codeSolution: 'char cwd[256];\ngetcwd(cwd, sizeof(cwd));\nprintf("%s", cwd);',
    hint: 'NULL return on error'
  },
  {
    id: 'c_file_70',
    topicId: 'c_file_handling',
    question: 'Change current directory',
    mathSolution: 'POSIX chdir',
    codeSolution: 'chdir("/tmp");',
    hint: 'Returns 0 on success'
  },

  // ============ LEVEL 13: ADVANCED FILE OPERATIONS (71-75) ============
  {
    id: 'c_file_71',
    topicId: 'c_file_handling',
    question: 'Read file into memory completely',
    mathSolution: 'Get size, allocate, read',
    codeSolution: 'fseek(fp, 0, SEEK_END);\nlong size = ftell(fp);\nrewind(fp);\nchar *buffer = malloc(size + 1);\nfread(buffer, 1, size, fp);\nbuffer[size] = 0;',
    hint: 'Don\'t forget null terminator'
  },
  {
    id: 'c_file_72',
    topicId: 'c_file_handling',
    question: 'Write formatted data with snprintf safety',
    mathSolution: 'Create string then write',
    codeSolution: 'char buffer[1024];\nsnprintf(buffer, sizeof(buffer), "Data: %d %f", num, val);\nfputs(buffer, fp);',
    hint: 'Avoid fprintf buffer overflows'
  },
  {
    id: 'c_file_73',
    topicId: 'c_file_handling',
    question: 'Count lines in file',
    mathSolution: 'Count newline characters',
    codeSolution: 'int ch, lines = 0;\nwhile((ch = fgetc(fp)) != EOF) {\n    if(ch == \'\\n\') lines++;\n}',
    hint: 'Last line may not have newline'
  },
  {
    id: 'c_file_74',
    topicId: 'c_file_handling',
    question: 'Count words in file',
    mathSolution: 'Whitespace-separated tokens',
    codeSolution: 'int inWord = 0, words = 0, ch;\nwhile((ch = fgetc(fp)) != EOF) {\n    if(isspace(ch)) inWord = 0;\n    else if(!inWord) {\n        inWord = 1;\n        words++;\n    }\n}',
    hint: 'Handle multiple spaces'
  },
  {
    id: 'c_file_75',
    topicId: 'c_file_handling',
    question: 'Find and replace text in file',
    mathSolution: 'Read, replace, write new',
    codeSolution: 'FILE *fp = fopen("file.txt", "r");\nFILE *tmp = tmpfile();\nchar line[256];\nwhile(fgets(line, sizeof(line), fp)) {\n    char *pos;\n    while((pos = strstr(line, "old"))) {\n        *pos = 0;\n        strcat(line, "new");\n        strcat(line, pos + 3);\n    }\n    fputs(line, tmp);\n}',
    hint: 'Complex, needs careful handling'
  },

  // ============ LEVEL 14: RECORD PROCESSING (76-80) ============
  {
    id: 'c_file_76',
    topicId: 'c_file_handling',
    question: 'Update specific record in file',
    mathSolution: 'Seek, overwrite',
    codeSolution: 'fseek(fp, index * sizeof(Record), SEEK_SET);\nfwrite(&record, sizeof(Record), 1, fp);',
    hint: 'Don\'t insert, just overwrite'
  },
  {
    id: 'c_file_77',
    topicId: 'c_file_handling',
    question: 'Delete record from file',
    mathSolution: 'Copy all but one to new file',
    codeSolution: 'FILE *src = fopen("data.dat", "rb");\nFILE *dest = fopen("new.dat", "wb");\nRecord r;\nint skip = 5;\nfor(int i = 0; fread(&r, sizeof(Record), 1, src); i++) {\n    if(i != skip) fwrite(&r, sizeof(Record), 1, dest);\n}',
    hint: 'Then rename new file'
  },
  {
    id: 'c_file_78',
    topicId: 'c_file_handling',
    question: 'Insert record at position',
    mathSolution: 'Shift records down',
    codeSolution: '// Complex - read from end, write shifted',
    hint: 'Use temporary file easier'
  },
  {
    id: 'c_file_79',
    topicId: 'c_file_handling',
    question: 'Merge two sorted files',
    mathSolution: 'Like merge sort',
    codeSolution: 'int v1, v2;\nFILE *f1 = fopen("f1.dat", "rb");\nFILE *f2 = fopen("f2.dat", "rb");\nFILE *out = fopen("merged.dat", "wb");\n// Read first values, merge loop',
    hint: 'Classic merge algorithm'
  },
  {
    id: 'c_file_80',
    topicId: 'c_file_handling',
    question: 'Indexed file access',
    mathSolution: 'Keep index in memory',
    codeSolution: 'long index[1000]; // Position of each record\nfseek(fp, index[50], SEEK_SET);\nfread(&rec, sizeof(rec), 1, fp);',
    hint: 'Faster than searching'
  },

  // ============ LEVEL 15: MULTIPLE FILES (81-85) ============
  {
    id: 'c_file_81',
    topicId: 'c_file_handling',
    question: 'Process multiple files from command line',
    mathSolution: 'Loop through argv',
    codeSolution: 'int main(int argc, char *argv[]) {\n    for(int i = 1; i < argc; i++) {\n        FILE *fp = fopen(argv[i], "r");\n        process(fp);\n        fclose(fp);\n    }\n}',
    hint: 'Like cat command'
  },
  {
    id: 'c_file_82',
    topicId: 'c_file_handling',
    question: 'Compare two files',
    mathSolution: 'Byte-by-byte comparison',
    codeSolution: 'int ch1, ch2, pos = 0;\ndo {\n    ch1 = fgetc(f1);\n    ch2 = fgetc(f2);\n    pos++;\n} while(ch1 != EOF && ch2 != EOF && ch1 == ch2);',
    hint: 'Check both EOF at same time'
  },
  {
    id: 'c_file_83',
    topicId: 'c_file_handling',
    question: 'Split file into multiple files',
    mathSolution: 'Write chunks to separate files',
    codeSolution: 'char buffer[1024];\nsize_t bytes;\nint part = 0;\nwhile((bytes = fread(buffer, 1, sizeof(buffer), src)) > 0) {\n    char name[20];\n    sprintf(name, "part%d", part++);\n    FILE *out = fopen(name, "wb");\n    fwrite(buffer, 1, bytes, out);\n    fclose(out);\n}',
    hint: 'Like split command'
  },
  {
    id: 'c_file_84',
    topicId: 'c_file_handling',
    question: 'Join multiple files',
    mathSolution: 'Concatenate files',
    codeSolution: 'for(int i = 0; i < numFiles; i++) {\n    FILE *in = fopen(filenames[i], "rb");\n    char buffer[4096];\n    size_t bytes;\n    while((bytes = fread(buffer, 1, sizeof(buffer), in)) > 0)\n        fwrite(buffer, 1, bytes, out);\n    fclose(in);\n}',
    hint: 'Like cat > output'
  },
  {
    id: 'c_file_85',
    topicId: 'c_file_handling',
    question: 'Process files in directory',
    mathSolution: 'Combine directory reading with file processing',
    codeSolution: 'DIR *dir = opendir(".");\nstruct dirent *entry;\nwhile((entry = readdir(dir))) {\n    if(entry->d_name[0] != \'.\') {\n        FILE *fp = fopen(entry->d_name, "r");\n        process(fp);\n        fclose(fp);\n    }\n}\nclosedir(dir);',
    hint: 'Skip hidden files'
  },

  // ============ LEVEL 16: TEXT PROCESSING (86-90) ============
  {
    id: 'c_file_86',
    topicId: 'c_file_handling',
    question: 'Convert file to uppercase',
    mathSolution: 'Read char, toupper, write',
    codeSolution: 'int ch;\nwhile((ch = fgetc(src)) != EOF) {\n    fputc(toupper(ch), dest);\n}',
    hint: 'Include ctype.h'
  },
  {
    id: 'c_file_87',
    topicId: 'c_file_handling',
    question: 'Strip comments from C file',
    mathSolution: 'Remove // and /* */ comments',
    codeSolution: 'int ch, next;\nwhile((ch = fgetc(src)) != EOF) {\n    if(ch == \'/\') {\n        next = fgetc(src);\n        if(next == \'/\')\n            while((ch = fgetc(src)) != EOF && ch != \'\\n\');\n        else if(next == \'*\')\n            while((ch = fgetc(src)) != EOF) {\n                if(ch == \'*\' && (next = fgetc(src)) == \'/\') break;\n            }\n        else {\n            fputc(ch, dest);\n            fputc(next, dest);\n        }\n    } else fputc(ch, dest);\n}',
    hint: 'Handle edge cases'
  },
  {
    id: 'c_file_88',
    topicId: 'c_file_handling',
    question: 'Add line numbers to file',
    mathSolution: 'Prefix each line with number',
    codeSolution: 'char line[1024];\nint lineNum = 1;\nwhile(fgets(line, sizeof(line), src)) {\n    fprintf(dest, "%4d: %s", lineNum++, line);\n}',
    hint: 'Right-align numbers'
  },
  {
    id: 'c_file_89',
    topicId: 'c_file_handling',
    question: 'Extract words from file',
    mathSolution: 'Split by whitespace',
    codeSolution: 'char word[100];\nint ch, i = 0;\nwhile((ch = fgetc(fp)) != EOF) {\n    if(isspace(ch)) {\n        if(i > 0) {\n            word[i] = 0;\n            printf("%s\\n", word);\n            i = 0;\n        }\n    } else {\n        word[i++] = ch;\n    }\n}',
    hint: 'Handle last word'
  },
  {
    id: 'c_file_90',
    topicId: 'c_file_handling',
    question: 'Find longest line in file',
    mathSolution: 'Track maximum length',
    codeSolution: 'char line[1024];\nint maxLen = 0;\nwhile(fgets(line, sizeof(line), fp)) {\n    int len = strlen(line);\n    if(len > maxLen) maxLen = len;\n}',
    hint: 'Includes newline in count'
  },

  // ============ LEVEL 17: CSV PROCESSING (91-95) ============
  {
    id: 'c_file_91',
    topicId: 'c_file_handling',
    question: 'Parse CSV file with quotes',
    mathSolution: 'Handle quoted fields',
    codeSolution: 'int ch, inQuote = 0;\nwhile((ch = fgetc(fp)) != EOF) {\n    if(ch == \'"\') inQuote = !inQuote;\n    else if(ch == \',\' && !inQuote) {\n        printf("|");\n    } else putchar(ch);\n}',
    hint: 'Simple CSV parser'
  },
  {
    id: 'c_file_92',
    topicId: 'c_file_handling',
    question: 'Write data to CSV file',
    mathSolution: 'Comma-separated values',
    codeSolution: 'fprintf(fp, "%d,%s,%f\\n", id, name, salary);',
    hint: 'Escape commas in strings'
  },
  {
    id: 'c_file_93',
    topicId: 'c_file_handling',
    question: 'Read CSV into structure array',
    mathSolution: 'Parse each line',
    codeSolution: 'struct Person p[100];\nint i = 0;\nchar line[256];\nwhile(fgets(line, sizeof(line), fp) && i < 100) {\n    sscanf(line, "%d,%[^,],%d", &p[i].id, p[i].name, &p[i].age);\n    i++;\n}',
    hint: 'Limited to simple CSV'
  },
  {
    id: 'c_file_94',
    topicId: 'c_file_handling',
    question: 'Convert CSV to fixed-width',
    mathSolution: 'Read CSV, write formatted',
    codeSolution: 'int id; char name[50]; int age;\nwhile(fscanf(fp, "%d,%[^,],%d\\n", &id, name, &age) == 3) {\n    fprintf(out, "%5d %-20s %3d\\n", id, name, age);\n}',
    hint: 'Better for printing'
  },
  {
    id: 'c_file_95',
    topicId: 'c_file_handling',
    question: 'Validate CSV format',
    mathSolution: 'Count commas per line',
    codeSolution: 'char line[1024];\nint lineNum = 1;\nwhile(fgets(line, sizeof(line), fp)) {\n    int commas = 0;\n    for(char *p = line; *p; p++)\n        if(*p == \',\') commas++;\n    if(commas != EXPECTED)\n        printf("Line %d has %d commas\\n", lineNum, commas);\n    lineNum++;\n}',
    hint: 'Expected commas = fields-1'
  },

  // ============ LEVEL 18: BINARY DATA STRUCTURES (96-100) ============
  {
    id: 'c_file_96',
    topicId: 'c_file_handling',
    question: 'Write linked list to file',
    mathSolution: 'Serialize list',
    codeSolution: 'struct Node *curr = head;\nwhile(curr) {\n    fwrite(curr, sizeof(struct Node), 1, fp);\n    curr = curr->next;\n}',
    hint: 'Pointers become invalid'
  },
  {
    id: 'c_file_97',
    topicId: 'c_file_handling',
    question: 'Read linked list from file',
    mathSolution: 'Reconstruct list',
    codeSolution: 'struct Node *head = NULL, *prev = NULL;\nstruct Node n;\nwhile(fread(&n, sizeof(struct Node), 1, fp) == 1) {\n    struct Node *node = malloc(sizeof(struct Node));\n    *node = n;\n    node->next = NULL;\n    if(prev) prev->next = node;\n    else head = node;\n    prev = node;\n}',
    hint: 'Fix pointers after read'
  },
  {
    id: 'c_file_98',
    topicId: 'c_file_handling',
    question: 'Write binary tree to file',
    mathSolution: 'Preorder traversal',
    codeSolution: 'void saveTree(FILE *fp, struct TreeNode *root) {\n    if(!root) {\n        int marker = -1;\n        fwrite(&marker, sizeof(int), 1, fp);\n        return;\n    }\n    fwrite(&root->data, sizeof(int), 1, fp);\n    saveTree(fp, root->left);\n    saveTree(fp, root->right);\n}',
    hint: 'Use sentinel for NULL'
  },
  {
    id: 'c_file_99',
    topicId: 'c_file_handling',
    question: 'Read binary tree from file',
    mathSolution: 'Reconstruct from preorder',
    codeSolution: 'struct TreeNode* loadTree(FILE *fp) {\n    int val;\n    if(fread(&val, sizeof(int), 1, fp) != 1 || val == -1)\n        return NULL;\n    struct TreeNode *node = malloc(sizeof(struct TreeNode));\n    node->data = val;\n    node->left = loadTree(fp);\n    node->right = loadTree(fp);\n    return node;\n}',
    hint: 'Recursive reconstruction'
  },
  {
    id: 'c_file_100',
    topicId: 'c_file_handling',
    question: 'Create simple database with index file',
    mathSolution: 'Data file + index file',
    codeSolution: '// Write data\nlong pos = ftell(data);\nfwrite(&rec, sizeof(rec), 1, data);\nfwrite(&rec.id, sizeof(int), 1, index);\nfwrite(&pos, sizeof(long), 1, index);\n\n// Read by ID\nfseek(index, 0, SEEK_SET);\nwhile(fread(&id, sizeof(int), 1, index) && fread(&pos, sizeof(long), 1, index)) {\n    if(id == searchId) {\n        fseek(data, pos, SEEK_SET);\n        fread(&rec, sizeof(rec), 1, data);\n        break;\n    }\n}',
    hint: 'Index for fast lookup'
  }
);