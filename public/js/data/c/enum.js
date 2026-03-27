QuizData.questions.push(
  // ========== BASIC ENUM DECLARATION (QUESTIONS 1-10) ==========
  {
    id: 'c_enum_1',
    topicId: 'c_enum',
    question: 'Declare an enumeration for days of the week.',
    mathSolution: 'Enum with 7 constants: Sunday to Saturday',
    codeSolution: 'enum Weekday { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };',
    hint: 'Use enum keyword followed by tag and members in braces'
  },
  {
    id: 'c_enum_2',
    topicId: 'c_enum',
    question: 'Create enumeration for months in a year.',
    mathSolution: '12 months: January to December',
    codeSolution: 'enum Month { Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec };',
    hint: 'List all month names separated by commas'
  },
  {
    id: 'c_enum_3',
    topicId: 'c_enum',
    question: 'Declare enum for boolean values (false/true).',
    mathSolution: 'Boolean with two values',
    codeSolution: 'enum Boolean { False, True };',
    hint: 'False=0, True=1 by default'
  },
  {
    id: 'c_enum_4',
    topicId: 'c_enum',
    question: 'Create enum for primary colors.',
    mathSolution: 'Red, Green, Blue',
    codeSolution: 'enum Color { Red, Green, Blue };',
    hint: 'RGB primary colors'
  },
  {
    id: 'c_enum_5',
    topicId: 'c_enum',
    question: 'Declare enum for compass directions.',
    mathSolution: 'North, South, East, West',
    codeSolution: 'enum Direction { North, South, East, West };',
    hint: 'Four cardinal directions'
  },
  {
    id: 'c_enum_6',
    topicId: 'c_enum',
    question: 'Declare a variable of enum type Weekday.',
    mathSolution: 'Variable that can hold weekday values',
    codeSolution: 'enum Weekday today;',
    hint: 'Use enum tag followed by variable name'
  },
  {
    id: 'c_enum_7',
    topicId: 'c_enum',
    question: 'Assign value to enum variable.',
    mathSolution: 'Set today to Wednesday',
    codeSolution: 'enum Weekday today = Wednesday;',
    hint: 'Use enum constant name without quotes'
  },
  {
    id: 'c_enum_8',
    topicId: 'c_enum',
    question: 'Print enum value as integer.',
    mathSolution: 'Wednesday corresponds to value 3 (if Sunday=0)',
    codeSolution: 'printf("Wednesday = %d", Wednesday);',
    hint: 'Enums are integers internally'
  },
  {
    id: 'c_enum_9',
    topicId: 'c_enum',
    question: 'Compare enum variables.',
    mathSolution: 'Check if today is Friday',
    codeSolution: 'if(today == Friday) printf("Weekend!");',
    hint: 'Use equality operator (==)'
  },
  {
    id: 'c_enum_10',
    topicId: 'c_enum',
    question: 'Use enum in switch statement.',
    mathSolution: 'Switch based on day of week',
    codeSolution: 'switch(day) { case Monday: printf("Start work"); break; case Friday: printf("TGIF"); break; }',
    hint: 'Cases use enum constants'
  },

  // ========== CUSTOM ENUM VALUES (QUESTIONS 11-20) ==========
  {
    id: 'c_enum_11',
    topicId: 'c_enum',
    question: 'Assign custom values to enum constants.',
    mathSolution: 'Start Monday=1, Tuesday=2, etc.',
    codeSolution: 'enum Weekday { Monday=1, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };',
    hint: 'Subsequent values auto-increment by 1'
  },
  {
    id: 'c_enum_12',
    topicId: 'c_enum',
    question: 'Create enum with specific numeric codes.',
    mathSolution: 'HTTP status codes as enum',
    codeSolution: 'enum HttpStatus { OK=200, NotFound=404, ServerError=500 };',
    hint: 'Assign meaningful numbers to constants'
  },
  {
    id: 'c_enum_13',
    topicId: 'c_enum',
    question: 'Enum with non-sequential values.',
    mathSolution: 'Red=1, Blue=5, Green=10',
    codeSolution: 'enum Color { Red=1, Blue=5, Green=10 };',
    hint: 'Any integer values allowed, not necessarily sequential'
  },
  {
    id: 'c_enum_14',
    topicId: 'c_enum',
    question: 'Enum with duplicate values.',
    mathSolution: 'Different names same value',
    codeSolution: 'enum Fruit { Apple=1, Banana=1, Orange=2 }; // Apple and Banana both 1',
    hint: 'C allows duplicate values in enum'
  },
  {
    id: 'c_enum_15',
    topicId: 'c_enum',
    question: 'Enum with negative values.',
    mathSolution: 'Error codes with negatives',
    codeSolution: 'enum Error { Success=0, FileNotFound=-1, AccessDenied=-2 };',
    hint: 'Enums can be negative integers'
  },
  {
    id: 'c_enum_16',
    topicId: 'c_enum',
    question: 'Declare anonymous enum (no tag).',
    mathSolution: 'Constants without enum type name',
    codeSolution: 'enum { STATE_IDLE, STATE_BUSY, STATE_ERROR };',
    hint: 'Useful for constants only, no tag name'
  },
  {
    id: 'c_enum_17',
    topicId: 'c_enum',
    question: 'Use anonymous enum for constants.',
    mathSolution: 'Define a set of related constants',
    codeSolution: 'enum { MAX_USERS=100, MAX_BUFFER=1024, TIMEOUT=30 };',
    hint: 'Alternative to #define for integer constants'
  },
  {
    id: 'c_enum_18',
    topicId: 'c_enum',
    question: 'Use typedef with enum for cleaner syntax.',
    mathSolution: 'Create type alias for enum',
    codeSolution: 'typedef enum { Red, Green, Blue } Color;',
    hint: 'Now can use Color as type without enum keyword'
  },
  {
    id: 'c_enum_19',
    topicId: 'c_enum',
    question: 'Declare variable with typedef enum.',
    mathSolution: 'Color c = Red;',
    codeSolution: 'Color c = Red;',
    hint: 'No need for enum keyword before variable'
  },
  {
    id: 'c_enum_20',
    topicId: 'c_enum',
    question: 'Typedef enum with custom values.',
    mathSolution: 'Named type with specific values',
    codeSolution: 'typedef enum { SUCCESS=0, ERROR=1, TIMEOUT=2 } Result;',
    hint: 'Combine typedef and custom values'
  },

  // ========== ENUM SCOPE AND SIZE (QUESTIONS 21-30) ==========
  {
    id: 'c_enum_21',
    topicId: 'c_enum',
    question: 'Define enum inside function scope.',
    mathSolution: 'Local enum only in function',
    codeSolution: 'void func() { enum Local { A, B, C }; }',
    hint: 'Constants local to function, not visible outside'
  },
  {
    id: 'c_enum_22',
    topicId: 'c_enum',
    question: 'Enum with same constant in different scopes.',
    mathSolution: 'Two enums can have same name',
    codeSolution: 'enum Color1 { Red, Green }; enum Color2 { Red, Blue }; // Red in both',
    hint: 'Different scopes allow duplicate constant names'
  },
  {
    id: 'c_enum_23',
    topicId: 'c_enum',
    question: 'Find size of enum variable.',
    mathSolution: 'Size of enum (usually int)',
    codeSolution: 'enum Color c; printf("%zu", sizeof(c));',
    hint: 'Typically 4 bytes (sizeof int)'
  },
  {
    id: 'c_enum_24',
    topicId: 'c_enum',
    question: 'Check underlying type of enum.',
    mathSolution: 'Implementation-defined, usually int',
    codeSolution: 'printf("%s", _Generic((enum Color)0, int: "int", default: "other"));',
    hint: 'C11 _Generic can check the type'
  },
  {
    id: 'c_enum_25',
    topicId: 'c_enum',
    question: 'Use enum as structure member.',
    mathSolution: 'Struct with enum field',
    codeSolution: 'struct Task { enum Status { PENDING, RUNNING, DONE } status; int id; };',
    hint: 'Enum can be defined inside struct'
  },
  {
    id: 'c_enum_26',
    topicId: 'c_enum',
    question: 'Access enum member in structure.',
    mathSolution: 'Set and get enum value',
    codeSolution: 'struct Task t; t.status = RUNNING; if(t.status == DONE) { }',
    hint: 'Use dot operator to access struct member'
  },
  {
    id: 'c_enum_27',
    topicId: 'c_enum',
    question: 'Structure with typedef enum field.',
    mathSolution: 'Cleaner syntax with typedef',
    codeSolution: 'typedef enum { LOW, MEDIUM, HIGH } Priority; struct Message { Priority prio; char text[100]; };',
    hint: 'Use typedef for enum type in struct'
  },
  {
    id: 'c_enum_28',
    topicId: 'c_enum',
    question: 'Create array of enum values.',
    mathSolution: 'Store multiple enum constants',
    codeSolution: 'enum Day days[] = { Monday, Tuesday, Wednesday, Thursday, Friday };',
    hint: 'Array of enum type'
  },
  {
    id: 'c_enum_29',
    topicId: 'c_enum',
    question: 'Iterate through enum array.',
    mathSolution: 'Print all days in array',
    codeSolution: 'for(int i=0; i<5; i++) printf("%d ", days[i]);',
    hint: 'Values printed as integers'
  },
  {
    id: 'c_enum_30',
    topicId: 'c_enum',
    question: 'Use enum values as array indices.',
    mathSolution: 'Array indexed by enum',
    codeSolution: 'int monthDays[12] = {31,28,31,30,31,30,31,31,30,31,30,31}; int days = monthDays[May];',
    hint: 'Enum constants as indices (ensure they are sequential)'
  },

  // ========== ENUM LOOPS AND FUNCTIONS (QUESTIONS 31-40) ==========
  {
    id: 'c_enum_31',
    topicId: 'c_enum',
    question: 'Loop through enum values.',
    mathSolution: 'Iterate from first to last',
    codeSolution: 'for(enum Color c = Red; c <= Blue; c++) { printf("%d ", c); }',
    hint: 'Assumes sequential values from 0 to n-1'
  },
  {
    id: 'c_enum_32',
    topicId: 'c_enum',
    question: 'Loop through enum with non-sequential values.',
    mathSolution: 'Need array of values',
    codeSolution: 'enum Status { OK=200, NotFound=404, Error=500 }; enum Status all[] = {OK, NotFound, Error}; for(int i=0; i<3; i++) process(all[i]);',
    hint: 'Use lookup array for non-sequential values'
  },
  {
    id: 'c_enum_33',
    topicId: 'c_enum',
    question: 'Pass enum to function.',
    mathSolution: 'Function taking enum parameter',
    codeSolution: 'void processDay(enum Weekday day) { printf("%d", day); }',
    hint: 'Enum as parameter type'
  },
  {
    id: 'c_enum_34',
    topicId: 'c_enum',
    question: 'Return enum from function.',
    mathSolution: 'Function returning enum value',
    codeSolution: 'enum Weekday getNextDay(enum Weekday day) { return (day+1) % 7; }',
    hint: 'Return enum constant'
  },
  {
    id: 'c_enum_35',
    topicId: 'c_enum',
    question: 'Enum as function return status.',
    mathSolution: 'Return success/error code',
    codeSolution: 'typedef enum { SUCCESS, ERR_NULL, ERR_MEM } Result; Result processData() { if(!data) return ERR_NULL; return SUCCESS; }',
    hint: 'Common pattern in C for error handling'
  },
  {
    id: 'c_enum_36',
    topicId: 'c_enum',
    question: 'Use enum for bit flags (powers of 2).',
    mathSolution: 'Each flag is separate bit',
    codeSolution: 'enum Permissions { READ=1, WRITE=2, EXECUTE=4 };',
    hint: 'Values as 1<<n for bits (1,2,4,8,...)'
  },
  {
    id: 'c_enum_37',
    topicId: 'c_enum',
    question: 'Combine bit flags using OR.',
    mathSolution: 'Multiple permissions together',
    codeSolution: 'enum Permissions perms = READ | WRITE;',
    hint: 'Bitwise OR to combine flags'
  },
  {
    id: 'c_enum_38',
    topicId: 'c_enum',
    question: 'Check if flag is set.',
    mathSolution: 'Use bitwise AND',
    codeSolution: 'if(perms & READ) printf("Can read");',
    hint: 'Test specific bit with AND'
  },
  {
    id: 'c_enum_39',
    topicId: 'c_enum',
    question: 'Add flag to existing set.',
    mathSolution: 'OR with new flag',
    codeSolution: 'perms |= EXECUTE;',
    hint: 'Bitwise OR assignment'
  },
  {
    id: 'c_enum_40',
    topicId: 'c_enum',
    question: 'Remove flag from set.',
    mathSolution: 'AND with complement',
    codeSolution: 'perms &= ~WRITE;',
    hint: 'Mask out the bit with AND NOT'
  },

  // ========== ENUM COMPARISON AND INPUT/OUTPUT (QUESTIONS 41-50) ==========
  {
    id: 'c_enum_41',
    topicId: 'c_enum',
    question: 'Compare enum with #define constants.',
    mathSolution: 'Enum has type, debug info',
    codeSolution: 'enum { SIZE=100 }; #define SIZE 100 // enum has scope, type safety',
    hint: 'Enum preferred for related constants'
  },
  {
    id: 'c_enum_42',
    topicId: 'c_enum',
    question: 'Enum for error codes vs macro.',
    mathSolution: 'Enum provides type safety',
    codeSolution: 'typedef enum { E_OK, E_FAIL } Error; // vs #define E_OK 0',
    hint: 'Compiler can check types with enum'
  },
  {
    id: 'c_enum_43',
    topicId: 'c_enum',
    question: 'Read enum value from user input.',
    mathSolution: 'Input number, convert to enum',
    codeSolution: 'int input; scanf("%d", &input); enum Color c = (enum Color)input;',
    hint: 'Cast integer to enum type'
  },
  {
    id: 'c_enum_44',
    topicId: 'c_enum',
    question: 'Print enum name (not value) using array.',
    mathSolution: 'Map enum to string',
    codeSolution: 'const char* colorNames[] = {"Red", "Green", "Blue"}; printf("%s", colorNames[c]);',
    hint: 'Lookup table for names'
  },
  {
    id: 'c_enum_45',
    topicId: 'c_enum',
    question: 'Parse string to enum value.',
    mathSolution: 'Convert string to enum',
    codeSolution: 'if(strcmp(str, "Red")==0) return Red; else if(strcmp(str,"Green")==0) return Green;',
    hint: 'String comparison chain'
  },
  {
    id: 'c_enum_46',
    topicId: 'c_enum',
    question: 'Switch with enum for menu handling.',
    mathSolution: 'Menu options as enum',
    codeSolution: 'enum Menu { ADD=1, DELETE, EDIT, EXIT }; switch(choice) { case ADD: addItem(); break; case DELETE: delItem(); break; }',
    hint: 'Readable menu handling'
  },
  {
    id: 'c_enum_47',
    topicId: 'c_enum',
    question: 'Default case in enum switch.',
    mathSolution: 'Handle invalid enum values',
    codeSolution: 'switch(c) { case Red: case Green: case Blue: break; default: printf("Invalid color"); }',
    hint: 'Catch unexpected values'
  },
  {
    id: 'c_enum_48',
    topicId: 'c_enum',
    question: 'Pointer to enum variable.',
    mathSolution: 'Store address of enum',
    codeSolution: 'enum Color c = Red; enum Color *ptr = &c; *ptr = Blue;',
    hint: 'Pointers work like with int'
  },
  {
    id: 'c_enum_49',
    topicId: 'c_enum',
    question: 'Array of pointers to enum constants.',
    mathSolution: 'Pointers to different enums',
    codeSolution: 'enum Color a=Red, b=Green, c=Blue; enum Color *ptrs[] = {&a, &b, &c};',
    hint: 'Store addresses'
  },
  {
    id: 'c_enum_50',
    topicId: 'c_enum',
    question: 'Nested enum in structure.',
    mathSolution: 'Struct with multiple enums',
    codeSolution: 'struct Employee { enum { MALE, FEMALE } gender; enum { JUNIOR, SENIOR, MANAGER } level; };',
    hint: 'Multiple enum fields'
  },

  // ========== ADVANCED ENUM PATTERNS (QUESTIONS 51-60) ==========
  {
    id: 'c_enum_51',
    topicId: 'c_enum',
    question: 'Union with enum as discriminator.',
    mathSolution: 'Tagged union pattern',
    codeSolution: 'enum Type { INT, FLOAT, STRING }; struct Data { enum Type type; union { int i; float f; char *s; } value; };',
    hint: 'Type field tells which union member is active'
  },
  {
    id: 'c_enum_52',
    topicId: 'c_enum',
    question: 'Use enum in self-referential structure.',
    mathSolution: 'Tree node with node type',
    codeSolution: 'enum NodeType { LEAF, INTERNAL }; struct TreeNode { enum NodeType type; union { int value; struct { struct TreeNode *left, *right; } children; }; };',
    hint: 'Discriminated union for tree nodes'
  },
  {
    id: 'c_enum_53',
    topicId: 'c_enum',
    question: 'Enum for finite state machine states.',
    mathSolution: 'Traffic light states',
    codeSolution: 'enum State { RED, GREEN, YELLOW } state = RED;',
    hint: 'States as enum constants'
  },
  {
    id: 'c_enum_54',
    topicId: 'c_enum',
    question: 'State transition using enum.',
    mathSolution: 'Traffic light cycle',
    codeSolution: 'switch(state) { case RED: state = GREEN; break; case GREEN: state = YELLOW; break; case YELLOW: state = RED; break; }',
    hint: 'Update state based on current state'
  },
  {
    id: 'c_enum_55',
    topicId: 'c_enum',
    question: 'Enum for TCP connection states.',
    mathSolution: 'TCP state machine',
    codeSolution: 'enum TCPState { CLOSED, LISTEN, SYN_SENT, SYN_RCVD, ESTABLISHED, FIN_WAIT, CLOSE_WAIT, LAST_ACK, TIME_WAIT };',
    hint: 'Standard TCP states'
  },
  {
    id: 'c_enum_56',
    topicId: 'c_enum',
    question: 'Enum for strategy pattern selection.',
    mathSolution: 'Choose algorithm at runtime',
    codeSolution: 'enum SortAlgo { BUBBLE, QUICK, MERGE, HEAP }; void sort(enum SortAlgo algo, int arr[], int n) { switch(algo) { ... } }',
    hint: 'Select algorithm by enum'
  },
  {
    id: 'c_enum_57',
    topicId: 'c_enum',
    question: 'Enum for factory pattern.',
    mathSolution: 'Create objects by type',
    codeSolution: 'enum ShapeType { CIRCLE, SQUARE, TRIANGLE }; struct Shape* createShape(enum ShapeType type) { switch(type) { case CIRCLE: return createCircle(); ... } }',
    hint: 'Factory method with enum'
  },
  {
    id: 'c_enum_58',
    topicId: 'c_enum',
    question: 'Enum for log levels.',
    mathSolution: 'Logging severity levels',
    codeSolution: 'enum LogLevel { DEBUG, INFO, WARN, ERROR, FATAL }; void log(enum LogLevel level, char *msg) { if(level >= currentLevel) printf("%s", msg); }',
    hint: 'Filter logs by level'
  },
  {
    id: 'c_enum_59',
    topicId: 'c_enum',
    question: 'Enum for configuration options.',
    mathSolution: 'Configuration parameter keys',
    codeSolution: 'enum ConfigKey { MAX_USERS, TIMEOUT, CACHE_SIZE, LOG_LEVEL }; int config[4];',
    hint: 'Use enum as array index'
  },
  {
    id: 'c_enum_60',
    topicId: 'c_enum',
    question: 'Enum for GPIO pin modes.',
    mathSolution: 'Pin configuration modes',
    codeSolution: 'enum PinMode { INPUT, OUTPUT, INPUT_PULLUP, INPUT_PULLDOWN };',
    hint: 'Microcontroller pin modes'
  },

  // ========== DOMAIN-SPECIFIC ENUMS (QUESTIONS 61-70) ==========
  {
    id: 'c_enum_61',
    topicId: 'c_enum',
    question: 'Enum for ADC reference voltage.',
    mathSolution: 'ADC reference options',
    codeSolution: 'enum ADCREF { INTERNAL, EXTERNAL, AVCC, AREF };',
    hint: 'Voltage reference selection'
  },
  {
    id: 'c_enum_62',
    topicId: 'c_enum',
    question: 'Enum for HTTP methods.',
    mathSolution: 'REST API methods',
    codeSolution: 'enum HttpMethod { GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS };',
    hint: 'Standard HTTP verbs'
  },
  {
    id: 'c_enum_63',
    topicId: 'c_enum',
    question: 'Enum for WebSocket frame types.',
    mathSolution: 'WebSocket opcodes',
    codeSolution: 'enum WSOpcode { CONTINUATION=0, TEXT=1, BINARY=2, CLOSE=8, PING=9, PONG=10 };',
    hint: 'WebSocket frame types with specific values'
  },
  {
    id: 'c_enum_64',
    topicId: 'c_enum',
    question: 'Enum for image file types.',
    mathSolution: 'Supported image formats',
    codeSolution: 'enum ImageFormat { PNG, JPEG, BMP, GIF, TIFF };',
    hint: 'Common image formats'
  },
  {
    id: 'c_enum_65',
    topicId: 'c_enum',
    question: 'Enum for audio codecs.',
    mathSolution: 'Audio compression formats',
    codeSolution: 'enum AudioCodec { MP3, AAC, FLAC, WAV, OGG };',
    hint: 'Audio codec types'
  },
  {
    id: 'c_enum_66',
    topicId: 'c_enum',
    question: 'Enum for SQL data types.',
    mathSolution: 'Column data types',
    codeSolution: 'enum SQLType { INTEGER, TEXT, REAL, BLOB, NULL_TYPE };',
    hint: 'SQLite data types'
  },
  {
    id: 'c_enum_67',
    topicId: 'c_enum',
    question: 'Enum for database transaction isolation levels.',
    mathSolution: 'ACID isolation levels',
    codeSolution: 'enum IsolationLevel { READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE };',
    hint: 'Transaction isolation levels'
  },
  {
    id: 'c_enum_68',
    topicId: 'c_enum',
    question: 'Enum for alignment options.',
    mathSolution: 'Text alignment',
    codeSolution: 'enum Alignment { LEFT, CENTER, RIGHT, JUSTIFY };',
    hint: 'UI alignment constants'
  },
  {
    id: 'c_enum_69',
    topicId: 'c_enum',
    question: 'Enum for font styles.',
    mathSolution: 'Font variations',
    codeSolution: 'enum FontStyle { NORMAL, BOLD, ITALIC, UNDERLINE, STRIKETHROUGH };',
    hint: 'Text styling options'
  },
  {
    id: 'c_enum_70',
    topicId: 'c_enum',
    question: 'Enum for player states in game.',
    mathSolution: 'Character states',
    codeSolution: 'enum PlayerState { IDLE, WALKING, RUNNING, JUMPING, ATTACKING, HIT, DEAD };',
    hint: 'Game character states'
  },

  // ========== GAME AND GRAPHICS ENUMS (QUESTIONS 71-80) ==========
  {
    id: 'c_enum_71',
    topicId: 'c_enum',
    question: 'Enum for collision detection results.',
    mathSolution: 'Collision types',
    codeSolution: 'enum Collision { NONE, TOP, BOTTOM, LEFT, RIGHT };',
    hint: 'Direction of collision'
  },
  {
    id: 'c_enum_72',
    topicId: 'c_enum',
    question: 'Enum for power-up types.',
    mathSolution: 'Game power-ups',
    codeSolution: 'enum PowerUp { SPEED_BOOST, INVINCIBILITY, EXTRA_LIFE, DOUBLE_SCORE, SHIELD };',
    hint: 'Power-up effects'
  },
  {
    id: 'c_enum_73',
    topicId: 'c_enum',
    question: 'Enum for socket address families.',
    mathSolution: 'AF_INET, AF_INET6, etc.',
    codeSolution: 'enum AddressFamily { IPv4=AF_INET, IPv6=AF_INET6, UNIX=AF_UNIX };',
    hint: 'Socket programming address families'
  },
  {
    id: 'c_enum_74',
    topicId: 'c_enum',
    question: 'Enum for socket types.',
    mathSolution: 'SOCK_STREAM, SOCK_DGRAM',
    codeSolution: 'enum SocketType { STREAM=SOCK_STREAM, DGRAM=SOCK_DGRAM, RAW=SOCK_RAW };',
    hint: 'TCP vs UDP socket types'
  },
  {
    id: 'c_enum_75',
    topicId: 'c_enum',
    question: 'Enum for geometric shapes.',
    mathSolution: 'Shape types',
    codeSolution: 'enum Shape { POINT, LINE, TRIANGLE, RECTANGLE, CIRCLE, POLYGON };',
    hint: 'Geometry shapes'
  },
  {
    id: 'c_enum_76',
    topicId: 'c_enum',
    question: 'Enum for angle units.',
    mathSolution: 'Degrees vs radians',
    codeSolution: 'enum AngleUnit { DEGREES, RADIANS };',
    hint: 'Trigonometry units'
  },
  {
    id: 'c_enum_77',
    topicId: 'c_enum',
    question: 'Enum for time periods.',
    mathSolution: 'AM/PM indicator',
    codeSolution: 'enum Meridiem { AM, PM };',
    hint: '12-hour clock periods'
  },
  {
    id: 'c_enum_78',
    topicId: 'c_enum',
    question: 'Enum for timezones (simplified).',
    mathSolution: 'Timezone offsets',
    codeSolution: 'enum Timezone { UTC, EST, CST, MST, PST, GMT };',
    hint: 'Common timezone abbreviations'
  },
  {
    id: 'c_enum_79',
    topicId: 'c_enum',
    question: 'Enum for temperature units.',
    mathSolution: 'Celsius, Fahrenheit, Kelvin',
    codeSolution: 'enum TempUnit { CELSIUS, FAHRENHEIT, KELVIN };',
    hint: 'Temperature scales'
  },
  {
    id: 'c_enum_80',
    topicId: 'c_enum',
    question: 'Enum for distance units.',
    mathSolution: 'Metric vs imperial',
    codeSolution: 'enum DistanceUnit { METER, KILOMETER, MILE, FOOT, YARD };',
    hint: 'Length units'
  },

  // ========== BUSINESS AND APPLICATION ENUMS (QUESTIONS 81-90) ==========
  {
    id: 'c_enum_81',
    topicId: 'c_enum',
    question: 'Enum for currencies.',
    mathSolution: 'Currency codes',
    codeSolution: 'enum Currency { USD, EUR, GBP, JPY, CNY, INR };',
    hint: 'ISO currency codes'
  },
  {
    id: 'c_enum_82',
    topicId: 'c_enum',
    question: 'Enum for error severity levels.',
    mathSolution: 'Error classification',
    codeSolution: 'enum ErrorSeverity { WARNING, ERROR, CRITICAL, FATAL };',
    hint: 'Severity levels for errors'
  },
  {
    id: 'c_enum_83',
    topicId: 'c_enum',
    question: 'Enum for error categories.',
    mathSolution: 'Error domains',
    codeSolution: 'enum ErrorDomain { IO_ERROR, NETWORK_ERROR, MEMORY_ERROR, PARSE_ERROR, VALIDATION_ERROR };',
    hint: 'Categorize errors by domain'
  },
  {
    id: 'c_enum_84',
    topicId: 'c_enum',
    question: 'Enum for token types in parser.',
    mathSolution: 'Lexical tokens',
    codeSolution: 'enum TokenType { IDENTIFIER, KEYWORD, NUMBER, STRING, OPERATOR, PUNCTUATION, EOF_TOKEN };',
    hint: 'Lexer token types'
  },
  {
    id: 'c_enum_85',
    topicId: 'c_enum',
    question: 'Enum for AST node types.',
    mathSolution: 'Abstract Syntax Tree nodes',
    codeSolution: 'enum ASTNode { PROGRAM, FUNCTION, DECLARATION, ASSIGNMENT, IF_STATEMENT, LOOP, EXPRESSION };',
    hint: 'Compiler AST node types'
  },
  {
    id: 'c_enum_86',
    topicId: 'c_enum',
    question: 'Enum for sort order.',
    mathSolution: 'Ascending/descending',
    codeSolution: 'enum SortOrder { ASCENDING, DESCENDING };',
    hint: 'Sort direction'
  },
  {
    id: 'c_enum_87',
    topicId: 'c_enum',
    question: 'Enum for comparison results.',
    mathSolution: 'Less, equal, greater',
    codeSolution: 'enum Compare { LESS=-1, EQUAL=0, GREATER=1 };',
    hint: 'Return values from compare functions'
  },
  {
    id: 'c_enum_88',
    topicId: 'c_enum',
    question: 'Enum for UI themes.',
    mathSolution: 'Application themes',
    codeSolution: 'enum Theme { LIGHT, DARK, SYSTEM, HIGH_CONTRAST };',
    hint: 'Color themes'
  },
  {
    id: 'c_enum_89',
    topicId: 'c_enum',
    question: 'Enum for button states.',
    mathSolution: 'UI button states',
    codeSolution: 'enum ButtonState { NORMAL, HOVER, PRESSED, DISABLED, FOCUSED };',
    hint: 'Interactive button states'
  },
  {
    id: 'c_enum_90',
    topicId: 'c_enum',
    question: 'Enum for audio channels.',
    mathSolution: 'Channel configurations',
    codeSolution: 'enum AudioChannel { MONO, STEREO, QUAD, SURROUND_51, SURROUND_71 };',
    hint: 'Speaker configurations'
  },

  // ========== MEDIA AND SETTINGS ENUMS (QUESTIONS 91-100) ==========
  {
    id: 'c_enum_91',
    topicId: 'c_enum',
    question: 'Enum for video aspect ratios.',
    mathSolution: 'Display ratios',
    codeSolution: 'enum AspectRatio { RATIO_4_3, RATIO_16_9, RATIO_21_9, RATIO_1_1 };',
    hint: 'Width:height ratios'
  },
  {
    id: 'c_enum_92',
    topicId: 'c_enum',
    question: 'Enum for compression levels.',
    mathSolution: 'Speed vs size tradeoff',
    codeSolution: 'enum CompressLevel { NO_COMPRESSION, FAST, NORMAL, MAX_COMPRESSION };',
    hint: 'Compression levels'
  },
  {
    id: 'c_enum_93',
    topicId: 'c_enum',
    question: 'Enum for hash algorithms.',
    mathSolution: 'Cryptographic hash types',
    codeSolution: 'enum HashAlgo { MD5, SHA1, SHA256, SHA512 };',
    hint: 'Common hash algorithms'
  },
  {
    id: 'c_enum_94',
    topicId: 'c_enum',
    question: 'Enum for encryption algorithms.',
    mathSolution: 'Symmetric ciphers',
    codeSolution: 'enum Cipher { AES_128, AES_256, DES, 3DES, RC4 };',
    hint: 'Encryption algorithm types'
  },
  {
    id: 'c_enum_95',
    topicId: 'c_enum',
    question: 'Enum for validation results.',
    mathSolution: 'Validation outcomes',
    codeSolution: 'enum Validation { VALID, INVALID, WARNING, SKIPPED };',
    hint: 'Validation result states'
  },
  {
    id: 'c_enum_96',
    topicId: 'c_enum',
    question: 'Enum for task progress states.',
    mathSolution: 'Progress tracking',
    codeSolution: 'enum Progress { NOT_STARTED, IN_PROGRESS, COMPLETED, FAILED, CANCELLED };',
    hint: 'Task progress states'
  },
  {
    id: 'c_enum_97',
    topicId: 'c_enum',
    question: 'Enum for priority levels.',
    mathSolution: 'Task importance',
    codeSolution: 'enum Priority { LOW, MEDIUM, HIGH, CRITICAL };',
    hint: 'Priority levels'
  },
  {
    id: 'c_enum_98',
    topicId: 'c_enum',
    question: 'Enum for difficulty levels.',
    mathSolution: 'Game difficulty',
    codeSolution: 'enum Difficulty { EASY, NORMAL, HARD, EXPERT };',
    hint: 'Difficulty settings'
  },
  {
    id: 'c_enum_99',
    topicId: 'c_enum',
    question: 'Enum for quality settings.',
    mathSolution: 'Quality levels',
    codeSolution: 'enum Quality { LOW, MEDIUM, HIGH, ULTRA };',
    hint: 'Quality presets'
  },
  {
    id: 'c_enum_100',
    topicId: 'c_enum',
    question: 'Enum for 3D movement directions.',
    mathSolution: 'Six directions in 3D space',
    codeSolution: 'enum Direction3D { FORWARD, BACKWARD, LEFT, RIGHT, UP, DOWN };',
    hint: '3D movement directions'
  }
);