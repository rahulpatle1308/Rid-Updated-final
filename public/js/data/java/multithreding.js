QuizData.questions.push(
  // CREATING THREADS (4)
  {
    id: "thread_1",
    topicId: "multithreading",
    question: "Create thread by extending Thread class.",
    mathSolution: "Override run() method and start thread",
    codeSolution:
      'class MyThread extends Thread {\n    public void run() {\n        System.out.println("Thread running: " + Thread.currentThread().getName());\n    }\n}\n\nMyThread t1 = new MyThread();\nMyThread t2 = new MyThread();\nt1.start();\nt2.start();',
    hint: "Extend Thread and override run()",
  },
  {
    id: "thread_2",
    topicId: "multithreading",
    question: "Create thread by implementing Runnable interface.",
    mathSolution: "Implement Runnable and pass to Thread constructor",
    codeSolution:
      'class MyRunnable implements Runnable {\n    public void run() {\n        System.out.println("Runnable running: " + Thread.currentThread().getName());\n    }\n}\n\nMyRunnable runnable = new MyRunnable();\nThread t1 = new Thread(runnable);\nThread t2 = new Thread(runnable);\nt1.start();\nt2.start();',
    hint: "Implement Runnable, better for multiple inheritance",
  },
  {
    id: "thread_3",
    topicId: "multithreading",
    question: "Create thread using lambda expression.",
    mathSolution: "Runnable as lambda for concise code",
    codeSolution:
      '// Using lambda\nThread t1 = new Thread(() -> {\n    System.out.println("Lambda thread: " + Thread.currentThread().getName());\n});\n\n// With multiple statements\nThread t2 = new Thread(() -> {\n    for(int i=1; i<=5; i++) {\n        System.out.println("Count: " + i);\n    }\n});\n\nt1.start();\nt2.start();',
    hint: "Runnable is functional interface",
  },
  {
    id: "thread_4",
    topicId: "multithreading",
    question: "Set and get thread name and priority.",
    mathSolution: "Use setName(), getName(), setPriority(), getPriority()",
    codeSolution:
      'Thread t = new Thread(() -> {\n    System.out.println("Thread executing");\n});\n\nt.setName("Worker-1");\nt.setPriority(Thread.MAX_PRIORITY); // 10\n\nSystem.out.println("Name: " + t.getName());\nSystem.out.println("Priority: " + t.getPriority());\nSystem.out.println("ID: " + t.getId());\nSystem.out.println("State: " + t.getState());\n\nt.start();',
    hint: "Priority range 1 (MIN) to 10 (MAX)",
  },

  // THREAD STATES AND LIFE CYCLE (3)
  {
    id: "thread_5",
    topicId: "multithreading",
    question: "Check thread states during execution.",
    mathSolution: "getState() returns Thread.State enum",
    codeSolution:
      'Thread t = new Thread(() -> {\n    try {\n        Thread.sleep(1000);\n    } catch(InterruptedException e) {}\n});\n\nSystem.out.println("Before start: " + t.getState()); // NEW\n\nt.start();\nSystem.out.println("After start: " + t.getState()); // RUNNABLE\n\nThread.sleep(500);\nSystem.out.println("During sleep: " + t.getState()); // TIMED_WAITING\n\nt.join();\nSystem.out.println("After completion: " + t.getState()); // TERMINATED',
    hint: "States: NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED",
  },
  {
    id: "thread_6",
    topicId: "multithreading",
    question: "Use sleep() to pause thread execution.",
    mathSolution: "Thread.sleep(milliseconds) throws InterruptedException",
    codeSolution:
      'Thread t = new Thread(() -> {\n    try {\n        System.out.println("Thread started");\n        Thread.sleep(2000); // pause for 2 seconds\n        System.out.println("Thread woke up");\n    } catch(InterruptedException e) {\n        System.out.println("Thread interrupted");\n    }\n});\nt.start();',
    hint: "sleep() throws InterruptedException",
  },
  {
    id: "thread_7",
    topicId: "multithreading",
    question: "Use join() to wait for thread completion.",
    mathSolution: "join() waits for thread to die",
    codeSolution:
      'Thread t1 = new Thread(() -> {\n    for(int i=1; i<=5; i++) {\n        System.out.println("Thread 1: " + i);\n        try { Thread.sleep(500); } catch(InterruptedException e) {}\n    }\n});\n\nThread t2 = new Thread(() -> {\n    try {\n        t1.join(); // wait for t1 to finish\n        System.out.println("Thread 2 starts after t1 completes");\n    } catch(InterruptedException e) {}\n});\n\nt1.start();\nt2.start();',
    hint: "join() makes one thread wait for another",
  },

  // SYNCHRONIZATION (5)
  {
    id: "thread_8",
    topicId: "multithreading",
    question: "Demonstrate race condition without synchronization.",
    mathSolution: "Multiple threads accessing shared resource",
    codeSolution:
      'class Counter {\n    int count = 0;\n    void increment() { count++; }\n}\n\nCounter counter = new Counter();\nRunnable task = () -> {\n    for(int i=0; i<1000; i++) {\n        counter.increment();\n    }\n};\n\nThread t1 = new Thread(task);\nThread t2 = new Thread(task);\nt1.start(); t2.start();\nt1.join(); t2.join();\n\nSystem.out.println("Final count (should be 2000): " + counter.count); // May be less',
    hint: "count++ is not atomic, causes race condition",
  },
  {
    id: "thread_9",
    topicId: "multithreading",
    question: "Use synchronized method to fix race condition.",
    mathSolution: "synchronized keyword ensures mutual exclusion",
    codeSolution:
      'class SafeCounter {\n    int count = 0;\n    synchronized void increment() { count++; }\n}\n\nSafeCounter counter = new SafeCounter();\nRunnable task = () -> {\n    for(int i=0; i<1000; i++) {\n        counter.increment();\n    }\n};\n\nThread t1 = new Thread(task);\nThread t2 = new Thread(task);\nt1.start(); t2.start();\nt1.join(); t2.join();\n\nSystem.out.println("Final count: " + counter.count); // Always 2000',
    hint: "synchronized ensures only one thread executes method at a time",
  },
  {
    id: "thread_10",
    topicId: "multithreading",
    question: "Use synchronized block for better granularity.",
    mathSolution: "Synchronize only critical section",
    codeSolution:
      'class BankAccount {\n    int balance = 1000;\n    \n    void withdraw(int amount) {\n        System.out.println("Checking balance...");\n        \n        // Only synchronize critical section\n        synchronized(this) {\n            if(balance >= amount) {\n                try { Thread.sleep(100); } catch(InterruptedException e) {}\n                balance -= amount;\n                System.out.println("Withdrawn: " + amount + ", Balance: " + balance);\n            } else {\n                System.out.println("Insufficient balance");\n            }\n        }\n    }\n}\n\nBankAccount acc = new BankAccount();\nRunnable task = () -> acc.withdraw(800);\n\nThread t1 = new Thread(task);\nThread t2 = new Thread(task);\nt1.start(); t2.start();',
    hint: "synchronized block is more efficient than whole method",
  },
  {
    id: "thread_11",
    topicId: "multithreading",
    question: "Use static synchronization for class-level lock.",
    mathSolution: "Static synchronized locks on Class object",
    codeSolution:
      'class Table {\n    static synchronized void printTable(int n) {\n        for(int i=1; i<=5; i++) {\n            System.out.println(n + " * " + i + " = " + (n*i));\n            try { Thread.sleep(400); } catch(Exception e) {}\n        }\n    }\n}\n\n// Both threads lock on Table.class, not different objects\nThread t1 = new Thread(() -> Table.printTable(5));\nThread t2 = new Thread(() -> Table.printTable(10));\n\nt1.start(); t2.start();',
    hint: "Static synchronized locks class, not instance",
  },
  {
    id: "thread_12",
    topicId: "multithreading",
    question: "Deadlock situation and prevention.",
    mathSolution: "Two threads waiting for each other's locks",
    codeSolution:
      'class Resource {\n    final String name;\n    Resource(String n) { name = n; }\n}\n\nResource r1 = new Resource("Resource1");\nResource r2 = new Resource("Resource2");\n\n// This can cause deadlock\nThread t1 = new Thread(() -> {\n    synchronized(r1) {\n        System.out.println("Thread1 locked r1");\n        try { Thread.sleep(100); } catch(Exception e) {}\n        synchronized(r2) {\n            System.out.println("Thread1 locked r2");\n        }\n    }\n});\n\nThread t2 = new Thread(() -> {\n    synchronized(r2) {\n        System.out.println("Thread2 locked r2");\n        try { Thread.sleep(100); } catch(Exception e) {}\n        synchronized(r1) {\n            System.out.println("Thread2 locked r1");\n        }\n    }\n});\n\nt1.start(); t2.start(); // Possible deadlock\n\n// Prevention: Always acquire locks in same order',
    hint: "Avoid circular wait or use tryLock with timeout",
  },

  // INTER-THREAD COMMUNICATION (3)
  {
    id: "thread_13",
    topicId: "multithreading",
    question: "Use wait() and notify() for thread communication.",
    mathSolution: "wait() releases lock, notify() wakes waiting thread",
    codeSolution:
      'class Message {\n    String msg;\n    boolean hasMessage = false;\n    \n    synchronized void send(String message) {\n        while(hasMessage) {\n            try { wait(); } catch(InterruptedException e) {}\n        }\n        msg = message;\n        hasMessage = true;\n        System.out.println("Sent: " + message);\n        notify();\n    }\n    \n    synchronized String receive() {\n        while(!hasMessage) {\n            try { wait(); } catch(InterruptedException e) {}\n        }\n        hasMessage = false;\n        System.out.println("Received: " + msg);\n        notify();\n        return msg;\n    }\n}\n\nMessage msg = new Message();\nThread sender = new Thread(() -> {\n    String[] messages = {"Hello", "World", "Done"};\n    for(String m : messages) {\n        msg.send(m);\n        try { Thread.sleep(1000); } catch(Exception e) {}\n    }\n});\n\nThread receiver = new Thread(() -> {\n    for(int i=0; i<3; i++) {\n        msg.receive();\n    }\n});\n\nsender.start(); receiver.start();',
    hint: "wait() and notify() must be in synchronized block",
  },
  {
    id: "thread_14",
    topicId: "multithreading",
    question: "Producer-Consumer problem using wait/notify.",
    mathSolution: "Classic synchronization problem",
    codeSolution:
      'import java.util.LinkedList;\nimport java.util.Queue;\n\nclass Buffer {\n    Queue<Integer> queue = new LinkedList<>();\n    int capacity = 5;\n    \n    synchronized void produce(int value) throws InterruptedException {\n        while(queue.size() == capacity) {\n            System.out.println("Buffer full, producer waiting");\n            wait();\n        }\n        queue.add(value);\n        System.out.println("Produced: " + value + ", Buffer size: " + queue.size());\n        notify();\n    }\n    \n    synchronized int consume() throws InterruptedException {\n        while(queue.isEmpty()) {\n            System.out.println("Buffer empty, consumer waiting");\n            wait();\n        }\n        int value = queue.poll();\n        System.out.println("Consumed: " + value + ", Buffer size: " + queue.size());\n        notify();\n        return value;\n    }\n}\n\nBuffer buffer = new Buffer();\n\nThread producer = new Thread(() -> {\n    int value = 0;\n    while(true) {\n        try { buffer.produce(value++); Thread.sleep(500); } catch(Exception e) {}\n    }\n});\n\nThread consumer = new Thread(() -> {\n    while(true) {\n        try { buffer.consume(); Thread.sleep(1000); } catch(Exception e) {}\n    }\n});\n\nproducer.start(); consumer.start();',
    hint: "Producer generates, consumer processes",
  },
  {
    id: "thread_15",
    topicId: "multithreading",
    question: "Use notifyAll() to wake all waiting threads.",
    mathSolution: "notifyAll() wakes all threads waiting on object",
    codeSolution:
      'class SharedResource {\n    boolean ready = false;\n    \n    synchronized void waitForReady() {\n        while(!ready) {\n            try { wait(); } catch(InterruptedException e) {}\n        }\n        System.out.println(Thread.currentThread().getName() + " proceeding");\n    }\n    \n    synchronized void setReady() {\n        ready = true;\n        System.out.println("Notifying all");\n        notifyAll(); // wakes all waiting threads\n    }\n}\n\nSharedResource sr = new SharedResource();\n\n// Create multiple waiting threads\nfor(int i=1; i<=3; i++) {\n    Thread t = new Thread(() -> sr.waitForReady(), "Thread-" + i);\n    t.start();\n}\n\nThread.sleep(1000);\nsr.setReady(); // This will wake all three threads',
    hint: "notifyAll() vs notify()",
  },

  // EXECUTOR FRAMEWORK (4)
  {
    id: "thread_16",
    topicId: "multithreading",
    question: "Create thread pool using ExecutorService.",
    mathSolution: "Executors class provides thread pool implementations",
    codeSolution:
      'import java.util.concurrent.*;\n\nExecutorService executor = Executors.newFixedThreadPool(3);\n\nfor(int i=1; i<=5; i++) {\n    final int taskId = i;\n    executor.submit(() -> {\n        System.out.println("Task " + taskId + " running in " + Thread.currentThread().getName());\n        try { Thread.sleep(1000); } catch(Exception e) {}\n    });\n}\n\nexecutor.shutdown(); // No new tasks accepted\nSystem.out.println("All tasks submitted");',
    hint: "Fixed thread pool reuses threads",
  },
  {
    id: "thread_17",
    topicId: "multithreading",
    question: "Get results from threads using Callable and Future.",
    mathSolution: "Callable returns value, Future gets result",
    codeSolution:
      'import java.util.concurrent.*;\n\nExecutorService executor = Executors.newFixedThreadPool(2);\n\nCallable<Integer> task = () -> {\n    System.out.println("Computing sum...");\n    Thread.sleep(2000);\n    int sum = 0;\n    for(int i=1; i<=10; i++) sum += i;\n    return sum;\n};\n\nFuture<Integer> future = executor.submit(task);\n\nSystem.out.println("Doing other work...");\n\ntry {\n    Integer result = future.get(); // blocks until result ready\n    System.out.println("Result: " + result);\n} catch(Exception e) {\n    System.out.println("Error: " + e);\n}\n\nexecutor.shutdown();',
    hint: "Future.get() waits for completion",
  },
  {
    id: "thread_18",
    topicId: "multithreading",
    question: "Use ScheduledExecutorService for periodic tasks.",
    mathSolution: "Schedule tasks to run after delay or periodically",
    codeSolution:
      'import java.util.concurrent.*;\n\nScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);\n\n// Run once after 2 seconds\nscheduler.schedule(() -> {\n    System.out.println("Task executed after 2 seconds");\n}, 2, TimeUnit.SECONDS);\n\n// Run repeatedly every 1 second, starting after 1 second\nScheduledFuture<?> future = scheduler.scheduleAtFixedRate(() -> {\n    System.out.println("Periodic task at " + new java.util.Date());\n}, 1, 1, TimeUnit.SECONDS);\n\n// Let it run for 5 seconds then cancel\nThread.sleep(5000);\nfuture.cancel(false);\nscheduler.shutdown();',
    hint: "scheduleAtFixedRate for periodic execution",
  },
  {
    id: "thread_19",
    topicId: "multithreading",
    question: "Use invokeAll to execute multiple Callables.",
    mathSolution: "invokeAll executes collection of tasks",
    codeSolution:
      'import java.util.concurrent.*;\nimport java.util.*;\n\nExecutorService executor = Executors.newFixedThreadPool(3);\n\nList<Callable<Integer>> tasks = new ArrayList<>();\nfor(int i=1; i<=5; i++) {\n    final int n = i;\n    tasks.add(() -> {\n        Thread.sleep(1000 * n);\n        return n * n;\n    });\n}\n\ntry {\n    List<Future<Integer>> futures = executor.invokeAll(tasks);\n    \n    for(Future<Integer> future : futures) {\n        System.out.println("Result: " + future.get());\n    }\n} catch(Exception e) {\n    System.out.println("Error: " + e);\n}\n\nexecutor.shutdown();',
    hint: "invokeAll returns when all tasks complete",
  },

  // CONCURRENT COLLECTIONS (3)
  {
    id: "thread_20",
    topicId: "multithreading",
    question: "Use ConcurrentHashMap for thread-safe map operations.",
    mathSolution: "ConcurrentHashMap allows concurrent access",
    codeSolution:
      'import java.util.concurrent.*;\n\nConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();\n\n// Multiple threads can safely modify\nRunnable task = () -> {\n    for(int i=0; i<100; i++) {\n        map.merge("count", 1, Integer::sum);\n    }\n};\n\nThread t1 = new Thread(task);\nThread t2 = new Thread(task);\nt1.start(); t2.start();\nt1.join(); t2.join();\n\nSystem.out.println("Final count: " + map.get("count")); // Always 200\n\n// Atomic operations\nmap.putIfAbsent("key", 100);\nmap.computeIfPresent("key", (k,v) -> v + 50);\nSystem.out.println("Computed: " + map.get("key"));',
    hint: "Better than synchronized HashMap",
  },
  {
    id: "thread_21",
    topicId: "multithreading",
    question: "Use CopyOnWriteArrayList for thread-safe iteration.",
    mathSolution: "CopyOnWriteArrayList creates copy on modification",
    codeSolution:
      'import java.util.concurrent.*;\n\nCopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();\nlist.add("A");\nlist.add("B");\nlist.add("C");\n\n// Thread that modifies\nThread modifier = new Thread(() -> {\n    for(int i=0; i<5; i++) {\n        list.add("X" + i);\n        try { Thread.sleep(100); } catch(Exception e) {}\n    }\n});\n\n// Thread that iterates (safe without ConcurrentModificationException)\nThread reader = new Thread(() -> {\n    for(int i=0; i<5; i++) {\n        System.out.println("Iteration " + i + ": " + list);\n        try { Thread.sleep(50); } catch(Exception e) {}\n    }\n});\n\nmodifier.start(); reader.start();',
    hint: "Iterators don't throw ConcurrentModificationException",
  },
  {
    id: "thread_22",
    topicId: "multithreading",
    question: "Use BlockingQueue for producer-consumer.",
    mathSolution: "BlockingQueue handles synchronization automatically",
    codeSolution:
      'import java.util.concurrent.*;\n\nBlockingQueue<Integer> queue = new ArrayBlockingQueue<>(5);\n\n// Producer\nThread producer = new Thread(() -> {\n    int value = 0;\n    while(true) {\n        try {\n            queue.put(value); // blocks if full\n            System.out.println("Produced: " + value++);\n            Thread.sleep(500);\n        } catch(InterruptedException e) {}\n    }\n});\n\n// Consumer\nThread consumer = new Thread(() -> {\n    while(true) {\n        try {\n            int value = queue.take(); // blocks if empty\n            System.out.println("Consumed: " + value);\n            Thread.sleep(1000);\n        } catch(InterruptedException e) {}\n    }\n});\n\nproducer.start(); consumer.start();',
    hint: "put() and take() are blocking methods",
  },

  // THREAD LOCAL AND VOLATILE (2)
  {
    id: "thread_23",
    topicId: "multithreading",
    question: "Use ThreadLocal for thread-specific variables.",
    mathSolution: "Each thread has its own copy",
    codeSolution:
      'class UserContext {\n    private static ThreadLocal<String> currentUser = new ThreadLocal<>();\n    \n    static void setUser(String user) { currentUser.set(user); }\n    static String getUser() { return currentUser.get(); }\n    static void clear() { currentUser.remove(); }\n}\n\nRunnable task = () -> {\n    UserContext.setUser(Thread.currentThread().getName());\n    System.out.println(UserContext.get() + " processing");\n    try { Thread.sleep(1000); } catch(Exception e) {}\n    System.out.println(UserContext.get() + " done");\n    UserContext.clear();\n};\n\nThread t1 = new Thread(task, "User1");\nThread t2 = new Thread(task, "User2");\nt1.start(); t2.start();',
    hint: "Each thread sees its own ThreadLocal value",
  },
  {
    id: "thread_24",
    topicId: "multithreading",
    question: "Use volatile for visibility guarantee.",
    mathSolution: "volatile ensures reads/writes go to main memory",
    codeSolution:
      'class SharedFlag {\n    volatile boolean flag = true;\n    \n    void start() {\n        Thread worker = new Thread(() -> {\n            System.out.println("Worker started");\n            while(flag) {\n                // do work\n                try { Thread.sleep(500); } catch(Exception e) {}\n            }\n            System.out.println("Worker stopped");\n        });\n        worker.start();\n    }\n    \n    void stop() {\n        flag = false; // Without volatile, worker might not see change\n        System.out.println("Stop requested");\n    }\n}\n\nSharedFlag sf = new SharedFlag();\nsf.start();\nThread.sleep(3000);\nsf.stop();',
    hint: "Prevents thread caching, ensures visibility",
  },

  // LOCKS AND ATOMIC VARIABLES (2)
  {
    id: "thread_25",
    topicId: "multithreading",
    question: "Use ReentrantLock for advanced locking.",
    mathSolution: "ReentrantLock provides more control than synchronized",
    codeSolution:
      'import java.util.concurrent.locks.*;\n\nclass Counter {\n    private int count = 0;\n    private ReentrantLock lock = new ReentrantLock();\n    \n    void increment() {\n        lock.lock();\n        try {\n            count++;\n            System.out.println(Thread.currentThread().getName() + ": " + count);\n        } finally {\n            lock.unlock();\n        }\n    }\n    \n    void tryIncrement() {\n        if(lock.tryLock()) {\n            try {\n                count++;\n                System.out.println("Lock acquired by " + Thread.currentThread().getName());\n            } finally {\n                lock.unlock();\n            }\n        } else {\n            System.out.println("Could not acquire lock, doing something else");\n        }\n    }\n}\n\nCounter counter = new Counter();\n\n// Multiple threads accessing\nRunnable task = () -> {\n    for(int i=0; i<3; i++) {\n        counter.increment();\n        try { Thread.sleep(100); } catch(Exception e) {}\n    }\n};\n\nThread t1 = new Thread(task, "Thread-1");\nThread t2 = new Thread(task, "Thread-2");\nt1.start(); t2.start();\n\n// Demonstrate tryLock\ncounter.tryIncrement();',
    hint: "Always unlock in finally block",
  },
);
