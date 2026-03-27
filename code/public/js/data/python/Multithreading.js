QuizData.questions.push(
{
  id: 'py_thread_1',
  topicId: 'py_multithreading',
  question: 'Create and start a simple thread that prints numbers from 1 to 5.',
  mathSolution: 'Use threading.Thread to create and start a thread.',
  codeSolution: 'import threading\nimport time\n\ndef print_numbers():\n    for i in range(1, 6):\n        print(f"Number: {i}")\n        time.sleep(1)\n\n# Create and start thread\nthread = threading.Thread(target=print_numbers)\nthread.start()\n\n# Wait for thread to complete\nthread.join()\nprint("Main thread continues...")',
  hint: 'join() makes main thread wait for child thread to finish.'
},
{
  id: 'py_thread_2',
  topicId: 'py_multithreading',
  question: 'Create multiple threads that run concurrently.',
  mathSolution: 'Start multiple threads to run functions simultaneously.',
  codeSolution: 'import threading\nimport time\n\ndef task(name, delay):\n    for i in range(3):\n        print(f"Task {name}: iteration {i}")\n        time.sleep(delay)\n\n# Create multiple threads\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=task, args=(f"Thread-{i}", i+1))\n    threads.append(t)\n    t.start()\n\n# Wait for all threads\nfor t in threads:\n    t.join()\n\nprint("All threads completed")',
  hint: 'Threads run concurrently; output order may vary.'
},
{
  id: 'py_thread_3',
  topicId: 'py_multithreading',
  question: 'Pass arguments to a thread function.',
  mathSolution: 'Use args parameter to pass tuple of arguments.',
  codeSolution: 'import threading\n\ndef greet(name, greeting="Hello"):\n    print(f"{greeting}, {name}!")\n\n# Pass positional arguments\nt1 = threading.Thread(target=greet, args=("Alice",))\nt1.start()\nt1.join()\n\n# Pass keyword arguments\nimport threading\nt2 = threading.Thread(target=greet, kwargs={"name": "Bob", "greeting": "Hi"})\nt2.start()\nt2.join()',
  hint: 'args takes a tuple, kwargs takes a dictionary.'
},
{
  id: 'py_thread_4',
  topicId: 'py_multithreading',
  question: 'Create a thread by extending Thread class.',
  mathSolution: 'Subclass threading.Thread and override run() method.',
  codeSolution: 'import threading\nimport time\n\nclass MyThread(threading.Thread):\n    def __init__(self, name, delay):\n        super().__init__()\n        self.name = name\n        self.delay = delay\n    \n    def run(self):\n        print(f"Thread {self.name} starting")\n        for i in range(3):\n            print(f"{self.name}: {i}")\n            time.sleep(self.delay)\n        print(f"Thread {self.name} finished")\n\n# Create and start threads\nt1 = MyThread("A", 1)\nt2 = MyThread("B", 0.5)\n\nt1.start()\nt2.start()\nt1.join()\nt2.join()',
  hint: 'run() contains the code to execute in the thread.'
},
{
  id: 'py_thread_5',
  topicId: 'py_multithreading',
  question: 'Check if a thread is alive and get its name.',
  mathSolution: 'Use is_alive() and name attribute to get thread status.',
  codeSolution: 'import threading\nimport time\n\ndef worker():\n    time.sleep(2)\n\nthread = threading.Thread(target=worker, name="WorkerThread")\nprint(f"Before start - Alive: {thread.is_alive()}")\n\nthread.start()\nprint(f"After start - Alive: {thread.is_alive()}")\nprint(f"Thread name: {thread.name}")\n\nthread.join()\nprint(f"After join - Alive: {thread.is_alive()}")',
  hint: 'Thread names can be set for debugging purposes.'
},
{
  id: 'py_thread_6',
  topicId: 'py_multithreading',
  question: 'Use threading.current_thread() to get current thread info.',
  mathSolution: 'current_thread() returns the Thread object for calling thread.',
  codeSolution: 'import threading\nimport time\n\ndef worker():\n    current = threading.current_thread()\n    print(f"Thread name: {current.name}")\n    print(f"Thread ID: {current.ident}")\n    print(f"Is daemon: {current.daemon}")\n    time.sleep(1)\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=worker, name=f"Worker-{i}")\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'ident is thread identifier (may be reused after thread ends).'
},
{
  id: 'py_thread_7',
  topicId: 'py_multithreading',
  question: 'Create a daemon thread that exits when main thread exits.',
  mathSolution: 'Set daemon=True before starting thread.',
  codeSolution: 'import threading\nimport time\n\ndef background_task():\n    while True:\n        print("Background task running...")\n        time.sleep(1)\n\n# Create daemon thread\ndaemon_thread = threading.Thread(target=background_task, daemon=True)\ndaemon_thread.start()\n\n# Main thread does some work\ntime.sleep(3)\nprint("Main thread exiting - daemon thread will be killed")',
  hint: 'Daemon threads are abruptly stopped when all non-daemon threads exit.'
},
{
  id: 'py_thread_8',
  topicId: 'py_multithreading',
  question: 'Use thread synchronization with Lock to avoid race conditions.',
  mathSolution: 'Lock ensures only one thread accesses shared resource at a time.',
  codeSolution: 'import threading\nimport time\n\ncounter = 0\nlock = threading.Lock()\n\ndef increment():\n    global counter\n    for _ in range(100000):\n        lock.acquire()\n        counter += 1\n        lock.release()\n\ndef decrement():\n    global counter\n    for _ in range(100000):\n        with lock:  # Using with statement for automatic release\n            counter -= 1\n\n# Create threads\nt1 = threading.Thread(target=increment)\nt2 = threading.Thread(target=decrement)\n\nt1.start()\nt2.start()\nt1.join()\nt2.join()\n\nprint(f"Final counter: {counter}")  # Should be 0 with proper locking',
  hint: 'Use with lock: for automatic acquire/release.'
},
{
  id: 'py_thread_9',
  topicId: 'py_multithreading',
  question: 'Use RLock for reentrant locking in same thread.',
  mathSolution: 'RLock can be acquired multiple times by same thread without deadlock.',
  codeSolution: 'import threading\n\nlock = threading.RLock()\n\ndef function1():\n    with lock:\n        print("Function1 acquired lock")\n        function2()\n\ndef function2():\n    with lock:\n        print("Function2 acquired lock (reentrant)")\n\n# This works with RLock, would deadlock with regular Lock\nt = threading.Thread(target=function1)\nt.start()\nt.join()',
  hint: 'RLock is useful when a function calls another that needs same lock.'
},
{
  id: 'py_thread_10',
  topicId: 'py_multithreading',
  question: 'Use Semaphore to limit concurrent access to resources.',
  mathSolution: 'Semaphore allows only specified number of threads to access resource.',
  codeSolution: 'import threading\nimport time\n\nsemaphore = threading.Semaphore(2)  # Allow 2 concurrent accesses\n\ndef access_resource(thread_id):\n    print(f"Thread {thread_id} waiting for semaphore")\n    semaphore.acquire()\n    print(f"Thread {thread_id} acquired semaphore")\n    time.sleep(2)  # Simulate work\n    semaphore.release()\n    print(f"Thread {thread_id} released semaphore")\n\nthreads = []\nfor i in range(5):\n    t = threading.Thread(target=access_resource, args=(i,))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'Only 2 threads can run the critical section simultaneously.'
},
{
  id: 'py_thread_11',
  topicId: 'py_multithreading',
  question: 'Use BoundedSemaphore to track releases count.',
  mathSolution: 'BoundedSemaphore raises ValueError if released more than acquired.',
  codeSolution: 'import threading\n\nbounded_sem = threading.BoundedSemaphore(2)\n\ndef worker():\n    bounded_sem.acquire()\n    print("Working...")\n    bounded_sem.release()\n    # bounded_sem.release()  # This would raise ValueError\n\nthreads = [threading.Thread(target=worker) for _ in range(3)]\nfor t in threads:\n    t.start()\nfor t in threads:\n    t.join()',
  hint: 'BoundedSemaphore prevents programming errors by tracking count.'
},
{
  id: 'py_thread_12',
  topicId: 'py_multithreading',
  question: 'Use Event for thread communication (producer-consumer pattern).',
  mathSolution: 'Event allows one thread to signal others.',
  codeSolution: 'import threading\nimport time\n\nevent = threading.Event()\n\ndef waiter():\n    print("Waiter: waiting for event")\n    event.wait()\n    print("Waiter: event received!")\n\ndef setter():\n    print("Setter: sleeping for 2 seconds")\n    time.sleep(2)\n    print("Setter: setting event")\n    event.set()\n\n# Create threads\nwaiter_thread = threading.Thread(target=waiter)\nsetter_thread = threading.Thread(target=setter)\n\nwaiter_thread.start()\nsetter_thread.start()\n\nwaiter_thread.join()\nsetter_thread.join()',
  hint: 'event.set() wakes all threads waiting on event.wait().'
},
{
  id: 'py_thread_13',
  topicId: 'py_multithreading',
  question: 'Use Condition for more complex thread synchronization.',
  mathSolution: 'Condition allows threads to wait for a condition and be notified.',
  codeSolution: 'import threading\nimport time\n\ncondition = threading.Condition()\nitems = []\n\ndef producer():\n    for i in range(5):\n        with condition:\n            items.append(f"Item-{i}")\n            print(f"Produced Item-{i}")\n            condition.notify()  # Notify one waiting thread\n        time.sleep(1)\n\ndef consumer():\n    while True:\n        with condition:\n            while not items:\n                print("Consumer waiting...")\n                condition.wait()\n            item = items.pop(0)\n            print(f"Consumed {item}")\n            if item == "Item-4":\n                break\n\n# Create threads\nproducer_thread = threading.Thread(target=producer)\nconsumer_thread = threading.Thread(target=consumer)\n\nproducer_thread.start()\nconsumer_thread.start()\n\nproducer_thread.join()\nconsumer_thread.join()',
  hint: 'wait() releases lock, notify() wakes one waiting thread.'
},
{
  id: 'py_thread_14',
  topicId: 'py_multithreading',
  question: 'Use Queue for thread-safe data exchange.',
  mathSolution: 'Queue handles all synchronization automatically.',
  codeSolution: 'import threading\nimport queue\nimport time\n\nq = queue.Queue(maxsize=3)\n\ndef producer():\n    for i in range(5):\n        q.put(f"Item-{i}")\n        print(f"Produced Item-{i}")\n        time.sleep(1)\n\ndef consumer():\n    while True:\n        item = q.get()\n        if item is None:\n            break\n        print(f"Consumed {item}")\n        q.task_done()\n        time.sleep(2)\n\n# Create threads\nproducer_thread = threading.Thread(target=producer)\nconsumer_thread = threading.Thread(target=consumer)\n\nproducer_thread.start()\nconsumer_thread.start()\n\nproducer_thread.join()\nq.put(None)  # Signal consumer to stop\nconsumer_thread.join()',
  hint: 'Queue is thread-safe and blocks on put/get when full/empty.'
},
{
  id: 'py_thread_15',
  topicId: 'py_multithreading',
  question: 'Use threading.local() for thread-local data.',
  mathSolution: 'threading.local() creates data unique to each thread.',
  codeSolution: 'import threading\nimport random\n\nthread_local = threading.local()\n\ndef set_data():\n    thread_local.value = random.randint(1, 100)\n    print(f"Thread {threading.current_thread().name} set value: {thread_local.value}")\n\ndef get_data():\n    print(f"Thread {threading.current_thread().name} has value: {thread_local.value}")\n\ndef worker():\n    set_data()\n    get_data()\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=worker, name=f"Thread-{i}")\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'Each thread has its own copy of thread_local variables.'
},
{
  id: 'py_thread_16',
  topicId: 'py_multithreading',
  question: 'Use threading.Timer for delayed execution.',
  mathSolution: 'Timer runs function after specified delay.',
  codeSolution: 'import threading\nimport time\n\ndef delayed_print(message):\n    print(f"Delayed message: {message}")\n\nprint("Starting timer...")\ntimer = threading.Timer(3.0, delayed_print, args=("Hello after 3 seconds",))\ntimer.start()\n\n# Timer can be cancelled before it executes\n# timer.cancel()  # Uncomment to cancel\n\ntime.sleep(4)  # Wait longer than timer',
  hint: 'Timer runs only once; use loop for periodic execution.'
},
{
  id: 'py_thread_17',
  topicId: 'py_multithreading',
  question: 'Use Barrier to synchronize multiple threads at a point.',
  mathSolution: 'Barrier makes threads wait until all have reached the barrier.',
  codeSolution: 'import threading\nimport time\n\nbarrier = threading.Barrier(3)  # 3 threads must reach barrier\n\ndef worker(name):\n    print(f"{name} starting phase 1")\n    time.sleep(2)\n    print(f"{name} reached barrier")\n    barrier.wait()\n    print(f"{name} starting phase 2")\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=worker, args=(f"Worker-{i}",))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'All threads continue together after barrier is reached.'
},
{
  id: 'py_thread_18',
  topicId: 'py_multithreading',
  question: 'Handle thread exceptions and check thread status.',
  mathSolution: 'Exceptions in threads don\'t affect main thread automatically.',
  codeSolution: 'import threading\nimport time\n\ndef faulty_function():\n    time.sleep(1)\n    raise ValueError("Something went wrong in thread")\n\ndef worker():\n    try:\n        faulty_function()\n    except Exception as e:\n        print(f"Caught exception in thread: {e}")\n\nthread = threading.Thread(target=worker)\nthread.start()\nthread.join()\nprint("Main thread continues")',
  hint: 'Handle exceptions inside thread to prevent silent failures.'
},
{
  id: 'py_thread_19',
  topicId: 'py_multithreading',
  question: 'Get return value from a thread (using Queue).',
  mathSolution: 'Use Queue to pass results back from thread.',
  codeSolution: 'import threading\nimport queue\n\ndef worker(input_queue, output_queue):\n    while True:\n        item = input_queue.get()\n        if item is None:\n            break\n        result = item * item  # Square the number\n        output_queue.put(result)\n\ninput_q = queue.Queue()\noutput_q = queue.Queue()\n\n# Start worker thread\nthread = threading.Thread(target=worker, args=(input_q, output_q))\nthread.start()\n\n# Send work\nfor i in range(5):\n    input_q.put(i)\n\n# Signal thread to stop\ninput_q.put(None)\n\n# Collect results\nresults = []\nwhile not output_q.empty():\n    results.append(output_q.get())\n\nthread.join()\nprint(f"Results: {results}")',
  hint: 'Queue is the standard way to get results from threads.'
},
{
  id: 'py_thread_20',
  topicId: 'py_multithreading',
  question: 'Use threading.active_count() to count active threads.',
  mathSolution: 'active_count() returns number of Thread objects alive.',
  codeSolution: 'import threading\nimport time\n\ndef worker():\n    time.sleep(2)\n\nprint(f"Active threads before: {threading.active_count()}")\n\nthreads = []\nfor i in range(5):\n    t = threading.Thread(target=worker)\n    threads.append(t)\n    t.start()\n\nprint(f"Active threads during: {threading.active_count()}")\n\nfor t in threads:\n    t.join()\n\nprint(f"Active threads after: {threading.active_count()}")',
  hint: 'Main thread is always counted.'
},
{
  id: 'py_thread_21',
  topicId: 'py_multithreading',
  question: 'Use threading.enumerate() to get list of all threads.',
  mathSolution: 'enumerate() returns list of all Thread objects alive.',
  codeSolution: 'import threading\nimport time\n\ndef worker():\n    time.sleep(2)\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=worker, name=f"Worker-{i}")\n    threads.append(t)\n    t.start()\n\n# Get list of all threads\nall_threads = threading.enumerate()\nprint("All active threads:")\nfor thread in all_threads:\n    print(f"  {thread.name} (daemon: {thread.daemon})")\n\nfor t in threads:\n    t.join()',
  hint: 'List includes main thread and any other threads.'
},
{
  id: 'py_thread_22',
  topicId: 'py_multithreading',
  question: 'Implement a thread pool manually.',
  mathSolution: 'Create fixed number of worker threads that process tasks.',
  codeSolution: 'import threading\nimport queue\nimport time\n\nclass ThreadPool:\n    def __init__(self, num_threads):\n        self.tasks = queue.Queue()\n        self.threads = []\n        for _ in range(num_threads):\n            t = threading.Thread(target=self.worker)\n            t.start()\n            self.threads.append(t)\n    \n    def worker(self):\n        while True:\n            func, args, kwargs = self.tasks.get()\n            if func is None:\n                break\n            try:\n                func(*args, **kwargs)\n            except Exception as e:\n                print(f"Error: {e}")\n            self.tasks.task_done()\n    \n    def submit(self, func, *args, **kwargs):\n        self.tasks.put((func, args, kwargs))\n    \n    def shutdown(self):\n        for _ in self.threads:\n            self.tasks.put((None, None, None))\n        for t in self.threads:\n            t.join()\n\n# Usage\ndef task(n):\n    print(f"Processing {n}")\n    time.sleep(1)\n\npool = ThreadPool(3)\nfor i in range(10):\n    pool.submit(task, i)\n\npool.shutdown()',
  hint: 'Thread pool reuses threads to avoid creation overhead.'
},
{
  id: 'py_thread_23',
  topicId: 'py_multithreading',
  question: 'Use concurrent.futures.ThreadPoolExecutor for high-level threading.',
  mathSolution: 'ThreadPoolExecutor provides simple interface for thread pools.',
  codeSolution: 'from concurrent.futures import ThreadPoolExecutor\nimport time\n\ndef task(n):\n    print(f"Task {n} starting")\n    time.sleep(2)\n    print(f"Task {n} completed")\n    return n * n\n\n# Using ThreadPoolExecutor\nwith ThreadPoolExecutor(max_workers=3) as executor:\n    # Submit individual tasks\n    futures = [executor.submit(task, i) for i in range(5)]\n    \n    # Get results\n    for future in futures:\n        print(f"Result: {future.result()}")',
  hint: 'Executor handles thread creation and management automatically.'
},
{
  id: 'py_thread_24',
  topicId: 'py_multithreading',
  question: 'Use ThreadPoolExecutor.map() for easy parallel mapping.',
  mathSolution: 'map() applies function to iterable elements in parallel.',
  codeSolution: 'from concurrent.futures import ThreadPoolExecutor\nimport time\n\ndef square(n):\n    time.sleep(1)\n    return n * n\n\nnumbers = [1, 2, 3, 4, 5]\n\nwith ThreadPoolExecutor(max_workers=3) as executor:\n    # map returns results in order\n    results = list(executor.map(square, numbers))\n\nprint(f"Squares: {results}")  # [1, 4, 9, 16, 25]',
  hint: 'map() maintains order of results matching input order.'
},
{
  id: 'py_thread_25',
  topicId: 'py_multithreading',
  question: 'Handle exceptions in ThreadPoolExecutor.',
  mathSolution: 'Exceptions are raised when calling result() on future.',
  codeSolution: 'from concurrent.futures import ThreadPoolExecutor\n\ndef faulty_task(x):\n    if x == 3:\n        raise ValueError("Bad value!")\n    return x * 2\n\nwith ThreadPoolExecutor(max_workers=3) as executor:\n    futures = [executor.submit(faulty_task, i) for i in range(5)]\n    \n    for future in futures:\n        try:\n            result = future.result()\n            print(f"Result: {result}")\n        except Exception as e:\n            print(f"Task failed: {e}")',
  hint: 'Exception in thread is captured and raised when result() is called.'
},
{
  id: 'py_thread_26',
  topicId: 'py_multithreading',
  question: 'Set thread timeout using Future.timeout.',
  mathSolution: 'result(timeout) raises TimeoutError if task takes too long.',
  codeSolution: 'from concurrent.futures import ThreadPoolExecutor, TimeoutError\nimport time\n\ndef slow_task():\n    time.sleep(5)\n    return "Done"\n\nwith ThreadPoolExecutor() as executor:\n    future = executor.submit(slow_task)\n    \n    try:\n        result = future.result(timeout=2)\n        print(result)\n    except TimeoutError:\n        print("Task timed out")\n        future.cancel()',
  hint: 'Cancel task if timeout occurs to free resources.'
},
{
  id: 'py_thread_27',
  topicId: 'py_multithreading',
  question: 'Use threading.Event to implement a simple timeout.',
  mathSolution: 'event.wait(timeout) returns False if timeout occurs.',
  codeSolution: 'import threading\nimport time\n\ndef worker(event):\n    print("Worker started")\n    time.sleep(3)\n    event.set()\n    print("Worker completed")\n\nevent = threading.Event()\nthread = threading.Thread(target=worker, args=(event,))\nthread.start()\n\n# Wait with timeout\nif event.wait(timeout=2):\n    print("Worker finished in time")\nelse:\n    print("Worker timed out")\n\nthread.join()',
  hint: 'event.wait() returns True if event is set, False on timeout.'
},
{
  id: 'py_thread_28',
  topicId: 'py_multithreading',
  question: 'Implement reader-writer problem using Lock.',
  mathSolution: 'Use locks to allow multiple readers or single writer.',
  codeSolution: 'import threading\nimport time\n\nclass ReadWriteLock:\n    def __init__(self):\n        self.read_lock = threading.Lock()\n        self.write_lock = threading.Lock()\n        self.readers = 0\n    \n    def acquire_read(self):\n        with self.read_lock:\n            self.readers += 1\n            if self.readers == 1:\n                self.write_lock.acquire()\n    \n    def release_read(self):\n        with self.read_lock:\n            self.readers -= 1\n            if self.readers == 0:\n                self.write_lock.release()\n    \n    def acquire_write(self):\n        self.write_lock.acquire()\n    \n    def release_write(self):\n        self.write_lock.release()\n\nrw_lock = ReadWriteLock()\ndata = []\n\ndef reader(reader_id):\n    rw_lock.acquire_read()\n    print(f"Reader {reader_id} reading: {data}")\n    time.sleep(1)\n    rw_lock.release_read()\n\ndef writer(writer_id, value):\n    rw_lock.acquire_write()\n    print(f"Writer {writer_id} writing")\n    data.append(value)\n    time.sleep(1)\n    rw_lock.release_write()\n\n# Create threads\nthreads = []\nfor i in range(3):\n    threads.append(threading.Thread(target=reader, args=(i,)))\nfor i in range(2):\n    threads.append(threading.Thread(target=writer, args=(i, i)))\n\nfor t in threads:\n    t.start()\nfor t in threads:\n    t.join()',
  hint: 'Multiple readers can read simultaneously, writers get exclusive access.'
},
{
  id: 'py_thread_29',
  topicId: 'py_multithreading',
  question: 'Implement a rate limiter using threading.Semaphore.',
  mathSolution: 'Semaphore with timed releases can limit operation rate.',
  codeSolution: 'import threading\nimport time\n\nclass RateLimiter:\n    def __init__(self, max_calls, period):\n        self.semaphore = threading.Semaphore(max_calls)\n        self.period = period\n    \n    def acquire(self):\n        self.semaphore.acquire()\n        # Schedule release after period\n        threading.Timer(self.period, self.semaphore.release).start()\n\nrate_limiter = RateLimiter(2, 5)  # 2 calls per 5 seconds\n\ndef api_call(call_id):\n    rate_limiter.acquire()\n    print(f"API call {call_id} at {time.strftime %H:%M:%S \n\n# Make multiple calls\nfor i in range(5):\n    threading.Thread(target=api_call, args=(i,)).start()\n    time.sleep(1)',
  hint: 'Rate limiting prevents overwhelming external services.'
},
{
  id: 'py_thread_30',
  topicId: 'py_multithreading',
  question: 'Use threading.Barrier for phased computation.',
  mathSolution: 'Barrier synchronizes threads at multiple phases.',
  codeSolution: 'import threading\nimport time\n\nbarrier = threading.Barrier(3)\n\ndef phase_worker(name):\n    for phase in range(1, 4):\n        print(f"{name} working on phase {phase}")\n        time.sleep(2)\n        print(f"{name} reached barrier for phase {phase}")\n        barrier.wait()\n        print(f"{name} starting phase {phase+1 if phase < 3 else completed")\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=phase_worker, args=(f"Worker-{i}",))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'Barrier ensures all threads complete current phase before next.'
},
{
  id: 'py_thread_31',
  topicId: 'py_multithreading',
  question: 'Implement a thread-safe counter using Lock.',
  mathSolution: 'Lock ensures atomic increment/decrement operations.',
  codeSolution: 'import threading\n\nclass ThreadSafeCounter:\n    def __init__(self):\n        self.value = 0\n        self.lock = threading.Lock()\n    \n    def increment(self):\n        with self.lock:\n            self.value += 1\n    \n    def decrement(self):\n        with self.lock:\n            self.value -= 1\n    \n    def get_value(self):\n        with self.lock:\n            return self.value\n\ncounter = ThreadSafeCounter()\n\ndef worker(inc_count, dec_count):\n    for _ in range(inc_count):\n        counter.increment()\n    for _ in range(dec_count):\n        counter.decrement()\n\nthreads = []\nfor i in range(10):\n    t = threading.Thread(target=worker, args=(1000, 500))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()\n\nprint(f"Final counter value: {counter.get_value()}")',
  hint: 'Without lock, race conditions would cause incorrect results.'
},
{
  id: 'py_thread_32',
  topicId: 'py_multithreading',
  question: 'Use threading.Event to implement a simple barrier.',
  mathSolution: 'Multiple events can simulate barrier behavior.',
  codeSolution: 'import threading\nimport time\n\ndef worker(name, events):\n    print(f"{name} working...")\n    time.sleep(2)\n    # Signal completion\n    events[name].set()\n    # Wait for others\n    for other_name, event in events.items():\n        if other_name != name:\n            event.wait()\n    print(f"{name} continuing after all finished")\n\nthread_names = ["A", "B", "C"]\nevents = {name: threading.Event() for name in thread_names}\n\nthreads = []\nfor name in thread_names:\n    t = threading.Thread(target=worker, args=(name, events))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'This is a custom implementation of barrier using events.'
},
{
  id: 'py_thread_33',
  topicId: 'py_multithreading',
  question: 'Detect and avoid deadlock with timeout.',
  mathSolution: 'Use timeout in lock acquisition to detect potential deadlock.',
  codeSolution: 'import threading\nimport time\n\nlock1 = threading.Lock()\nlock2 = threading.Lock()\n\ndef worker1():\n    for _ in range(3):\n        if lock1.acquire(timeout=1):\n            print("Worker1 acquired lock1")\n            time.sleep(0.1)\n            if lock2.acquire(timeout=1):\n                print("Worker1 acquired lock2")\n                lock2.release()\n            else:\n                print("Worker1 timed out on lock2")\n            lock1.release()\n        time.sleep(0.1)\n\ndef worker2():\n    for _ in range(3):\n        if lock2.acquire(timeout=1):\n            print("Worker2 acquired lock2")\n            time.sleep(0.1)\n            if lock1.acquire(timeout=1):\n                print("Worker2 acquired lock1")\n                lock1.release()\n            else:\n                print("Worker2 timed out on lock1")\n            lock2.release()\n        time.sleep(0.1)\n\nt1 = threading.Thread(target=worker1)\nt2 = threading.Thread(target=worker2)\n\nt1.start()\nt2.start()\n\nt1.join()\nt2.join()',
  hint: 'Timeout prevents indefinite blocking in deadlock situations.'
},
{
  id: 'py_thread_34',
  topicId: 'py_multithreading',
  question: 'Use threading.settrace() to trace thread execution.',
  mathSolution: 'settrace() sets trace function for all threads started.',
  codeSolution: 'import threading\nimport sys\n\ndef trace_function(frame, event, arg):\n    if event == "line":\n        print(f"Thread {threading.current_thread().name} executing line {frame.f_lineno}")\n    return trace_function\n\n# Set trace for all threads\nthreading.settrace(trace_function)\n\ndef worker():\n    x = 1\n    y = 2\n    z = x + y\n    print(f"Result: {z}")\n\nthread = threading.Thread(target=worker, name="Worker")\nthread.start()\nthread.join()\n\n# Disable tracing\nthreading.settrace(None)',
  hint: 'Tracing is useful for debugging but slows execution.'
},
{
  id: 'py_thread_35',
  topicId: 'py_multithreading',
  question: 'Implement thread-safe singleton pattern.',
  mathSolution: 'Use lock to ensure only one instance is created.',
  codeSolution: 'import threading\n\nclass Singleton:\n    _instance = None\n    _lock = threading.Lock()\n    \n    def __new__(cls):\n        if cls._instance is None:\n            with cls._lock:\n                if cls._instance is None:\n                    cls._instance = super().__new__(cls)\n        return cls._instance\n    \n    def __init__(self):\n        self.value = 0\n\ndef worker():\n    singleton = Singleton()\n    singleton.value += 1\n    print(f"Thread {threading.current_thread().name}: {singleton.value}")\n\nthreads = []\nfor i in range(5):\n    t = threading.Thread(target=worker, name=f"Thread-{i}")\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'Double-checked locking ensures thread-safe lazy initialization.'
},
{
  id: 'py_thread_36',
  topicId: 'py_multithreading',
  question: 'Use threading.main_thread() to get main thread reference.',
  mathSolution: 'main_thread() returns the main thread object.',
  codeSolution: 'import threading\nimport time\n\ndef worker():\n    main = threading.main_thread()\n    print(f"Worker thread: {threading.current_thread().name}")\n    print(f"Main thread: {main.name}")\n    print(f"Is main thread alive? {main.is_alive()}")\n\nthread = threading.Thread(target=worker)\nthread.start()\nthread.join()',
  hint: 'Useful for checking main thread status from child threads.'
},
{
  id: 'py_thread_37',
  topicId: 'py_multithreading',
  question: 'Implement a thread-safe bounded buffer.',
  mathSolution: 'Use Condition to coordinate producer and consumer.',
  codeSolution: 'import threading\nimport time\n\nclass BoundedBuffer:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.buffer = []\n        self.condition = threading.Condition()\n    \n    def put(self, item):\n        with self.condition:\n            while len(self.buffer) >= self.capacity:\n                print("Buffer full, producer waiting")\n                self.condition.wait()\n            self.buffer.append(item)\n            print(f"Produced: {item}")\n            self.condition.notify()\n    \n    def get(self):\n        with self.condition:\n            while not self.buffer:\n                print("Buffer empty, consumer waiting")\n                self.condition.wait()\n            item = self.buffer.pop(0)\n            print(f"Consumed: {item}")\n            self.condition.notify()\n            return item\n\nbuffer = BoundedBuffer(2)\n\ndef producer():\n    for i in range(5):\n        buffer.put(i)\n        time.sleep(0.5)\n\ndef consumer():\n    for _ in range(5):\n        buffer.get()\n        time.sleep(1)\n\nproducer_thread = threading.Thread(target=producer)\nconsumer_thread = threading.Thread(target=consumer)\n\nproducer_thread.start()\nconsumer_thread.start()\n\nproducer_thread.join()\nconsumer_thread.join()',
  hint: 'Condition.wait() releases lock and waits for notification.'
},
{
  id: 'py_thread_38',
  topicId: 'py_multithreading',
  question: 'Use threading.Timer for periodic task execution.',
  mathSolution: 'Timer can reschedule itself for periodic execution.',
  codeSolution: 'import threading\nimport time\n\nclass PeriodicTask:\n    def __init__(self, interval, function, *args, **kwargs):\n        self.interval = interval\n        self.function = function\n        self.args = args\n        self.kwargs = kwargs\n        self.timer = None\n        self.running = False\n    \n    def _run(self):\n        if self.running:\n            self.function(*self.args, **self.kwargs)\n            self.timer = threading.Timer(self.interval, self._run)\n            self.timer.start()\n    \n    def start(self):\n        self.running = True\n        self._run()\n    \n    def stop(self):\n        self.running = False\n        if self.timer:\n            self.timer.cancel()\n\ndef print_time():\n    print(f"Current time: {time.strftime %H:%M:%S )\n\ntask = PeriodicTask(2, print_time)\ntask.start()\n\n# Run for 10 seconds\ntime.sleep(10)\ntask.stop()',
  hint: 'Timer creates new thread for each execution.'
},
{
  id: 'py_thread_39',
  topicId: 'py_multithreading',
  question: 'Measure thread execution time.',
  mathSolution: 'Use time.perf_counter() to measure thread duration.',
  codeSolution: 'import threading\nimport time\n\ndef worker(thread_id):\n    start = time.perf_counter()\n    print(f"Thread {thread_id} starting")\n    time.sleep(2)\n    end = time.perf_counter()\n    print(f"Thread {thread_id} took {end - start:.2f} seconds")\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=worker, args=(i,))\n    threads.append(t)\n    t.start()\n\noverall_start = time.perf_counter()\nfor t in threads:\n    t.join()\noverall_end = time.perf_counter()\n\nprint(f"Total execution time: {overall_end - overall_start:.2f} seconds")',
  hint: 'Total time may be less than sum of thread times due to concurrency.'
},
{
  id: 'py_thread_40',
  topicId: 'py_multithreading',
  question: 'Implement thread-safe lazy initialization.',
  mathSolution: 'Use Lock to ensure initialization happens once.',
  codeSolution: 'import threading\n\nclass LazyInit:\n    def __init__(self):\n        self._data = None\n        self._lock = threading.Lock()\n    \n    @property\n    def data(self):\n        if self._data is None:\n            with self._lock:\n                if self._data is None:\n                    print("Initializing data...")\n                    self._data = self._expensive_initialization()\n        return self._data\n    \n    def _expensive_initialization(self):\n        # Simulate expensive operation\n        import time\n        time.sleep(2)\n        return [i for i in range(100)]\n\nlazy = LazyInit()\n\ndef worker():\n    data = lazy.data\n    print(f"Thread {threading.current_thread().name} got data length: {len(data)}")\n\nthreads = []\nfor i in range(5):\n    t = threading.Thread(target=worker, name=f"Thread-{i}")\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'Only one thread performs initialization, others wait and reuse.'
},
{
  id: 'py_thread_41',
  topicId: 'py_multithreading',
  question: 'Use threading.excepthook to handle uncaught thread exceptions.',
  mathSolution: 'excepthook handles exceptions that escape thread run().',
  codeSolution: 'import threading\nimport sys\n\ndef custom_excepthook(args):\n    print(f"Thread {args.thread.name} raised exception:")\n    print(f"  Type: {args.exc_type}")\n    print(f"  Value: {args.exc_value}")\n    print(f"  Traceback: {args.exc_traceback}")\n\n# Set custom exception hook\nthreading.excepthook = custom_excepthook\n\ndef faulty_worker():\n    raise ValueError("Something went wrong!")\n\nthread = threading.Thread(target=faulty_worker, name="FaultyThread")\nthread.start()\nthread.join()',
  hint: 'excepthook is called for uncaught exceptions in threads.'
},
{
  id: 'py_thread_42',
  topicId: 'py_multithreading',
  question: 'Implement a thread-safe priority queue.',
  mathSolution: 'Use queue.PriorityQueue for priority-based processing.',
  codeSolution: 'import threading\nimport queue\nimport time\n\npq = queue.PriorityQueue()\n\ndef producer():\n    tasks = [(3, "Low priority"), (1, "High priority"), (2, "Medium priority")]\n    for priority, task in tasks:\n        pq.put((priority, task))\n        print(f"Added: {task} (priority {priority})")\n        time.sleep(1)\n\ndef consumer():\n    while True:\n        try:\n            priority, task = pq.get(timeout=5)\n            print(f"Processing: {task} (priority {priority})")\n            time.sleep(2)\n            pq.task_done()\n        except queue.Empty:\n            break\n\nproducer_thread = threading.Thread(target=producer)\nconsumer_thread = threading.Thread(target=consumer)\n\nproducer_thread.start()\nconsumer_thread.start()\n\nproducer_thread.join()\nconsumer_thread.join()',
  hint: 'Items with lower priority number are retrieved first.'
},
{
  id: 'py_thread_43',
  topicId: 'py_multithreading',
  question: 'Use threading.Condition to implement a countdown latch.',
  mathSolution: 'Condition can wait for count to reach zero.',
  codeSolution: 'import threading\nimport time\n\nclass CountDownLatch:\n    def __init__(self, count):\n        self.count = count\n        self.condition = threading.Condition()\n    \n    def count_down(self):\n        with self.condition:\n            self.count -= 1\n            if self.count <= 0:\n                self.condition.notify_all()\n    \n    def await_latch(self):\n        with self.condition:\n            while self.count > 0:\n                self.condition.wait()\n\nlatch = CountDownLatch(3)\n\ndef worker(name):\n    print(f"{name} working...")\n    time.sleep(2)\n    print(f"{name} finished")\n    latch.count_down()\n\ndef coordinator():\n    print("Coordinator waiting for workers")\n    latch.await_latch()\n    print("All workers done, coordinator proceeds")\n\nworkers = []\nfor i in range(3):\n    t = threading.Thread(target=worker, args=(f"Worker-{i}",))\n    workers.append(t)\n    t.start()\n\ncoord = threading.Thread(target=coordinator)\ncoord.start()\n\nfor t in workers:\n    t.join()\ncoord.join()',
  hint: 'Latch waits for multiple events before proceeding.'
},
{
  id: 'py_thread_44',
  topicId: 'py_multithreading',
  question: 'Implement a thread-safe LRU cache.',
  mathSolution: 'Use OrderedDict with lock for thread-safe caching.',
  codeSolution: 'import threading\nfrom collections import OrderedDict\nimport time\n\nclass ThreadSafeLRUCache:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.cache = OrderedDict()\n        self.lock = threading.Lock()\n    \n    def get(self, key):\n        with self.lock:\n            if key not in self.cache:\n                return None\n            self.cache.move_to_end(key)\n            return self.cache[key]\n    \n    def put(self, key, value):\n        with self.lock:\n            if key in self.cache:\n                self.cache.move_to_end(key)\n            self.cache[key] = value\n            if len(self.cache) > self.capacity:\n                self.cache.popitem(last=False)\n\ncache = ThreadSafeLRUCache(2)\n\ndef worker(thread_id):\n    cache.put(f"key{thread_id}", thread_id)\n    print(f"Thread {thread_id} put key{thread_id}")\n    time.sleep(0.5)\n    value = cache.get(f"key{thread_id}")\n    print(f"Thread {thread_id} got: {value}")\n\nthreads = []\nfor i in range(5):\n    t = threading.Thread(target=worker, args=(i,))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'Lock ensures cache operations are atomic and thread-safe.'
},
{
  id: 'py_thread_45',
  topicId: 'py_multithreading',
  question: 'Use threading.Barrier with timeout to handle slow threads.',
  mathSolution: 'Barrier.wait(timeout) raises BrokenBarrierError if timeout occurs.',
  codeSolution: 'import threading\nimport time\n\nbarrier = threading.Barrier(3, timeout=5)\n\ndef worker(name, delay):\n    print(f"{name} starting")\n    time.sleep(delay)\n    try:\n        barrier.wait()\n        print(f"{name} passed barrier")\n    except threading.BrokenBarrierError:\n        print(f"{name} barrier broken due to timeout")\n\nthreads = [\n    threading.Thread(target=worker, args=("Fast", 1)),\n    threading.Thread(target=worker, args=("Medium", 2)),\n    threading.Thread(target=worker, args=("Slow", 6))  # This will cause timeout\n]\n\nfor t in threads:\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'Barrier becomes broken if any thread times out.'
},
{
  id: 'py_thread_46',
  topicId: 'py_multithreading',
  question: 'Implement a thread-safe object pool.',
  mathSolution: 'Use Queue to manage pool of reusable objects.',
  codeSolution: 'import threading\nimport queue\nimport time\n\nclass ConnectionPool:\n    def __init__(self, max_connections):\n        self.pool = queue.Queue(maxsize=max_connections)\n        for i in range(max_connections):\n            self.pool.put(f"Connection-{i}")\n    \n    def acquire(self, timeout=None):\n        try:\n            return self.pool.get(timeout=timeout)\n        except queue.Empty:\n            return None\n    \n    def release(self, connection):\n        self.pool.put(connection)\n\npool = ConnectionPool(2)\n\ndef worker(thread_id):\n    conn = pool.acquire(timeout=2)\n    if conn:\n        print(f"Thread {thread_id} acquired {conn}")\n        time.sleep(2)  # Use connection\n        pool.release(conn)\n        print(f"Thread {thread_id} released {conn}")\n    else:\n        print(f"Thread {thread_id} timed out waiting for connection")\n\nthreads = []\nfor i in range(4):\n    t = threading.Thread(target=worker, args=(i,))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'Object pool reduces overhead of creating new objects.'
},
{
  id: 'py_thread_47',
  topicId: 'py_multithreading',
  question: 'Use threading.semaphore to implement a parking lot simulation.',
  mathSolution: 'Semaphore tracks available spaces in parking lot.',
  codeSolution: 'import threading\nimport time\nimport random\n\nclass ParkingLot:\n    def __init__(self, spaces):\n        self.semaphore = threading.Semaphore(spaces)\n        self.spaces = spaces\n    \n    def enter(self, car_id):\n        print(f"Car {car_id} waiting for parking space")\n        self.semaphore.acquire()\n        print(f"Car {car_id} parked. Available spaces: {self.spaces - self.semaphore._value - 1}")\n    \n    def exit(self, car_id):\n        self.semaphore.release()\n        print(f"Car {car_id} left. Available spaces: {self.spaces - self.semaphore._value}")\n\ndef car(parking, car_id):\n    parking.enter(car_id)\n    stay_time = random.randint(1, 3)\n    time.sleep(stay_time)\n    parking.exit(car_id)\n\nparking = ParkingLot(3)\n\ncars = []\nfor i in range(10):\n    t = threading.Thread(target=car, args=(parking, i))\n    cars.append(t)\n    t.start()\n    time.sleep(random.random())  # Random arrival times\n\nfor t in cars:\n    t.join()',
  hint: 'Semaphore tracks available resources (parking spaces).'
},
{
  id: 'py_thread_48',
  topicId: 'py_multithreading',
  question: 'Use threading.Event for graceful shutdown of threads.',
  mathSolution: 'Event signals threads to stop their work.',
  codeSolution: 'import threading\nimport time\n\nclass Worker:\n    def __init__(self):\n        self.stop_event = threading.Event()\n    \n    def run(self):\n        while not self.stop_event.is_set():\n            print("Working...")\n            time.sleep(1)\n        print("Worker shutting down gracefully")\n    \n    def stop(self):\n        self.stop_event.set()\n\nworker = Worker()\nthread = threading.Thread(target=worker.run)\nthread.start()\n\ntime.sleep(5)\nprint("Main thread requesting shutdown")\nworker.stop()\nthread.join()\nprint("Main thread exiting")',
  hint: 'Event provides clean way to signal threads to stop.'
},
{
  id: 'py_thread_49',
  topicId: 'py_multithreading',
  question: 'Implement a thread-safe rate limiter using token bucket algorithm.',
  mathSolution: 'Tokens are added at fixed rate, consumed per request.',
  codeSolution: 'import threading\nimport time\n\nclass TokenBucket:\n    def __init__(self, rate, capacity):\n        self.rate = rate\n        self.capacity = capacity\n        self.tokens = capacity\n        self.lock = threading.Lock()\n        self.condition = threading.Condition(self.lock)\n        threading.Thread(target=self._refill, daemon=True).start()\n    \n    def _refill(self):\n        while True:\n            time.sleep(1)\n            with self.lock:\n                self.tokens = min(self.capacity, self.tokens + self.rate)\n                self.condition.notify_all()\n    \n    def acquire(self, tokens=1, timeout=None):\n        with self.condition:\n            while self.tokens < tokens:\n                if not self.condition.wait(timeout=timeout):\n                    return False  # Timeout\n            self.tokens -= tokens\n            return True\n\nbucket = TokenBucket(rate=2, capacity=5)  # 2 tokens per second, max 5\n\ndef api_request(request_id):\n    if bucket.acquire(timeout=3):\n        print(f"Request {request_id} processed at {time.strftime( %H:%M:%S) \n    else:\n        print(f"Request {request_id} timed out")\n\n# Simulate requests\nfor i in range(10):\n    threading.Thread(target=api_request, args=(i,)).start()\n    time.sleep(0.3)',
  hint: 'Token bucket allows bursts while maintaining average rate.'
},
{
  id: 'py_thread_50',
  topicId: 'py_multithreading',
  question: 'Implement a thread pool with work stealing algorithm.',
  mathSolution: 'Idle threads steal work from busy threads queues.',
  codeSolution: 'import threading\nimport queue\nimport time\nimport random\n\nclass WorkStealingPool:\n    def __init__(self, num_threads):\n        self.queues = [queue.Queue() for _ in range(num_threads)]\n        self.threads = []\n        for i in range(num_threads):\n            t = threading.Thread(target=self._worker, args=(i,))\n            t.start()\n            self.threads.append(t)\n    \n    def _worker(self, thread_id):\n        my_queue = self.queues[thread_id]\n        while True:\n            try:\n                # Try to get task from own queue\n                task = my_queue.get(timeout=1)\n                if task is None:  # Shutdown signal\n                    break\n                func, args, kwargs = task\n                func(*args, **kwargs)\n            except queue.Empty:\n                # Steal from other queues\n                stolen = False\n                for i, q in enumerate(self.queues):\n                    if i != thread_id and not q.empty():\n                        try:\n                            task = q.get_nowait()\n                            if task is None:\n                                continue\n                            func, args, kwargs = task\n                            func(*args, **kwargs)\n                            stolen = True\n                            break\n                        except queue.Empty:\n                            continue\n                if not stolen:\n                    time.sleep(0.1)\n    \n    def submit(self, func, *args, **kwargs):\n        # Submit to random queue\n        thread_id = random.randint(0, len(self.queues)-1)\n        self.queues[thread_id].put((func, args, kwargs))\n    \n    def shutdown(self):\n        for q in self.queues:\n            q.put(None)\n        for t in self.threads:\n            t.join()\n\ndef task(n):\n    print(f"Task {n} processed by {threading.current_thread().name}")\n    time.sleep(random.random())\n\npool = WorkStealingPool(3)\n\nfor i in range(20):\n    pool.submit(task, i)\n    time.sleep(0.1)\n\npool.shutdown()',
  hint: 'Work stealing improves load balancing in thread pools.'
});