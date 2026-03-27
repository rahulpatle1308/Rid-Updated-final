QuizData.questions.push(
{
  id: 'py_file_1',
  topicId: 'py_file_handling',
  question: 'Open a text file in read mode and display its contents.',
  mathSolution: 'Use open() function with "r" mode and read the file content.',
  codeSolution: 'def read_file(filename):\n    try:\n        file = open(filename, "r")\n        content = file.read()\n        file.close()\n        return content\n    except FileNotFoundError:\n        return f"File {filename} not found"',
  hint: 'Always close the file after reading to free resources.'
},
{
  id: 'py_file_2',
  topicId: 'py_file_handling',
  question: 'Write user input to a text file using write mode.',
  mathSolution: 'Use open() with "w" mode to write data to a file (overwrites existing content).',
  codeSolution: 'def write_to_file(filename, text):\n    file = open(filename, "w")\n    file.write(text)\n    file.close()\n    return f"Data written to {filename}"',
  hint: 'Write mode creates a new file or truncates existing file.'
},
{
  id: 'py_file_3',
  topicId: 'py_file_handling',
  question: 'Append data to an existing file without overwriting.',
  mathSolution: 'Use "a" mode to append content at the end of the file.',
  codeSolution: 'def append_to_file(filename, text):\n    file = open(filename, "a")\n    file.write(text + "\\n")\n    file.close()\n    return f"Data appended to {filename}"',
  hint: 'Append mode creates the file if it doesn\'t exist.'
},
{
  id: 'py_file_4',
  topicId: 'py_file_handling',
  question: 'Read a file line by line using readline() method.',
  mathSolution: 'Use readline() in a loop to read one line at a time.',
  codeSolution: 'def read_file_line_by_line(filename):\n    file = open(filename, "r")\n    lines = []\n    while True:\n        line = file.readline()\n        if not line:\n            break\n        lines.append(line.strip())\n    file.close()\n    return lines',
  hint: 'readline() returns empty string when end of file is reached.'
},
{
  id: 'py_file_5',
  topicId: 'py_file_handling',
  question: 'Read all lines of a file into a list using readlines().',
  mathSolution: 'readlines() returns a list containing each line as a list item.',
  codeSolution: 'def read_all_lines(filename):\n    file = open(filename, "r")\n    lines = file.readlines()\n    file.close()\n    # Remove newline characters\n    return [line.strip() for line in lines]',
  hint: 'readlines() keeps the newline characters at the end of each line.'
},
{
  id: 'py_file_6',
  topicId: 'py_file_handling',
  question: 'Use the with statement (context manager) for automatic file closing.',
  mathSolution: 'The with statement ensures file is properly closed after operations.',
  codeSolution: 'def safe_read(filename):\n    with open(filename, "r") as file:\n        content = file.read()\n        return content\n    # File automatically closed here',
  hint: 'Context manager eliminates the need for explicit close().'
},
{
  id: 'py_file_7',
  topicId: 'py_file_handling',
  question: 'Count the number of lines, words, and characters in a text file.',
  mathSolution: 'Read file and count lines, split words, and count characters.',
  codeSolution: 'def count_file_stats(filename):\n    with open(filename, "r") as file:\n        content = file.read()\n        lines = len(content.split("\\n"))\n        words = len(content.split())\n        chars = len(content)\n        return {"lines": lines, "words": words, "characters": chars}',
  hint: 'Use split() without arguments to split on whitespace for word count.'
},
{
  id: 'py_file_8',
  topicId: 'py_file_handling',
  question: 'Copy contents from one file to another.',
  mathSolution: 'Read from source file and write to destination file.',
  codeSolution: 'def copy_file(source, destination):\n    with open(source, "r") as src:\n        content = src.read()\n    with open(destination, "w") as dest:\n        dest.write(content)\n    return f"File copied from {source} to {destination}"',
  hint: 'Use separate with statements or nested with statements.'
},
{
  id: 'py_file_9',
  topicId: 'py_file_handling',
  question: 'Merge contents of multiple files into a single file.',
  mathSolution: 'Read each input file and write their contents to output file.',
  codeSolution: 'def merge_files(file_list, output_file):\n    with open(output_file, "w") as outfile:\n        for filename in file_list:\n            with open(filename, "r") as infile:\n                outfile.write(infile.read())\n                outfile.write("\\n")\n    return f"Merged {len(file_list)} files into {output_file}"',
  hint: 'Add separators between files for readability.'
},
{
  id: 'py_file_10',
  topicId: 'py_file_handling',
  question: 'Search for a specific word in a file and return line numbers.',
  mathSolution: 'Read line by line and check if word exists in each line.',
  codeSolution: 'def search_word(filename, word):\n    matches = []\n    with open(filename, "r") as file:\n        for line_num, line in enumerate(file, 1):\n            if word.lower() in line.lower():\n                matches.append((line_num, line.strip()))\n    return matches',
  hint: 'Use enumerate() to get line numbers starting from 1.'
},
{
  id: 'py_file_11',
  topicId: 'py_file_handling',
  question: 'Replace a specific word with another word in a file.',
  mathSolution: 'Read file, replace text, and write back to file.',
  codeSolution: 'def replace_word(filename, old_word, new_word):\n    with open(filename, "r") as file:\n        content = file.read()\n    content = content.replace(old_word, new_word)\n    with open(filename, "w") as file:\n        file.write(content)\n    return f"Replaced {old_word} with {new_word} in {filename}"',
  hint: 'Be careful with overwriting - consider creating a backup first.'
},
{
  id: 'py_file_12',
  topicId: 'py_file_handling',
  question: 'Read a specific line from a file by line number.',
  mathSolution: 'Use linecache module or iterate to desired line.',
  codeSolution: 'def read_specific_line(filename, line_number):\n    with open(filename, "r") as file:\n        for current_line, content in enumerate(file, 1):\n            if current_line == line_number:\n                return content.strip()\n    return f"Line {line_number} not found"',
  hint: 'Line numbers typically start from 1 in file operations.'
},
{
  id: 'py_file_13',
  topicId: 'py_file_handling',
  question: 'Check if a file exists before attempting to read it.',
  mathSolution: 'Use os.path.exists() or pathlib module to check file existence.',
  codeSolution: 'import os\n\ndef safe_file_read(filename):\n    if os.path.exists(filename):\n        with open(filename, "r") as file:\n            return file.read()\n    else:\n        return f"File {filename} does not exist"',
  hint: 'os.path.exists() returns True if file or directory exists.'
},
{
  id: 'py_file_14',
  topicId: 'py_file_handling',
  question: 'Get file size in bytes, KB, and MB.',
  mathSolution: 'Use os.path.getsize() to get file size in bytes.',
  codeSolution: 'import os\n\ndef get_file_size(filename):\n    if os.path.exists(filename):\n        bytes_size = os.path.getsize(filename)\n        kb_size = bytes_size / 1024\n        mb_size = kb_size / 1024\n        return {\n            "bytes": bytes_size,\n            "KB": round(kb_size, 2),\n            "MB": round(mb_size, 2)\n        }\n    return "File not found"',
  hint: '1 KB = 1024 bytes, 1 MB = 1024 KB.'
},
{
  id: 'py_file_15',
  topicId: 'py_file_handling',
  question: 'Get file creation and modification timestamps.',
  mathSolution: 'Use os.path.getctime() and os.path.getmtime() functions.',
  codeSolution: 'import os\nimport time\n\ndef get_file_timestamps(filename):\n    if os.path.exists(filename):\n        ctime = os.path.getctime(filename)  # creation time\n        mtime = os.path.getmtime(filename)  # modification time\n        return {\n            "created": time.ctime(ctime),\n            "modified": time.ctime(mtime)\n        }\n    return "File not found"',
  hint: 'getctime() returns creation time on Windows, change time on Unix.'
},
{
  id: 'py_file_16',
  topicId: 'py_file_handling',
  question: 'Rename and delete files using os module.',
  mathSolution: 'Use os.rename() and os.remove() for file operations.',
  codeSolution: 'import os\n\ndef rename_file(old_name, new_name):\n    if os.path.exists(old_name):\n        os.rename(old_name, new_name)\n        return f"File renamed to {new_name}"\n    return "File not found"\n\ndef delete_file(filename):\n    if os.path.exists(filename):\n        os.remove(filename)\n        return f"File {filename} deleted"\n    return "File not found"',
  hint: 'Be careful with delete operations as they are permanent.'
},
{
  id: 'py_file_17',
  topicId: 'py_file_handling',
  question: 'Create a directory and handle file operations within it.',
  mathSolution: 'Use os.makedirs() to create directories recursively.',
  codeSolution: 'import os\n\ndef create_and_write_file(directory, filename, content):\n    # Create directory if it doesn\'t exist\n    os.makedirs(directory, exist_ok=True)\n    \n    # Create full file path\n    filepath = os.path.join(directory, filename)\n    \n    with open(filepath, "w") as file:\n        file.write(content)\n    return f"File created at {filepath}"',
  hint: 'exist_ok=True prevents error if directory already exists.'
},
{
  id: 'py_file_18',
  topicId: 'py_file_handling',
  question: 'List all files in a directory with specific extension.',
  mathSolution: 'Use os.listdir() and filter by file extension.',
  codeSolution: 'import os\n\ndef list_files_by_extension(directory, extension):\n    files = []\n    for filename in os.listdir(directory):\n        if filename.endswith(extension):\n            files.append(filename)\n    return files',
  hint: 'Use os.path.isfile() to ensure you\'re only listing files, not directories.'
},
{
  id: 'py_file_19',
  topicId: 'py_file_handling',
  question: 'Read a CSV file and display its contents as dictionaries.',
  mathSolution: 'Use csv module to read CSV files with dictionary format.',
  codeSolution: 'import csv\n\ndef read_csv_as_dicts(filename):\n    data = []\n    with open(filename, "r") as file:\n        reader = csv.DictReader(file)\n        for row in reader:\n            data.append(row)\n    return data',
  hint: 'DictReader uses first row as field names automatically.'
},
{
  id: 'py_file_20',
  topicId: 'py_file_handling',
  question: 'Write data to a CSV file from a list of dictionaries.',
  mathSolution: 'Use csv.DictWriter to write dictionary data to CSV.',
  codeSolution: 'import csv\n\ndef write_csv_from_dicts(filename, data, fieldnames):\n    with open(filename, "w", newline="") as file:\n        writer = csv.DictWriter(file, fieldnames=fieldnames)\n        writer.writeheader()\n        writer.writerows(data)\n    return f"Data written to {filename}"',
  hint: 'newline="" prevents extra blank lines in CSV on Windows.'
},
{
  id: 'py_file_21',
  topicId: 'py_file_handling',
  question: 'Read a JSON file and parse its contents.',
  mathSolution: 'Use json module to load and parse JSON data.',
  codeSolution: 'import json\n\ndef read_json_file(filename):\n    with open(filename, "r") as file:\n        data = json.load(file)\n    return data',
  hint: 'JSON data is automatically converted to Python dictionaries/lists.'
},
{
  id: 'py_file_22',
  topicId: 'py_file_handling',
  question: 'Write Python data to a JSON file.',
  mathSolution: 'Use json.dump() to write Python objects to JSON file.',
  codeSolution: 'import json\n\ndef write_json_file(filename, data):\n    with open(filename, "w") as file:\n        json.dump(data, file, indent=4)\n    return f"Data written to {filename}"',
  hint: 'indent parameter makes the JSON file human-readable.'
},
{
  id: 'py_file_23',
  topicId: 'py_file_handling',
  question: 'Read a file in binary mode and display first few bytes.',
  mathSolution: 'Use "rb" mode to read file as binary data.',
  codeSolution: 'def read_binary_file(filename, num_bytes=100):\n    with open(filename, "rb") as file:\n        data = file.read(num_bytes)\n    return data',
  hint: 'Binary mode returns bytes objects instead of strings.'
},
{
  id: 'py_file_24',
  topicId: 'py_file_handling',
  question: 'Copy an image file from source to destination.',
  mathSolution: 'Read in binary mode and write in binary mode for non-text files.',
  codeSolution: 'def copy_image(source, destination):\n    with open(source, "rb") as src:\n        with open(destination, "wb") as dest:\n            dest.write(src.read())\n    return f"Image copied from {source} to {destination}"',
  hint: 'Always use binary mode ("rb"/"wb") for non-text files.'
},
{
  id: 'py_file_25',
  topicId: 'py_file_handling',
  question: 'Read a large file in chunks to manage memory efficiently.',
  mathSolution: 'Read file in fixed-size chunks instead of loading entire file.',
  codeSolution: 'def read_file_in_chunks(filename, chunk_size=1024):\n    chunks = []\n    with open(filename, "r") as file:\n        while True:\n            chunk = file.read(chunk_size)\n            if not chunk:\n                break\n            chunks.append(chunk)\n    return chunks',
  hint: 'Chunk size can be adjusted based on available memory.'
},
{
  id: 'py_file_26',
  topicId: 'py_file_handling',
  question: 'Find and replace text in a file using temporary file.',
  mathSolution: 'Create temporary file, write modified content, replace original.',
  codeSolution: 'import os\nimport tempfile\n\ndef safe_replace(filename, old_text, new_text):\n    # Create temporary file\n    with tempfile.NamedTemporaryFile(mode="w", delete=False) as temp:\n        with open(filename, "r") as original:\n            for line in original:\n                temp.write(line.replace(old_text, new_text))\n    \n    # Replace original with temporary file\n    os.replace(temp.name, filename)\n    return f"Text replaced in {filename}"',
  hint: 'Using temporary file prevents data loss if error occurs.'
},
{
  id: 'py_file_27',
  topicId: 'py_file_handling',
  question: 'Read file from specific offset position.',
  mathSolution: 'Use seek() to move file pointer to specific position.',
  codeSolution: 'def read_from_offset(filename, offset, num_bytes):\n    with open(filename, "r") as file:\n        file.seek(offset)\n        data = file.read(num_bytes)\n    return data',
  hint: 'seek(0) moves to beginning, seek(0, 2) moves to end of file.'
},
{
  id: 'py_file_28',
  topicId: 'py_file_handling',
  question: 'Get current file pointer position using tell().',
  mathSolution: 'tell() returns current position of file pointer.',
  codeSolution: 'def get_file_position(filename):\n    with open(filename, "r") as file:\n        file.read(50)  # Read first 50 characters\n        position = file.tell()\n    return f"File pointer at position: {position}"',
  hint: 'File pointer position is measured in bytes from beginning.'
},
{
  id: 'py_file_29',
  topicId: 'py_file_handling',
  question: 'Read last N lines of a file efficiently.',
  mathSolution: 'Use deque with maxlen to store last N lines while reading.',
  codeSolution: 'from collections import deque\n\ndef read_last_lines(filename, n=10):\n    with open(filename, "r") as file:\n        last_lines = deque(file, maxlen=n)\n    return list(last_lines)',
  hint: 'deque with maxlen maintains only the last n items efficiently.'
},
{
  id: 'py_file_30',
  topicId: 'py_file_handling',
  question: 'Create a file lock to prevent concurrent access.',
  mathSolution: 'Use fcntl (Linux) or msvcrt (Windows) for file locking.',
  codeSolution: 'import fcntl\n\ndef write_with_lock(filename, content):\n    with open(filename, "w") as file:\n        try:\n            # Acquire exclusive lock\n            fcntl.flock(file, fcntl.LOCK_EX | fcntl.LOCK_NB)\n            file.write(content)\n            file.flush()\n            # Release lock\n            fcntl.flock(file, fcntl.LOCK_UN)\n            return "Write successful"\n        except IOError:\n            return "File is locked by another process"',
  hint: 'File locking is platform-dependent. Use portalocker for cross-platform solution.'
},
{
  id: 'py_file_31',
  topicId: 'py_file_handling',
  question: 'Read a file and remove duplicate lines.',
  mathSolution: 'Use set to track seen lines while preserving order.',
  codeSolution: 'def remove_duplicate_lines(filename):\n    seen = set()\n    unique_lines = []\n    \n    with open(filename, "r") as file:\n        for line in file:\n            if line not in seen:\n                seen.add(line)\n                unique_lines.append(line)\n    \n    with open(filename, "w") as file:\n        file.writelines(unique_lines)\n    return f"Removed duplicates from {filename}"',
  hint: 'Use OrderedDict or set with list to preserve line order.'
},
{
  id: 'py_file_32',
  topicId: 'py_file_handling',
  question: 'Split a large file into multiple smaller files.',
  mathSolution: 'Read source file and write chunks to multiple output files.',
  codeSolution: 'def split_file(filename, lines_per_file=1000):\n    file_count = 1\n    with open(filename, "r") as source:\n        for line_count, line in enumerate(source, 1):\n            if line_count % lines_per_file == 1:\n                if file_count > 1:\n                    output.close()\n                output_name = f"{filename}_part{file_count}.txt"\n                output = open(output_name, "w")\n                file_count += 1\n            output.write(line)\n        output.close()\n    return f"File split into {file_count-1} parts"',
  hint: 'Close previous output file before opening new one.'
},
{
  id: 'py_file_33',
  topicId: 'py_file_handling',
  question: 'Create a temporary file for intermediate processing.',
  mathSolution: 'Use tempfile module to create temporary files.',
  codeSolution: 'import tempfile\nimport os\n\ndef process_with_temp(data):\n    # Create temporary file (deleted automatically when closed)\n    with tempfile.NamedTemporaryFile(mode="w+", delete=True) as temp:\n        temp.write(data)\n        temp.flush()\n        temp.seek(0)  # Go back to beginning\n        # Process temporary file\n        result = temp.read().upper()\n        return result',
  hint: 'Temporary files are automatically cleaned up when closed.'
},
{
  id: 'py_file_34',
  topicId: 'py_file_handling',
  question: 'Read file contents in reverse order (lines reversed).',
  mathSolution: 'Read all lines and reverse, or seek from end for large files.',
  codeSolution: 'def read_reverse(filename):\n    with open(filename, "r") as file:\n        lines = file.readlines()\n    return lines[::-1]  # Return reversed lines',
  hint: 'For very large files, read from end using seek().'
},
{
  id: 'py_file_35',
  topicId: 'py_file_handling',
  question: 'Create a file with specific permissions (Unix).',
  mathSolution: 'Use os.open() with mode parameter to set file permissions.',
  codeSolution: 'import os\n\ndef create_file_with_permissions(filename, content):\n    # Open with specific permissions (0o644 = rw-r--r--)\n    fd = os.open(filename, os.O_WRONLY | os.O_CREAT, 0o644)\n    with os.fdopen(fd, "w") as file:\n        file.write(content)\n    return f"File created with permissions 644"',
  hint: 'Permissions are specified in octal format (e.g., 0o755).'
},
{
  id: 'py_file_36',
  topicId: 'py_file_handling',
  question: 'Read a file and encrypt/decrypt its contents (simple Caesar cipher).',
  mathSolution: 'Apply character shifting for basic encryption.',
  codeSolution: 'def caesar_cipher(text, shift):\n    result = ""\n    for char in text:\n        if char.isalpha():\n            ascii_offset = 65 if char.isupper() else 97\n            result += chr((ord(char) - ascii_offset + shift) % 26 + ascii_offset)\n        else:\n            result += char\n    return result\n\ndef encrypt_file(filename, shift):\n    with open(filename, "r") as file:\n        content = file.read()\n    encrypted = caesar_cipher(content, shift)\n    with open(filename + ".enc", "w") as file:\n        file.write(encrypted)\n    return f"File encrypted to {filename}.enc"',
  hint: 'Use negative shift for decryption.'
},
{
  id: 'py_file_37',
  topicId: 'py_file_handling',
  question: 'Compress and decompress files using gzip.',
  mathSolution: 'Use gzip module for file compression.',
  codeSolution: 'import gzip\n\ndef compress_file(filename):\n    with open(filename, "rb") as f_in:\n        with gzip.open(filename + ".gz", "wb") as f_out:\n            f_out.writelines(f_in)\n    return f"File compressed to {filename}.gz"\n\ndef decompress_file(gz_filename):\n    with gzip.open(gz_filename, "rb") as f_in:\n        with open(gz_filename[:-3], "wb") as f_out:\n            f_out.write(f_in.read())\n    return f"File decompressed from {gz_filename}"',
  hint: 'gzip works with binary mode for compression.'
},
{
  id: 'py_file_38',
  topicId: 'py_file_handling',
  question: 'Read and write Excel files using openpyxl.',
  mathSolution: 'Use openpyxl to work with Excel .xlsx files.',
  codeSolution: 'from openpyxl import Workbook, load_workbook\n\ndef create_excel_file(filename, data):\n    wb = Workbook()\n    ws = wb.active\n    ws.title = "Sheet1"\n    \n    # Write headers\n    headers = ["Name", "Age", "City"]\n    ws.append(headers)\n    \n    # Write data\n    for row in data:\n        ws.append(row)\n    \n    wb.save(filename)\n    return f"Excel file created: {filename}"\n\ndef read_excel_file(filename):\n    wb = load_workbook(filename)\n    ws = wb.active\n    data = []\n    for row in ws.iter_rows(values_only=True):\n        data.append(list(row))\n    return data',
  hint: 'Install openpyxl with: pip install openpyxl'
},
{
  id: 'py_file_39',
  topicId: 'py_file_handling',
  question: 'Monitor a file for changes (tail -f functionality).',
  mathSolution: 'Continuously check file size and read new lines.',
  codeSolution: 'import time\nimport os\n\ndef tail_file(filename, lines=10):\n    """Print last N lines and follow new lines"""\n    with open(filename, "r") as file:\n        # Go to end of file\n        file.seek(0, 2)\n        \n        while True:\n            line = file.readline()\n            if line:\n                print(line.strip())\n            else:\n                time.sleep(0.1)  # Wait for new data',
  hint: 'Use file.tell() to remember position between reads.'
},
{
  id: 'py_file_40',
  topicId: 'py_file_handling',
  question: 'Generate a file checksum (MD5) to verify integrity.',
  mathSolution: 'Use hashlib to compute file hash.',
  codeSolution: 'import hashlib\n\ndef file_checksum(filename):\n    hash_md5 = hashlib.md5()\n    with open(filename, "rb") as file:\n        for chunk in iter(lambda: file.read(4096), b""):\n            hash_md5.update(chunk)\n    return hash_md5.hexdigest()',
  hint: 'Read in chunks to handle large files efficiently.'
},
{
  id: 'py_file_41',
  topicId: 'py_file_handling',
  question: 'Create a configuration file parser (INI format).',
  mathSolution: 'Use configparser module for INI files.',
  codeSolution: 'import configparser\n\ndef create_config(filename):\n    config = configparser.ConfigParser()\n    config["DEFAULT"] = {"Server": "localhost", "Port": "8080"}\n    config["Database"] = {"Host": "db.example.com", "User": "admin"}\n    \n    with open(filename, "w") as file:\n        config.write(file)\n    return "Config file created"\n\ndef read_config(filename, section, key):\n    config = configparser.ConfigParser()\n    config.read(filename)\n    return config[section][key]',
  hint: 'ConfigParser handles .ini file format with sections in brackets.'
},
{
  id: 'py_file_42',
  topicId: 'py_file_handling',
  question: 'Process a file with custom delimiter (not comma).',
  mathSolution: 'Use csv module with custom delimiter parameter.',
  codeSolution: 'import csv\n\ndef read_delimited_file(filename, delimiter="|"):\n    data = []\n    with open(filename, "r") as file:\n        reader = csv.reader(file, delimiter=delimiter)\n        for row in reader:\n            data.append(row)\n    return data',
  hint: 'CSV module supports various delimiters like tabs, pipes, etc.'
},
{
  id: 'py_file_43',
  topicId: 'py_file_handling',
  question: 'Read file with different encodings (UTF-8, Latin-1, etc.).',
  mathSolution: 'Specify encoding parameter when opening file.',
  codeSolution: 'def read_with_encoding(filename, encoding="utf-8"):\n    try:\n        with open(filename, "r", encoding=encoding) as file:\n            return file.read()\n    except UnicodeDecodeError:\n        return f"Failed to decode with {encoding}"',
  hint: 'Common encodings: utf-8, latin-1, cp1252, iso-8859-1.'
},
{
  id: 'py_file_44',
  topicId: 'py_file_handling',
  question: 'Implement a file-based logging system with rotation.',
  mathSolution: 'Create log file with timestamps and rotate when size limit reached.',
  codeSolution: 'import os\nimport datetime\n\ndef log_message(log_dir, message, max_size=1024*1024):\n    """Log message with automatic rotation"""\n    log_file = os.path.join(log_dir, "app.log")\n    \n    # Check if rotation needed\n    if os.path.exists(log_file) and os.path.getsize(log_file) > max_size:\n        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")\n        rotated = os.path.join(log_dir, f"app_{timestamp}.log")\n        os.rename(log_file, rotated)\n    \n    # Write log message\n    with open(log_file, "a") as file:\n        timestamp = datetime.datetime.now().isoformat()\n        file.write(f"[{timestamp}] {message}\\n")',
  hint: 'Add timestamps to log entries for better tracking.'
},
{
  id: 'py_file_45',
  topicId: 'py_file_handling',
  question: 'Read file and count frequency of each word.',
  mathSolution: 'Use dictionary to count word occurrences.',
  codeSolution: 'import re\nfrom collections import Counter\n\ndef word_frequency(filename):\n    with open(filename, "r") as file:\n        text = file.read().lower()\n    # Extract words using regex\n    words = re.findall(r"\\w+", text)\n    # Count frequencies\n    return Counter(words)',
  hint: 'Use Counter from collections module for easy counting.'
},
{
  id: 'py_file_46',
  topicId: 'py_file_handling',
  question: 'Compare two files line by line and show differences.',
  mathSolution: 'Read both files and compare corresponding lines.',
  codeSolution: 'def compare_files(file1, file2):\n    differences = []\n    with open(file1, "r") as f1, open(file2, "r") as f2:\n        for line_num, (line1, line2) in enumerate(zip(f1, f2), 1):\n            if line1 != line2:\n                differences.append({\n                    "line": line_num,\n                    "file1": line1.strip(),\n                    "file2": line2.strip()\n                })\n    return differences',
  hint: 'Use zip to iterate through both files simultaneously.'
},
{
  id: 'py_file_47',
  topicId: 'py_file_handling',
  question: 'Create a ZIP archive of multiple files.',
  mathSolution: 'Use zipfile module to create compressed archives.',
  codeSolution: 'import zipfile\nimport os\n\ndef create_zip_archive(zip_name, files):\n    with zipfile.ZipFile(zip_name, "w", zipfile.ZIP_DEFLATED) as zipf:\n        for file in files:\n            if os.path.exists(file):\n                zipf.write(file, os.path.basename(file))\n    return f"Archive created: {zip_name}"\n\ndef extract_zip_archive(zip_name, extract_dir):\n    with zipfile.ZipFile(zip_name, "r") as zipf:\n        zipf.extractall(extract_dir)\n    return f"Files extracted to {extract_dir}"',
  hint: 'ZIP_DEFLATED enables compression (requires zlib module).'
},
{
  id: 'py_file_48',
  topicId: 'py_file_handling',
  question: 'Read file and extract email addresses using regex.',
  mathSolution: 'Use regular expressions to find email patterns.',
  codeSolution: 'import re\n\ndef extract_emails(filename):\n    email_pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"\n    emails = []\n    \n    with open(filename, "r") as file:\n        content = file.read()\n        emails = re.findall(email_pattern, content)\n    \n    return list(set(emails))  # Remove duplicates',
  hint: 'Email regex can be simplified or made more complex as needed.'
},
{
  id: 'py_file_49',
  topicId: 'py_file_handling',
  question: 'Create a file index for fast random access.',
  mathSolution: 'Build index of line positions for quick line retrieval.',
  codeSolution: 'def build_line_index(filename):\n    """Create index of line starting positions"""\n    index = {}\n    with open(filename, "r") as file:\n        position = 0\n        for line_num, line in enumerate(file, 1):\n            index[line_num] = position\n            position += len(line.encode())  # Byte length\n    return index\n\ndef read_line_by_index(filename, line_num, index):\n    """Read specific line using pre-built index"""\n    with open(filename, "r") as file:\n        file.seek(index[line_num])\n        return file.readline().strip()',
  hint: 'Index allows O(1) access to any line without reading entire file.'
},
{
  id: 'py_file_50',
  topicId: 'py_file_handling',
  question: 'Implement a simple file-based key-value store.',
  mathSolution: 'Store key-value pairs in file with fast lookup.',
  codeSolution: 'import json\nimport os\n\nclass FileKVStore:\n    def __init__(self, filename):\n        self.filename = filename\n        self.data = {}\n        self.load()\n    \n    def load(self):\n        if os.path.exists(self.filename):\n            with open(self.filename, "r") as file:\n                self.data = json.load(file)\n    \n    def save(self):\n        with open(self.filename, "w") as file:\n            json.dump(self.data, file, indent=2)\n    \n    def set(self, key, value):\n        self.data[key] = value\n        self.save()\n    \n    def get(self, key, default=None):\n        return self.data.get(key, default)\n    \n    def delete(self, key):\n        if key in self.data:\n            del self.data[key]\n            self.save()\n            return True\n        return False\n\n# Usage\nstore = FileKVStore("mydata.json")\nstore.set("user1", {"name": "John", "age": 30})\nprint(store.get("user1"))',
  hint: 'JSON format makes the store human-readable and portable.'
}
);