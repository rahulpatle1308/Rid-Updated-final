QuizData.questions.push(
  // ========== BASIC MATHEMATICAL RECURSION (QUESTIONS 1-5) ==========
  {
    id: 'c_rec_1',
    topicId: 'c_recursion',
    question: 'Write a recursive function to calculate factorial of n.',
    mathSolution: '5! = 5 × 4 × 3 × 2 × 1 = 120',
    codeSolution: 'int fact(int n) { if(n<=1) return 1; return n * fact(n-1); }',
    hint: 'Base case: n=0 or 1 returns 1'
  },
  {
    id: 'c_rec_2',
    topicId: 'c_recursion',
    question: 'Create recursive function to find nth Fibonacci number.',
    mathSolution: 'Fibonacci: 0,1,1,2,3,5,8,13,...',
    codeSolution: 'int fib(int n) { if(n<=1) return n; return fib(n-1) + fib(n-2); }',
    hint: 'Base cases: fib(0)=0, fib(1)=1'
  },
  {
    id: 'c_rec_3',
    topicId: 'c_recursion',
    question: 'Write recursive function to calculate sum of first n natural numbers.',
    mathSolution: 'Sum(5) = 5+4+3+2+1 = 15',
    codeSolution: 'int sumN(int n) { if(n==0) return 0; return n + sumN(n-1); }',
    hint: 'Add n to sum of n-1 numbers'
  },
  {
    id: 'c_rec_4',
    topicId: 'c_recursion',
    question: 'Create recursive function to calculate power (x^n).',
    mathSolution: '2^5 = 2 × 2 × 2 × 2 × 2 = 32',
    codeSolution: 'int power(int x, int n) { if(n==0) return 1; return x * power(x, n-1); }',
    hint: 'Base case: n=0 returns 1'
  },
  {
    id: 'c_rec_5',
    topicId: 'c_recursion',
    question: 'Write recursive function to calculate product of first n numbers.',
    mathSolution: 'Product(4) = 4×3×2×1 = 24',
    codeSolution: 'int product(int n) { if(n<=1) return 1; return n * product(n-1); }',
    hint: 'Same as factorial but with different name'
  },

  // ========== DIGIT MANIPULATION (QUESTIONS 6-10) ==========
  {
    id: 'c_rec_6',
    topicId: 'c_recursion',
    question: 'Write recursive function to sum digits of a number.',
    mathSolution: '1234 → 1+2+3+4 = 10',
    codeSolution: 'int sumDigits(int n) { if(n==0) return 0; return n%10 + sumDigits(n/10); }',
    hint: 'Add last digit to sum of remaining'
  },
  {
    id: 'c_rec_7',
    topicId: 'c_recursion',
    question: 'Create recursive function to count digits in a number.',
    mathSolution: '12345 has 5 digits',
    codeSolution: 'int countDigits(int n) { if(n==0) return 0; return 1 + countDigits(n/10); }',
    hint: 'Count one digit and recurse on rest'
  },
  {
    id: 'c_rec_8',
    topicId: 'c_recursion',
    question: 'Write recursive function to reverse a number.',
    mathSolution: '12345 → 54321',
    codeSolution: 'int reverseNum(int n, int rev) { if(n==0) return rev; return reverseNum(n/10, rev*10 + n%10); }',
    hint: 'Build reversed number in parameter'
  },
  {
    id: 'c_rec_9',
    topicId: 'c_recursion',
    question: 'Create recursive function to check if number is palindrome.',
    mathSolution: '12321 is palindrome',
    codeSolution: 'int isPalindrome(int n) { if(n<10) return 1; int digits=log10(n)+1; int first=n/pow(10,digits-1); int last=n%10; if(first!=last) return 0; int mid=(n%(int)pow(10,digits-1))/10; return isPalindrome(mid); }',
    hint: 'Compare first and last digits'
  },
  {
    id: 'c_rec_10',
    topicId: 'c_recursion',
    question: 'Write recursive function to find if digit exists in number.',
    mathSolution: 'Check if 5 exists in 12345',
    codeSolution: 'int digitExists(int n, int d) { if(n==0) return 0; if(n%10==d) return 1; return digitExists(n/10, d); }',
    hint: 'Check last digit, recurse on rest'
  },

  // ========== NUMBER THEORY (QUESTIONS 11-15) ==========
  {
    id: 'c_rec_11',
    topicId: 'c_recursion',
    question: 'Write recursive GCD function using Euclidean algorithm.',
    mathSolution: 'GCD(48,18) = 6',
    codeSolution: 'int gcd(int a, int b) { if(b==0) return a; return gcd(b, a%b); }',
    hint: 'Base case when b=0'
  },
  {
    id: 'c_rec_12',
    topicId: 'c_recursion',
    question: 'Create recursive function to find LCM of two numbers.',
    mathSolution: 'LCM(12,18) = 36',
    codeSolution: 'int lcm(int a, int b) { static int multiple=0; multiple+=a; if(multiple%a==0 && multiple%b==0) return multiple; return lcm(a,b); }',
    hint: 'Use static variable or formula with GCD'
  },
  {
    id: 'c_rec_13',
    topicId: 'c_recursion',
    question: 'Write recursive function to check if number is prime.',
    mathSolution: 'Check if 17 is prime',
    codeSolution: 'int isPrime(int n, int i) { if(n<2) return 0; if(i==1) return 1; if(n%i==0) return 0; return isPrime(n, i-1); }',
    hint: 'Check divisibility from n/2 down to 2'
  },
  {
    id: 'c_rec_14',
    topicId: 'c_recursion',
    question: 'Create recursive function to find nth prime number.',
    mathSolution: '5th prime is 11',
    codeSolution: 'int nthPrime(int n, int num, int count) { if(count==n) return num-1; if(isPrime(num, num/2)) return nthPrime(n, num+1, count+1); return nthPrime(n, num+1, count); }',
    hint: 'Count primes until nth found'
  },
  {
    id: 'c_rec_15',
    topicId: 'c_recursion',
    question: 'Write recursive function to find factorial using tail recursion.',
    mathSolution: '5! = 120 with accumulator',
    codeSolution: 'int factTail(int n, int acc) { if(n==0) return acc; return factTail(n-1, acc*n); }',
    hint: 'Accumulator holds partial result'
  },

  // ========== ARRAY RECURSION (QUESTIONS 16-20) ==========
  {
    id: 'c_rec_16',
    topicId: 'c_recursion',
    question: 'Write recursive function to sum array elements.',
    mathSolution: 'Sum of [1,2,3,4,5] = 15',
    codeSolution: 'int sumArray(int arr[], int n) { if(n<=0) return 0; return arr[n-1] + sumArray(arr, n-1); }',
    hint: 'Add last element to sum of rest'
  },
  {
    id: 'c_rec_17',
    topicId: 'c_recursion',
    question: 'Create recursive function to find maximum in array.',
    mathSolution: 'Max of [3,7,2,9,5] = 9',
    codeSolution: 'int maxArray(int arr[], int n) { if(n==1) return arr[0]; int max=maxArray(arr, n-1); return (arr[n-1] > max) ? arr[n-1] : max; }',
    hint: 'Compare last element with max of rest'
  },
  {
    id: 'c_rec_18',
    topicId: 'c_recursion',
    question: 'Write recursive function to find minimum in array.',
    mathSolution: 'Min of [3,7,2,9,5] = 2',
    codeSolution: 'int minArray(int arr[], int n) { if(n==1) return arr[0]; int min=minArray(arr, n-1); return (arr[n-1] < min) ? arr[n-1] : min; }',
    hint: 'Compare last element with min of rest'
  },
  {
    id: 'c_rec_19',
    topicId: 'c_recursion',
    question: 'Create recursive function to reverse array.',
    mathSolution: '[1,2,3,4,5] → [5,4,3,2,1]',
    codeSolution: 'void reverseArray(int arr[], int start, int end) { if(start>=end) return; int temp=arr[start]; arr[start]=arr[end]; arr[end]=temp; reverseArray(arr, start+1, end-1); }',
    hint: 'Swap ends and recurse inward'
  },
  {
    id: 'c_rec_20',
    topicId: 'c_recursion',
    question: 'Write recursive function to check if array is sorted.',
    mathSolution: '[1,3,5,7,9] is sorted',
    codeSolution: 'int isSorted(int arr[], int n) { if(n<=1) return 1; if(arr[n-1] < arr[n-2]) return 0; return isSorted(arr, n-1); }',
    hint: 'Check adjacent elements'
  },

  // ========== SEARCH ALGORITHMS (QUESTIONS 21-25) ==========
  {
    id: 'c_rec_21',
    topicId: 'c_recursion',
    question: 'Write recursive linear search in array.',
    mathSolution: 'Find 7 in [2,4,7,9,3] at index 2',
    codeSolution: 'int linearSearch(int arr[], int n, int key) { if(n<0) return -1; if(arr[n-1]==key) return n-1; return linearSearch(arr, n-1, key); }',
    hint: 'Search from end backwards'
  },
  {
    id: 'c_rec_22',
    topicId: 'c_recursion',
    question: 'Create recursive binary search in sorted array.',
    mathSolution: 'Find 8 in [1,3,5,8,10,12] at index 3',
    codeSolution: 'int binarySearch(int arr[], int low, int high, int key) { if(low>high) return -1; int mid=(low+high)/2; if(arr[mid]==key) return mid; if(arr[mid]>key) return binarySearch(arr, low, mid-1, key); return binarySearch(arr, mid+1, high, key); }',
    hint: 'Divide array and search appropriate half'
  },
  {
    id: 'c_rec_23',
    topicId: 'c_recursion',
    question: 'Write recursive function to find first occurrence of element.',
    mathSolution: 'First 5 in [3,5,2,5,7] at index 1',
    codeSolution: 'int firstOccur(int arr[], int n, int key, int i) { if(i==n) return -1; if(arr[i]==key) return i; return firstOccur(arr, n, key, i+1); }',
    hint: 'Search from beginning forward'
  },
  {
    id: 'c_rec_24',
    topicId: 'c_recursion',
    question: 'Create recursive function to find last occurrence of element.',
    mathSolution: 'Last 5 in [3,5,2,5,7] at index 3',
    codeSolution: 'int lastOccur(int arr[], int n, int key) { if(n<0) return -1; if(arr[n-1]==key) return n-1; return lastOccur(arr, n-1, key); }',
    hint: 'Search from end backward'
  },
  {
    id: 'c_rec_25',
    topicId: 'c_recursion',
    question: 'Write recursive function to count occurrences of element.',
    mathSolution: 'Count 2 in [2,3,2,5,2,7] = 3',
    codeSolution: 'int countOccur(int arr[], int n, int key) { if(n<=0) return 0; return (arr[n-1]==key?1:0) + countOccur(arr, n-1, key); }',
    hint: 'Add 1 if found, then recurse'
  },

  // ========== STRING RECURSION (QUESTIONS 26-30) ==========
  {
    id: 'c_rec_26',
    topicId: 'c_recursion',
    question: 'Write recursive function to find string length.',
    mathSolution: 'Length of "hello" = 5',
    codeSolution: 'int strLen(char *s) { if(*s==\'\\0\') return 0; return 1 + strLen(s+1); }',
    hint: 'Count characters until null'
  },
  {
    id: 'c_rec_27',
    topicId: 'c_recursion',
    question: 'Create recursive function to reverse a string.',
    mathSolution: '"hello" → "olleh"',
    codeSolution: 'void reverseStr(char *s, int start, int end) { if(start>=end) return; char temp=s[start]; s[start]=s[end]; s[end]=temp; reverseStr(s, start+1, end-1); }',
    hint: 'Swap ends and recurse'
  },
  {
    id: 'c_rec_28',
    topicId: 'c_recursion',
    question: 'Write recursive function to check if string is palindrome.',
    mathSolution: '"madam" is palindrome',
    codeSolution: 'int isPalindromeStr(char *s, int start, int end) { if(start>=end) return 1; if(s[start]!=s[end]) return 0; return isPalindromeStr(s, start+1, end-1); }',
    hint: 'Compare ends and recurse'
  },
  {
    id: 'c_rec_29',
    topicId: 'c_recursion',
    question: 'Create recursive function to count vowels in string.',
    mathSolution: 'Count vowels in "hello" = 2',
    codeSolution: 'int countVowels(char *s) { if(*s==\'\\0\') return 0; char c=tolower(*s); int isVowel=(c==\'a\'||c==\'e\'||c==\'i\'||c==\'o\'||c==\'u\'); return isVowel + countVowels(s+1); }',
    hint: 'Check first char, recurse on rest'
  },
  {
    id: 'c_rec_30',
    topicId: 'c_recursion',
    question: 'Write recursive function to remove duplicates from string.',
    mathSolution: '"helloo" → "helo"',
    codeSolution: 'void removeDup(char *s) { if(s[0]==\'\\0\') return; if(s[0]==s[1]) { int i; for(i=1;s[i];i++) s[i-1]=s[i]; s[i-1]=\'\\0\'; removeDup(s); } else removeDup(s+1); }',
    hint: 'Shift left if duplicate found'
  },

  // ========== MATHEMATICAL SERIES (QUESTIONS 31-33) ==========
  {
    id: 'c_rec_31',
    topicId: 'c_recursion',
    question: 'Write recursive function to calculate Taylor series e^x.',
    mathSolution: 'e^x = 1 + x + x^2/2! + x^3/3! + ...',
    codeSolution: 'double taylor(double x, int n) { static double p=1, f=1; if(n==0) return 1; double r = taylor(x, n-1); p *= x; f *= n; return r + p/f; }',
    hint: 'Use static variables for power and factorial'
  },
  {
    id: 'c_rec_32',
    topicId: 'c_recursion',
    question: 'Create recursive function for sine series.',
    mathSolution: 'sin(x) = x - x^3/3! + x^5/5! - ...',
    codeSolution: 'double sine(double x, int n) { if(n<=0) return 0; double term = (n%2==0?1:-1) * pow(x,2*n-1)/fact(2*n-1); return term + sine(x, n-1); }',
    hint: 'Alternating signs, odd powers'
  },
  {
    id: 'c_rec_33',
    topicId: 'c_recursion',
    question: 'Write recursive function for cosine series.',
    mathSolution: 'cos(x) = 1 - x^2/2! + x^4/4! - ...',
    codeSolution: 'double cosine(double x, int n) { if(n<=0) return 0; double term = (n%2==0?1:-1) * pow(x,2*n-2)/fact(2*n-2); return term + cosine(x, n-1); }',
    hint: 'Even powers, alternating signs'
  },

  // ========== TREE RECURSION (QUESTIONS 34-36) ==========
  {
    id: 'c_rec_34',
    topicId: 'c_recursion',
    question: 'Write recursive function for Tower of Hanoi.',
    mathSolution: 'Move 3 disks from A to C using B',
    codeSolution: 'void hanoi(int n, char from, char to, char aux) { if(n==1) { printf("Move 1 from %c to %c\\n", from, to); return; } hanoi(n-1, from, aux, to); printf("Move %d from %c to %c\\n", n, from, to); hanoi(n-1, aux, to, from); }',
    hint: 'Move n-1 to aux, then nth, then n-1 to dest'
  },
  {
    id: 'c_rec_35',
    topicId: 'c_recursion',
    question: 'Create recursive function for Ackermann function.',
    mathSolution: 'A(1,2) = 4',
    codeSolution: 'int ackermann(int m, int n) { if(m==0) return n+1; if(n==0) return ackermann(m-1,1); return ackermann(m-1, ackermann(m, n-1)); }',
    hint: 'Well-known recursive function'
  },
  {
    id: 'c_rec_36',
    topicId: 'c_recursion',
    question: 'Write recursive function for combinations (nCr).',
    mathSolution: 'C(5,2) = 10',
    codeSolution: 'int comb(int n, int r) { if(r==0 || r==n) return 1; return comb(n-1, r-1) + comb(n-1, r); }',
    hint: 'Pascal\'s triangle identity'
  },

  // ========== NUMBER PATTERNS (QUESTIONS 37-40) ==========
  {
    id: 'c_rec_37',
    topicId: 'c_recursion',
    question: 'Write recursive function to print numbers from 1 to n.',
    mathSolution: 'n=5 → 1 2 3 4 5',
    codeSolution: 'void print1toN(int n) { if(n==0) return; print1toN(n-1); printf("%d ", n); }',
    hint: 'Recurse first, then print'
  },
  {
    id: 'c_rec_38',
    topicId: 'c_recursion',
    question: 'Create recursive function to print numbers from n to 1.',
    mathSolution: 'n=5 → 5 4 3 2 1',
    codeSolution: 'void printNto1(int n) { if(n==0) return; printf("%d ", n); printNto1(n-1); }',
    hint: 'Print first, then recurse'
  },
  {
    id: 'c_rec_39',
    topicId: 'c_recursion',
    question: 'Write recursive function to print even numbers up to n.',
    mathSolution: 'n=10 → 2 4 6 8 10',
    codeSolution: 'void printEven(int n) { if(n<2) return; printEven(n-2); printf("%d ", n); }',
    hint: 'Decrease by 2 each time'
  },
  {
    id: 'c_rec_40',
    topicId: 'c_recursion',
    question: 'Create recursive function to print odd numbers up to n.',
    mathSolution: 'n=10 → 1 3 5 7 9',
    codeSolution: 'void printOdd(int n) { if(n<1) return; printOdd(n-2); if(n%2) printf("%d ", n); }',
    hint: 'Check oddness before printing'
  },

  // ========== PATTERN PRINTING (QUESTIONS 41-44) ==========
  {
    id: 'c_rec_41',
    topicId: 'c_recursion',
    question: 'Write recursive function to print triangle of stars.',
    mathSolution: 'Print:\n*\n**\n***',
    codeSolution: 'void triangle(int n) { if(n==0) return; triangle(n-1); for(int i=0;i<n;i++) printf("*"); printf("\\n"); }',
    hint: 'Recurse then print row'
  },
  {
    id: 'c_rec_42',
    topicId: 'c_recursion',
    question: 'Create recursive function to print inverted triangle.',
    mathSolution: 'Print:\n***\n**\n*',
    codeSolution: 'void invTriangle(int n) { if(n==0) return; for(int i=0;i<n;i++) printf("*"); printf("\\n"); invTriangle(n-1); }',
    hint: 'Print row then recurse'
  },
  {
    id: 'c_rec_43',
    topicId: 'c_recursion',
    question: 'Write recursive function to print pyramid pattern.',
    mathSolution: 'Print centered pyramid',
    codeSolution: 'void pyramid(int n, int row) { if(row>n) return; for(int i=0;i<n-row;i++) printf(" "); for(int i=0;i<2*row-1;i++) printf("*"); printf("\\n"); pyramid(n, row+1); }',
    hint: 'Print spaces then stars'
  },
  {
    id: 'c_rec_44',
    topicId: 'c_recursion',
    question: 'Create recursive function to print diamond pattern.',
    mathSolution: 'Diamond of height 5',
    codeSolution: 'void diamond(int n, int row) { if(row>2*n-1) return; int stars = row<=n ? 2*row-1 : 2*(2*n-row)-1; int spaces = (2*n-1-stars)/2; for(int i=0;i<spaces;i++) printf(" "); for(int i=0;i<stars;i++) printf("*"); printf("\\n"); diamond(n, row+1); }',
    hint: 'Handle increasing and decreasing phases'
  },

  // ========== FRACTALS (QUESTIONS 45-46) ==========
  {
    id: 'c_rec_45',
    topicId: 'c_recursion',
    question: 'Write recursive function to print Sierpinski triangle.',
    mathSolution: 'Fractal triangle pattern',
    codeSolution: 'void sierpinski(int n, int x, int y) { if(n==1) { drawPoint(x,y); return; } int size=pow(2,n-1); sierpinski(n-1, x, y); sierpinski(n-1, x+size/2, y); sierpinski(n-1, x+size/4, y+size/2); }',
    hint: 'Recursively draw three smaller triangles'
  },
  {
    id: 'c_rec_46',
    topicId: 'c_recursion',
    question: 'Create recursive function to draw Koch snowflake.',
    mathSolution: 'Fractal snowflake curve',
    codeSolution: 'void koch(int n, int len) { if(n==0) { forward(len); return; } koch(n-1, len/3); left(60); koch(n-1, len/3); right(120); koch(n-1, len/3); left(60); koch(n-1, len/3); }',
    hint: 'Replace line with 4 smaller lines at angles'
  },

  // ========== BINARY OPERATIONS (QUESTIONS 47-49) ==========
  {
    id: 'c_rec_47',
    topicId: 'c_recursion',
    question: 'Write recursive function to convert decimal to binary.',
    mathSolution: '13 → 1101',
    codeSolution: 'void decToBin(int n) { if(n==0) return; decToBin(n/2); printf("%d", n%2); }',
    hint: 'Recurse on quotient, print remainder'
  },
  {
    id: 'c_rec_48',
    topicId: 'c_recursion',
    question: 'Create recursive function to convert binary to decimal.',
    mathSolution: '1101 → 13',
    codeSolution: 'int binToDec(char *bin, int len) { if(len==0) return 0; return (bin[len-1]-\'0\') * pow(2,len-1) + binToDec(bin, len-1); }',
    hint: 'Process from rightmost bit'
  },
  {
    id: 'c_rec_49',
    topicId: 'c_recursion',
    question: 'Write recursive function to count set bits (1s) in binary.',
    mathSolution: '13 (1101) has 3 set bits',
    codeSolution: 'int countBits(int n) { if(n==0) return 0; return (n&1) + countBits(n>>1); }',
    hint: 'Check LSB and shift right'
  },

  // ========== MATHEMATICAL CONSTANTS (QUESTION 50) ==========
  {
    id: 'c_rec_50',
    topicId: 'c_recursion',
    question: 'Write recursive function to calculate pi using Leibniz series.',
    mathSolution: 'π/4 = 1 - 1/3 + 1/5 - 1/7 + ...',
    codeSolution: 'double piLeibniz(int n) { if(n==0) return 0; double term = (n%2==0?1:-1) * 4.0/(2*n-1); return term + piLeibniz(n-1); }',
    hint: 'Alternating terms with odd denominators'
  },

  // ========== MATRIX RECURSION (QUESTIONS 51-52) ==========
  {
    id: 'c_rec_51',
    topicId: 'c_recursion',
    question: 'Write recursive function to find determinant of matrix.',
    mathSolution: 'Determinant of 2x2 matrix',
    codeSolution: 'int det(int mat[][10], int n) { if(n==1) return mat[0][0]; if(n==2) return mat[0][0]*mat[1][1]-mat[0][1]*mat[1][0]; int d=0,sign=1; for(int i=0;i<n;i++) { int sub[10][10]; getCofactor(mat,sub,0,i,n); d += sign * mat[0][i] * det(sub, n-1); sign = -sign; } return d; }',
    hint: 'Expand along first row'
  },
  {
    id: 'c_rec_52',
    topicId: 'c_recursion',
    question: 'Create recursive function for matrix chain multiplication.',
    mathSolution: 'Minimize multiplication count',
    codeSolution: 'int matrixChain(int p[], int i, int j) { if(i==j) return 0; int min=INT_MAX; for(int k=i;k<j;k++) { int count = matrixChain(p,i,k) + matrixChain(p,k+1,j) + p[i-1]*p[k]*p[j]; if(count<min) min=count; } return min; }',
    hint: 'Try all parenthesizations'
  },

  // ========== GAME RECURSION (QUESTIONS 53-55) ==========
  {
    id: 'c_rec_53',
    topicId: 'c_recursion',
    question: 'Write recursive function for N-Queens problem.',
    mathSolution: 'Place N queens safely on N×N board',
    codeSolution: 'int nQueens(int board[][10], int col, int n) { if(col>=n) return 1; for(int i=0;i<n;i++) { if(isSafe(board,i,col,n)) { board[i][col]=1; if(nQueens(board,col+1,n)) return 1; board[i][col]=0; } } return 0; }',
    hint: 'Place queen, recurse, backtrack'
  },
  {
    id: 'c_rec_54',
    topicId: 'c_recursion',
    question: 'Create recursive function for Knight\'s tour.',
    mathSolution: 'Knight visits all squares once',
    codeSolution: 'int knightTour(int x, int y, int move, int board[][8]) { if(move==64) return 1; int moves[8][2]={{2,1},{1,2},{-1,2},{-2,1},{-2,-1},{-1,-2},{1,-2},{2,-1}}; for(int i=0;i<8;i++) { int nx=x+moves[i][0], ny=y+moves[i][1]; if(isSafe(nx,ny,board)) { board[nx][ny]=move; if(knightTour(nx,ny,move+1,board)) return 1; board[nx][ny]=-1; } } return 0; }',
    hint: 'Try all possible moves'
  },
  {
    id: 'c_rec_55',
    topicId: 'c_recursion',
    question: 'Write recursive function for Rat in a Maze.',
    mathSolution: 'Find path from start to exit',
    codeSolution: 'int solveMaze(int maze[][10], int x, int y, int sol[][10], int n) { if(x==n-1 && y==n-1) { sol[x][y]=1; return 1; } if(isSafe(maze,x,y,n)) { sol[x][y]=1; if(solveMaze(maze,x+1,y,sol,n)) return 1; if(solveMaze(maze,x,y+1,sol,n)) return 1; sol[x][y]=0; } return 0; }',
    hint: 'Try moving right and down'
  },

  // ========== TREE ALGORITHMS (QUESTIONS 56-60) ==========
  {
    id: 'c_rec_56',
    topicId: 'c_recursion',
    question: 'Write recursive function to count nodes in binary tree.',
    mathSolution: 'Count total nodes',
    codeSolution: 'int countNodes(Node *root) { if(!root) return 0; return 1 + countNodes(root->left) + countNodes(root->right); }',
    hint: 'Count root + left + right'
  },
  {
    id: 'c_rec_57',
    topicId: 'c_recursion',
    question: 'Create recursive function to find height of binary tree.',
    mathSolution: 'Height of tree = max depth',
    codeSolution: 'int height(Node *root) { if(!root) return 0; int left=height(root->left); int right=height(root->right); return 1 + (left>right?left:right); }',
    hint: 'Max of left/right heights + 1'
  },
  {
    id: 'c_rec_58',
    topicId: 'c_recursion',
    question: 'Write recursive function for inorder traversal.',
    mathSolution: 'Left → Root → Right',
    codeSolution: 'void inorder(Node *root) { if(!root) return; inorder(root->left); printf("%d ", root->data); inorder(root->right); }',
    hint: 'Recurse left, print, recurse right'
  },
  {
    id: 'c_rec_59',
    topicId: 'c_recursion',
    question: 'Create recursive function for preorder traversal.',
    mathSolution: 'Root → Left → Right',
    codeSolution: 'void preorder(Node *root) { if(!root) return; printf("%d ", root->data); preorder(root->left); preorder(root->right); }',
    hint: 'Print, then recurse left and right'
  },
  {
    id: 'c_rec_60',
    topicId: 'c_recursion',
    question: 'Write recursive function for postorder traversal.',
    mathSolution: 'Left → Right → Root',
    codeSolution: 'void postorder(Node *root) { if(!root) return; postorder(root->left); postorder(root->right); printf("%d ", root->data); }',
    hint: 'Recurse left and right, then print'
  },

  // ========== BINARY SEARCH TREE (QUESTIONS 61-64) ==========
  {
    id: 'c_rec_61',
    topicId: 'c_recursion',
    question: 'Write recursive function to insert node in BST.',
    mathSolution: 'Insert maintaining BST property',
    codeSolution: 'Node* insertBST(Node *root, int val) { if(!root) return createNode(val); if(val < root->data) root->left = insertBST(root->left, val); else if(val > root->data) root->right = insertBST(root->right, val); return root; }',
    hint: 'Compare and recurse left/right'
  },
  {
    id: 'c_rec_62',
    topicId: 'c_recursion',
    question: 'Create recursive function to search in BST.',
    mathSolution: 'Find value in BST',
    codeSolution: 'Node* searchBST(Node *root, int key) { if(!root || root->data==key) return root; if(key < root->data) return searchBST(root->left, key); return searchBST(root->right, key); }',
    hint: 'Compare and recurse appropriately'
  },
  {
    id: 'c_rec_63',
    topicId: 'c_recursion',
    question: 'Write recursive function to find min in BST.',
    mathSolution: 'Leftmost node has minimum',
    codeSolution: 'Node* findMin(Node *root) { if(!root || !root->left) return root; return findMin(root->left); }',
    hint: 'Keep going left until null'
  },
  {
    id: 'c_rec_64',
    topicId: 'c_recursion',
    question: 'Create recursive function to find max in BST.',
    mathSolution: 'Rightmost node has maximum',
    codeSolution: 'Node* findMax(Node *root) { if(!root || !root->right) return root; return findMax(root->right); }',
    hint: 'Keep going right until null'
  },

  // ========== LINKED LIST RECURSION (QUESTIONS 65-68) ==========
  {
    id: 'c_rec_65',
    topicId: 'c_recursion',
    question: 'Write recursive function to print linked list.',
    mathSolution: 'Print all nodes in order',
    codeSolution: 'void printList(Node *head) { if(!head) return; printf("%d ", head->data); printList(head->next); }',
    hint: 'Print current, recurse on next'
  },
  {
    id: 'c_rec_66',
    topicId: 'c_recursion',
    question: 'Create recursive function to reverse linked list.',
    mathSolution: '1→2→3 becomes 3→2→1',
    codeSolution: 'Node* reverseList(Node *head) { if(!head || !head->next) return head; Node *rest = reverseList(head->next); head->next->next = head; head->next = NULL; return rest; }',
    hint: 'Reverse rest, then adjust pointers'
  },
  {
    id: 'c_rec_67',
    topicId: 'c_recursion',
    question: 'Write recursive function to find middle of linked list.',
    mathSolution: 'Use two pointers technique recursively',
    codeSolution: 'Node* middle(Node *slow, Node *fast) { if(!fast || !fast->next) return slow; return middle(slow->next, fast->next->next); }',
    hint: 'Slow moves one, fast moves two'
  },
  {
    id: 'c_rec_68',
    topicId: 'c_recursion',
    question: 'Create recursive function to detect loop in linked list.',
    mathSolution: 'Floyd\'s cycle detection',
    codeSolution: 'int hasLoop(Node *slow, Node *fast) { if(!fast || !fast->next) return 0; if(slow==fast) return 1; return hasLoop(slow->next, fast->next->next); }',
    hint: 'Check if slow and fast meet'
  },

  // ========== DIVIDE AND CONQUER (QUESTIONS 69-71) ==========
  {
    id: 'c_rec_69',
    topicId: 'c_recursion',
    question: 'Write recursive function for merge sort.',
    mathSolution: 'Divide array, sort halves, merge',
    codeSolution: 'void mergeSort(int arr[], int l, int r) { if(l<r) { int m=l+(r-l)/2; mergeSort(arr,l,m); mergeSort(arr,m+1,r); merge(arr,l,m,r); } }',
    hint: 'Split, sort recursively, merge'
  },
  {
    id: 'c_rec_70',
    topicId: 'c_recursion',
    question: 'Create recursive function for quick sort.',
    mathSolution: 'Partition and sort subarrays',
    codeSolution: 'void quickSort(int arr[], int low, int high) { if(low<high) { int pi=partition(arr,low,high); quickSort(arr,low,pi-1); quickSort(arr,pi+1,high); } }',
    hint: 'Partition then recurse left and right'
  },
  {
    id: 'c_rec_71',
    topicId: 'c_recursion',
    question: 'Write recursive function for merge two sorted arrays.',
    mathSolution: 'Combine sorted arrays',
    codeSolution: 'void merge(int arr1[], int arr2[], int n1, int n2, int result[]) { if(n1==0 && n2==0) return; if(n2==0 || (n1>0 && arr1[0]<=arr2[0])) { result[0]=arr1[0]; merge(arr1+1,arr2,n1-1,n2,result+1); } else { result[0]=arr2[0]; merge(arr1,arr2+1,n1,n2-1,result+1); } }',
    hint: 'Take smaller first element'
  },

  // ========== DYNAMIC PROGRAMMING RECURSION (QUESTIONS 72-74) ==========
  {
    id: 'c_rec_72',
    topicId: 'c_recursion',
    question: 'Write recursive function for 0/1 knapsack.',
    mathSolution: 'Maximize value with weight limit',
    codeSolution: 'int knapsack(int W, int wt[], int val[], int n) { if(n==0 || W==0) return 0; if(wt[n-1]>W) return knapsack(W,wt,val,n-1); return max(val[n-1]+knapsack(W-wt[n-1],wt,val,n-1), knapsack(W,wt,val,n-1)); }',
    hint: 'Include or exclude current item'
  },
  {
    id: 'c_rec_73',
    topicId: 'c_recursion',
    question: 'Create recursive function for longest common subsequence.',
    mathSolution: 'LCS of "ABCDGH" and "AEDFHR" = "ADH"',
    codeSolution: 'int lcs(char *s1, char *s2, int m, int n) { if(m==0 || n==0) return 0; if(s1[m-1]==s2[n-1]) return 1+lcs(s1,s2,m-1,n-1); return max(lcs(s1,s2,m-1,n), lcs(s1,s2,m,n-1)); }',
    hint: 'Match or skip from either string'
  },
  {
    id: 'c_rec_74',
    topicId: 'c_recursion',
    question: 'Write recursive function for edit distance.',
    mathSolution: 'Minimum edits to convert string1 to string2',
    codeSolution: 'int editDist(char *s1, char *s2, int m, int n) { if(m==0) return n; if(n==0) return m; if(s1[m-1]==s2[n-1]) return editDist(s1,s2,m-1,n-1); return 1+min(editDist(s1,s2,m,n-1), editDist(s1,s2,m-1,n), editDist(s1,s2,m-1,n-1)); }',
    hint: 'Insert, delete, or replace'
  },

  // ========== BACKTRACKING (QUESTIONS 75-77) ==========
  {
    id: 'c_rec_75',
    topicId: 'c_recursion',
    question: 'Write recursive function to generate all subsets.',
    mathSolution: 'Subsets of {1,2,3}',
    codeSolution: 'void subsets(int arr[], int n, int index, int current[], int len) { if(index==n) { for(int i=0;i<len;i++) printf("%d ",current[i]); printf("\\n"); return; } subsets(arr,n,index+1,current,len); current[len]=arr[index]; subsets(arr,n,index+1,current,len+1); }',
    hint: 'Include or exclude each element'
  },
  {
    id: 'c_rec_76',
    topicId: 'c_recursion',
    question: 'Create recursive function to generate all permutations.',
    mathSolution: 'Permutations of "ABC"',
    codeSolution: 'void permute(char *str, int l, int r) { if(l==r) { printf("%s\\n",str); return; } for(int i=l;i<=r;i++) { swap(&str[l],&str[i]); permute(str,l+1,r); swap(&str[l],&str[i]); } }',
    hint: 'Swap each element to current position'
  },
  {
    id: 'c_rec_77',
    topicId: 'c_recursion',
    question: 'Write recursive function to generate all combinations of k elements.',
    mathSolution: 'C(5,3) combinations',
    codeSolution: 'void combinations(int arr[], int n, int k, int index, int data[], int i) { if(index==k) { for(int j=0;j<k;j++) printf("%d ",data[j]); printf("\\n"); return; } if(i>=n) return; data[index]=arr[i]; combinations(arr,n,k,index+1,data,i+1); combinations(arr,n,k,index,data,i+1); }',
    hint: 'Include or exclude current element'
  },

  // ========== STRING COMBINATIONS (QUESTIONS 78-79) ==========
  {
    id: 'c_rec_78',
    topicId: 'c_recursion',
    question: 'Write recursive function to generate all substrings.',
    mathSolution: 'Substrings of "abc"',
    codeSolution: 'void substrings(char *str, int start, int end) { if(start>end) return; for(int i=start;i<=end;i++) printf("%c",str[i]); printf("\\n"); substrings(str,start,end-1); }',
    hint: 'Fix start, vary end'
  },
  {
    id: 'c_rec_79',
    topicId: 'c_recursion',
    question: 'Create recursive function to generate all valid parentheses.',
    mathSolution: 'n=3 → ((())), (()()), (())(), ()(()), ()()()',
    codeSolution: 'void generateParenthesis(int n, int open, int close, char *str, int pos) { if(close==n) { printf("%s\\n",str); return; } if(open<n) { str[pos]=\'(\'; generateParenthesis(n,open+1,close,str,pos+1); } if(close<open) { str[pos]=\')\'; generateParenthesis(n,open,close+1,str,pos+1); } }',
    hint: 'Add ( if open<n, add ) if close<open'
  },

  // ========== MATHEMATICAL PUZZLES (QUESTIONS 80-82) ==========
  {
    id: 'c_rec_80',
    topicId: 'c_recursion',
    question: 'Write recursive function for Josephus problem.',
    mathSolution: 'n=7, k=3 → survivor at position 3',
    codeSolution: 'int josephus(int n, int k) { if(n==1) return 1; return (josephus(n-1, k) + k-1) % n + 1; }',
    hint: 'Recursive elimination formula'
  },
  {
    id: 'c_rec_81',
    topicId: 'c_recursion',
    question: 'Create recursive function to solve coin change problem.',
    mathSolution: 'Ways to make change for amount',
    codeSolution: 'int coinChange(int coins[], int n, int sum) { if(sum==0) return 1; if(sum<0 || n<=0) return 0; return coinChange(coins, n-1, sum) + coinChange(coins, n, sum-coins[n-1]); }',
    hint: 'Include or exclude current coin'
  },
  {
    id: 'c_rec_82',
    topicId: 'c_recursion',
    question: 'Write recursive function for staircase problem (ways to climb).',
    mathSolution: 'n=3 steps, climb 1 or 2 → 3 ways',
    codeSolution: 'int climbWays(int n) { if(n<=2) return n; return climbWays(n-1) + climbWays(n-2); }',
    hint: 'Ways(n) = Ways(n-1) + Ways(n-2)'
  },

  // ========== GRAPH ALGORITHMS (QUESTIONS 83-84) ==========
  {
    id: 'c_rec_83',
    topicId: 'c_recursion',
    question: 'Write recursive function for DFS traversal of graph.',
    mathSolution: 'Depth First Search',
    codeSolution: 'void DFS(int graph[][10], int visited[], int v, int n) { visited[v]=1; printf("%d ",v); for(int i=0;i<n;i++) if(graph[v][i] && !visited[i]) DFS(graph,visited,i,n); }',
    hint: 'Mark visited, recurse on neighbors'
  },
  {
    id: 'c_rec_84',
    topicId: 'c_recursion',
    question: 'Create recursive function to detect cycle in graph.',
    mathSolution: 'Check for back edges in DFS',
    codeSolution: 'int hasCycle(int graph[][10], int visited[], int recStack[], int v, int n) { if(!visited[v]) { visited[v]=1; recStack[v]=1; for(int i=0;i<n;i++) if(graph[v][i]) { if(!visited[i] && hasCycle(graph,visited,recStack,i,n)) return 1; else if(recStack[i]) return 1; } } recStack[v]=0; return 0; }',
    hint: 'Track recursion stack'
  },

  // ========== PATH FINDING (QUESTIONS 85-86) ==========
  {
    id: 'c_rec_85',
    topicId: 'c_recursion',
    question: 'Write recursive function to count paths in grid.',
    mathSolution: 'Number of paths from (0,0) to (m,n)',
    codeSolution: 'int countPaths(int m, int n) { if(m==1 || n==1) return 1; return countPaths(m-1,n) + countPaths(m,n-1); }',
    hint: 'Move right or down'
  },
  {
    id: 'c_rec_86',
    topicId: 'c_recursion',
    question: 'Create recursive function for minimum path sum in grid.',
    mathSolution: 'Find min sum from top-left to bottom-right',
    codeSolution: 'int minPathSum(int grid[][10], int m, int n) { if(m<0 || n<0) return INT_MAX; if(m==0 && n==0) return grid[0][0]; return grid[m][n] + min(minPathSum(grid,m-1,n), minPathSum(grid,m,n-1)); }',
    hint: 'Choose min of top or left path'
  },

  // ========== EXPRESSION EVALUATION (QUESTIONS 87-88) ==========
  {
    id: 'c_rec_87',
    topicId: 'c_recursion',
    question: 'Write recursive function to evaluate expression with + and -.',
    mathSolution: 'Evaluate "1+2-3+4"',
    codeSolution: 'int eval(char *expr, int *pos) { if(expr[*pos]==\'\\0\') return 0; int num=0; while(isdigit(expr[*pos])) { num=num*10+(expr[*pos]-\'0\'); (*pos)++; } char op=expr[*pos]; (*pos)++; if(op==\'+\') return num + eval(expr,pos); if(op==\'-\') return num - eval(expr,pos); return num; }',
    hint: 'Parse number, then operator, recurse'
  },
  {
    id: 'c_rec_88',
    topicId: 'c_recursion',
    question: 'Create recursive function to evaluate prefix expression.',
    mathSolution: '"+ * 3 4 5" = 17',
    codeSolution: 'int evalPrefix(char **expr) { char *token=*expr; (*expr)+=2; if(isdigit(token[0])) return token[0]-\'0\'; int left=evalPrefix(expr); int right=evalPrefix(expr); if(token[0]==\'+\') return left+right; if(token[0]==\'-\') return left-right; if(token[0]==\'*\') return left*right; if(token[0]==\'/\') return left/right; }',
    hint: 'Operator, then two operands'
  },

  // ========== SEQUENCE GENERATION (QUESTIONS 89-90) ==========
  {
    id: 'c_rec_89',
    topicId: 'c_recursion',
    question: 'Write recursive function for look-and-say sequence.',
    mathSolution: '1, 11, 21, 1211, 111221, ...',
    codeSolution: 'char* lookAndSay(int n, char *s) { if(n==1) return s; char *result=malloc(1000); int count=1, len=strlen(s), pos=0; for(int i=0;i<len;i++) { if(s[i]==s[i+1]) count++; else { pos+=sprintf(result+pos,"%d%c",count,s[i]); count=1; } } return lookAndSay(n-1, result); }',
    hint: 'Count consecutive digits'
  },
  {
    id: 'c_rec_90',
    topicId: 'c_recursion',
    question: 'Create recursive function for Catalan numbers.',
    mathSolution: 'C(4) = 14',
    codeSolution: 'int catalan(int n) { if(n<=1) return 1; int res=0; for(int i=0;i<n;i++) res += catalan(i) * catalan(n-1-i); return res; }',
    hint: 'Sum of products of catalan pairs'
  },

  // ========== SPECIAL RECURSIONS (QUESTIONS 91-92) ==========
  {
    id: 'c_rec_91',
    topicId: 'c_recursion',
    question: 'Write recursive function for McCarthy 91 function.',
    mathSolution: 'M(n) = n-10 if n>100, else M(M(n+11))',
    codeSolution: 'int mcCarthy(int n) { if(n>100) return n-10; return mcCarthy(mcCarthy(n+11)); }',
    hint: 'Famous recursive function'
  },
  {
    id: 'c_rec_92',
    topicId: 'c_recursion',
    question: 'Create recursive function for Collatz conjecture steps.',
    mathSolution: 'Steps for 6: 6→3→10→5→16→8→4→2→1',
    codeSolution: 'int collatz(int n) { if(n==1) return 0; if(n%2==0) return 1+collatz(n/2); return 1+collatz(3*n+1); }',
    hint: 'Count steps to reach 1'
  },

  // ========== STRING TRANSFORMATIONS (QUESTIONS 93-94) ==========
  {
    id: 'c_rec_93',
    topicId: 'c_recursion',
    question: 'Write recursive function to convert string to uppercase.',
    mathSolution: '"hello" → "HELLO"',
    codeSolution: 'void toUpper(char *s) { if(*s==\'\\0\') return; if(islower(*s)) *s=toupper(*s); toUpper(s+1); }',
    hint: 'Process one character at a time'
  },
  {
    id: 'c_rec_94',
    topicId: 'c_recursion',
    question: 'Create recursive function to remove character from string.',
    mathSolution: 'Remove \'l\' from "hello" → "heo"',
    codeSolution: 'void removeChar(char *s, char c) { if(*s==\'\\0\') return; if(*s==c) { int i; for(i=1;s[i];i++) s[i-1]=s[i]; s[i-1]=\'\\0\'; removeChar(s,c); } else removeChar(s+1,c); }',
    hint: 'Shift left if match found'
  },

  // ========== NUMBER CONVERSIONS (QUESTIONS 95-96) ==========
  {
    id: 'c_rec_95',
    topicId: 'c_recursion',
    question: 'Write recursive function to convert decimal to hexadecimal.',
    mathSolution: '255 → FF',
    codeSolution: 'void decToHex(int n) { if(n==0) return; decToHex(n/16); int rem=n%16; if(rem<10) printf("%d",rem); else printf("%c",\'A\'+rem-10); }',
    hint: 'Recurse on quotient, print remainder'
  },
  {
    id: 'c_rec_96',
    topicId: 'c_recursion',
    question: 'Create recursive function to convert decimal to octal.',
    mathSolution: '64 → 100',
    codeSolution: 'void decToOct(int n) { if(n==0) return; decToOct(n/8); printf("%d", n%8); }',
    hint: 'Divide by 8 repeatedly'
  },

  // ========== PATTERN MATCHING (QUESTIONS 97-98) ==========
  {
    id: 'c_rec_97',
    topicId: 'c_recursion',
    question: 'Write recursive function for wildcard pattern matching.',
    mathSolution: 'Match "a*b" with "ab", "aab", "acb"',
    codeSolution: 'int match(char *pattern, char *text) { if(*pattern==\'\\0\' && *text==\'\\0\') return 1; if(*pattern==\'*\') { if(*(pattern+1)==\'\\0\') return 1; while(*text) { if(match(pattern+1,text)) return 1; text++; } return 0; } if(*pattern==\'?\' || *pattern==*text) return match(pattern+1,text+1); return 0; }',
    hint: 'Handle * and ? specially'
  },
  {
    id: 'c_rec_98',
    topicId: 'c_recursion',
    question: 'Create recursive function for KMP pattern preprocessing.',
    mathSolution: 'Compute LPS array for pattern',
    codeSolution: 'void computeLPS(char *pat, int m, int *lps, int len) { if(m==0) return; if(pat[len]==pat[m-1]) { lps[m-1]=len+1; computeLPS(pat, m-1, lps, len+1); } else if(len>0) computeLPS(pat, m, lps, lps[len-1]); else computeLPS(pat, m-1, lps, 0); }',
    hint: 'Recursive LPS computation'
  },

  // ========== ADVANCED MATHEMATICAL (QUESTIONS 99-100) ==========
  {
    id: 'c_rec_99',
    topicId: 'c_recursion',
    question: 'Write recursive function for Stirling numbers of second kind.',
    mathSolution: 'S(5,2) = 15',
    codeSolution: 'int stirling(int n, int k) { if(n==0 && k==0) return 1; if(n==0 || k==0) return 0; return k*stirling(n-1,k) + stirling(n-1,k-1); }',
    hint: 'Place nth element in existing set or new set'
  },
  {
    id: 'c_rec_100',
    topicId: 'c_recursion',
    question: 'Create recursive function for Bell numbers (set partitions).',
    mathSolution: 'B(4) = 15',
    codeSolution: 'int bell(int n) { if(n<=1) return 1; int sum=0; for(int k=0;k<n;k++) sum += comb(n-1,k) * bell(k); return sum; }',
    hint: 'B(n) = sum(C(n-1,k) * B(k))'
  }
);