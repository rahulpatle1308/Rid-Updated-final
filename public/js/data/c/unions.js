QuizData.questions.push(
  // ============ LEVEL 1: UNION BASICS - DECLARATION AND DEFINITION (1-5) ============
  {
    id: 'c_union_01',
    topicId: 'c_unions',
    question: 'Declare a simple union with int and float members',
    mathSolution: 'All members share same memory location',
    codeSolution: 'union Data { int i; float f; };',
    hint: 'Size equals largest member'
  },
  {
    id: 'c_union_02',
    topicId: 'c_unions',
    question: 'Create a union variable',
    mathSolution: 'Memory allocated for union',
    codeSolution: 'union Data d;',
    hint: 'Use union keyword'
  },
  {
    id: 'c_union_03',
    topicId: 'c_unions',
    question: 'Initialize union with first member',
    mathSolution: 'Only first member can be initialized',
    codeSolution: 'union Data d = {10};',
    hint: 'Initializes int member i'
  },
  {
    id: 'c_union_04',
    topicId: 'c_unions',
    question: 'Initialize union using designated initializer',
    mathSolution: 'Specify which member to initialize',
    codeSolution: 'union Data d = {.f = 3.14};',
    hint: 'C99 designated initializers'
  },
  {
    id: 'c_union_05',
    topicId: 'c_unions',
    question: 'Create typedef for union',
    mathSolution: 'Alias for easier use',
    codeSolution: 'typedef union { int i; float f; } Data;',
    hint: 'Now use Data directly'
  },

  // ============ LEVEL 2: MEMBER ACCESS (6-10) ============
  {
    id: 'c_union_06',
    topicId: 'c_unions',
    question: 'Access union member using dot operator',
    mathSolution: 'Store value in union',
    codeSolution: 'd.i = 42;',
    hint: 'Only one member active at a time'
  },
  {
    id: 'c_union_07',
    topicId: 'c_unions',
    question: 'Read value from union member',
    mathSolution: 'Retrieve stored value',
    codeSolution: 'printf("%d", d.i);',
    hint: 'May get garbage if wrong member used'
  },
  {
    id: 'c_union_08',
    topicId: 'c_unions',
    question: 'Store different types in same union',
    mathSolution: 'Overwrite previous value',
    codeSolution: 'd.i = 10; d.f = 3.14; // Now d.i is corrupted',
    hint: 'Last write determines active member'
  },
  {
    id: 'c_union_09',
    topicId: 'c_unions',
    question: 'Check size of union',
    mathSolution: 'Size is max of member sizes',
    codeSolution: 'printf("%zu", sizeof(union Data));',
    hint: 'May include padding for alignment'
  },
  {
    id: 'c_union_10',
    topicId: 'c_unions',
    question: 'Compare union with structure of same members',
    mathSolution: 'Union saves memory, structure separates',
    codeSolution: 'struct { int i; float f; } s; // Size = 8+ bytes\nunion { int i; float f; } u; // Size = 4 bytes',
    hint: 'Union shares memory'
  },

  // ============ LEVEL 3: UNIONS WITH DIFFERENT TYPES (11-15) ============
  {
    id: 'c_union_11',
    topicId: 'c_unions',
    question: 'Create union with int, float, char array',
    mathSolution: 'Mix different data types',
    codeSolution: 'union Mixed { int i; float f; char str[20]; };',
    hint: 'Largest member determines size'
  },
  {
    id: 'c_union_12',
    topicId: 'c_unions',
    question: 'Store string in union',
    mathSolution: 'Copy string into union',
    codeSolution: 'strcpy(u.str, "Hello");',
    hint: 'Ensure array is large enough'
  },
  {
    id: 'c_union_13',
    topicId: 'c_unions',
    question: 'Union with pointer members',
    mathSolution: 'Store different pointer types',
    codeSolution: 'union Pointers { int *ip; float *fp; void *vp; };',
    hint: 'All pointers same size typically'
  },
  {
    id: 'c_union_14',
    topicId: 'c_unions',
    question: 'Union with function pointers',
    mathSolution: 'Store different function types',
    codeSolution: 'union FuncPtr { int (*intFunc)(int); void (*voidFunc)(void); };',
    hint: 'Careful with type safety'
  },
  {
    id: 'c_union_15',
    topicId: 'c_unions',
    question: 'Union with array and structure',
    mathSolution: 'Access same memory differently',
    codeSolution: 'union { int arr[4]; struct { int a; int b; int c; int d; }; } u;',
    hint: 'Array and structure share memory'
  },

  // ============ LEVEL 4: TYPE PUNNING (16-20) ============
  {
    id: 'c_union_16',
    topicId: 'c_unions',
    question: 'Use union for type punning (int to float)',
    mathSolution: 'Same memory interpreted differently',
    codeSolution: 'union { int i; float f; } u; u.i = 0x40490fdb; printf("%f", u.f); // ~3.14159',
    hint: 'Undefined behavior in strict C'
  },
  {
    id: 'c_union_17',
    topicId: 'c_unions',
    question: 'Get IEEE representation of float',
    mathSolution: 'Store float, read as int',
    codeSolution: 'u.f = 3.14; printf("0x%x", u.i);',
    hint: 'Shows hex representation'
  },
  {
    id: 'c_union_18',
    topicId: 'c_unions',
    question: 'Split 32-bit int into bytes',
    mathSolution: 'Union with int and byte array',
    codeSolution: 'union { int i; unsigned char bytes[4]; } u; u.i = 0x12345678;',
    hint: 'Endianness affects byte order'
  },
  {
    id: 'c_union_19',
    topicId: 'c_unions',
    question: 'Check system endianness using union',
    mathSolution: 'Write int, read first byte',
    codeSolution: 'union { int i; char c; } u; u.i = 1; if(u.c == 1) printf("Little endian");',
    hint: 'LSB first on little endian'
  },
  {
    id: 'c_union_20',
    topicId: 'c_unions',
    question: 'Access individual bits of float',
    mathSolution: 'Union with float and bit fields',
    codeSolution: 'union { float f; struct { unsigned int mant:23; unsigned int exp:8; unsigned int sign:1; } bits; } u;',
    hint: 'IEEE 754 format'
  },

  // ============ LEVEL 5: UNIONS INSIDE STRUCTURES (21-25) ============
  {
    id: 'c_union_21',
    topicId: 'c_unions',
    question: 'Embed union inside structure',
    mathSolution: 'Structure with type and union',
    codeSolution: 'struct Variant { int type; union { int i; float f; char c; } data; };',
    hint: 'type tracks active union member'
  },
  {
    id: 'c_union_22',
    topicId: 'c_unions',
    question: 'Initialize structure containing union',
    mathSolution: 'Initialize type and union',
    codeSolution: 'struct Variant v = { .type = 1, .data.i = 42 };',
    hint: 'Designated initializers'
  },
  {
    id: 'c_union_23',
    topicId: 'c_unions',
    question: 'Access union member inside structure',
    mathSolution: 'Dot for struct, dot for union',
    codeSolution: 'v.data.i = 100;',
    hint: 'Two dots in sequence'
  },
  {
    id: 'c_union_24',
    topicId: 'c_unions',
    question: 'Create array of structures with unions',
    mathSolution: 'Each element has its own union',
    codeSolution: 'struct Variant arr[10]; arr[0].type = 2; arr[0].data.f = 3.14;',
    hint: 'Track type for each element'
  },
  {
    id: 'c_union_25',
    topicId: 'c_unions',
    question: 'Function to print structure with union',
    mathSolution: 'Check type before accessing',
    codeSolution: 'void printVariant(struct Variant v) { switch(v.type) { case 1: printf("%d", v.data.i); break; case 2: printf("%f", v.data.f); } }',
    hint: 'Type-safe union access'
  },

  // ============ LEVEL 6: ARRAYS OF UNIONS (26-30) ============
  {
    id: 'c_union_26',
    topicId: 'c_unions',
    question: 'Create array of unions',
    mathSolution: 'Each element shares memory',
    codeSolution: 'union Data arr[10];',
    hint: 'Each array element is a union'
  },
  {
    id: 'c_union_27',
    topicId: 'c_unions',
    question: 'Initialize array of unions',
    mathSolution: 'Each element initialized separately',
    codeSolution: 'union Data arr[] = {{10}, {.f=3.14}, {20}};',
    hint: 'Mixed initializer types'
  },
  {
    id: 'c_union_28',
    topicId: 'c_unions',
    question: 'Store different types in union array',
    mathSolution: 'Track type for each element',
    codeSolution: 'int types[10]; union Data arr[10]; types[0] = 0; arr[0].i = 42; types[1] = 1; arr[1].f = 3.14;',
    hint: 'Parallel array for types'
  },
  {
    id: 'c_union_29',
    topicId: 'c_unions',
    question: 'Process union array with type tags',
    mathSolution: 'Switch on type array',
    codeSolution: 'for(i = 0; i < n; i++) { if(types[i]==0) processInt(arr[i].i); else processFloat(arr[i].f); }',
    hint: 'Type tags essential'
  },
  {
    id: 'c_union_30',
    topicId: 'c_unions',
    question: '2D array of unions',
    mathSolution: 'Matrix of variant values',
    codeSolution: 'union Data matrix[5][5];',
    hint: 'Multidimensional union array'
  },

  // ============ LEVEL 7: POINTERS TO UNIONS (31-35) ============
  {
    id: 'c_union_31',
    topicId: 'c_unions',
    question: 'Declare pointer to union',
    mathSolution: 'Pointer holds union address',
    codeSolution: 'union Data *ptr;',
    hint: 'Can point to union variables'
  },
  {
    id: 'c_union_32',
    topicId: 'c_unions',
    question: 'Make pointer point to union',
    mathSolution: 'Use address-of operator',
    codeSolution: 'ptr = &u;',
    hint: '& gives address'
  },
  {
    id: 'c_union_33',
    topicId: 'c_unions',
    question: 'Access union members via pointer',
    mathSolution: 'Use arrow operator',
    codeSolution: 'ptr->i = 42;',
    hint: 'Arrow for pointer access'
  },
  {
    id: 'c_union_34',
    topicId: 'c_unions',
    question: 'Dereference pointer to union',
    mathSolution: 'Use * then dot',
    codeSolution: '(*ptr).i = 42;',
    hint: 'Parentheses needed'
  },
  {
    id: 'c_union_35',
    topicId: 'c_unions',
    question: 'Array of pointers to unions',
    mathSolution: 'Each pointer can point to different union',
    codeSolution: 'union Data *ptrs[10];',
    hint: 'Useful for polymorphism'
  },

  // ============ LEVEL 8: DYNAMIC ALLOCATION (36-40) ============
  {
    id: 'c_union_36',
    topicId: 'c_unions',
    question: 'Dynamically allocate union',
    mathSolution: 'Use malloc with sizeof',
    codeSolution: 'union Data *ptr = (union Data*)malloc(sizeof(union Data));',
    hint: 'Check for NULL return'
  },
  {
    id: 'c_union_37',
    topicId: 'c_unions',
    question: 'Allocate array of unions dynamically',
    mathSolution: 'Multiply size by count',
    codeSolution: 'union Data *arr = (union Data*)malloc(n * sizeof(union Data));',
    hint: 'Contiguous memory'
  },
  {
    id: 'c_union_38',
    topicId: 'c_unions',
    question: 'Free dynamically allocated union',
    mathSolution: 'Use free to deallocate',
    codeSolution: 'free(ptr); ptr = NULL;',
    hint: 'Avoid dangling pointer'
  },
  {
    id: 'c_union_39',
    topicId: 'c_unions',
    question: 'Reallocate union array',
    mathSolution: 'Use realloc to resize',
    codeSolution: 'arr = (union Data*)realloc(arr, new_size * sizeof(union Data));',
    hint: 'May move memory'
  },
  {
    id: 'c_union_40',
    topicId: 'c_unions',
    question: 'Structure with dynamically allocated union',
    mathSolution: 'Union pointer in structure',
    codeSolution: 'struct DynamicVariant { int type; union Data *data; };',
    hint: 'Allocate union separately'
  },

  // ============ LEVEL 9: UNIONS AND FUNCTIONS (41-45) ============
  {
    id: 'c_union_41',
    topicId: 'c_unions',
    question: 'Pass union to function by value',
    mathSolution: 'Entire union copied',
    codeSolution: 'void processUnion(union Data u) { printf("%d", u.i); }',
    hint: 'Copies all bytes'
  },
  {
    id: 'c_union_42',
    topicId: 'c_unions',
    question: 'Pass union to function by pointer',
    mathSolution: 'Only address passed',
    codeSolution: 'void modifyUnion(union Data *u) { u->i = 100; }',
    hint: 'Can modify original'
  },
  {
    id: 'c_union_43',
    topicId: 'c_unions',
    question: 'Return union from function',
    mathSolution: 'Function returns union by value',
    codeSolution: 'union Data createInt(int val) { union Data u; u.i = val; return u; }',
    hint: 'Returns copy'
  },
  {
    id: 'c_union_44',
    topicId: 'c_unions',
    question: 'Return pointer to union from function',
    mathSolution: 'Return address of union',
    codeSolution: 'union Data* getUnion() { static union Data u; return &u; }',
    hint: 'Don\'t return local address'
  },
  {
    id: 'c_union_45',
    topicId: 'c_unions',
    question: 'Function with union parameter and type tag',
    mathSolution: 'Additional parameter for type',
    codeSolution: 'void printUnion(union Data u, int type) { if(type==1) printf("%d",u.i); else printf("%f",u.f); }',
    hint: 'Type tag needed for safety'
  },

  // ============ LEVEL 10: TAGGED UNIONS/DISCRIMINATED UNIONS (46-50) ============
  {
    id: 'c_union_46',
    topicId: 'c_unions',
    question: 'Create tagged union (discriminated union)',
    mathSolution: 'Enum for type + union',
    codeSolution: 'enum Type { INT, FLOAT, STRING };\nstruct TaggedUnion { enum Type tag; union { int i; float f; char *s; } data; };',
    hint: 'Type-safe variant'
  },
  {
    id: 'c_union_47',
    topicId: 'c_unions',
    question: 'Initialize tagged union',
    mathSolution: 'Set tag and data appropriately',
    codeSolution: 'struct TaggedUnion v = { .tag = INT, .data.i = 42 };',
    hint: 'Match tag with data type'
  },
  {
    id: 'c_union_48',
    topicId: 'c_unions',
    question: 'Process tagged union safely',
    mathSolution: 'Switch on tag',
    codeSolution: 'switch(v.tag) { case INT: printf("%d", v.data.i); break; case FLOAT: printf("%f", v.data.f); break; }',
    hint: 'Always check tag first'
  },
  {
    id: 'c_union_49',
    topicId: 'c_unions',
    question: 'Array of tagged unions',
    mathSolution: 'Each element has its own tag',
    codeSolution: 'struct TaggedUnion arr[10]; arr[0].tag = INT; arr[0].data.i = 100;',
    hint: 'Track type per element'
  },
  {
    id: 'c_union_50',
    topicId: 'c_unions',
    question: 'Function to create tagged union',
    mathSolution: 'Factory function for variants',
    codeSolution: 'struct TaggedUnion makeInt(int val) { struct TaggedUnion v; v.tag = INT; v.data.i = val; return v; }',
    hint: 'Encapsulate creation'
  },

  // ============ LEVEL 11: NESTED UNIONS (51-55) ============
  {
    id: 'c_union_51',
    topicId: 'c_unions',
    question: 'Create nested union',
    mathSolution: 'Union inside union',
    codeSolution: 'union Outer { int type; union { int i; float f; } inner; };',
    hint: 'Inner union shares memory with type'
  },
  {
    id: 'c_union_52',
    topicId: 'c_unions',
    question: 'Access nested union members',
    mathSolution: 'Multiple dots or arrows',
    codeSolution: 'u.inner.i = 42;',
    hint: 'Go level by level'
  },
  {
    id: 'c_union_53',
    topicId: 'c_unions',
    question: 'Structure containing nested unions',
    mathSolution: 'Complex data layouts',
    codeSolution: 'struct Config { union { int intVal; struct { char key[20]; char value[50]; } stringVal; } setting; };',
    hint: 'Flexible configuration'
  },
  {
    id: 'c_union_54',
    topicId: 'c_unions',
    question: 'Union with nested structure',
    mathSolution: 'Structure inside union',
    codeSolution: 'union Value { int i; struct { int x; int y; } point; };',
    hint: 'Point structure overlaps with int'
  },
  {
    id: 'c_union_55',
    topicId: 'c_unions',
    question: 'Nested tagged unions',
    mathSolution: 'Tagged union containing tagged union',
    codeSolution: 'struct OuterTag { enum { INNER, DIRECT } tag; union { struct TaggedUnion inner; int direct; } data; };',
    hint: 'Multi-level variants'
  },

  // ============ LEVEL 12: UNIONS AND BIT FIELDS (56-60) ============
  {
    id: 'c_union_56',
    topicId: 'c_unions',
    question: 'Union with bit fields',
    mathSolution: 'Bit-level access to same memory',
    codeSolution: 'union { unsigned int value; struct { unsigned int b0:1; unsigned int b1:1; unsigned int b2:1; unsigned int b3:1; } bits; } u;',
    hint: 'Access individual bits'
  },
  {
    id: 'c_union_57',
    topicId: 'c_unions',
    question: 'Set individual bits via union',
    mathSolution: 'Modify bit field members',
    codeSolution: 'u.bits.b0 = 1; u.bits.b1 = 0;',
    hint: 'Changes underlying value'
  },
  {
    id: 'c_union_58',
    topicId: 'c_unions',
    question: 'Read whole value from bits',
    mathSolution: 'Access int member after setting bits',
    codeSolution: 'printf("Value: %u", u.value);',
    hint: 'Bits combined into integer'
  },
  {
    id: 'c_union_59',
    topicId: 'c_unions',
    question: 'Union for RGB color manipulation',
    mathSolution: 'Access as int or separate channels',
    codeSolution: 'union Color { unsigned int rgba; struct { unsigned char r; unsigned char g; unsigned char b; unsigned char a; } channels; };',
    hint: 'Endianness matters'
  },
  {
    id: 'c_union_60',
    topicId: 'c_unions',
    question: 'Union for IP address',
    mathSolution: 'Access as 32-bit or 4 bytes',
    codeSolution: 'union IP { unsigned int addr; unsigned char octets[4]; };',
    hint: 'Network vs host byte order'
  },

  // ============ LEVEL 13: UNIONS FOR MEMORY SAVING (61-65) ============
  {
    id: 'c_union_61',
    topicId: 'c_unions',
    question: 'Use union to save memory in structure',
    mathSolution: 'Share memory between mutually exclusive members',
    codeSolution: 'struct Node { int type; union { struct Node *next; int data; } content; };',
    hint: 'Different node types share space'
  },
  {
    id: 'c_union_62',
    topicId: 'c_unions',
    question: 'Variant record for memory-constrained system',
    mathSolution: 'Different data types share storage',
    codeSolution: 'struct SensorReading { time_t time; union { int intVal; float floatVal; char binary[4]; } value; };',
    hint: 'Sensor type determines interpretation'
  },
  {
    id: 'c_union_63',
    topicId: 'c_unions',
    question: 'Union for optional fields',
    mathSolution: 'Field present only when needed',
    codeSolution: 'struct Message { int id; int hasPayload; union { char data[100]; } payload; };',
    hint: 'Flag indicates if union valid'
  },
  {
    id: 'c_union_64',
    topicId: 'c_unions',
    question: 'Compare memory usage: struct vs union',
    mathSolution: 'Union uses max member size',
    codeSolution: 'struct { int a; float b; char c[100]; } s; // 108+ bytes\nunion { int a; float b; char c[100]; } u; // 100 bytes',
    hint: 'Union shares, struct sums'
  },
  {
    id: 'c_union_65',
    topicId: 'c_unions',
    question: 'Packed union for network protocol',
    mathSolution: 'Avoid padding in union',
    codeSolution: '#pragma pack(1)\nunion ProtocolHeader { uint32_t raw; struct { uint8_t version; uint8_t type; uint16_t length; } fields; };',
    hint: 'Ensure same layout across systems'
  },

  // ============ LEVEL 14: UNIONS IN FILE I/O (66-70) ============
  {
    id: 'c_union_66',
    topicId: 'c_unions',
    question: 'Write union to binary file',
    mathSolution: 'Write entire union',
    codeSolution: 'fwrite(&u, sizeof(union Data), 1, fp);',
    hint: 'Writes all bytes'
  },
  {
    id: 'c_union_67',
    topicId: 'c_unions',
    question: 'Read union from binary file',
    mathSolution: 'Read bytes into union',
    codeSolution: 'fread(&u, sizeof(union Data), 1, fp);',
    hint: 'Need to know active member'
  },
  {
    id: 'c_union_68',
    topicId: 'c_unions',
    question: 'Write tagged union to file',
    mathSolution: 'Write tag then union',
    codeSolution: 'fwrite(&v.tag, sizeof(v.tag), 1, fp); fwrite(&v.data, sizeof(v.data), 1, fp);',
    hint: 'Preserve type information'
  },
  {
    id: 'c_union_69',
    topicId: 'c_unions',
    question: 'Read tagged union from file',
    mathSolution: 'Read tag first, then union',
    codeSolution: 'fread(&v.tag, sizeof(v.tag), 1, fp); fread(&v.data, sizeof(v.data), 1, fp);',
    hint: 'Tag determines interpretation'
  },
  {
    id: 'c_union_70',
    topicId: 'c_unions',
    question: 'Union for file header parsing',
    mathSolution: 'Different file formats',
    codeSolution: 'union FileHeader { struct BMP bmp; struct GIF gif; struct PNG png; uint8_t raw[32]; };',
    hint: 'Parse based on magic numbers'
  },

  // ============ LEVEL 15: ADVANCED UNION APPLICATIONS (71-75) ============
  {
    id: 'c_union_71',
    topicId: 'c_unions',
    question: 'Union for mathematical vectors',
    mathSolution: 'Access as array or components',
    codeSolution: 'union Vector { float v[4]; struct { float x; float y; float z; float w; }; };',
    hint: 'Useful for SIMD operations'
  },
  {
    id: 'c_union_72',
    topicId: 'c_unions',
    question: 'Union for matrix representation',
    mathSolution: 'Row-major or column-major access',
    codeSolution: 'union Matrix { float m[4][4]; struct { float row0[4]; float row1[4]; float row2[4]; float row3[4]; }; };',
    hint: 'Same memory, different views'
  },
  {
    id: 'c_union_73',
    topicId: 'c_unions',
    question: 'Union for 3D coordinate systems',
    mathSolution: 'Cartesian or spherical',
    codeSolution: 'union Coord { struct { float x; float y; float z; } cart; struct { float r; float theta; float phi; } sphere; };',
    hint: 'Same memory, different interpretations'
  },
  {
    id: 'c_union_74',
    topicId: 'c_unions',
    question: 'Union for pixel formats',
    mathSolution: 'Different color depth representations',
    codeSolution: 'union Pixel { uint32_t rgba; struct { uint8_t r; uint8_t g; uint8_t b; uint8_t a; } channels; uint16_t rgb565; };',
    hint: 'Multiple format support'
  },
  {
    id: 'c_union_75',
    topicId: 'c_unions',
    question: 'Union for instruction decoding',
    mathSolution: 'CPU instruction different formats',
    codeSolution: 'union Instruction { uint32_t raw; struct { uint32_t opcode:8; uint32_t reg:4; uint32_t addr:20; } format1; struct { uint32_t opcode:8; uint32_t imm:24; } format2; };',
    hint: 'Different instruction types'
  },

  // ============ LEVEL 16: UNIONS AND CONST (76-80) ============
  {
    id: 'c_union_76',
    topicId: 'c_unions',
    question: 'Create const union',
    mathSolution: 'Union cannot be modified',
    codeSolution: 'const union Data u = {10};',
    hint: 'Initialize at declaration'
  },
  {
    id: 'c_union_77',
    topicId: 'c_unions',
    question: 'Pointer to const union',
    mathSolution: 'Cannot modify via pointer',
    codeSolution: 'const union Data *ptr = &u;',
    hint: 'Can still change pointer'
  },
  {
    id: 'c_union_78',
    topicId: 'c_unions',
    question: 'Const pointer to union',
    mathSolution: 'Pointer cannot change, union can',
    codeSolution: 'union Data *const ptr = &u;',
    hint: 'const after *'
  },
  {
    id: 'c_union_79',
    topicId: 'c_unions',
    question: 'Const pointer to const union',
    mathSolution: 'Neither pointer nor union can change',
    codeSolution: 'const union Data *const ptr = &u;',
    hint: 'Double const'
  },
  {
    id: 'c_union_80',
    topicId: 'c_unions',
    question: 'Array of const unions',
    mathSolution: 'Each union element constant',
    codeSolution: 'const union Data arr[3] = {{10}, {.f=3.14}, {20}};',
    hint: 'Initialize all elements'
  },

  // ============ LEVEL 17: UNIONS AND PREPROCESSOR (81-85) ============
  {
    id: 'c_union_81',
    topicId: 'c_unions',
    question: 'Use #define to create union templates',
    mathSolution: 'Macro for repeated union patterns',
    codeSolution: '#define UNION_INT_FLOAT(name) union name { int i; float f; };\nUNION_INT_FLOAT(Data);',
    hint: 'Macro expansion'
  },
  {
    id: 'c_union_82',
    topicId: 'c_unions',
    question: 'Conditional compilation with unions',
    mathSolution: 'Different union definitions per platform',
    codeSolution: '#ifdef _WIN32\nunion IP { unsigned long addr; };\n#else\nunion IP { unsigned char octets[4]; };\n#endif',
    hint: 'Platform-specific'
  },
  {
    id: 'c_union_83',
    topicId: 'c_unions',
    question: 'X-Macro for union and accessors',
    mathSolution: 'Define once, generate multiple',
    codeSolution: '#define VARIANT_TYPES \\\n X(int, i) \\\n X(float, f) \\\n X(char*, s)\n\n#undef X\n#define X(type, name) type name;\nunion Variant { VARIANT_TYPES };\n\n#undef X\n#define X(type, name) case type: printf("%" #type, v.name); break;\nvoid print(union Variant v, int t) { switch(t) { VARIANT_TYPES }}',
    hint: 'Metaprogramming'
  },
  {
    id: 'c_union_84',
    topicId: 'c_unions',
    question: '#pragma pack with union',
    mathSolution: 'Control union alignment',
    codeSolution: '#pragma pack(1)\nunion Packed { int i; char c; };\n#pragma pack()',
    hint: 'May affect performance'
  },
  {
    id: 'c_union_85',
    topicId: 'c_unions',
    question: 'Union size assertion at compile time',
    mathSolution: 'Verify expected size',
    codeSolution: '_Static_assert(sizeof(union Data) == 4, "Unexpected union size");',
    hint: 'C11 static assert'
  },

  // ============ LEVEL 18: ERROR HANDLING (86-90) ============
  {
    id: 'c_union_86',
    topicId: 'c_unions',
    question: 'Union for error return values',
    mathSolution: 'Return success or error',
    codeSolution: 'union Result { int value; struct { int error_code; char message[100]; } error; };',
    hint: 'Success vs error union'
  },
  {
    id: 'c_union_87',
    topicId: 'c_unions',
    question: 'Function returning result union',
    mathSolution: 'Return success or error info',
    codeSolution: 'union Result divide(int a, int b) { union Result r; if(b==0) { r.error.error_code = 1; strcpy(r.error.message, "Division by zero"); } else { r.value = a/b; } return r; }',
    hint: 'Check error flag'
  },
  {
    id: 'c_union_88',
    topicId: 'c_unions',
    question: 'Union with status flag',
    mathSolution: 'Track if union is valid',
    codeSolution: 'struct Maybe { int valid; union { int value; } data; };',
    hint: 'Option type pattern'
  },
  {
    id: 'c_union_89',
    topicId: 'c_unions',
    question: 'Validate union access',
    mathSolution: 'Check before accessing',
    codeSolution: 'if(v.tag == INT) { processInt(v.data.i); } else { handleError("Wrong type accessed"); }',
    hint: 'Type safety'
  },
  {
    id: 'c_union_90',
    topicId: 'c_unions',
    question: 'Union for exception handling',
    mathSolution: 'Throw different exception types',
    codeSolution: 'union Exception { int errorCode; char *errorString; struct { int line; char *file; } location; };',
    hint: 'C has no exceptions, but can simulate'
  },

  // ============ LEVEL 19: REAL-WORLD EXAMPLES (91-95) ============
  {
    id: 'c_union_91',
    topicId: 'c_unions',
    question: 'Union for JSON value representation',
    mathSolution: 'JSON can be string, number, bool, etc',
    codeSolution: 'enum JSONType { JSON_NULL, JSON_BOOL, JSON_NUMBER, JSON_STRING, JSON_ARRAY, JSON_OBJECT };\nstruct JSONValue { enum JSONType type; union { int boolVal; double numVal; char *strVal; struct JSONArray *arr; struct JSONObject *obj; } data; };',
    hint: 'Variant type for JSON'
  },
  {
    id: 'c_union_92',
    topicId: 'c_unions',
    question: 'Union for database field values',
    mathSolution: 'Different SQL column types',
    codeSolution: 'union DBValue { int intVal; double doubleVal; char *stringVal; void *blobVal; };',
    hint: 'Need type tag'
  },
  {
    id: 'c_union_93',
    topicId: 'c_unions',
    question: 'Union for configuration parameters',
    mathSolution: 'Different config value types',
    codeSolution: 'struct ConfigParam { char name[50]; enum { CONF_INT, CONF_FLOAT, CONF_BOOL, CONF_STRING } type; union { int i; float f; int b; char s[100]; } value; };',
    hint: 'Flexible configuration'
  },
  {
    id: 'c_union_94',
    topicId: 'c_unions',
    question: 'Union for GUI event handling',
    mathSolution: 'Different event types share data',
    codeSolution: 'struct Event { int type; union { struct { int x; int y; } mouse; struct { int key; } keyboard; struct { int width; int height; } resize; } data; };',
    hint: 'Event-driven programming'
  },
  {
    id: 'c_union_95',
    topicId: 'c_unions',
    question: 'Union for network packets',
    mathSolution: 'Different protocol headers',
    codeSolution: 'union Packet { struct Ethernet eth; struct IP ip; struct TCP tcp; struct UDP udp; uint8_t raw[1500]; };',
    hint: 'Parse based on protocol type'
  },

  // ============ LEVEL 20: ADVANCED TYPE PUNNING (96-100) ============
  {
    id: 'c_union_96',
    topicId: 'c_unions',
    question: 'Extract exponent from double',
    mathSolution: 'Union with double and bit fields',
    codeSolution: 'union { double d; struct { unsigned long long mant:52; unsigned int exp:11; unsigned int sign:1; } parts; } u; u.d = 3.14; printf("Exponent: %d", u.parts.exp);',
    hint: 'IEEE 754 double format'
  },
  {
    id: 'c_union_97',
    topicId: 'c_unions',
    question: 'Fast absolute value of float',
    mathSolution: 'Clear sign bit via union',
    codeSolution: 'union { float f; unsigned int u; } u; u.f = -3.14f; u.u &= 0x7FFFFFFF; printf("%f", u.f);',
    hint: 'Manipulate bits directly'
  },
  {
    id: 'c_union_98',
    topicId: 'c_unions',
    question: 'Check if float is NaN',
    mathSolution: 'Examine exponent bits',
    codeSolution: 'union { float f; unsigned int u; } u; u.f = nanf(""); if(((u.u & 0x7F800000) == 0x7F800000) && (u.u & 0x007FFFFF)) printf("Is NaN");',
    hint: 'NaN detection without function'
  },
  {
    id: 'c_union_99',
    topicId: 'c_unions',
    question: 'Fast integer square root approximation',
    mathSolution: 'Quake III fast inverse square root',
    codeSolution: 'union { float f; int i; } u; u.f = number; u.i = 0x5f3759df - (u.i >> 1); float y = u.f;',
    hint: 'Bit manipulation trick'
  },
  {
    id: 'c_union_100',
    topicId: 'c_unions',
    question: 'Union for byte order conversion',
    mathSolution: 'Swap bytes in 16-bit value',
    codeSolution: 'union { uint16_t word; uint8_t bytes[2]; } u; u.word = 0x1234; uint8_t temp = u.bytes[0]; u.bytes[0] = u.bytes[1]; u.bytes[1] = temp; printf("Swapped: 0x%x", u.word);',
    hint: 'Manual endian conversion'
  }
);